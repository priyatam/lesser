# Lesser

A minimalist workflow for designing responsive pages with Bootstrap and Less.

## Introduction

Protoyping and compiling a designer's assets for production sites is a daunting dask. While generators like [Yeoman](http://yeoman.io), [Lineman](http://www.linemanjs.com), and numerous frontend frameworks exist, the world of designers who understand these technologies is small compared to Ruby and Node developers.

**Lesser** provides a minimal workflow built on Less, and the [world's most popular](http://getbootstrap.com) responsive toolkit. Instead of pre-loading all of Bootstrap's CSS components, lesser includes only the essential elements: grid, mixins, buttons, media, etc., leaving the rest out of your way. Optimized for Responsive Typography, Lesser also comes preloaded with the following jQuery plugins:

- [LetteringJs](http://letteringjs.com)
- [Fittext](http://fittextjs.com)
- [FlowType](http://simplefocus.com/flowtype/)

## Usage

Assuming you have installed gulp and bower globally as:

    npm install gulp -g
    npm install bower -g

Install _lesser_:

    bower install lesser

 Copy `gulp.js` and `package.json` from `bower_components/lesser` into the current folder and run:

    npm install
    gulp init

 Your new project structure should now look like this:

    ├── public
    │   ├── img
    │   ├── css
    │   └── js
    |   ├── index.html
    │  
    └── src
        ├── js
        │   ├── layout.js
        │   └── typography.js
        └── less
            ├── colors.less
            ├── layout.less
            └── typography.less
    ├── bower.json
    ├── package.json
    ├── gulpfile.js

To design your site and preview your changes, live, run:

    gulp

Preview the site at `http://localhost:9000`.

[Gulp](http://gulpjs.com) compiles your Less styles, Javascript files (if any) under `src`, minifies all of them into `public` folder, and runs a static server that watches for changes.

## Workflow

Start with the provided index.html page or create copies of the same under `public` as a starting point.

Less files are organized in three files: `colors.less`, `typography.less`, and `layout.less`. Within each file, they are structured in the following order: 

    - imports
    - variables
    - mixins
    - styles

Developers may be familiar with this structure from writing code in other languages. Hopefully, we can bring some order into writing less with _Lesser_.

By keeping related functionality together, global variables and mixins can be avoided.

That’s it. Now keep iterating styles, scripts, and build pages and gulp will pick them up on the fly. When you're done, simply upload the `public` folder _as-is_ to github-pages, S3, or your favorite static server and you're good to go. 

No further build tools are required.

## Status & Roadmap

**Early development**.

This project was created for designer-centric workflows for those new to Nodejs ecosystem. Future roadmap includes useful mixins, js helpers, and documentation with examples.

Feedback much appreciated.

## Further Reading

- [Bootstrap Workflow](http://www.helloerik.com/bootstrap-3-less-workflow-tutorial)
- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [HSLa Colors](http://trentwalton.com/2010/12/21/rgba-hsla-css-color/)

## Copyright & License

Copyright 2014, Priyatam Mudivarti

Licensed under MIT.
