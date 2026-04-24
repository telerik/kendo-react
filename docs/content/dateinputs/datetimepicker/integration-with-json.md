---
title: Integration with JSON
description: 'Bind the KendoReact DateTimePicker to dates which are serialized as strings in React projects.'
components: ["datetimepicker"]
slug: jsonintegration_datetimepicker
position: 19
---

# Integration with JSON

Generally, the data which is received from the server is serialized in a [JSON](http://www.json.org/) format.

The date object in JSON is an [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date string. For more details, refer to the documentation on the [`JSON.stringify`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method. On the other hand, the DateTimePicker works only with JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instances.

To bind the DateTimePicker to dates which are serialized as strings, handle the parsing process:

1. Convert the JSON date strings into valid JavaScript `Date` objects by using the `IntlService` or any other suitable `Date` parser.
2. Define the [`value`]({% slug api_dateinputs_datetimepickerprops %}#toc-value) property of the component.
3. Provide an [`onChange`]({% slug api_dateinputs_datetimepickerprops %}#toc-onchange) event handler to the DateTimePicker to get the selected `Date` value.

The following example demonstrates how to set the value of the DateTimePicker.

{% meta height:750 %}
{% embed_file datetimepicker/json/func/app.tsx preview %}
{% embed_file datetimepicker/json/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Supported Date and Number Formats](https://github.com/telerik/kendo-intl/tree/master/docs)
-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [Keyboard Navigation]({% slug keyboard_navigation_datetimepicker %})
-   [Accessibility]({% slug accessibility_datetimepicker %})
-   [Globalization]({% slug globalization_dateinputs %})
-   [React Date Inputs](slug:overview_dateinputs)
