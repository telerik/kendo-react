---
title: ColorPickerPaletteSettings
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the ColorPickerPaletteSettings."
api_reference: true
type: inner_api
slug: api_inputs_colorpickerpalettesettings
---

# ColorPickerPaletteSettings
The settings of the ColorPalette that is nested inside the popup of the ColorPicker
([see example](https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/custom#toc-customizing-the-palette-popup)).


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


Specifies the set of colors.
Provides a set of predefined palette presets (for example, `office`, `basic`, and `apex`)
and enables you to implement a custom color palette.
Defaults to the `office` preset.

The supported values are:
* The name of the predefined palette preset (for example, `office`, `basic`, and `apex`).
* A string with comma-separated colors.
* A string array.


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


Specifies the size of a color cell.

The possible values are:
* (Default) `24`
* `{ width: number, height: number }`


</td>
</tr>
</tbody>
</table>



