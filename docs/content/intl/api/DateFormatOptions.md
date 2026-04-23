---
title: DateFormatOptions
description: "Learn how to build custom functionality when working with the React Internationalization by Kendo UI with the help of the DateFormatOptions."
api_reference: true
type: inner_api
slug: api_intl_dateformatoptions
---

# DateFormatOptions
Settings for the `formatDate` and `parseDate` functions.
{% platform_content angular %}
For a runnable example, refer to the article on
[date and number formatting and parsing]({% slug parsingandformatting_intl %}#toc-date-formatting).
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


#### date?


</td>
<td type class="table-cell-type">


<code>


"medium" | "full" | "short" | "long"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which of the locale `dateFormats` will be used to format the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### datetime?


</td>
<td type class="table-cell-type">


<code>


"medium" | "full" | "short" | "long"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which of the locale `dateTimeFormats` will be used to format the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### day?


</td>
<td type class="table-cell-type">


<code>


"numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the day of the month will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### era?


</td>
<td type class="table-cell-type">


<code>


"short" | "long" | "narrow"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the date era will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hour?


</td>
<td type class="table-cell-type">


<code>


"numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the hours will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hour12?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether a 12-hour time-set will be used for the formatting.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minute?


</td>
<td type class="table-cell-type">


<code>


"numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the minutes will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### month?


</td>
<td type class="table-cell-type">


<code>


"short" | "long" | "narrow" | "numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the date month will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pattern?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the exact pattern that will be used to format the date.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### second?


</td>
<td type class="table-cell-type">


<code>


"numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the seconds will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### skeleton?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the skeleton format that is used to get the pattern from the
[`availableFormats`](http://www.unicode.org/reports/tr35/tr35-dates.html#availableFormats_appendItems) of the locale calendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### time?


</td>
<td type class="table-cell-type">


<code>


"medium" | "full" | "short" | "long"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which of the locale `timeFormats` will be used to format the value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### timeZoneName?


</td>
<td type class="table-cell-type">


<code>


"short" | "long"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the time-zone will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekday?


</td>
<td type class="table-cell-type">


<code>


"short" | "long" | "narrow"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the day of the week will be formatted.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### year?


</td>
<td type class="table-cell-type">


<code>


"numeric" | "2-digit"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies how the date year will be formatted.


</td>
</tr>
</tbody>
</table>



