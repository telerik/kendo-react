---
title: Controlled Mode
description: 'Control the value of the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: controlled_datepicker
position: 3
---

# Controlled Mode

By default, the DatePicker is in an uncontrolled state.

The DatePicker provides options for:

-   [Controlling its date value](#toc-controlling-the-date-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Date Value

To manage the date value of the DatePicker:

1. Use its [`value`]({% slug api_dateinputs_datepickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_datepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to control the DatePicker value and display it an outer field.

{% meta height:600 %}
{% embed_file datepicker/controlled/date/func/app.tsx preview %}
{% embed_file datepicker/controlled/date/func/main.tsx %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state of the DatePicker, use its [`show`]({% slug api_dateinputs_datepickerprops %}#toc-show) property.

The following example demonstrates how to toggle the calendar of the DatePicker by controlling the state of its popup through an external input.

{% meta height:600 %}
{% embed_file datepicker/controlled/popup/func/app.tsx preview %}
{% embed_file datepicker/controlled/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [React Date Inputs](slug:overview_dateinputs)
