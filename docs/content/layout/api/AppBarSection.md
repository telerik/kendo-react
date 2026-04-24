---
title: AppBarSection
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the AppBarSection."
api_reference: true
type: inner_api
slug: api_layout_appbarsection
---

# AppBarSection
Represents the [KendoReact AppBarSection component](https://www.telerik.com/kendo-react-ui/components/layout/appbar/content-arrangement#toc-sections).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx

const App = () => {
  return (
      <AppBar>
          <AppBarSection>
              <span className="k-icon k-i-menu" />
          </AppBarSection>

          <AppBarSpacer style={{ width: 8 }} />

          <AppBarSection>
              <h1 className="title">{tc.text} AppBar</h1>
          </AppBarSection>

          <AppBarSpacer />

          <AppBarSection>
              <BadgeContainer>
                  <span className="k-icon k-i-bell" />
                  <Badge themeColor="info" shape="dot" />
              </BadgeContainer>
          </AppBarSection>
     </AppBar>
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


[AppBarSectionProps]({% slug api_layout_appbarsectionprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [AppBarSectionHandle]({% slug api_layout_appbarsectionhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the AppBarSection component.


</td>
</tr>
</tbody>
</table>



