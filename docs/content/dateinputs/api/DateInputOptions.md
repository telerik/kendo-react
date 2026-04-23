---
title: DateInputOptions
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateInputOptions."
api_reference: true
type: inner_api
slug: api_dateinputs_dateinputoptions
---

# DateInputOptions
Represents the options type of the DateInput.


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


#### allowCaretMode


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`false`


</code>


</td>
<td class="table-cell-comment">


Determines if the users should see a blinking caret inside the Date Input when possible.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoCorrectParts


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Indicates whether the mouse scroll can be used to increase/decrease the date segments values.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFill


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`false`


</code>


</td>
<td class="table-cell-comment">


When enabled, the DateInput will autofill the rest of the date to the current date when the component loses focus.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoSwitchKeys


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">


<code>


`[]`


</code>


</td>
<td class="table-cell-comment">


A string array representing custom keys, which will move the focus to the next date format segment.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoSwitchParts


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Determines whether to automatically move to the next segment after the user completes the current one.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### enableMouseWheel


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Enables mouse wheel scrolling to increase or decrease date segment values.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### format


</td>
<td type class="table-cell-type">


<code>


string | DateFormatOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the `date` format which is used for formatting the value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats)). If not set, the default format will be used.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### formatPlaceholder?


</td>
<td type class="table-cell-type">


<code>


[DateInputFormatPlaceholder]({% slug api_dateinputs_dateinputformatplaceholder %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the descriptions of the format sections in the input field ([more information and example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/placeholders)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### intlService


</td>
<td type class="table-cell-type">


<code>


DateInputIntl


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The Intl object that provides internationalization support.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### placeholder?


</td>
<td type class="table-cell-type">


<code>


"null" | string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the hint the DateInput displays when its value is `null` or there is no partial selection.
For more information, refer to the article on
[placeholders](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/placeholders).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectPreviousSegmentOnBackspace


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Determines wether should select the previous segment on backspace.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### steps?


</td>
<td type class="table-cell-type">


<code>


[DateInputIncrementalSteps]({% slug api_dateinputs_dateinputincrementalsteps %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the incremental steps of the DateInput ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/incremental-steps)).

The available options are:
- `year: Number`&mdash;Controls the incremental step of the year value.
- `month: Number`&mdash;Controls the incremental step of the month value.
- `day: Number`&mdash;Controls the incremental step of the day value.
- `hour: Number`&mdash;Controls the incremental step of the hour value.
- `minute: Number`&mdash;Controls the incremental step of the minute value.
- `second: Number`&mdash;Controls the incremental step of the second value.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### twoDigitYearMax


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


`68`


</code>


</td>
<td class="table-cell-comment">


The maximum year to assume to be from the current century when typing two-digit year value ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/formats#toc-two---digit-year-max)).
The default value of 68, indicating that typing any value less than 69 will be assumed to be 20xx, while 69 and larger will be assumed to be 19xx.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### value


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the value of the DateInput.


</td>
</tr>
</tbody>
</table>



