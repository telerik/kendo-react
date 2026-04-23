---
title: Globalization
description: 'Globalize the KendoReact Labels in React projects by adapting to specific cultures, loading translated messages, or enabling RTL support.'
components: ["error", "floatinglabel", "hint", "label"]
slug: globalization_labels
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

{% meta height:360 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/shared-la-es.ts %}
{% endmeta %}

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Labels support the localization of their messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key       | Default Value |
| :---------------- | :------------ |
| `labels.optional` | `(Optional)`  |

## Right-to-Left Support

You can enable RTL support for the FloatingLabel through its [`dir`]({% slug api_labels_floatinglabelprops %}#toc-dir) property. To enable RTL support for the rest of the Labels, provide them a `direction` attribute through their `style` property.

The following example demonstrates how to enable RTL support for the Labels.

{% meta height:460 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
