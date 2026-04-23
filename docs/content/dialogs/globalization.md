---
title: Globalization
description: 'Globalize the KendoReact Dialogs in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["dialog", "window"]
slug: globalization_dialog
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Dialogs do not provide built-in translated messages.

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Dialog and the Window.

{% meta height:450 %}
{% embed_file dialog/rtl/func/app.tsx preview %}
{% embed_file dialog/rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
