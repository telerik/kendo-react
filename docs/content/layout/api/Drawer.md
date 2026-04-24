---
title: Drawer
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the Drawer."
api_reference: true
type: inner_api
slug: api_layout_drawer
---

# Drawer
Represents the [KendoReact Drawer component](https://www.telerik.com/kendo-react-ui/components/layout/drawer).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
  const items = [
      { text: 'Inbox', icon: 'k-i-inbox', selected: true },
      { separator: true },
      { text: 'Notifications', icon: 'k-i-bell', disabled: true },
      { text: 'Calendar', icon: 'k-i-calendar' },
      { separator: true },
      { text: 'Attachments', icon: 'k-i-hyperlink-email' },
      { text: 'Favourites', icon: 'k-i-star-outline' }
  ];

  const [expanded, setExpanded] = React.useState(true);
  const handleClick = () => setExpanded(prevState => !prevState);

  return (
      <Drawer expanded={expanded} position='start' mode='push' items={items}>
          <DrawerContent>
              <Button onClick={handleClick}>Toggle the drawer state</Button>
          </DrawerContent>
      </Drawer>
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


[DrawerProps]({% slug api_layout_drawerprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [DrawerHandle]({% slug api_layout_drawerhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Drawer component.


</td>
</tr>
</tbody>
</table>



