---
title: Globalization
description: 'Globalize the KendoReact Layout components in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["actionsheet", "appbar", "general", "avatar", "bottomnavigation", "breadcrumb", "card", "contextmenu", "drawer", "expansionpanel", "gridlayout", "menu", "panelbar", "splitter", "stacklayout", "stepper", "tabstrip", "tilelayout", "timeline"]
slug: rtl_layout
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

The Layout components support the localization of their messages by utilizing the [KendoReact Internationalization]({% slug overview_intl %}) package.

The following table lists the built-in message keys and their default values.

| Message Key            | Default Value |
| :--------------------- | :------------ |
| `stepper.optionalText` | `(Optional)`  |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Layout components.

{% meta height:550 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/DrawerRouterContainer.tsx %}
{% embed_file globalization/func/styles.css %}
{% embed_file globalization/func/AvatarComponent.tsx %}
{% embed_file globalization/func/BreadcrumbComponent.tsx %}
{% embed_file globalization/func/BottomNavigationComponent.tsx %}
{% embed_file globalization/func/CardComponent.tsx %}
{% embed_file globalization/func/MenuComponent.tsx %}
{% embed_file globalization/func/PanelBarComponent.tsx %}
{% embed_file globalization/func/SplitterComponent.tsx %}
{% embed_file globalization/func/StepperComponent.tsx %}
{% embed_file globalization/func/TabStripComponent.tsx %}
{% embed_file globalization/func/TileLayoutComponent.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
