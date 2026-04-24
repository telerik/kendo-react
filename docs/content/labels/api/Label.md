---
title: Label
description: "Learn how to build custom functionality when working with the React Labels by Kendo UI with the help of the Label."
api_reference: true
type: inner_api
slug: api_labels_label
---

# Label
Represents the KendoReact Label component.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx
const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
const App = () => {
    const ddlRef = React.useRef(null);
    const labelId = 'ddl-sizes-label';
    const editorId = 'ddl-sizes';

    return (
        <div>
            <Label id={labelId} editorId={editorId} editorRef={ddlRef}>
                Shirt Size:
            </Label>
            <DropDownList
                ref={ddlRef}
                id={editorId}
                ariaLabelledBy={labelId}
                data={sizes}
            />
            <br />
        </div>
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


[LabelProps]({% slug api_labels_labelprops %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the Label component.


</td>
</tr>
</tbody>
</table>



