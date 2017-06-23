interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  scopes: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: {CLIENTID},
  domain: {DOMAIN},
  callbackURL: {CALLBACKURL},
  scopes: 'openid profile'
};
