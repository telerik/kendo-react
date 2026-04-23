---
title: DrawerItem
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the DrawerItem."
api_reference: true
type: inner_api
slug: api_layout_draweritem
---

# DrawerItem
Represents the [KendoReact Drawer component](https://www.telerik.com/kendo-react-ui/components/layout/drawer).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
   const App = () => {
     const [stateVisible, setStateVisible] = React.useState(true);
     const handleClick = () => { setStateVisible(prevState => !prevState); };

     return (
       <Drawer expanded={stateVisible} mode={'push'}>
           <DrawerNavigation>
               <DrawerItem text="Inbox" icon="k-i-inbox" />
               <DrawerItem separator={true} />
               <DrawerItem text="Notifications" icon="k-i-bell" disabled={true}/>
               <DrawerItem text="Calendar" icon="k-i-calendar"/>
               <DrawerItem separator={true} />
               <DrawerItem text="Attachments" icon="k-i-hyperlink-email" selected={true}/>
               <DrawerItem text="Favourites" icon="k-i-star-outline"/>
           </DrawerNavigation>
           <DrawerContent><Button onClick={handleClick}>Toggle the drawer state</Button></DrawerContent>
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


Omit&lt;[DrawerItemProps]({% slug api_layout_draweritemprops %})&gt; [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [DrawerItemHandle]({% slug api_layout_draweritemhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the DrawerItem component.


</td>
</tr>
</tbody>
</table>



