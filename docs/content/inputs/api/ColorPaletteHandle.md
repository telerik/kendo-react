---
title: ColorPaletteHandle
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the ColorPaletteHandle."
api_reference: true
type: inner_api
slug: api_inputs_colorpalettehandle
---

# ColorPaletteHandle
Represents the imperative handle exposed by the ColorPalette component through ref.

```tsx
const paletteRef = useRef<ColorPaletteHandle>(null);

// Focus the palette programmatically
paletteRef.current?.focus();

// Access the wrapper element
const width = paletteRef.current?.wrapperRef.current?.offsetWidth;

<ColorPalette ref={paletteRef} palette="basic" />
```



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


#### focus


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Programmatically focuses the ColorPalette component.

When called:
- The root div element receives DOM focus
- The first color tile (or previously selected tile) is focused for keyboard navigation
- The component's `onFocus` callback is triggered


</td>
</tr>
<tr>
<td class="table-cell-name">


#### wrapperRef


</td>
<td type class="table-cell-type">


<code>


RefObject&lt;"null" | HTMLDivElement&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React ref to the root wrapper element of the ColorPalette.

This ref can be used to access the underlying DOM element for scenarios such as:
- Measuring the component dimensions
- Integrating with non-React libraries
- Programmatic scrolling or focus management

The ref is populated after the component mounts and will be `null` before that.


</td>
</tr>
</tbody>
</table>



