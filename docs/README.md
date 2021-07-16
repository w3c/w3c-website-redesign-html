# Front end documentation

Apollo aims to provide a solid foundation to your project, which can be easily adapted and extended over time as required.

## CSS

CSS is based on [Sass](http://sass-lang.com/) (using the [SCSS syntax](https://sass-lang.com/documentation/syntax)) and is heavily influenced by [Andy Bell's](https://github.com/andy-piccalilli/) [CUBE CSS](https://cube.fyi/). This has some similarities with the [BEM Methodology](http://getbem.com/) but with a more judicious use of class names.

### Architecture

The architecture is split into a series of levels, each level representing a folder that contains our SASS split out into different files. CSS is organised in specificity order and, with the exception of print styles, the SASS files should be included in the order denoted by this structure.

More generic and wide-reaching styles sit within the lower numbered levels, with specificity increasing with each level:

- [Settings](settings/README.md) (global [Sass variables](https://sass-lang.com/documentation/variables) for your project)
- Functions (global [Sass functions](https://sass-lang.com/documentation/values/functions) e.g. em/rem calculation, unit stripping)
- Mixins (global [Sass mixins](https://sass-lang.com/documentation/at-rules/mixin) for font size/line-height combinations, media queries and vertical spacing)
- [Base]() (styles related to the basic styles of your project, like typography, reset and global elements like links and lists. Print styles also reside here.)
- [Layouts](layouts/README.md) (styles for the basic layout types, which can be combined and customised to make a variety of components and templates)
- Core components
- Advanced components
- Third-party plugins
- Templates
- Utilities