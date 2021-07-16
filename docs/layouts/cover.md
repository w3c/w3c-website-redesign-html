# Cover

The cover layout creates a container with a minimum height to hold vertically centered content, ideal for "above the fold" hero blocks and sections needing visual prominence. It uses the classes `.l-cover` for the container and `.principal` for the content to be centred.

## Cover with horizontal centering using a utility class

```
<div class="l-cover">
    <h1 class="principal txt-venus u-center">Here is the principal content</h1>
</div>
```

## Cover with a nested center layout for horizontal centering

```
<div class="l-cover">
    <div class="l-center principal">
        <h1 class="txt-venus">Here is the principal content</h1>
    </div>
</div>
```

## Cover with optional header and footer content

This example uses an inline style to change the default alignment of the "header". In practice, you should use the CSS stylesheet to target the element directly or via a custom class to achieve this.

```
<div class="l-cover">
    <p style="align-self: flex-end;">&quot;Header&quot; content, e.g. a close button</p>
    <h1 class="principal txt-venus u-center">The principal content</h1>
    <p>&quot;Footer&quot; content</p>
</div> 
```