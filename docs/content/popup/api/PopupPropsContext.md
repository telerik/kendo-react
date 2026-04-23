---
title: PopupPropsContext
description: "Learn how to build custom functionality when working with the React Popup by Kendo UI with the help of the PopupPropsContext."
api_reference: true
type: inner_api
slug: api_popup_popuppropscontext
---

# PopupPropsContext
The PopupPropsContext. It allows to configure the Popup props from a wrapper component.

A [Functional Component](https://react.dev/reference/react/Component).

```jsx-no-run
 <PopupPropsContext.Provider value={props => ({ ...props, appendTo: document.querySelector('myPopupsContainer') })}>
     <DropDownList />
     <Editor />
 </PopupPropsContext.Provider>
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


ProviderProps&lt;(props: [PopupProps]({% slug api_popup_popupprops %})) => [PopupProps]({% slug api_popup_popupprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the PopupPropsContext component.


</td>
</tr>
</tbody>
</table>



