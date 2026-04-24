---
title: Globalization
description: 'Globalize the KendoReact Dropdowns in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["autocomplete", "combobox", "dropdownlist", "dropdowntree", "multicolumncombobox", "multiselect", "multiselecttree"]
slug: globalization_dropdowns
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to localize the built-in messages of the Dropdowns.

{% meta height:360 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Dropdowns support the localization of their messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                                | Default Value       |
| :----------------------------------------- | :------------------ |
| `dropdowns.nodata`                         | `NO DATA FOUND.`    |
| `dropdowns.clear`                          | `Clear`             |
| `dropdowns.comboArrowBtnAriaLabelExpand`   | `expand combobox`   |
| `dropdowns.comboArrowBtnAriaLabelCollapse` | `collapse combobox` |
| `dropdowns.dropDownListArrowBtnAriaLabel`  | `select`            |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Dropdowns.

{% meta height:460 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
