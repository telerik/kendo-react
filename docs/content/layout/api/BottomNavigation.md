---
title: BottomNavigation
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BottomNavigation."
api_reference: true
type: inner_api
slug: api_layout_bottomnavigation
---

# BottomNavigation
Represents the [KendoReact BottomNavigation component](https://www.telerik.com/kendo-react-ui/components/layout/bottomnavigation).
Used to switch between primary destinations in an application.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const items = [
   { text: 'Photos', icon: 'photo', selected: true },
   { text: 'Albums', icon: 'folder' },
   { text: 'Search', icon: 'search' },
   { text: 'More', icon: 'more-horizontal' },
];

const App = () => {
  return (
      <BottomNavigation items={items} />
  );
};
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


[BottomNavigationProps]({% slug api_layout_bottomnavigationprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [BottomNavigationHandle]({% slug api_layout_bottomnavigationhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the BottomNavigation component.


</td>
</tr>
</tbody>
</table>



