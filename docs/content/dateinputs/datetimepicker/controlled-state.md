---
title: Controlled Mode
description: 'Control the value of the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: controlled_datetimepicker
position: 3
---

# Controlled Mode

By default, the DateTimePicker is in an uncontrolled state.

The DateTimePicker provides options for:

-   [Controlling its value](#toc-controlling-the-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Value

To manage the date value of the DateTimePicker:

1. Use its [`value`]({% slug api_dateinputs_datetimepickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_datetimepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to control the DateTimePicker value.

{% meta height:700 %}
{% embed_file datetimepicker/controlled/value/func/app.tsx preview %}
{% embed_file datetimepicker/controlled/value/func/main.tsx %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state of the DateTimePicker, set the displayed state of the component through its [`show`]({% slug api_dateinputs_datetimepickerprops %}#toc-show) property.

The following example demonstrates how to toggle the calendar of the DateTimePicker by controlling the state of its popup through an external input.

{% meta height:600 %}
{% embed_file datetimepicker/controlled/popup/func/app.tsx preview %}
{% embed_file datetimepicker/controlled/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
