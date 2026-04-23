---
title: Globalization
description: 'Globalize the KendoReact Sortable in React projects by adapting to specific cultures, translating messages, or using the RTL support.'
components: ["sortable"]
slug: globalization_sortable
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to localize the built-in messages of the KendoReact Sortable.

{% meta height:100 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Sortable supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key       | Default Value |
| :---------------- | :------------ |
| `sortable.noData` | `No Data`     |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Sortable.

{% meta height:340 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
