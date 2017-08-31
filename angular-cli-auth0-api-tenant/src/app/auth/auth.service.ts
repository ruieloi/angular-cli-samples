import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from 'app/auth0-variables';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID:  AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: AUTH_CONFIG.audience,
    //audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: AUTH_CONFIG.scopes
  });

  userProfile: any;

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {

      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);

        this.getProfile((err, profile) => {
          this.userProfile = profile;
          if(!this.validTenant()){
            localStorage.setItem('isValidTenant', 'false');
            this.router.navigate(['/register']);
          }
          else
          {
            localStorage.setItem('isValidTenant', 'true');
            this.router.navigate(['/home']);
          }
        });


      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('isValidTenant');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public validTenant(): boolean {
    if(this.userProfile.app_metadata == null){
      return false;
    }
    //TODO check tentant data
    return true;
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt && localStorage.getItem('isValidTenant') === 'true';
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        //optimize app_metada property
        self.userProfile.app_metadata = profile[AUTH_CONFIG.namespace + 'appMetadata'];
      }
      cb(err, profile);
    });
  }

}
