# Lesser

A minimalist workflow for building Responsive pages, built on Bootstrap and Less.

## Overview

Protoyping, building, and compiling a designer's assets to a client or a developer is a daunting dask. While generators like Yeoman, Lineman, and numerous SASS frameworks exist, the world of graphic designers who understand these technologies is very, very small, compared to developers and seasoned designers familiar with the toolchain on Ruby and Node.

**Lesser** provides a minimal workflow built on Less, and the world's most popular Responsive toolkit.

Optimized for Typographers and Graphic designers, Lesser comes pre-loaded with [Brick Fonts](http://brick.im/fonts/) and [Beautiful Webtype](https://github.com/ubuwaits/beautiful-web-type), and the required Javascript plugins designed for Typographers.

## Usage

First time node users:

    brew install node

Then install:

    npm install gulp -g

Run:

    gulp

This compiles your Less and Javascript files under `src`, minifies them into `public` folder, and runs a static server with live-reload.

Preview at `http://localhost:8000`.

See [Gulp](/gulpfile.js) for individual tasks.

_What is Gulp_?

Gulp is a lightweight task builder for frontned sites and browser apps without the need to learn another toolkit (yeoman, lineman, brunch, etc.,). Tasks are written in simple Javascript using thousands of available gulp plugins like [this](https://www.npmjs.org/package/gulp-connect) and [this](https://www.npmjs.org/package/gulp-browserify).

By composing tasks that do one thing and one thing only, you gain control over your workflow.

## Further Reading

- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [Bootstrap Workflow](http://www.helloerik.com/bootstrap-3-less-workflow-tutorial)
- [Introducing Gulp](http://slides.com/contra/gulp#/)

## Copyright & License

Copyright 2014, Priyatam Mudivarti.

Licensed under MIT.
