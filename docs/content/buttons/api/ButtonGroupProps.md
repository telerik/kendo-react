---
title: ButtonGroupProps
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the ButtonGroupProps."
api_reference: true
type: inner_api
slug: api_buttons_buttongroupprops
---

# ButtonGroupProps
Represents the props of the [KendoReact ButtonGroup component](https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup).


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


Sets the `className` of the ButtonGroup component.
Specifies a list of CSS classes that will be added to the ButtonGroup element.

```jsx
<ButtonGroup className="custom-group" />
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


Sets the direction of the ButtonGroup ([more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)).

The available options are:
* `rtl`
* `ltr`
* `auto`


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


By default, the ButtonGroup is enabled ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/buttongroup/disabled-state)). To disable the whole group of buttons, set its `disabled` attribute to `true`. To disable a specific button, set its own `disabled` attribute to `true` and leave the `disabled` attribute of the ButtonGroup undefined.

If you define the `disabled` attribute of the ButtonGroup, it takes precedence over the `disabled` attributes of the underlying buttons and they are ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the ButtonGroup.

If the width of the ButtonGroup is set:
— The buttons resize automatically to fill the full width of the group wrapper.
— The buttons get the same width.


</td>
</tr>
</tbody>
</table>



