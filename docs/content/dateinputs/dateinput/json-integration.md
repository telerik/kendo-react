---
title: Integration with JSON
description: 'Bind the KendoReact DateInput to dates which are serialized as strings.'
components: ["dateinput"]
slug: jsonintegration_dateinput
position: 13
---

# Integration with JSON

Generally, the data which is received from the server is serialized in a [JSON](http://www.json.org/) format.

The date object in JSON is an [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date string. On the other hand, the DateInput works only with JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instances.

To bind the DateInput to dates which are serialized as strings, handle the parsing process:

1. Convert the JSON date strings into valid JavaScript `Date` objects by using the `IntlService` or any other suitable `Date` parser.
2. Define the [`value`]({% slug api_dateinputs_dateinputprops %}#toc-value) property of the component.
3. Wire the [`onChange`]({% slug api_dateinputs_dateinputprops %}#toc-onchange) event of the DateInput to get the selected `Date` value.

The following example demonstrates how to set the value of the DateInput.

{% meta height:420 %}
{% embed_file dateinput/json/func/app.tsx preview %}
{% embed_file dateinput/json/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
