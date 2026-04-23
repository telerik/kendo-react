---
title: Controlled Mode
description: 'Control the value of the KendoReact TimePicker in React projects.'
components: ["timepicker"]
slug: controlled_timepicker
position: 3
---

# Controlled Mode

By default, the TimePicker is in an uncontrolled state.

The TimePicker provides options for:

-   [Controlling its date value](#toc-controlling-the-date-value)
-   [Controlling its popup state](#toc-controlling-the-popup-state)

## Controlling the Date Value

To manage the date value of the TimePicker:

1. Use its [`value`]({% slug api_dateinputs_timepickerprops %}#toc-value) property.
1. Handle the [`onChange`]({% slug api_dateinputs_timepickerprops %}#toc-onchange) event.
1. Pass the new value through the props.

The following example demonstrates how to control the TimePicker value.

{% meta height:580 %}
{% embed_file timepicker/control-value/func/app.tsx preview %}
{% embed_file timepicker/control-value/func/main.tsx %}
{% endmeta %}

## Controlling the Popup State

To manage the popup state and set the shown state of the TimePicker, use its [`show`]({% slug api_dateinputs_timepickerprops %}#toc-show) property.

The following example demonstrates how to control the state of the TimePicker time-selector upon display.

{% meta height:500 %}
{% embed_file timepicker/control-popup/func/app.tsx preview %}
{% embed_file timepicker/control-popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
