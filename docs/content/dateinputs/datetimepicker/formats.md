---
title: Formats
description: 'Control the format of the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: formats_datetimepicker
position: 5
---

# Formats

You can control the format of the DateTimePicker by using the [`format`]({% slug api_dateinputs_datetimepickerprops %}#toc-format) property.

The `format` property accepts string parameters and, by default, is set to `'MM/dd/yyyy HH:mm:ss'`. When `format` is set and the `input` element is not focused, the value is formatted accordingly. For more information on the date and number formats KendoReact supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl#date-formatting) GitHub repository.

{% meta height:700 %}
{% embed_file datetimepicker/formats/func/app.tsx preview %}
{% embed_file datetimepicker/formats/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [Supported Date and Number Formats](https://github.com/telerik/kendo-intl/tree/master/docs)
-   [React Date Inputs](slug:overview_dateinputs)
