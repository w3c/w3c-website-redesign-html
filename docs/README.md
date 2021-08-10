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
- [Base](base/README.md) (styles related to the basic styles of your project, like typography, reset and global elements like links and lists. Print styles also reside here.)
- [Layouts](layouts/README.md) (styles for the basic layout types, which can be combined and customised to make a variety of components and templates. Heavily influenced by [Every Layout](https://every-layout.dev/).)
- Core [components](components/README.md) (the basic components available for use, un-enhanced by JavaScript)
- Advanced [components](components/README.md) (styles required for components that are enhanced in some way with JavaScript)
- [Third-party plugins](third-party-plugins/README.md)
- Templates
- Utilities

### CSS compilation

The SASS files are compiled into three separate CSS stylesheets:

- `core.css`, which contains:
  - Settings, Functions and Mixins (referenced elsewhere within the stylesheet)
  - Base styles
  - Layouts
  - Core component styles
  - Template-specific styles
  - Utility styles
- `advanced.css`, which contains
  - Settings, Functions and Mixins (referenced elsewhere within the stylesheet)
  - Styles from Base for [hiding and showing items](base/how-to-hide-and-show-things.md) (to allow for extending [SASS placeholders](https://sass-lang.com/documentation/style-rules/placeholder-selectors))
  - Advanced component styles
  - Third party plugins involving JavaScript
- `print.css` (print stylesheet)

Both `core.css` and `print.css` are served to all browsers. `advanced.css`, is only served to browsers that meet the following CSS media query that sits within `<head>`:

```
<!--
CSS Mustard Cut
Print (Edge doesn't apply to print otherwise)
Edge, Chrome 39+, Opera 26+, Safari 9+, iOS 9+, Android ~5+, Android UCBrowser ~11.8+
FF 47+
-->
<link rel="stylesheet" id="advanced-stylesheet" href="../dist/assets/styles/advanced.css" media="
        only print,
        only all and (pointer: fine), only all and (pointer: coarse), only all and (pointer: none),
        only all and (min--moz-device-pixel-ratio:0) and (display-mode:browser), (min--moz-device-pixel-ratio:0) and (display-mode:fullscreen)
">
```

This technique is known as [‘cutting the mustard’](https://www.zeldman.com/2015/09/01/youre-welcome-cutting-the-mustard-then-and-now/). It can be done via a JavaScript query but Apollo, inspired by the [Springer Nature Frontend Playbook](https://github.com/springernature/frontend-playbook/blob/main/practices/graded-browser-support.md), uses the [CSS Only Mustard Cut](https://github.com/Fall-Back/CSS-Mustard-Cut).

## JavaScript