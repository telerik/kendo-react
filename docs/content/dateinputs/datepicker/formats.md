---
title: Formats
description: 'Control the format of the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: formats_datepicker
position: 5
---

# Formats

You can control the format of the DatePicker by using the [`format`]({% slug api_dateinputs_datepickerprops %}#toc-format) property.

The `format` property accepts string parameters and, by default, is set to `'d'`. When `format` is set and the `input` element is not focused, the value is formatted accordingly. For more information on the date and number formats KendoReact supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl#date-formatting) GitHub repository.

{% meta height:600 %}
{% embed_file datepicker/formats/func/app.tsx preview %}
{% embed_file datepicker/formats/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_datepickerprops %})
-   [Supported Date and Number Formats](https://github.com/telerik/kendo-intl/tree/master/docs)
-   [React Date Inputs](slug:overview_dateinputs)
