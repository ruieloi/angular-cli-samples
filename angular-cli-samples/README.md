# AngularCliSamples

This project it's a repository of various samples. I base a lot of tutorials from the web and the idea it's to create a repository with some base stuff I can reuse in actual projects.
Project in SCSS, Angular-Cli

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

## configure SCSS

http://shermandigital.com/blog/bootstrap-sass-with-angular-cli/

```
Use Bootstrap SASS with Angular CLI
Tuesday, March 21, 2017 by Chris Sherman
Set-up
Create a new Angular CLI project with the SASS style option:
ng new my-app --style=sass
cd my-app

Installation
Install the SASS version of the Bootstrap project with:
npm install bootstrap-sass --save

Configuration
In the src/assets/ directory, create a directory named bootstrap-sass with an empty file named: _variables.scss.

In the _variables.scss file, paste the content from: node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss.

In the _variables.scss file, find the line with $icon-font-path and change it to point to the proper directory:

$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/" !default;
In src/styles.sass, add the following:

@import "assets/bootstrap-sass/variables";
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';
```



## Samples

* Top Bar 
  * Simple top bar (done)
* Login (done)
  * http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
* Notifications (done)
  * https://github.com/flauc/angular2-notifications/blob/master/docs/toastNotifications.md
* Register (done)
* Left Menu Navigation
* File Upload
* Form and Validations
  * Simple Fields
    * Textbox
    * Numeric box    
    * Date Picker 
    * Time Picker 

  * Custom Fields
    * Age component
    * IBAN component
    * Phone component
    * Country picker component
    * NIF component

* Datatable
    * Pagination
    * Filters
    * Advanced Filters
    * Image Column
    * Action Buttons Column
    * Edit inline table
    * Edit in popup table
* Permission System
* Settings system
