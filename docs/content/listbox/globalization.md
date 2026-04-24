---
title: Globalization
description: 'Get started with the globalization functionality of the KendoReact ListBox and learn how to localize built-in messages.'
components: ["listbox"]
slug: globalization_listbox
position: 80
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

## Messages

The ListBox supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key               | Default Value       |
| :------------------------ | :------------------ |
| `listbox.moveUp`          | `Move Up`           |
| `listbox.moveDown`        | `Move Down`         |
| `listbox.transferTo`      | `Transfer To`       |
| `listbox.transferFrom`    | `Transfer From`     |
| `listbox.transferAllTo`   | `Transfer All To`   |
| `listbox.transferAllFrom` | `Transfer All From` |
| `listbox.remove`          | `Delete`            |

The following example shows how to customize the built-in messages of the ListBox toolbar.

{% meta height:500 %}
{% embed_file messages/func/app.tsx preview %}
{% embed_file messages/func/main.tsx %}
{% endmeta %}

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the ListBox.

{% meta height:500 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
