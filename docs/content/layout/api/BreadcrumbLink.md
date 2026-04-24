---
title: BreadcrumbLink
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BreadcrumbLink."
api_reference: true
type: inner_api
slug: api_layout_breadcrumblink
---

# BreadcrumbLink
Represents the `BreadcrumbLink` component.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
import { Breadcrumb, BreadcrumbLink } from '@progress/kendo-react-layout';
const items = [
  {
    id: 'home',
    text: 'Home',
    iconClass: 'k-i-home',
  },
  {
    id: 'products',
    text: 'Products',
  },
  {
    id: 'computer',
    text: 'Computer',
  }
];

const App = () => {
const [data,setData] = React.useState(items);
const handleItemSelect = (event, id) => {
  const itemIndex = data.findIndex((curValue) => curValue.id === id);
  const newData = data.slice(0, itemIndex + 1);
  setData(newData);
};

const CustomLink = (data) => {
 return (
    <BreadcrumbLink
      id={data.id}
      text={data.text}
      onItemSelect={(event) => handleItemSelect(event, data.id)}
    />
  );
};

return (
  <Breadcrumb
    data={data}
    breadcrumbLink={(items) => CustomLink(items)}
  />
)}
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


[BreadcrumbLinkProps]({% slug api_layout_breadcrumblinkprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [BreadcrumbLinkHandle]({% slug api_layout_breadcrumblinkhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the BreadcrumbLink component.


</td>
</tr>
</tbody>
</table>



