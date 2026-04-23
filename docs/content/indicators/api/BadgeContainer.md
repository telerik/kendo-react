---
title: BadgeContainer
description: "Learn how to build custom functionality when working with the React Indicators by Kendo UI with the help of the BadgeContainer."
api_reference: true
type: inner_api
slug: api_indicators_badgecontainer
---

# BadgeContainer
Represents the [KendoReact BadgeContainer component](https://www.telerik.com/kendo-react-ui/components/indicators/badge).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
  return (
      <BadgeContainer>
          <Avatar shape="circle" type="image">
              <img src={'https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg'} />
          </Avatar>
          <Badge cornerPlacement="edge" position="topEnd">
      </BadgeContainer>
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


[BadgeContainerProps]({% slug api_indicators_badgecontainerprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [BadgeContainerHandle]({% slug api_indicators_badgecontainerhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the BadgeContainer component.


</td>
</tr>
</tbody>
</table>



