# Lesser

A minimalist workflow for designing responsive pages with Bootstrap and Less.

## Overview

Protoyping, building, and compiling a designer's assets for a client or developer is a daunting dask. While generators like [Yeoman](http://yeoman.io), [Lineman](http://www.linemanjs.com), and numerous frontend frameworks exist, the world of designers who understand these technologies is very, very small compared to developers familiar with the tools on Ruby and Node.

**Lesser** provides a minimal workflow built on Less, and the [world's most popular](http://getbootstrap.com) responsive toolkit.

Optimized for Responsive Web Typography, Lesser comes pre-loaded with [Brick Fonts](http://brick.im/fonts/), [Beautiful Webtype](http://hellohappy.org/beautiful-web-type/), and the required Javascript plugins designed to work well with Typography.

Plugins used:

- [LetteringJs](http://letteringjs.com)
- [Fittext](http://fittextjs.com)

## Usage

### Setup

First time node users, install node via [brew](http://brew.sh):

    brew install node

Clone the Repo from your favorite directory:

    git clone https://github.com/priyatam/lesser.git
    cd lesser

From the same directory, install the following core npm modules:

    npm install gulp -g
    npm install bower -g

Finally, install dependencies:

    npm install
    bower install

### Run

[Gulp](http://gulpjs.com), a lightweight task builder for building frontend sites is used as an asset pipeline.

You don't have to learn Javascript or Gulp in order to design pages, but a [basic understanding of Gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/) would be helpful. For now, just run:

    gulp

Gulp will run the default task that compiles your Less styles and Javascript files (if any) under `src`, minifies them into `public` folder, and runs a static server that watches for changes and more.

Preview the site at `http://localhost:8000`.

See [Gulp](/gulpfile.js) for individual tasks.

## Workflow

- Start with a blank page (or use a default H5BP or Bootstrap layout)
- Separate styles into `typography.less`, `colors.less`, `layout.less`,
- Keep variables and mixins in respective files — do not put them in a single `variables.less` file!
- Avoid shared styles as much as possible; however if you need one badly, store them in a `mixins.less`
- Add bootstrap.less to selectively include mixins and variables from Bootstrap
- Optionally, 3rd party themes can be added in `themes.less`

Once you have your styles setup, `gulp`, will automatically compile and minify all the styles, including Bootstrap's own mixins into `public/css/styles.min.css`.

Include this into your Html page.

## Status

**Early in development**.

Feedback much appreciated!

## Further Reading

- [Bootstrap Workflow](http://www.helloerik.com/bootstrap-3-less-workflow-tutorial)
- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [Introduction to Color Theory](http://webdesign.tutsplus.com/articles/an-introduction-to-color-theory-for-web-designers--webdesign-1437)
- [HSLa Colors](http://trentwalton.com/2010/12/21/rgba-hsla-css-color/)
- [Introducing Gulp](http://slides.com/contra/gulp#/)

## Copyright & License

Copyright 2014, Priyatam Mudivarti.

Licensed under MIT.
