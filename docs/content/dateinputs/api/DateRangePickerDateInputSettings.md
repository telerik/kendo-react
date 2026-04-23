---
title: DateRangePickerDateInputSettings
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the DateRangePickerDateInputSettings."
api_reference: true
type: inner_api
slug: api_dateinputs_daterangepickerdateinputsettings
---

# DateRangePickerDateInputSettings
Represents the settings that can be passed to the DateInput inside the DateRangePicker.


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


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will describe the component, similar to [HTML aria-describedby attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute).
For example these elements could contain error or hint message.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The accessible label of the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies the element(s) which will label the component.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents the `dir` HTML attribute.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the DateInput is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/disabled-state)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### format?


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


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` of the `input` DOM element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### label?


</td>
<td type class="table-cell-type">


<code>


ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Renders a floating label for the DateInput.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest date that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxTime?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the greatest time that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges#toc-limiting-the-time-range)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the smallest date that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### minTime?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the smallest time that is valid ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/date-ranges#toc-limiting-the-time-range)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### name?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name property of the input DOM element.


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


#### spinners?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies whether the **Up** and **Down** spin buttons will be rendered ([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/dateinput/spin-buttons)).


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


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` property of the DateInput.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title of the `input` element of the DateInput.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the width of the DateInput.


</td>
</tr>
</tbody>
</table>



