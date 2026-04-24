---
title: Customization
page_title: Customization - DateTimePicker - KendoReact
description: The React DateTimePicker Custom Rendering enables users to customize most of the child components which are otherwise inaccessible.
components: ["datetimepicker"]
slug: custom_rendering_datetimepicker
position: 17
---

# Customization

The DateTimePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child DateTimePicker components which are otherwise inaccessible.

The user can replace the following DateTimePicker components with custom ones:

-   [`DateInput`](#toc-customizing-the-dateinput)&mdash;Renders the input field in the DateTimePicker.
-   [`Calendar`](#toc-customizing-the-calendar)&mdash;Renders the Calendar inside the popup week column of the DateTimePicker.
-   [`Popup`](#toc-customizing-the-popup)&mdash;Renders the popup which contains the Calendar.

## Customizing the DateInput

The DateTimePicker and the [DateInput]({% slug api_dateinputs_dateinput %}) components communicate through the [`DateInputChangeEvent`]({% slug api_dateinputs_dateinputchangeevent %}). In order for the DateTimePicker to work correctly with any form of date selection, provide a fully working `input` which calls the `onChange` property coming from the props.

The following example demonstrates how to replace the default DateInput component with three native `<input />` elements.

{% meta height:600 %}
{% embed_file datetimepicker/custom/dateinput/func/customDateInput.tsx %}
{% embed_file datetimepicker/custom/dateinput/func/app.tsx preview %}
{% embed_file datetimepicker/custom/dateinput/func/main.tsx %}
{% endmeta %}

## Customizing the Calendar

Similar to the custom rendering of the DateInput, the DateTimePicker and the [Calendar]({% slug overview_calendar %}) communicate through the [`CalendarChangeEvent`]({% slug api_dateinputs_calendarchangeevent %}). You can replace the Calendar with any custom component that provides a date selection and calls [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) with a `Date` value, a react `syntheticEvent` and an event target.

The following example demonstrates how to replace the default Calendar with a custom Calendar which renders the weekdays with different styles.

{% meta height:600 %}
{% embed_file datetimepicker/custom/calendar/func/customCalendar.tsx %}
{% embed_file datetimepicker/custom/calendar/func/app.tsx preview %}
{% embed_file datetimepicker/custom/calendar/func/main.tsx %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the DateTimePicker acts as a container element with an absolute position. The DateTimePicker changes the [`show`]({% slug api_popup_popupprops %}#toc-show) property on clicking the **Toggle** button or on `blur`. You can control `show` through the DateTimePicker.

The following example demonstrates how to customize the alignment of the Popup.

{% meta height:600 %}
{% embed_file datetimepicker/custom/popup/func/customPopup.tsx %}
{% embed_file datetimepicker/custom/popup/func/app.tsx preview %}
{% embed_file datetimepicker/custom/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Customizing the Calendar]({% slug custom_rendering_calendar %})
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [API Reference of the Popup]({% slug api_popup_popupprops %})
-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
