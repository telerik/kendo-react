---
title: Customization
page_title: Customization - DatePicker - KendoReact
description: The React DatePicker Custom Rendering enables the user to render custom components instead of the default ones.
components: ["datepicker"]
slug: custom_rendering_datepicker
position: 18
---

# Customization

The DatePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child DatePicker components which are otherwise inaccessible.

The user can replace the following DatePicker components with custom ones:

-   [`DateInput`](#toc-customizing-the-dateinput)&mdash;Renders the input field in the DatePicker.
-   [`Calendar`](#toc-customizing-the-calendar)&mdash;Renders the Calendar inside the popup week column of the DatePicker.
-   [`Popup`](#toc-customizing-the-popup)&mdash;Renders the popup which contains the Calendar.
-   [`ToggleButton`](#toc-customizing-the-toggle-button)&mdash;Render the button which toggles the `show` state of the DatePicker.

## Customizing the DateInput

The DatePicker and the [DateInput]({% slug api_dateinputs_dateinput %}) components communicate through the [`DateInputChangeEvent`]({% slug api_dateinputs_dateinputchangeevent %}). In order for the DatePicker to work correctly with any form of date selection, provide a fully working `input` which calls the `onChange` property.

> To enable the user only to change a property and not have full control over the rendered content, pass a modified DateInput.

The following example demonstrates how to add a clear button by modifying the properties of the DateInput.

{% meta height:470 %}
{% embed_file datepicker/custom/dateinput/func/customDateInput.tsx %}
{% embed_file datepicker/custom/dateinput/func/app.tsx preview %}
{% embed_file datepicker/custom/dateinput/func/main.tsx %}
{% endmeta %}

## Customizing the Calendar

The DatePicker and the [Calendar]({% slug overview_calendar %}) communicate through the [`CalendarChangeEvent`]({% slug api_dateinputs_calendarchangeevent %}). You can replace the Calendar with any custom component that provides a date selection and calls [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) with a `Date` value, a React `syntheticEvent` and an event target.

> For more information about the different customization options of the [Calendar]({% slug overview_calendar %}) refer to the [Calendar customizations](slug:custom_rendering_calendar) article.

The following example demonstrates how to replace the default Calendar with a [`MultiViewCalendar`]({% slug overview_multiviewcalendar %}) from the `@progress/kendo-react-dateinputs` package. To achieve a clear rendering, set the [`views`]({% slug api_dateinputs_multiviewcalendarprops %}#toc-views) property to `1`.

{% meta height:470 %}
{% embed_file datepicker/custom/calendar/func/customCalendar.tsx %}
{% embed_file datepicker/custom/calendar/func/app.tsx preview %}
{% embed_file datepicker/custom/calendar/func/main.tsx %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the DatePicker acts as a container element with an absolute position. The DatePicker changes the [`show`]({% slug api_popup_popupprops %}#toc-show) property on clicking the **Toggle** button or on `blur`. You can control `show` through the DatePicker.

You can customize the Popup through the [popupSettings](slug:api_dateinputs_datepickerprops#popupsettings) property. You can completely override the Popup by passing a custom popup through the [popup](slug:api_dateinputs_datepickerprops#popup) property.

The following example demonstrates how to disable the animation of the Popup using [popupSettings](slug:api_dateinputs_datepickerprops#popupsettings).

{% meta height:470 %}
{% embed_file datepicker/custom/popup/func/customPopup.tsx %}
{% embed_file datepicker/custom/popup/func/app.tsx preview %}
{% embed_file datepicker/custom/popup/func/main.tsx %}
{% endmeta %}

## Customizing the Toggle Button

The [ToggleButton]({% slug api_dateinputs_togglebutton %}) component inside the DatePicker acts as a initial toggle `button` for opening the calendar, or closing it without `Date` selection.

The following example demonstrates how to customize the ToggleButton by passing another `svgIcon`. You can also completely override the ToggleButton.

{% meta height:470 %}
{% embed_file datepicker/custom/toggle/func/customToggleButton.tsx %}
{% embed_file datepicker/custom/toggle/func/app.tsx preview %}
{% embed_file datepicker/custom/toggle/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Customizing the Calendar]({% slug custom_rendering_calendar %})
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [API Reference of the Popup]({% slug api_popup_popupprops %})
-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
