---
title: DrawerNavigation
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the DrawerNavigation."
api_reference: true
type: inner_api
slug: api_layout_drawernavigation
---

# DrawerNavigation
Represents the [KendoReact Drawer component](https://www.telerik.com/kendo-react-ui/components/layout/drawer).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
  const App = () => {
      const [expanded, setExpanded] = React.useState(true);
      const handleClick = () => setExpanded(prevState => !prevState);

      return (
          <Drawer expanded={expanded} position='start' mode='push'>
              <DrawerNavigation>
                  <ul className="k-drawer-items">
                      <li className="k-drawer-item k-selected">
                          <span className="k-item-text">Home</span>
                      </li>
                      <li className="k-drawer-item">
                          <span className="k-item-text">Products</span>
                      </li>
                      <li className="k-drawer-item">
                          <span className="k-item-text">About</span>
                      </li>
                  </ul>
              </DrawerNavigation>
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


[DrawerNavigationProps]({% slug api_layout_drawernavigationprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | DrawerNavigationHandle&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the DrawerNavigation component.


</td>
</tr>
</tbody>
</table>



