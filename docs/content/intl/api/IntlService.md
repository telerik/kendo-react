---
title: IntlService
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the IntlService."
api_reference: true
type: inner_api
slug: api_intl_intlservice
---

# IntlService
A service which provides internationalization methods and is bound to a specific locale.


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


#### locale


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The locale that will be used by the internationalization methods.


</td>
</tr>
</tbody>
</table>



## Constructors

### IntlService
<code>


(locale: string)


</code>
Creates a new instance of the internationalization service.

#### Parameters
##### locale
<code>


string


</code>
The locale that will be used by the internationalization methods.



## Methods

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### dateFieldName


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns a localized date field name based on specific `dateFieldName` options.





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


options


</td>
<td type>


<code>


[DateFieldNameOptions]({% slug api_intl_datefieldnameoptions %})


</code>


</td>
<td>


The detailed configuration for the desired date field name.


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


- The localized date field name from the current locale based on the option.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### dateFormatNames


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the day names from the current locale based on the option.





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


options


</td>
<td type>


<code>


[DateFormatNameOptions]({% slug api_intl_dateformatnameoptions %})


</code>


</td>
<td>


The detailed configuration for the desired date format.


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


any


</code>


</td>
<td>


- The day names from the current locale based on the option.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### firstDay


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the first day index, starting from Sunday.





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


number


</code>


</td>
<td>


- The index of the first day of the week (0 == Sunday).


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### format


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Formats a string with placeholders such as `Total amount {0:c}`.





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


format


</td>
<td type>


<code>


string


</code>


</td>
<td>


The format string.


</td>
</tr>
<tr>
<td>


values


</td>
<td type>


<code>


any[]


</code>


</td>
<td>


One or more values to output in the format string placeholders.


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


- The formatted string.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### formatDate


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts a `Date` object to a string based on the specified format. If no format is provided, the default short date format is used.





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


value


</td>
<td type>


<code>


Date


</code>


</td>
<td>


The date which will be formatted.


</td>
</tr>
<tr>
<td>


format?


</td>
<td type>


<code>


string | [DateFormatOptions]({% slug api_intl_dateformatoptions %})


</code>


</td>
<td>


The format string or options.


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


- The formatted date.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### formatNumber


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts a `Number` to a string based on the specified format.





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


value


</td>
<td type>


<code>


number


</code>


</td>
<td>


The number which will be formatted.


</td>
</tr>
<tr>
<td>


format


</td>
<td type>


<code>


string | [NumberFormatOptions]({% slug api_intl_numberformatoptions %})


</code>


</td>
<td>


The format string or options.


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


- The formatted number.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### numberSymbols


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Returns the number symbols from the current locale.





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


any


</code>


</td>
<td>


- The number symbols from the current locale.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### parseDate


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts a string to a `Date` object based on the specified format.





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


value


</td>
<td type>


<code>


string


</code>


</td>
<td>


The string which will be converted.


</td>
</tr>
<tr>
<td>


format?


</td>
<td type>


<code>


string | [DateFormatOptions]({% slug api_intl_dateformatoptions %}) | string[] | [DateFormatOptions]({% slug api_intl_dateformatoptions %})[]


</code>


</td>
<td>


The format strings or options.


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


Date


</code>


</td>
<td>


- The parsed date.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### parseNumber


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts a string to a `Number`.





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


value


</td>
<td type>


<code>


string


</code>


</td>
<td>


The string which will be parsed.


</td>
</tr>
<tr>
<td>


format?


</td>
<td type>


<code>


string | [NumberFormatOptions]({% slug api_intl_numberformatoptions %})


</code>


</td>
<td>


The format string or options.


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


number


</code>


</td>
<td>


- The parsed number.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### splitDateFormat


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Splits the date format into objects which contain information about each part of the pattern.





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


format


</td>
<td type>


<code>


string | [DateFormatOptions]({% slug api_intl_dateformatoptions %})


</code>


</td>
<td>


The format string or options.


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


[DateFormatPart]({% slug api_intl_dateformatpart %})[]


</code>


</td>
<td>


- The date format parts.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>

<table class="api-table api-table-methods">
<thead class="api-table-methods-head">
<tr>
<th>


#### toString


</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td>


Converts an object to a string based on the specified format.





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


value


</td>
<td type>


<code>


any


</code>


</td>
<td>


The value which will be formatted.


</td>
</tr>
<tr>
<td>


format


</td>
<td type>


<code>


any


</code>


</td>
<td>


The format to use.


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


- The formatted object.


</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>



