---
title: Customization
description: 'Override or modify the default rendering for the child components of the KendoReact DateRangePicker.'
components: ["daterangepicker"]
slug: custom_rendering_daterangepicker
position: 8
---

# Customization

The DateRangePicker enables the user to render custom components instead of the default ones and, in this way, to customize most of the child DateRangePicker components which are otherwise inaccessible.

While you can [control the child components through the props of the DateRangePicker]({% slug child_settings_daterangepicker %}), the suggested approaches allow you to completely replace and have full control over them.

The user can replace the following DateRangePicker components with custom ones:

-   [Start and end Date Inputs](#customizing-the-dateinputs)&mdash;Render the inputs for the `start` and `end` range selection of the DateRangePicker.
-   [`Calendar`](#customizing-the-calendar)&mdash;Renders the MultiViewCalendar inside the popup of the DateRangePicker.
-   [`Popup`](#customizing-the-popup)&mdash;Renders the popup which contains the MultiViewCalendar.

## Customizing the Date Inputs

The DateRangePicker accepts an object of type [`SelectionRange`]({% slug api_dateinputs_selectionrange %}) as a value. Each DateInput expects you to pass `start` and `end` values. To override the components that are responsible for the date input, provide either a [`startDateInput`]({% slug api_dateinputs_daterangepickerprops %}#toc-startdateinput) or an [`endDateInput`]({% slug api_dateinputs_daterangepickerprops %}#toc-enddateinput) property and pass a custom component.

The following example demonstrates how to use different DateInput components for the `start` and `end` values of the DateRangePicker.

{% meta height:450 %}
{% embed_file daterangepicker/custom/dateinput/func/customEndDateInput.tsx %}
{% embed_file daterangepicker/custom/dateinput/func/customStartDateInput.tsx %}
{% embed_file daterangepicker/custom/dateinput/func/app.tsx preview %}
{% embed_file daterangepicker/custom/dateinput/func/main.tsx %}
{% endmeta %}

## Customizing the Calendar

By default, the DateRangePicker renders a [MultiViewCalendar]({% slug overview_multiviewcalendar %}) in a range-selection mode. To override the component that is responsible for the range selection, set the [`calendar`]({% slug api_dateinputs_daterangepickerprops %}#toc-calendar) property to a custom component.

The following example demonstrates how to use two different [Calendars]({% slug overview_calendar %}) instead of a single [MultiViewCalendar]({% slug overview_multiviewcalendar %}) in a range mode.

{% meta height:450 %}
{% embed_file daterangepicker/custom/calendar/func/customCalendar.tsx %}
{% embed_file daterangepicker/custom/calendar/func/app.tsx preview %}
{% embed_file daterangepicker/custom/calendar/func/main.tsx %}
{% endmeta %}

## Customizing the Popup

The [Popup]({% slug overview_popup %}) component inside the DateRangePicker acts as a container element with an absolute position. The Popup is displayed on `focus` and is hidden on `blur`. To override the component that is responsible for containing the Calendar, set the [`popup`]({% slug api_dateinputs_daterangepickerprops %}#toc-popup) property to a custom component.

The following example demonstrates how to override some of the Popup properties.

{% meta height:430 %}
{% embed_file daterangepicker/custom/popup/func/customPopup.tsx %}
{% embed_file daterangepicker/custom/popup/func/app.tsx preview %}
{% embed_file daterangepicker/custom/popup/func/main.tsx %}
{% endmeta %}

## Suggested Link

-   [Customizing the Calendar]({% slug custom_rendering_calendar %})
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinput %})
-   [API Reference of the MultiViewCalendar]({% slug api_dateinputs_multiviewcalendar %})
-   [API Reference of the Popup]({% slug api_popup_popup %})
-   [React Date Inputs](slug:overview_dateinputs)
