---
title: ScrollView
description: "Learn how to build custom functionality when working with the React ScrollView by Kendo UI with the help of the ScrollView."
api_reference: true
type: inner_api
slug: api_scrollview_scrollview
---

# ScrollView
Represents the [KendoReact ScrollView component](https://www.telerik.com/kendo-react-ui/components/scrollview).

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const App = () => {
  const items: any[] = [
    { position: 1, url: 'https://demos.telerik.com/kendo-ui/content/web/scrollview/image1.jpg' },
    { position: 2, url: 'https://demos.telerik.com/kendo-ui/content/web/scrollview/image2.jpg' },
    { position: 3, url: 'https://demos.telerik.com/kendo-ui/content/web/scrollview/image3.jpg' }
  ];
  return (
    <ScrollView style={{width: 512, height: 384}}>
      {items.map((item, index) => {
        return (
          <div className="image-with-text" key={index}>
            <p>Showing image {item.position} of {items.length}.</p>
            <img
              src={item.url}
              alt={'Photo'}
              style={{width: 512, height: 384}}
              draggable={false}
            />
          </div>
        );
      })}
    </ScrollView>
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


[ScrollViewProps]({% slug api_scrollview_scrollviewprops %}) [intersected](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) with RefAttributes&lt;"null" | [ScrollViewHandle]({% slug api_scrollview_scrollviewhandle %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the ScrollView component.


</td>
</tr>
</tbody>
</table>



