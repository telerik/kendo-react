---
title: QRCodeProps
description: "Learn how to build custom functionality when working with the React Barcodes by Kendo UI with the help of the QRCodeProps."
api_reference: true
type: inner_api
slug: api_barcodes_qrcodeprops
---

# QRCodeProps
Represents the props of the [KendoReact QRCode component](https://www.telerik.com/kendo-react-ui/components/barcodes/qrcode).


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


Sets the background color of the QR Code. Accepts a valid CSS color string, including hex and rgb.




```ts
<QRCode background="#ffffff" />
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


Sets the border of the QR Code. Accepts an object implementing the `Border` interface.

```ts
<QRCode border={{ color: "black", width: 2 }} />
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


Sets the color of the QR Code. Accepts a valid CSS color string, including hex and rgb.




```ts
<QRCode color="#000000" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### encoding?


</td>
<td type class="table-cell-type">


<code>


[QRCodeEncoding]({% slug api_barcodes_qrcodeencoding %})


</code>


</td>
<td class="table-cell-default">


<code>


"ISO_8859_1"


</code>


</td>
<td class="table-cell-comment">


Sets the encoding mode used to encode the value.

> **Important** The UTF-8 encoding is not included in the specifications and some readers do not support it.

The possible values are:
* `"ISO_8859_1"`&mdash;Supports all characters from the [ISO/IEC 8859-1](https://en.wikipedia.org/wiki/ISO/IEC_8859-1) character set.
* `"UTF_8"`&mdash;Supports all [Unicode](https://en.wikipedia.org/wiki/List_of_Unicode_characters) characters.




```ts
<QRCode encoding="UTF_8" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### errorCorrection?


</td>
<td type class="table-cell-type">


<code>


[QRCodeErrorCorrection]({% slug api_barcodes_qrcodeerrorcorrection %})


</code>


</td>
<td class="table-cell-default">


<code>


"L"


</code>


</td>
<td class="table-cell-comment">


Sets the error correction level to use.

The possible values are:
* `"L"`&mdash;Approximately 7% of the codewords can be restored.
* `"M"`&mdash;Approximately 15% of the codewords can be restored.
* `"Q"`&mdash;Approximately 25% of the codewords can be restored.
* `"H"`&mdash;Approximately 30% of the codewords can be restored.




```ts
<QRCode errorCorrection="H" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### overlay?


</td>
<td type class="table-cell-type">


<code>


[QRCodeOverlay]({% slug api_barcodes_qrcodeoverlay %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An optional image overlay that displays over the QR Code.

> **Note** Always test if the code reads correctly with the applied overlay.
> Depending on the length of the value and the size of the overlay, you might need to raise the `errorCorrection` level to `"M"` or `"H"`.

```ts
<QRCode overlay={{ imageUrl: "https://example.com/logo.png", size: 50 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### padding?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Sets the padding of the QR Code. A numeric value sets all paddings.




```ts
<QRCode padding={10} />
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


#### size?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">


<code>


"200px"


</code>


</td>
<td class="table-cell-comment">


Determines the size of a QR Code. Numeric values represent pixels.

If you do not specify a size, the size will be determined from the element width and height.
If the element has width or height of zero, a default value of 200 pixels will be used.




```ts
<QRCode size={300} />
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


Sets the value of the QR Code. Accepts a string or a number.

```ts
<QRCode value="https://example.com" />
```



</td>
</tr>
</tbody>
</table>



