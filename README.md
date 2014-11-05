# Lesser

A minimalist workflow for designing responsive pages with Less.

## Introduction

Protoyping and designing a production-ready responsive site is a daunting dask. While generators like [Lineman](http://www.linemanjs.com), [Yeoman](http://yeoman.io), [Slush](http://slushjs.github.io/#/) and numerous build tools exist, the world of designers who understand (and want to learn) these technologies is small. 

*Lesser* provides a minimal workflow built on Less, and the [world's most popular](http://getbootstrap.com) responsive toolkit. Instead of pre-loading all of Bootstrap's CSS components, lesser includes the essential elements: grid, typography, colors, media queries and powerful mixins, leaving the rest out of your way. Optimized for Responsive Typography, Lesser also comes preloaded with the following jQuery plugins:

- [LetteringJs](http://letteringjs.com)
- [Fittext](http://fittextjs.com)
- [FlowType](http://simplefocus.com/flowtype/)

## Usage

Assuming you have installed gulp and bower globally:

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
    ├── package.json
    ├── gulpfile.js

To design your site and modify your changes, *live*, run:

    gulp

Preview the site at `http://localhost:9000`.

[Gulp](http://gulpjs.com) compiles your Less styles, Javascript files (if any) under `src`, minifies all of them into `public` folder, and runs a static server that watches for changes.

## Process and Workflow

> Responsive Design is 99% grids, typography, and color theory. 

Start with the provided index.html with a default grid. Organize styles in less into three files: `colors.less`, `typography.less`, `layout.less`, and `components.less`. Within each file, the design is coded in the following order: 

- imports
- variables
- mixins
- styles

Developers may be familiar with this structure from writing code in other languages. Hopefully, designers can bring some order into writing less code with _Lesser_: by keeping related functionality together in one file, global variables and mixins can be avoided. Instead of relying on arbitrary class/id and selector inheritance that bloat  stylesheets, compose layout -> typography -> colors -> components. 

Iterate designs in a live browser and gulp will build pages on the fly. When you're ready, upload the `public` folder _as-is_ to github-pages, S3, or your favorite static server. No further build tools are required.

## Examples

A reference example with custom grid and styles is included in `public\index.html`. It's a work-in-progress and includes a typeset for core HTML5 elements like H1-H6, section, article, paragraph, lists, etc., and ensures that a basic semantic makrup renders nicely from `xs` to `lg` screens, _out of the box_. 

## Status & Roadmap

**Early development**: v0.2.x

This project was created for designer-centric workflows for those new to Nodejs ecosystem. The Roadmap for v1.0 includes useful mixins for flexible grids, javascript helpers, and documentation with examples.

Feedback much appreciated.

## Further Reading

- [Understanding Bootstrap’s Grid](http://www.helloerik.com/bootstrap-3-grid-introduction)
- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [Colors in HSL](http://trentwalton.com/2010/12/21/rgba-hsla-css-color/)

## Copyright & License

Copyright 2014, Priyatam Mudivarti

Licensed under MIT.
