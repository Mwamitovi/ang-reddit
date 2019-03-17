
A basic Angular project
=======================

## SYNOPSIS

This is basic introduction into the world of Angular.
We enter data into a form, display it, and enable users to vote it up/down.
Project focuses on Typescript, template navigation, and function binding.
This project was generated with [Angular CLI] version 6.1.1.
(https://github.com/angular/angular-cli)


## IMPORTANT

** You need, but are not limited to,
   - node v6.9.0 or higher (comes with npm)*
   - ES6(es2105)
   - TypeScript (version 2.7 or higher)(not strictly needed, but best to have)
   - Semantic-UI framework (bootstrap, or any other, can work)
   - Modern Browser (Chrome is recommended)


## GET - STARTED

### Assumptions
   - Configure your Version Control (Git-flow)
   - Fork the repository

### Configure

   - Locally, launch a new app within an empty project dir: `ng new <input-the-name>`
     For ease of git tracking, just use `ang-reddit` name. So simply run `ng new ang-reddit`

   - Launch the dev server: run `ng serve` to confirm that your app works,
     Navigate to `http://localhost:4200/`. 
     Note that the app auto-reloads as you make changes to the source files.

   - Include the article component: run `ng generate component article`.
     Do not edit any files as yet.

   - Run `git-flow init` within your local project to create the relevant work branches.
     Then `pull` the origin:develop -> your local:develop, 
     and merge the `changes` from the remote/origin.
     You can always run to safety, if you get lost! Run `checkout master`.

   - Download Semantic-UI framwork docs,
     and include them under src/app/vendor/semantic-ui. If you change this file path,
     remember to edit the `@import` statement within src/styles.css

   - You can now edit, and explore the app further.
     These commands will come in handy:
       - Build: Run `ng build` to build the project. Add `--prod` for a production build.
         The build artifacts will be stored in the `dist/` directory.

       - Run unit tests: run `ng test` to execute the unit tests.

       - Runend-to-end tests: run `ng e2e` to execute the end-to-end tests

### Further help

    - For more on Angular CLI use `ng help` or see the [Angular CLI README]
      (https://github.com/angular/angular-cli/blob/master/README.md)

    - This project reference: ng-book, the complete Book on Angular 5 (r67)
      available at https://fullstack.io

    - See [Karma](https://karma-runner.github.io) for unit tests

    - See [Protractor](http://www.protractortest.org/) for end-to-end tests

### Contribution guidelines
   - Gitflow remote collaboration model
   - Code review (pull requests)
   - Writing tests (Unit and Functional tests)
   - Other guidelines shall be issued with time.

### Who i talk to?
   - Contact: @MwamiTovi on GitHub
   - Email directly: matovu.synergy@gmail.com