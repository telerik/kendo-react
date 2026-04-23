---
title: Globalization
description: 'Globalize the KendoReact Charts in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["chart"]
slug: globalization_charts
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how the Chart component reacts to `local` changes and visualize the currency data based on the selected locale.

{% meta height:565 %}
{% embed_file chart/globalization/func/app.tsx preview %}
{% embed_file chart/globalization/func/main.tsx %}
{% embed_file chart/globalization/func/cldr.js %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Charts support the localization of their messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key     | Default Value        |
| :-------------- | :------------------- |
| `charts.nodata` | `No data available.` |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Chart.

{% meta height:500 %}
{% embed_file chart/rtl/func/app.tsx preview %}
{% embed_file chart/rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
