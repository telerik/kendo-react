---
title: NumberFormatOptions
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the NumberFormatOptions."
api_reference: true
type: inner_api
slug: api_intl_numberformatoptions
---

# NumberFormatOptions
Settings for the `formatNumber` and `parseNumber` functions.
{% platform_content angular %}
For a runnable example, refer to the article on
[date and number formatting and parsing]({% slug parsingandformatting_intl %}#toc-number-formatting).
{% endplatform_content %}


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


#### currency?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the currency code of the currency that is used in the formatting.
If not specified, the default currency for the locale is used.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### currencyDisplay?


</td>
<td type class="table-cell-type">


<code>


"symbol" | "code" | "name"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how to display the currency.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maximumFractionDigits?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the maximum number of fraction digits that will be used.
The default value of the decimal formatting is the greater one between `minimumFractionDigits` and `3`.
The default value of the currency formatting is the greater one between `minimumFractionDigits` and the number of digits for the currency from the supplemental `currencyData`.
If no information about the currency is provided, the default value of the currency formatting is the greater one between `minimumFractionDigits` and `2`.
The default value of the percent formatting is the greater one between `minimumFractionDigits` and `0` (zero).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minimumFractionDigits?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the minimum number of fraction digits that will be used.
The default value of the decimal and percent formatting is `0` (zero).
The default value of the currency formatting is the number of digits for the currency from the supplemental `currencyData`.
If no information about the currency is provided, the default value of the currency formatting is `2`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minimumIntegerDigits?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the minimum number of integer digits that will be used in the formatting.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


"decimal" | "currency" | "percent" | "scientific" | "accounting"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the format style.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### useGrouping?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether to use grouping separators.


</td>
</tr>
</tbody>
</table>



