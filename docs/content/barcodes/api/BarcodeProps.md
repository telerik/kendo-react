---
title: BarcodeProps
description: "Learn how to build custom functionality when working with the React Barcodes by Kendo UI with the help of the BarcodeProps."
api_reference: true
type: inner_api
slug: api_barcodes_barcodeprops
---

# BarcodeProps
Represents the props of the [KendoReact Barcode component](https://www.telerik.com/kendo-react-ui/components/barcodes/barcode).


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


#### background?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"white"


</code>


</td>
<td class="table-cell-comment">


Sets the background color of the Barcode. Accepts a valid CSS color string, including hex and rgb.




```ts
<Barcode background="#ffffff" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### border?


</td>
<td type class="table-cell-type">


<code>


[Border]({% slug api_barcodes_border %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the border of the Barcode. Accepts an object implementing the `Border` interface.

```ts
<Barcode border={{ color: "black", width: 2 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### checksum?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


Shows or hides the checksum digit next to the value in the text area.




```ts
<Barcode checksum={true} />
```



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


Sets additional CSS classes to the component.

```ts
<Barcode className="custom-barcode-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### color?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"black"


</code>


</td>
<td class="table-cell-comment">


Sets the color of the Barcode. Accepts a valid CSS color string, including hex and rgb.




```ts
<Barcode color="#000000" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the Barcode in pixels.
You can also set the Barcode dimensions through regular CSS styling.

```ts
<Barcode height={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number | [Padding]({% slug api_barcodes_padding %})


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Sets the padding of the Barcode. Accepts a numeric value or an object implementing the `Padding` interface.




```ts
<Barcode padding={{ top: 10, bottom: 10, left: 5, right: 5 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### renderAs?


</td>
<td type class="table-cell-type">


<code>


[RenderMode]({% slug api_barcodes_rendermode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the preferred rendering engine.

The supported values are:
- `"svg"`&mdash;If available, renders the component as an inline `svg` element.
- `"canvas"`&mdash;If available, renders the component as a `canvas` element.

```ts
<Barcode renderAs="svg" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the styles that the component applies.

```ts
<Barcode style={{ backgroundColor: "lightgray" }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


[BarcodeText]({% slug api_barcodes_barcodetext %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the text label configuration of the Barcode. Accepts an object implementing the `BarcodeText` interface.

```ts
<Barcode text={{ visible: true, position: "bottom", color: "black" }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### type


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"Code39"


</code>


</td>
<td class="table-cell-comment">


Sets the symbology (encoding) that the Barcode will use. Accepts a value of type `BarcodeType` or a custom string.




```ts
<Barcode type="Code128" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the Barcode. Accepts a string or a number.

```ts
<Barcode value="123456789" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the Barcode in pixels.
You can also set the Barcode dimensions through regular CSS styling.

```ts
<Barcode width={200} />
```



</td>
</tr>
</tbody>
</table>



