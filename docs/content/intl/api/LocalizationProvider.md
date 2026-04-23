---
title: LocalizationProvider
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the LocalizationProvider."
api_reference: true
type: inner_api
slug: api_intl_localizationprovider
---

# LocalizationProvider
A React component which provides a localization service. Expects a language string as a property of the component.


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


Readonly&lt;[LocalizationProviderProps]({% slug api_intl_localizationproviderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The props of the LocalizationProvider component.


</td>
</tr>
</tbody>
</table>



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### getLocalizationService


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a localization service. The method is suitable for overriding when you implement custom localization behavior.


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


[LocalizationService]({% slug api_intl_localizationservice %})


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



