---
title: CalendarProps
description: "Learn how to build custom functionality when working with the React Date Inputs by Kendo UI with the help of the CalendarProps."
api_reference: true
type: inner_api
slug: api_dateinputs_calendarprops
---

# CalendarProps
Represents the props of the [KendoReact Calendar component](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar). The generic argument is passed to the `onChange` property and is used as a target in the [`CalendarChangeEvent`](https://www.telerik.com/kendo-react-ui/components/dateinputs/api/calendarchangeevent) interface.


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
For example, these elements could contain error or hint messages.

*

```jsx
<Calendar ariaDescribedBy="description-id" />
```






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

*

```jsx
<Calendar ariaLabelledBy="label-id" />
```






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

*

```jsx
<Calendar bottomView="month" />
```



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


Enables the customization or the override of the default Calendar cell.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/custom-rendering#toc-cells-inside-the-view)).

*

```jsx
<Calendar cell={CustomCell} />
```



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


Sets the `className` of the Calendar.

*

```jsx
<Calendar className="custom-class" />
```



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


Sets the default active view of the Calendar.
If not set, the Calendar will display the month view.

*

```jsx
<Calendar defaultActiveView="year" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultValue?


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the default value of the Calendar.


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


Determines whether the Calendar is disabled.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/disabled-state)).

*

```jsx
<Calendar disabled={true} />
```



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


Sets the initial focused date of the Calendar.

*

```jsx
<Calendar focusedDate={new Date()} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### header?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarHeaderProps]({% slug api_dateinputs_calendarheaderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default header in the Calendar.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/custom-rendering#toc-titles-of-current-views)).

*

```jsx
<Calendar header={CustomHeader} />
```



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


Enables the customization or the override of the default header title in the Calendar.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/custom-rendering#toc-titles-of-current-views)).

*

```jsx
<Calendar headerTitle={CustomHeaderTitle} />
```



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


Sets the `id` of the Calendar.

*

```jsx
<Calendar id="calendar-id" />
```



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


Sets the maximum allowed date of the Calendar. Defaults to `2099-12-31`.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/date-ranges#toc-max-date)).

*

```jsx
<Calendar max={new Date(2099, 11, 31)} />
```



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


Sets the minimum allowed date of the Calendar. Defaults to `1900-1-1`.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/date-ranges#toc-min-date)).

*

```jsx
<Calendar min={new Date(1900, 0, 1)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigation?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines if the navigation sidebar will be displayed.

*

```jsx
<Calendar navigation={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigationItem?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[CalendarNavigationItemProps]({% slug api_dateinputs_calendarnavigationitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the customization or the override of the default navigation item in the Calendar.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/custom-rendering#toc-items-in-the-side-navigation)).

*

```jsx
<Calendar navigationItem={CustomNavigationItem} />
```



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


Fires each time the Calendar is blurred.

*

```jsx
<Calendar onBlur={(event) => console.log('Blur event:', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onChange?


</td>
<td type class="table-cell-type">


<code>


(event: [CalendarChangeEvent]({% slug api_dateinputs_calendarchangeevent %})&lt;T&gt;) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


An event that is called after the value of the Calendar has changed.


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


Fires each time the Calendar is focused.

*

```jsx
<Calendar onFocus={(event) => console.log('Focus event:', event)} />
```



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

*

```jsx
<Calendar showOtherMonthDays={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### smoothScroll?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


**Deprecated**

Toggles the smooth scroll animation on navigation item click. By default, the animation is enabled in React 17.

*

```jsx
<Calendar smoothScroll={false} />
```



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


Sets the `tabIndex` property of the Calendar.

*

```jsx
<Calendar tabIndex={0} />
```






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

*

```jsx
<Calendar topView="decade" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | Date


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the value of the Calendar.


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


Enables the customization or the override of the default week-column cell in the Calendar.
([see example](https://www.telerik.com/kendo-react-ui/components/dateinputs/calendar/custom-rendering#toc-cells-inside-the-week-column)).

*

```jsx
<Calendar weekCell={CustomWeekCell} />
```



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
*


</code>


</td>
<td class="table-cell-comment">


Specifies the possible format options for the displayed Calendar week days' names.




```jsx
<Calendar weekDaysFormat="short" />
```



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

*

```jsx
<Calendar weekNumber={true} />
```



</td>
</tr>
</tbody>
</table>



