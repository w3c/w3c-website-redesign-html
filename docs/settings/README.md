# Settings

This is where you will find global Sass variables such as colors, fonts and typesetting, and breakpoint variables used within media queries.

## Breakpoints

Number variables corresponding to generic viewport measurements. These values can be updated and new variables added as required for your project's needs.

The `$text-measure` variable is used to limit the maximum line length of text content for [improved readability](http://webtypography.net/2.1.2).

## Colors

A limited range of prototyping colors, a custom color palette specific to your project, and common social media brand colors.

### Color contrast

Make sure that the contrast ratio of text and interactive elements on your site meets at least level AA of the [Web Content Accessibility Guidelines (WCAG 2.1)](https://www.w3.org/TR/WCAG21/#contrast-minimum), preferably level AAA. The ideal contrast range is 7:1 - 15:1. Higher contrasts can be triggering for certain people.

### Color palette

We advise you to use the Sass variables provided, rather than copying the hexadecimal (hex) color values. This will ensure that, in the event of a CSS update, your site will continue to use the most recent color palette.

Only use the variables in the context they’re designed for. In all other cases, you should reference the colour palette directly. For example, `$blue` is used as the default link color; if you want to use it for an additional purpose you should use `$blue` rather than `$link-color`.

## Debug

`$pesticide` is a useful variable which, when enabled, can help you [debug your CSS layouts](https://github.com/mrmrs/pesticide).

## Fonts

Custom fonts are defined here using the `@font-face` CSS at-rule.

## Paths

Variables for commonly used paths to asset directories.

## Typesetting

Variables for font families and weights.