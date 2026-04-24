---
title: Placeholders
description: 'Handle the way the format sections of the KendoReact DateInput input field are rendered.'
components: ["dateinput"]
slug: placeholders_dateinput
position: 7
---

# Placeholders

The DateInput enables you to [render a text hint](#toc-text-hints) for its input field and to [provide descriptions for the format sections](#toc-format-sections-description).

## Text Hints

When the value of the DateInput is `null`, or there is no partial selection, you can specify a text hint for the input field by setting the [`placeholder`]({% slug api_dateinputs_dateinputprops %}#toc-placeholder) option of the component.

{% meta height:210 %}
{% embed_file dateinput/placeholder/hint/func/app.tsx preview %}
{% embed_file dateinput/placeholder/hint/func/main.tsx %}
{% endmeta %}

## Floating Labels

You can specify a floating label for the input field by setting the [`label`]({% slug api_dateinputs_dateinputprops %}#toc-label) property of the `DateInput`. Also, to disable the default date mask of the DateInput when no value is present, set its [`placeholder`]({% slug api_dateinputs_dateinput %}#toc-placeholder) value to an empty string.

{% meta height:150 %}
{% embed_file dateinput/placeholder/floating-label/func/app.tsx preview %}
{% embed_file dateinput/placeholder/floating-label/func/main.tsx %}
{% endmeta %}

## Format Sections Description

The [`formatPlaceholder`]({% slug api_dateinputs_dateinputprops %}#toc-formatplaceholder) option enables you to set the way the format sections of the input field are rendered&mdash;for example, whether the month input is prompted as `month` or `MM`.

The `formatPlaceholder` provides the following available options which you can set:

-   `'wide'`&mdash;Displays the full description of the format section. For example, turns `MM` into `month`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'narrow'`&mdash;Displays the narrow description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'short'`&mdash;Displays the short description of the format section. For example, turns `MM` into `mo.`. Retrieved from [CLDR](https://github.com/telerik/kendo-intl/blob/develop/docs/cldr/index.md).
-   `'formatPattern'`&mdash;Directly displays the format section. For example, turns `MM` into `MM`.
-   [`CustomFormatPlaceholder`]({% slug api_dateinputs_dateinputcustomformatplaceholder %})&mdash;An object that defines the description of the format sections. For example, `{ day: 'd.', month: 'M.', year: 'y', hour: 'h.' }`.

{% meta height:500 %}
{% embed_file dateinput/placeholder/format/func/app.tsx preview %}
{% embed_file dateinput/placeholder/format/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)
-   [API Reference of the DateInput]({% slug api_dateinputs_dateinputprops %})
-   [React Date Inputs](slug:overview_dateinputs)
