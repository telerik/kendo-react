---
title: ColorPaletteProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the ColorPaletteProps."
api_reference: true
type: inner_api
slug: api_inputs_colorpaletteprops
---

# ColorPaletteProps
Represents the props of the [KendoReact ColorPalette component](https://www.telerik.com/kendo-react-ui/components/inputs/colorpalette).


<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the ColorPalette.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### columns?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the number of columns that will be displayed.
Defaults to `10`.

```jsx
<ColorPalette columns={5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The default value of the ColorPalette.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the ColorPalette is disabled
([more information and example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpalette/disabled)).

```jsx
const App = () => (
    <ColorPalette disabled={true} />
);
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the id of the component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [ColorPaletteChangeEvent]({% slug api_inputs_colorpalettechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the event handler that will be fired when the user edits the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represent the focus event of the ColorPalette.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### palette?


</td>
<td type class="table-cell-type">


<code>


string | string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The color palette that will be displayed.

The supported values are:
* The name of the predefined palette preset (for example, `office`, `basic`, and `apex`).
* A string array.

```jsx
<ColorPalette palette={['#ff0000', '#00ff00', '#0000ff']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the ColorPalette.

The available options are:
- `small`
- `medium`
- `large`




```tsx
<ColorPalette size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the ColorPalette.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### tileSize?


</td>
<td type class="table-cell-type">


<code>


number | [TileSize]({% slug api_inputs_tilesize %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the size of a color cell in px.
Defaults to `24`.

```jsx
<ColorPalette tileSize={30} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The value of the ColorPalette.


</td>
</tr>
</tbody>
</table>



