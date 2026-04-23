---
title: FloatingLabel
description: "Learn how to build custom functionality when working with the React Labels by Kendo UI with the help of the FloatingLabel."
api_reference: true
type: inner_api
slug: api_labels_floatinglabel
---

# FloatingLabel
Represents the KendoReact FloatingLabel component.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const App = () => {
    const [ddlState, setDdlState] = React.useState();
    const editorId = 'ddl-sizes';
    return (
        <FloatingLabel label={'Shirt Size:'} editorId={editorId} editorValue={ddlState}>
            <DropDownList
                id={editorId}
                value={ddlState}
                data={sizes}
                onChange={(e) => setDdlState(e.target.value)}
            />
        </FloatingLabel>
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


[FloatingLabelProps]({% slug api_labels_floatinglabelprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the FloatingLabel component.


</td>
</tr>
</tbody>
</table>



