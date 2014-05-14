# Spec

How do you fit 16 haikus on an A4 page?

- set a 16 grid CSS3 layout
- design a single cell [box model](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) and set of font families.
- html `<section>` for each cell
- a task runner: for haiku in haikus build-html, apply css

## Notes

Force the browser to display pixel dimensions proportional to A4. This is hard, with quirks when things are rendered (72 dpi, Retina display, etc.,). Research further on Media queries.

For each cell, include margin, padding, border, web font faces and weights. Test it with 2, 4, 8, 16. Namespacing the cell's css with cell-xxx is helpful.

Inject haikus into 16 grids (4x4). Apply css of each cell (with validation?). Build html snippet for each cell.

Current Issues: Too many!
