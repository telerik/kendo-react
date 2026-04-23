---
title: RatingProps
description: "Learn how to build custom functionality when working with the React Inputs by Kendo UI with the help of the RatingProps."
api_reference: true
type: inner_api
slug: api_inputs_ratingprops
---

# RatingProps
Represents the properties of [Rating](https://www.telerik.com/kendo-react-ui/components/inputs/api/rating) component.


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
<Rating ariaDescribedBy="description-id" />
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
<Rating ariaLabelledBy="label-id" />
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


Adds custom CSS classes to the Rating.

```jsx
<Rating className="custom-class" value={4} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the Rating, used in uncontrolled mode.

```jsx
<Rating defaultValue={2} />
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


Specifies the direction of the Rating (`ltr` or `rtl`).

```jsx
<Rating dir="rtl" />
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


Disables the Rating when set to `true`.

```jsx
<Rating disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom icon for the Rating.

```jsx
<Rating icon="star" />
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


Sets the `id` property of the top div element of the Rating.

```jsx
<Rating id="rating-component" value={3} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### item?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[RatingItemProps]({% slug api_inputs_ratingitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the rendered Rating item.

```jsx
<Rating item={(props) => <RatingItem {...props}>{props.value}</RatingItem>} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom label for the Rating.

```jsx
<Rating label="Rating Label" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum possible value of the Rating.

```jsx
<Rating max={10} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the minimum possible value of the Rating.

```jsx
<Rating min={1} max={10} />
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


Specifies the `name` property of the `input` DOM element.

This property is part of the [FormComponentProps](https://www.telerik.com/kendo-react-ui/components/common/api/formcomponentprops) interface.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemFocusEvent]({% slug api_inputs_ratingitemfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Rating loses focus.

```jsx
<Rating onBlur={(event) => console.log('Blurred')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingChangeEvent]({% slug api_inputs_ratingchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the value of the Rating changes.

```jsx
<Rating onChange={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemMouseEvent]({% slug api_inputs_ratingitemmouseevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Rating is clicked.

```jsx
<Rating onClick={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingItemFocusEvent]({% slug api_inputs_ratingitemfocusevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Rating is focused.

```jsx
<Rating onFocus={(event) => console.log('Focused')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: [RatingKeyboardEvent]({% slug api_inputs_ratingkeyboardevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a key is pressed while the Rating is focused.

```jsx
<Rating onKeyDown={(event) => console.log(event.value)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### precision?


</td>
<td type class="table-cell-type">


<code>


"item" | "half"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the precision of the Rating (`item` or `half`).

```jsx
<Rating precision="half" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### readonly?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `readonly` mode of the Rating.

```jsx
<Rating readonly={true} value={4} />
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


#### selection?


</td>
<td type class="table-cell-type">


<code>


"single" | "continues"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines the selection mode of the Rating (`continues` or `single`).

```jsx
<Rating selection="single" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### step?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the step value between the minimum and maximum values.

```jsx
<Rating step={0.5} />
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


Sets additional CSS styles to the Rating.

```jsx
<Rating style={{ margin: '10px' }} value={5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom SVG icon for the Rating.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Rating svgIcon={gearIcon} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIconOutline?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a custom outline SVG icon for the Rating.

```jsx
<Rating svgIconOutline={customOutlineSvgIcon} />
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


Sets the `tabIndex` attribute.




```jsx
<Rating tabIndex={0} value={2} />
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


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the current value of the Rating, used in controlled mode.

```jsx
<Rating value={3} />
```



</td>
</tr>
</tbody>
</table>



