---
title: Default Value
description: 'Set the default value of the KendoReact TimePicker in React projects.'
components: ["timepicker"]
slug: default_value_timepicker
position: 4
---

# Default Value

By default, the TimePicker value is `null` and the TimeSelector popup is hidden.

The TimePicker provides options for:

-   [Setting its default value](#toc-setting-the-default-value)
-   [Setting the default state of its popup](#toc-setting-the-default-popup-state)

## Setting the Default Value

To set the initial value that is rendered by the TimePicker, set the [`defaultValue`]({% slug api_dateinputs_timepickerprops %}#toc-defaultvalue) property. This approach allows the component to display a value upon its initial render while remaining in an uncontrolled state.

{% meta height:500 %}
{% embed_file timepicker/default-value/func/app.tsx preview %}
{% embed_file timepicker/default-value/func/main.tsx %}
{% endmeta %}

## Setting the Default Popup State

To display a popup for the time selector when the TimePicker initially renders, set the [`defaultShow`]({% slug api_dateinputs_timepickerprops %}#toc-defaultshow) property to `true`. This approach allows the component to show an open popup for the time selector while remaining in an uncontrolled state.

{% meta height:500 %}
{% embed_file timepicker/default-popup-value/func/app.tsx preview %}
{% embed_file timepicker/default-popup-value/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Time Picker](slug://overview_timepicker)
-   [API Reference of the TimePicker]({% slug api_dateinputs_timepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
