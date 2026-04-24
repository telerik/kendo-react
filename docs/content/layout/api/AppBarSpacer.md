---
title: AppBarSpacer
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the AppBarSpacer."
api_reference: true
type: inner_api
slug: api_layout_appbarspacer
---

# AppBarSpacer
Represents the [KendoReact AppBarSpacer component](https://www.telerik.com/kendo-react-ui/components/layout/appbar/content-arrangement#toc-spacings).
Used to give additional white space between the AppBar sections and provides a way for customizing its width.

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


[AppBarSpacerProps]({% slug api_layout_appbarspacerprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [AppBarSpacerHandle]({% slug api_layout_appbarspacerhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the AppBarSpacer component.


</td>
</tr>
</tbody>
</table>



