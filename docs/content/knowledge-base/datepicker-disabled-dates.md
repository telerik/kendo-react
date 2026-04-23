---
title: Disabling Multiple Dates in DatePicker for React
description: Learn how to disable specific dates in the DatePicker component for React applications.
type: how-to
page_title: How to Disable Multiple Dates in React DatePicker Component
slug: disable-multiple-dates-datepicker-react
tags: datepicker, react, disable dates, kendo for React
res_type: kb
ticketid: 1662598
components: ["datepicker"]
---

## Environment

<table>
    <tbody>
		<tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact DatePicker</td>
	    </tr>
    </tbody>
</table>

## Description

When using the [DatePicker](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/) for React, there might be scenarios where you need to disable a selection of multiple dates. This article demonstrates how to achieve this functionality.

This KB article also answers the following questions:

-   How can I disable specific dates in the DatePicker component for React?
-   What is the approach to make certain dates unselectable in the Kendo UI for React DatePicker?
-   Can I block dates from being picked in the React DatePicker?

## Solution

To disable multiple dates in the DatePicker for React, follow these steps:

1. Add the `DatePicker` component in your React application.
2. [Customize the ToggleButton]({% slug custom_rendering_datepicker %}#toc-customizing-the-toggle-button)
3. [Customize the Calendar]({% slug custom_rendering_datepicker %}#toc-customizing-the-calendar)
4. [Customize the CalendarCell]({% slug custom_rendering_calendar %}##toc-cells-inside-the-view)
5. Provide logic to determine which dates should be disabled. This can involve specifying an array of dates or writing a function that dynamically calculates dates based on certain criteria.

Here is an example of how to disable a range of dates, such as from the 10th to the 15th:

{% meta height:450 %}
{% embed_file dateinputs/datepicker-disabled-dates/app.tsx preview %}
{% embed_file dateinputs/datepicker-disabled-dates/main.tsx %}
{% embed_file dateinputs/datepicker-disabled-dates/customCalendar.tsx %}
{% embed_file dateinputs/datepicker-disabled-dates/customToolbarButton.tsx %}
{% endmeta %}

In this example, the `disableDates` method is used to disable dates from the 10th to the 15th of the current month. You can adjust the `start` and `end` dates or the logic inside `disableDates` method to suit your specific requirements.

## Notes

-   The `disableDates` method can be customized to disable any range or specific dates according to your application's needs.
-   Remember to import the `DatePicker` component and register it if you have not already done so in your React application.

## See Also

-   [Official React DatePicker Documentation](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/)
-   [Customizing the DatePicker Component](https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/custom-rendering/)
