[![Build Status](https://travis-ci.org/uicoded/linezero.svg?branch=master)](https://travis-ci.org/uicoded/linezero)

## Purpose

LineZero is battle ground bootstrap for web projects.
 
It rests on [Node](http://nodejs.org) and [Grunt](http://www.gruntjs.org/) shoulders which should provide solid tools for developer tasks.
For HTML, CSS development there is [Normalize.css](http://necolas.github.io/normalize.css/) included.
Tests are run by [Karma](http://karma-runner.github.io) and [Protractor](http://angular.github.io/protractor/#/).

That's it.

If you're going to add another package manager or CSS/JavaScript tool, fork it or consider using some [generator](http://yeoman.io/generators/) instead.
Reevaluate your own LineZero after some time.

## Code Style

Follows [AirBnb](https://github.com/airbnb/javascript) style with some exceptions, Read `.editorconfig`, `.jshintrc` and `.jscsrc`.


## Run With NPM

 * `npm start` installs the packages and starts the dev server
 * `npm test` starts headless unit testing (continuous - will exit upon completition)
 * `npm run-script e2e-test` starts E2E test (single check of `index.html`)


## Run With Grunt

1. Install

  `npm install`

  `npm install -g grunt-cli` (should install itself, [getting started with Grunt](http://gruntjs.com/getting-started))

2. Build

  `grunt`

  - creates `build` folder with production code (minified, etc)
  - creates `index.html` from `README.md` 
    LineZero uses [Github flavored mardown](https://help.github.com/articles/github-flavored-markdown/)
    with code [Highlight JS](https://highlightjs.org/) (test syntax `docs/gfm.md`)
  - connects to http://localhost:8080 (to build without starting server call `grunt build`)

3. Develop

  `grunt dev`

  - starts the testing server [http://localhost:8000](http://localhost:8000)
  - starts the watch using `livereload` (see the settings [tasks/options/watch.js](http://localhost:8000/tasks/options/watch.js))
  
  `grunt watch`
  
  - starts the watch without starting server
   
4. Test

  * Unit

  [Karma](http://karma-runner.github.io/) - standalone, without Grunt help at this time.

  `karma start test/karma-conf.js` for dev or `karma start test/karma-conf.js --single-run` for the CI. 

  * E2E

  [Protractor](http://angular.github.io/protractor/) - launches Chrome

  `protractor test/protractor-conf.js` runs the testruner. (make sure the dev server is running)


