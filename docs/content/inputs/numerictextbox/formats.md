---
title: Formats
description: 'Control the format of the KendoReact NumericTextBox in React projects.'
components: ["numerictextbox"]
slug: formats_numerictextbox
position: 4
---

# Formats

You can control the format of the NumericTextBox by using the [`format`]({% slug api_inputs_numerictextbox %}#toc-format) property.

<!-- TODO: Add NumberFormatOption API slug -->

It accepts string or [`NumberFormatOptions`] parameters. When `format` is set and the input element is not focused, the value is formatted accordingly. By default, the format is set to `'n2'`.

> Format cannot contain decimal separators or numbers. Power signs are supported.

For more information on the date and number formats KendoReact supports, refer to the [kendo-intl](https://github.com/telerik/kendo-intl/blob/master/docs/num-formatting/index.md) GitHub repository.

{% meta height:400 %}
{% embed_file numerictextbox/formats/func/app.tsx preview %}
{% embed_file numerictextbox/formats/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the NumericTextBox Props]({% slug api_inputs_numerictextboxprops %})
