# Lesser

A minimalist workflow for designing responsive pages with Bootstrap and Less.

## Rationale

Protoyping and compiling a designer's assets for production sites is a daunting dask. While generators like [Yeoman](http://yeoman.io), [Lineman](http://www.linemanjs.com), and numerous frontend frameworks exist, the world of designers who understand these technologies is small compared to developers familiar with Ruby and Node.

**Lesser** provides a minimal workflow built on Less, and the [world's most popular](http://getbootstrap.com) responsive toolkit. Optimized for Web Typography, Lesser comes recommended fonts from [Brick Fonts](http://brick.im/fonts/), [Beautiful Webtype](http://hellohappy.org/beautiful-web-type/), and the following jQuery plugins designed to work well with Typography.

- [LetteringJs](http://letteringjs.com)
- [Fittext](http://fittextjs.com)

### Setup

First time node users, install node via [brew](http://brew.sh):

    brew install node

Install the following core npm modules:

    npm install gulp -g
    npm install bower -g

## Usage

Install _lesser_ and its dependencies:

    bower install lesser
    npm install
    bower install

This will create a set of default less/bootstrap workflow under `.bower_components`. 

Your less files can now import _lesser_ files:

    @import "./bower_components/lesser/less/bootstrap";
    @import "./bower_components/bootstrap/less/colors";
    @import "./bower_components/bootstrap/less/layout";
    @import "./bower_components/bootstrap/less/typography";

That's it. Go ahead, and create a beautiful `index.html` page.

To preview your site, run:

    gulp
    
Preview the site at `http://localhost:8000`.

[Gulp](http://gulpjs.com) compiles your Less styles, including Bootstrap's own variables and mixins, Javascript files (if any) under `src`, minifies all of them into `public` folder, and runs a static server that watches for changes. You don't have to learn Javascript or Gulp in order to design pages, but a [basic understanding of Gulp](http://markgoodyear.com/2014/01/getting-started-with-gulp/) would be helpful. 

See [Gulp](/gulpfile.js) for individual tasks.    
    
## Workflow

- Start with a blank page
- Separate styles into `colors.less`, `typography.less`, and `layout.less`
- Keep variables and mixins in respective files — do not put them in a single file!
- Add `bootstrap.less` to selectively include mixins and variables from Bootstrap's source

## Status & Roadmap

**Early development**.

This project was created for designer-centric workflows, largely those new to Nodejs ecosystem. Future roadmap includes useful mixins, js helpers, and detailed documentation with examples.

Feedback much appreciated.

## Further Reading

- [Bootstrap Workflow](http://www.helloerik.com/bootstrap-3-less-workflow-tutorial)
- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [HSLa Colors](http://trentwalton.com/2010/12/21/rgba-hsla-css-color/)
- [Introducing Gulp](http://slides.com/contra/gulp#/)

## Copyright & License

Copyright 2014, Priyatam Mudivarti

Licensed under MIT.
