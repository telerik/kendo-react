---
title: Globalization
description: 'Globalize the KendoReact Gauges in React projects by adapting to specific cultures, translating messages, or using the RTL support.'
components: ["arcgauge", "circulargauge", "lineargauge", "radialgauge"]
slug: globalization_gauges
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to set the locale and text direction of an Arc, Linear, and Radial Gauge.

{% meta height:400 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/cldr.ts %}
{% endmeta %}

## Internationalization

The internationalization (i18n) process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Gauges do not provide built-in translated messages or the option to implement and localize custom ones.

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Gauges.

{% meta height:180 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
