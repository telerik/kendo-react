---
title: LocalizationService
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the LocalizationService."
api_reference: true
type: inner_api
slug: api_intl_localizationservice
---

# LocalizationService
A service which provides localization methods.


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


#### language?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The language code used for localization. When no string is available for this language, the default value is returned.


</td>
</tr>
</tbody>
</table>



## Constructors

### LocalizationService
<code>


(language?: string)


</code>
Creates a new LocalizationService instance.

#### Parameters
##### language?
<code>


string


</code>
The language code for localization.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### toLanguageString


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Provides a string based on a key for the current language. When no string for the current language is available under this key, the `defaultValue` is returned.





</td>
</tr>
<tr class="nested-table">
<td>
<table class="api-table api-table-parameters">
<thead class="api-table-parameters-head">
<tr>
<th class="th-name">Parameters</th>
<th class="th-type"></th>
<th class="th-desc"></th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


key


</td>
<td type>


<code>


string


</code>


</td>
<td>


The key which identifies the string for the current language.


</td>
</tr>
<tr>
<td>


defaultValue


</td>
<td type>


<code>


string


</code>


</td>
<td>


The default value which will be returned when no string
for the current language is available under the key.


</td>
</tr>
</tbody>
</table>
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


string


</code>


</td>
<td>


- The string for the current language.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



