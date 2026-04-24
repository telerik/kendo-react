---
title: Toolbar
description: "Learn how to build custom functionality when working with the React Buttons by Kendo UI with the help of the Toolbar."
api_reference: true
type: inner_api
slug: api_buttons_toolbar
---

# Toolbar
Represents the [KendoReact Toolbar component](https://www.telerik.com/kendo-react-ui/components/buttons/toolbar).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
      return (
         <Toolbar>
             <ToolbarItem>
                 <ButtonGroup>
                     <Button togglable={true} icon="bold" />
                     <Button togglable={true} icon="italic" />
                     <Button togglable={true} icon="underline" />
                 </ButtonGroup>
             </ToolbarItem>
             <ToolbarItem>
                 <ButtonGroup>
                     <Button icon="hyperlink">Insert Link</Button>
                     <Button icon="image">Insert Image</Button>
                     <Button icon="table">Insert Table</Button>
                 </ButtonGroup>
             </ToolbarItem>
         </Toolbar>
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


[ToolbarProps]({% slug api_buttons_toolbarprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;[ToolbarHandle]({% slug api_buttons_toolbarhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Toolbar component.


</td>
</tr>
</tbody>
</table>



