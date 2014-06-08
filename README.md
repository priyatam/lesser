## Gulp Minimalist

A gentle introduction to building boilerplates with [gulp](http://gulpjs.com/).

## Overview

Gulp lets you build boilerplates for sites and browser apps without the need to learn another toolkit (yeoman, lineman, brunch, etc.,). A boilerplate consists of a set of tasks chained by [streams](https://github.com/substack/stream-handbook). Most tasks are accomplished via a growing set of gulp plugins like [this](https://www.npmjs.org/package/gulp-connect) and [this](https://www.npmjs.org/package/gulp-browserify). By composing tasks with minimal api (three), you can build custom stacks.

For a high level overview, see [Introducing Gulp]((http://slides.com/contra/gulp#/).

## Setup

If you've never used npm before, install Node with [homebrew](http://brew.sh/):

    brew install node

Install gulp, globally:

    npm install -g gulp

After completing the setup, update your local npm/browserify dependencies (do this everytime you add something to package.json):

    npm install

Run default task on gulp:

    gulp

## Tutorial (with a sample boilerplate)

This repo consists of a sample boilerplate to build websites with Stylus, Jade

- HTML5/Jade
- CSS3/Stylus
- minifier, uglifier, browserify ...

Run default task on gulp:

    gulp

This minifies css, js, and runs a static server at localhost:8080

See [Gulp](/gulpfile.js) for tasks.


Tutorial: TODO

## Available Boilerplates

- [Introducing Gulp]- Read this first
- [Gulp Starter](https://github.com/greypants/gulp-starter) - A good
- [Gulp for HTML5 sites](https://github.com/3bola/gulp-starter) - nice boilerplate for
- [Yeoman Generator for Gulp](https://github.com/yeoman/generator-gulp-webapp)
- [Square Boy](https://github.com/harsha-mudi/squareboy)

## Copyright & License

MIT License. See [LICENSE](/LICENSE) for more details.
