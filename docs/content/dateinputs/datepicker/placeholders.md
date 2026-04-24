---
title: Placeholders
description: 'Render a text hint or provide descriptions for the format sections of the KendoReact DatePicker in React projects.'
components: ["datepicker"]
slug: placeholders_datepicker
position: 6
---

# Placeholders

The DatePicker enables you to [render a text hint](#toc-text-hints) for its input field and to [provide descriptions for the format sections](#toc-format-sections-description).

## Text Hints

When the value of the DatePicker is `null`, or there is no partial selection, you can specify a text hint for the input field by setting the [`placeholder`]({% slug api_dateinputs_datepickerprops %}#toc-placeholder) option of the component.

{% meta height:500 %}
{% embed_file datepicker/placeholder/hint/func/app.tsx preview %}
{% embed_file datepicker/placeholder/hint/func/main.tsx %}
{% endmeta %}

## Format Sections Description

For its input field, the DatePicker enables you to [provide descriptions for the format sections](#toc-setting-the-description-of-the-format-sections).

The [`formatPlaceholder`]({% slug api_dateinputs_datepickerprops %}#toc-formatplaceholder) option enables you to set the way the format sections of the input field are rendered. For example, whether the month input is prompted as `month` or `MM`.

The `formatPlaceholder` provides the following available options which you can set:

-   `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.
-   [`CustomFormatPlaceholder`]({% slug api_dateinputs_dateinputcustomformatplaceholder %})&mdash;An object that defines the description of the format sections. For example, `{ day: 'd.', month: 'M.', year: 'y', hour: 'h.' }`.

{% meta height:550 %}
{% embed_file datepicker/placeholder/format/func/app.tsx preview %}
{% embed_file datepicker/placeholder/format/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the DatePicker]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
