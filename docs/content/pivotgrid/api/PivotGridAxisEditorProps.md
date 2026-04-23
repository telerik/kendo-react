---
title: PivotGridAxisEditorProps
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the PivotGridAxisEditorProps."
api_reference: true
type: inner_api
slug: api_pivotgrid_pivotgridaxiseditorprops
---

# PivotGridAxisEditorProps
Represents the props of the [KendoReact PivotGridAxisEditor component](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxiseditor).


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


Identifies the element(s) which describe the component, similar to an [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example, these elements could contain an error or a hint message.

```jsx
<Chip ariaDescribedBy="description" />
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


Represents the label of the Chip component.

```jsx
<Chip ariaLabel="Chip Label" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### avatar?


</td>
<td type class="table-cell-type">


<code>


ChipAvatarProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip has an avatar.

```jsx
<Chip avatar={{ image: 'avatar.png', imageAlt: 'Avatar' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### children?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The React elements that will be rendered as custom content inside the Chip.

```jsx
<Chip>Custom Content</Chip>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### chip?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ChipProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `chip` component.

The default component is: [KendoReactChip](https://www.telerik.com/kendo-react-ui/components/buttons/api/chip).


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


Sets additional classes to the Chip.

```jsx
<Chip className="custom-chip" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### columnMenuTextColumn?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;ColumnMenuProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `columnMenuTextColumn` component.

The default component is: [KendoReactColumnMenuTextColumn](https://www.telerik.com/kendo-react-ui/components/datatools/api/columnmenutextcolumn).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dataItem


</td>
<td type class="table-cell-type">


<code>


[PivotGridAxis]({% slug api_pivotgrid_pivotgridaxis %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dataItem` of the AxisEditor.

The `dataItem` is a single [PivotGridAxis](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxis) object.


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


The Chip direction 'ltr' as default or 'rtl'.

```jsx
<Chip dir="rtl" />
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


Determines if the Chip is disabled.

```jsx
<Chip disabled />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dropClue?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `dropClue` component.

The default component is: `(props) => <div className="k-grouping-dropclue" style={{ position: 'relative', zIndex: 10000 }} {...props}/>`


</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"solid" | "outline"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Chip.
The available options are:
- `solid`
- `outline`




```jsx
<Chip fillMode="outline" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### filterFieldsEditor?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[PivotGridAxisFilterFieldsEditorProps]({% slug api_pivotgrid_pivotgridaxisfilterfieldseditorprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Overrides the default `filterFieldsEditor` component.

The default component is: [PivotGridAxisFilterFieldsEditor](https://www.telerik.com/kendo-react-ui/components/pivotgrid/api/pivotgridaxisfilterfieldseditor).


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


Determines if the Chip has a font `icon`.

```jsx
<Chip icon="k-i-user" />
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


Sets the `id` property of the top div element of the Chip.

```jsx
<Chip id="chip1" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: ChipFocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onBlur` event.

```jsx
<Chip onBlur={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClick?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onClick` event.

```jsx
<Chip onClick={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onDoubleClick` event.

```jsx
<Chip onDoubleClick={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: ChipFocusEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onFocus` event.

```jsx
<Chip onFocus={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onKeyDown?


</td>
<td type class="table-cell-type">


<code>


(event: ChipKeyboardEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onKeyDown` event.

```jsx
<Chip onKeyDown={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseDown?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseDown` event.

```jsx
<Chip onMouseDown={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseEnter?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseEnter` event.

```jsx
<Chip onMouseEnter={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseLeave?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseLeave` event.

```jsx
<Chip onMouseLeave={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseMove?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseMove` event.

```jsx
<Chip onMouseMove={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOut?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseOut` event.

```jsx
<Chip onMouseOut={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseOver?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseOver` event.

```jsx
<Chip onMouseOver={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMouseUp?


</td>
<td type class="table-cell-type">


<code>


(event: ChipMouseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on `onMouseUp` event.

```jsx
<Chip onMouseUp={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove?


</td>
<td type class="table-cell-type">


<code>


(event: ChipRemoveEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires on Chip removing.

```jsx
<Chip onRemove={(event) => console.log(event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### removable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip could be removed.

```jsx
<Chip removable />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip has custom font `removeIcon`.

```jsx
<Chip removeIcon="k-i-close" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeSvgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip has custom SVG `removeIcon`.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Chip removeSvgIcon={gearIcon} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Chip.
The available options are:
- `small`
- `medium`
- `large`
- `full`
- `none`




```jsx
<Chip rounded="full" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selected?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip is selected.

```jsx
<Chip selected />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedIcon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip has custom selection font `icon`.

```jsx
<Chip selectedIcon="k-i-check" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectedSvgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the Chip has custom selection SVG `icon`.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Chip selectedSvgIcon={gearIcon} />
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


Configures the `size` of the Chip.
The available options are:
- `small`
- `medium`
- `large`




```jsx
<Chip size="large" />
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


Sets additional CSS styles to the Chip.

```jsx
<Chip style={{ margin: '10px' }} />
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


Determines if the Chip has an SVG `icon`.

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<Chip svgIcon={gearIcon} />
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
<Chip tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the label text of the Chip.

```jsx
<Chip text="Label" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "error" | "info" | "success" | "warning"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Chip.
The available options are:
- `base`
- `info`
- `success`
- `warning`
- `error`




```jsx
<Chip themeColor="success" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` value of the Chip.

```jsx
<Chip value="chip1" />
```



</td>
</tr>
</tbody>
</table>



