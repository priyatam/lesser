# Lesser

A minimalist workflow for designing responsive pages with Less.

## Overview

*Lesser* provides a minimal workflow built on Less, including a small subset of the [world's most popular](http://getbootstrap.com) responsive toolkit. Instead of pre-loading all of Bootstrap's CSS components, lesser includes the essential elements: grid, typography, and powerful mixins, leaving the rest out of your way. Optimized for Responsive Typography, Lesser also comes preloaded with the following plugins:

- [LetteringJs](http://letteringjs.com)
- [Fittext](http://fittextjs.com)
- [FlowType](http://simplefocus.com/flowtype/)

## Usage

Install lesser

	 bower install lesser

Run examples in this rep:

	npm start

Preview the site at `http://localhost:9000`.

## Workflow

> Responsive Design is 99% grids, typography, and color theory. 

Start with an example ` index.html` with a default grid. Organize styles in less into three files: `colors.less`, `typography.less`, `grids.less`.

Developers may be familiar with this structure from writing code in other languages. Hopefully, designers can bring some order into writing less code with _Lesser_: by keeping related functionality together in one file, global variables and mixins can be avoided. Instead of relying on arbitrary class/id and selector inheritance that bloat stylesheets, design with grids -> typography -> colors.

## Status & Roadmap

 v0.3.x, early development.

## Further Reading

- [Understanding Bootstrap’s Grid](http://www.helloerik.com/bootstrap-3-grid-introduction)
- [Web Typography](http://www.abookapart.com/products/on-web-typography)
- [Colors in HSL](http://trentwalton.com/2010/12/21/rgba-hsla-css-color/)

## Copyright & License

Copyright 2015, Priyatam Mudivarti

Licensed under MIT.
