---
title: IntlProvider
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the IntlProvider."
api_reference: true
type: inner_api
slug: api_intl_intlprovider
---

# IntlProvider
A React component which provides an internationalization service. Expects a locale string as a property of the component.


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


Readonly&lt;[IntlProviderProps]({% slug api_intl_intlproviderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the IntlProvider component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### getIntlService


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns an internationalization service. The method is suitable for overriding when you implement custom internationalization behavior.


</td>
</tr>

<tr class="nested-table">
<td>
<table class="api-table api-table-returns">
<thead class="api-table-returns-head">
<tr>
<th class="th-type">Returns</th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td type>


<code>


[IntlService]({% slug api_intl_intlservice %})


</code>


</td>
<td>





</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



