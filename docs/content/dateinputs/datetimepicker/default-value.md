---
title: Default State
description: 'Set the default state of the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: default_value_datetimepicker
position: 4
---

# Default State

By default, the DateTimePicker value is `null` and the date-time selector popup is hidden.

The DateTimePicker provides options for:

-   [Setting its default value](#toc-setting-the-default-value)
-   [Setting the default state of its popup](#toc-setting-the-default-popup-state)

## Setting the Default Value

To set the initial value that is rendered by the DateTimePicker, set the [`defaultValue`]({% slug api_dateinputs_datetimepickerprops %}#toc-defaultvalue) property. This approach allows the component to display a value upon its initial render while remaining in an uncontrolled state.

{% meta height:600 %}
{% embed_file datetimepicker/default/value/func/app.tsx preview %}
{% embed_file datetimepicker/default/value/func/main.tsx %}
{% endmeta %}

## Setting the Default Popup State

To display a popup for the date-time selector when the DateTimePicker initially renders, set the [`defaultShow`]({% slug api_dateinputs_datetimepickerprops %}#toc-defaultshow) property to `true`. This approach allows the component to show an open popup for the date-time selector while remaining in an uncontrolled state.

{% meta height:600 %}
{% embed_file datetimepicker/default/popup/func/app.tsx preview %}
{% embed_file datetimepicker/default/popup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
