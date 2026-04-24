---
title: Placeholders
description: 'Render a text hint or provide descriptions for the format sections of the KendoReact DateTimePicker in React projects.'
components: ["datetimepicker"]
slug: placeholders_datetimepicker
position: 7
---

# Placeholders

The DateTimePicker enables you to [render a text hint](#toc-text-hints) for its input field and to [provide descriptions for the format sections](#toc-format-sections-description).

## Text Hints

When the value of the DateTimePicker is `null`, or there is no partial selection, you can specify a text hint for the input field by setting the [`placeholder`]({% slug api_dateinputs_datetimepickerprops %}#toc-placeholder) option of the component.

{% meta height:580 %}
{% embed_file datetimepicker/placeholder/hint/func/app.tsx preview %}
{% embed_file datetimepicker/placeholder/hint/func/main.tsx %}
{% endmeta %}

## Format Sections Description

The [`formatPlaceholder`]({% slug api_dateinputs_datetimepickerprops %}#toc-formatplaceholder) option enables you to set the way the format sections of the input field are rendered. For example, whether the month input is prompted as `month` or `MM`.

The `formatPlaceholder` provides the following available options which you can set:

-   `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.
-   [`CustomFormatPlaceholder`]({% slug api_dateinputs_dateinputcustomformatplaceholder %})&mdash;An object that defines the description of the format sections. For example, `{ day: 'd.', month: 'M.', year: 'y', hour: 'h.' }`.

{% meta height:750 %}
{% embed_file datetimepicker/placeholder/format/func/app.tsx preview %}
{% embed_file datetimepicker/placeholder/format/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DateTimePicker]({% slug api_dateinputs_datetimepicker %})
-   [React Date Inputs](slug:overview_dateinputs)
