---
title: SignatureProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the SignatureProps."
api_reference: true
type: inner_api
slug: api_inputs_signatureprops
---

# SignatureProps
Represents the props of the [KendoReact Signature component](https://www.telerik.com/kendo-react-ui/components/inputs/signature).


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


Identifies the element(s) which will describe the component.




```jsx
<Signature ariaDescribedBy="description-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the accessible label of the Signature.




```jsx
<Signature ariaLabel="Signature field" />
```



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




```jsx
<Signature ariaLabelledBy="label-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### backgroundColor?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the background color of the Signature.

```jsx
<Signature backgroundColor="lightgray" />
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


Adds custom CSS classes to the Signature.

```jsx
<Signature className="custom-class" />
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




</td>
<td class="table-cell-comment">


Specifies the stroke color of the Signature.

```jsx
<Signature color="blue" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.

```jsx
<Signature dir="rtl" />
```



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


Disables the Signature when set to `true`.

```jsx
<Signature disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### exportScale?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


2


</code>


</td>
<td class="table-cell-comment">


The scale factor for the exported image.

The Signature width and height will be multiplied by the scale when converting the signature to an image.




```jsx
<Signature exportScale={2} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"flat" | "solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the fill mode of the Signature.




```jsx
<Signature fillMode="solid" />
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


Specifies the height of the Signature in pixels.

```jsx
<Signature height={300} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### hideLine?


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


Hides the dotted line in the background.




```jsx
<Signature hideLine={true} />
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


Specifies the `id` of the Signature.

```jsx
<Signature id="signature-component" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### inputStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the input element `style` HTML attribute.

```jsx
<Signature inputStyle={{ padding: '10px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maximizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the maximizable feature of the Signature.

```jsx
<Signature maximizable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the Signature input.

```jsx
<Signature name="signature" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [SignatureBlurEvent]({% slug api_inputs_signatureblurevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Signature is blurred.

```jsx
<Signature onBlur={(event) => console.log('Blurred')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [SignatureChangeEvent]({% slug api_inputs_signaturechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the value of the Signature changes.

```jsx
<Signature onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [SignatureCloseEvent]({% slug api_inputs_signaturecloseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Signature popup is closed.

```jsx
<Signature onClose={(event) => console.log('Popup closed')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [SignatureFocusEvent]({% slug api_inputs_signaturefocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Signature is focused.

```jsx
<Signature onFocus={(event) => console.log('Focused')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onOpen?


</td>
<td type class="table-cell-type">


<code>


(event: [SignatureOpenEvent]({% slug api_inputs_signatureopenevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Signature popup is opened.

```jsx
<Signature onOpen={(event) => console.log('Popup opened')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### open?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the open state of the Signature popup.

```jsx
<Signature open={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### popupScale?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


3


</code>


</td>
<td class="table-cell-comment">


The scale factor for the popup.

The Signature width and height will be multiplied by the scale when showing the popup.




```jsx
<Signature popupScale={1.5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### readOnly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the Signature to read-only mode.

```jsx
<Signature readOnly={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### required?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if `null` is a valid value for the component.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the roundness of the Signature.




```jsx
<Signature rounded="medium" />
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


Configures the size of the Signature.




```jsx
<Signature size="large" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### smooth?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables smoothing of the signature lines.

```jsx
<Signature smooth={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### strokeWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the stroke width of the Signature.

```jsx
<Signature strokeWidth={2} />
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


Represents the `style` HTML attribute.

```jsx
<Signature style={{ border: '1px solid black' }} />
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


Specifies the `tabIndex` of the Signature.




```jsx
<Signature tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### valid?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the validity state of the component.
If `valid` is set, the `required` property will be ignored.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validationMessage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the form error message of the component. If set to an empty string, no error will be thrown.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### validityStyles?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `false`, no visual representation of the invalid state of the component will be applied.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


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


Specifies the value of the Signature as a Data URL.

```jsx
<Signature value="data:image/png;base64,..." />
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


Specifies the width of the Signature in pixels.

```jsx
<Signature width={500} />
```



</td>
</tr>
</tbody>
</table>



