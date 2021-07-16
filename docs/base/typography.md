# Typography

## Font

The web font chosen for this design system is [Noto Sans from Google](https://www.google.com/get/noto/).

## Headings

Use the appropriate semantic `<h#>` to mark up headings. Check that headings are ordered hierarchically, without missing any numbers: `<h2>` is the next level down from `<h1>`, `<h3>` is the next level down from `<h2>`, etc.

A set of font override classes is available, with each class tied to a mixin setting a specific combination of font size and line-height, which have been designed to work together. Headings `<h1>` - `<h5>` have been matched to the following classes (`<h6>` takes the default body text size of `1rem`.):

Heading | Class
------- | -----
`<h1>`  | `.txt-venus`
`<h2>`  | `.txt-earth`
`<h3>`  | `.txt-mars`
`<h4>`  | `.txt-jupiter`
`<h5>`  | `.txt-saturn`

### Font override classes

Eight classes are available in total. `.txt-mercury` is used for the `<h1>` on the landing and business ecosystem page templates. Note that the font size and line-height of `.txt-mercury`, `.txt-venus` and `.txt-earth` increase at the `$bp-tab-small` media query breakpoint, defined in [Settings](../settings/README.md).

```
<p class="txt-mercury">txt-mercury</p>

<p class="txt-venus">txt-venus</h2>

<p class="txt-earth">txt-earth</p>

<p class="txt-mars">txt-mars</p>

<p class="txt-jupiter">txt-jupiter</p>

<p class="txt-saturn">txt-saturn</p>

<p class="txt-pluto">txt-pluto</p>

<p class="txt-eris">txt-eris</p>
```