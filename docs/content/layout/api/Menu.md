---
title: Menu
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the Menu."
api_reference: true
type: inner_api
slug: api_layout_menu
---

# Menu
Represents the [KendoReact Menu component](https://www.telerik.com/kendo-react-ui/components/layout/menu).

A [Functional Component](https://react.dev/reference/react/Component).




```jsx
const App = () => {
   return (
       <Menu>
           <MenuItem text="Item1" />
           <MenuItem text="Item2">
               <MenuItem text="Item2.1" />
               <MenuItem text="Item2.2" />
           </MenuItem>
           <MenuItem text="Item3" />
       </Menu>
   );
}
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


#### props


</td>
<td type class="table-cell-type">


<code>


[MenuProps]({% slug api_layout_menuprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;[MenuHandle]({% slug api_layout_menuhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Menu component.


</td>
</tr>
</tbody>
</table>



