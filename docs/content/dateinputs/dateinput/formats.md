---
title: Formats
description: 'Control the date format of the KendoReact DateInput.'
components: ["dateinput"]
slug: formats_dateinput
position: 4
---

# Formats

You can control the format of the DateInput by using the [`format`]({% slug api_dateinputs_dateinputprops %}#toc-format) property, which accepts string parameters.

By default, the `format` property is set to `'d'`. For more information on the date and number formats KendoReact supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl#date-formatting) GitHub repository.

{% meta height:260 %}
{% embed_file dateinput/formats/func/app.tsx preview %}
{% embed_file dateinput/formats/func/main.tsx %}
{% endmeta %}

# Two-Digit Year Format

When the [`format`]({% slug api_dateinputs_dateinputprops %}#toc-format) includes a two-digit year, the value will automatically be normalized to the current or previous century.

Whether the value will be assumed to be from the current or previous century is controlled by the [`twoDigitYearMax`]({% slug api_dateinputs_dateinputprops %}#toc-twoDigitYearMax) property. If the typed value is less than or equal to the [`twoDigitYearMax`]({% slug api_dateinputs_dateinputprops %}#toc-twoDigitYearMax) value, the date will be assumed to be from the current century. If it's more than it, the date will be assumed to be from the previous century.

By default, the [`twoDigitYearMax`]({% slug api_dateinputs_dateinputprops %}#toc-twoDigitYearMax) is set to 68.

{% meta height:180 %}
{% embed_file dateinput/two-digit-year/func/app.tsx preview %}
{% embed_file dateinput/two-digit-year/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
