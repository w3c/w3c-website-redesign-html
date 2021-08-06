# Components

Examples of the individual components, the building blocks of your web pages.

In the CSS architecture, there are two directories relating to components. The **core components** directory handles the minimum required styles for all components. They are compiled into `core.css`, which is served to all browsers (along with `print.css`). 

The **advanced components** directory handles the styles for those few components that are enhanced in some way with JavaScript. They are compiled into a separate `advanced.css`, which is only served to browsers that meet the following CSS media query that sits within `<head>`:

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

This technique is known as [‘cutting the mustard’](https://www.zeldman.com/2015/09/01/youre-welcome-cutting-the-mustard-then-and-now/). It can be done via a JavaScript query, but Apollo, inspired by the [Springer Nature Frontend Playbook](https://github.com/springernature/frontend-playbook/blob/main/practices/graded-browser-support.md), uses the [CSS Only Mustard Cut](https://github.com/Fall-Back/CSS-Mustard-Cut).


## Index of components
- [Archived content](archived-content.md)
- [Header](header.md)
- [Footer](footer.md)
- [Navigation](navigation.md)
- [Breadcrumbs](breadcrumbs.md)
- [Hero](hero.md)
- [Text](text.md)
- [Quote](quote.md)
- [Image](image.md)
- [Video](video.md)