---
title: MultiViewCalendarProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the MultiViewCalendarProps."
api_reference: true
type: inner_api
slug: api_dateinputs_multiviewcalendarprops
---

# MultiViewCalendarProps
Represents the props of the [KendoReact MultiViewCalendar component](https://www.telerik.com/kendo-react-ui/components/dateinputs/multiviewcalendar). The generic argument is passed to the `onChange` property and is used as a target in the [`MultiViewCalendarChangeEvent`](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/multiviewcalendarchangeevent) interface.


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


#### activeRangeEnd?


</td>
<td type class="table-cell-type">


<code>


[SelectionRangeEnd]({% slug api_dateinputs_selectionrangeend %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies which end of the defined selection range will be marked as active.

> If the selection range is undefined, the value is ignored.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### allowReverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


If set to `true`, the component skips the validation of whether the `from` value is after the `to` value.


</td>
</tr>
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


#### bottomView?


</td>
<td type class="table-cell-type">


<code>


[ActiveView]({% slug api_dateinputs_activeview %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the bottommost view to which the user can navigate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarCellProps]({% slug api_dateinputs_calendarcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default MultiViewCalendar cell
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/multiviewcalendar/custom-rendering#toc-cells-inside-the-view)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `className` of the MultiViewCalendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultActiveView?


</td>
<td type class="table-cell-type">


<code>


[ActiveView]({% slug api_dateinputs_activeview %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default active view of the MultiViewCalendar.
If not set, the MultiViewCalendar displays the month view.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


"null" | Date | Date[] | [SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the MultiViewCalendar.


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


Determines whether the MultiViewCalendar is disabled.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### focusedDate?


</td>
<td type class="table-cell-type">


<code>


Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the initial focused date of the MultiViewCalendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### headerTitle?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarHeaderTitleProps]({% slug api_dateinputs_calendarheadertitleprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default header title in the MultiViewCalendar
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/multiviewcalendar/custom-rendering#toc-titles-of-current-views)).


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


Sets the `id` of the MultiViewCalendar.


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


Sets the maximum allowed date of the MultiViewCalendar. Defaults to `2099-12-31`.


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


Sets the minimum allowed date of the MultiViewCalendar. Defaults to `1900-1-1`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### mode?


</td>
<td type class="table-cell-type">


<code>


[MultiViewCalendarMode]({% slug api_dateinputs_multiviewcalendarmode %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selection mode of the MultiViewCalendar.

The available modes are:
* (Default) `single`&mdash;Renders a single-date selection.
* `multiple`&mdash;Renders a multiple-date selection.
* `range`&mdash;Renders a date-range selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBlur?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiViewCalendar is blurred.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [MultiViewCalendarChangeEvent]({% slug api_dateinputs_multiviewcalendarchangeevent %})&lt;T&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the value of the MultiViewCalendar has changed. The new value is generated based on the current `mode` of the MultiViewCalendar.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onFocus?


</td>
<td type class="table-cell-type">


<code>


(event: FocusEvent&lt;any&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires each time the MultiViewCalendar is focused.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showOtherMonthDays?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Displays the days that fall out of the current month.


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


Sets the `tabIndex` property of the MultiViewCalendar.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### topView?


</td>
<td type class="table-cell-type">


<code>


[ActiveView]({% slug api_dateinputs_activeview %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the topmost view to which the user can navigate.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | Date | Date[] | [SelectionRange]({% slug api_dateinputs_selectionrange %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the MultiViewCalendar. Based on the value type, the MultiViewcalendar renders a single, multiple, or range selection.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### views?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `views` property of the MultiViewCalendar and defines the number of rendered views.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekCell?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarWeekCellProps]({% slug api_dateinputs_calendarweekcellprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default week cell in the MultiViewCalendar
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/multiviewcalendar/custom-rendering#toc-cells-inside-the-week-column)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekDaysFormat?


</td>
<td type class="table-cell-type">


<code>


[WeekDaysFormat]({% slug api_dateinputs_weekdaysformat %})


</code>


</td>
<td class="table-cell-default">


<code>


short


</code>


</td>
<td class="table-cell-comment">


Specifies the possible format options for the displayed Calendar week days' names.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### weekNumber?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the week number column will be displayed.


</td>
</tr>
</tbody>
</table>



