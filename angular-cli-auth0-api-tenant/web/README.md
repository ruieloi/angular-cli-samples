# AngularCliAuth0

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Requirments Auth0

 - Create account
 - Create API 
    - store Identifier = Audience value
    - add scopes read:messages and write:messages
 - Create SPA/Client (store clientID, clientsecret)

## Steps to create code

Run 
- `ng new {appname} --routing ` 
- `cd {appname} `
- `npm install `  
- `npm install --save bootstrap`  and add `../node_modules/bootstrap/dist/css/bootstrap.min.css` to styles in angular-cli.json
- `npm install --save auth0-js`
- `ng g s auth/auth ` and create the auth.service.ts file to handle the authentication
- `ng g class auth0-variables `add auth0 variables
- Add AuthService to providers in app.module
- Add to app.component constructor the authservice 
- `ng g c home `  create home component 
- `ng g c callback `  create callback component 
- `ng g c profile `  create profile component 
- `ng g c ping `  create profile component 
- `add components to routing `







## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
