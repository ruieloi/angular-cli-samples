interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  scopes: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'StzPmqOA3kpdBysxo4KmErMLNEvXZVnJ',
  domain: 'ruieloi.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  scopes: 'openid profile'
};
