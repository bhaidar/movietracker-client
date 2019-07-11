# MovieWatcherClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps

1. Create an Angular app using angular cli
`$ ng new movie-watcher-client --style=scss --routing=true`

2. Add angular material module
`$ ng add @angular/material`

3. Change theme angular.json

3. Create a separate module for angular material to centralize everything there
`$ ng generate module app-material`

4. Create `movie-tracker` module by running this command
`$ ng generate module movie-tracker --routing=true --module=app.module`

5. Add a path for "movie-tracker" module

6. Generate `movie-tracker-service` with NSwag Studio

7. Add a `proxy.conf.js` file to proxy all `/api` calls and use it inside package.json scripts

8. Add Table component

9. Use the table component in the movie-tracker-list

10. Setup routing

11. Add search bar

12. Connect searchbar to searchMovies method on server

13. add action columns on table