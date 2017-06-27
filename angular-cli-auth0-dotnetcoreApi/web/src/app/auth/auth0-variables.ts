interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'StzPmqOA3kpdBysxo4KmErMLNEvXZVnJ',
  domain: 'ruieloi.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'API_IDENTIFIER'
};
