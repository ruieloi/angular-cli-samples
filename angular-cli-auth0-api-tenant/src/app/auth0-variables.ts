interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  scopes: string;
  audience: string;
  namespace: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'cehYhgAPc8K0ejee0y8pEE87hczC3ie3', //{CLIENTID},
  domain: 'ruieloi.eu.auth0.com', //{DOMAIN},
  callbackURL: 'http://localhost:4200/callback', //{CALLBACKURL},
  scopes: 'openid profile email user_metadata app_metadata picture', // 'openid profile app_metadata read:messages',
  audience: 'http://localhost:3001', // {AUDIENCE},
  namespace: 'https://myapp.example.com/'
};
