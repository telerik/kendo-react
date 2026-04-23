---
title: Integration with JSON
description: 'Bind the KendoReact Calendar to dates which are serialized as strings.'
components: ["calendar"]
slug: jsonintegration_calendar
position: 12
---

# Integration with JSON

Generally, the data which is received from the server is serialized in a [JSON](http://www.json.org/) format.

The date object in JSON is an [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)-formatted date string. On the other hand, the Calendar works only with JavaScript [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instances.

To bind the Calendar to dates which are serialized as strings, handle the parsing process:

1. Convert the JSON date strings into valid JavaScript `Date` objects by using the `IntlService` or any other suitable `Date` parser.
2. Define the [`value`]({% slug api_dateinputs_calendarprops %}#toc-value) property of the component.
3. Wire the [`onChange`]({% slug api_dateinputs_calendarprops %}#toc-onchange) event of the Calendar to get the selected `Date` value.

The following example demonstrates how to set the value of the Calendar.

{% meta height:580 %}
{% embed_file calendar/json/func/app.tsx preview %}
{% embed_file calendar/json/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Calendar]({% slug api_dateinputs_calendarprops %})
-   [React Date Inputs](slug:overview_dateinputs)
