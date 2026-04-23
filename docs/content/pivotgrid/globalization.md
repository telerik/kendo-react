---
title: Globalization
description: 'Globalize the KendoReact PivotGrid in React projects by adapting it to specific cultures, loading translated messages, or using the RTL support.'
components: ["pivotgrid"]
slug: globalization_pivotgrid
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization options that each component supports, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The PivotGrid supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                                     | Default Value                       |
| :---------------------------------------------- | :---------------------------------- |
| `pivotgrid.fieldMenuReset`                      | `Reset`                             |
| `pivotgrid.fieldMenuApply`                      | `Apply`                             |
| `pivotgrid.configuratorTitle`                   | `Settings`                          |
| `pivotgrid.configuratorCancel`                  | `Cancel`                            |
| `pivotgrid.configuratorCancel`                  | `Cancel`                            |
| `pivotgrid.configuratorApply`                   | `Apply`                             |
| `pivotgrid.configuratorColumnsTitle`            | `Columns`                           |
| `pivotgrid.configuratorRowsTitle`               | `Rows`                              |
| `pivotgrid.configuratorMeasuresTitle`           | `Values`                            |
| `pivotgrid.configuratorEditorSearchTitle`       | `Fields`                            |
| `pivotgrid.configuratorEditorSearchPlaceholder` | `Search...`                         |
| `pivotgrid.configuratorCancel`                  | `Select some fields to begin setup` |
| `pivotgrid.configuratorButtonLabel`             | `Change settings`                   |

The following example demonstrates how to load and apply the messages.

{% meta height:770 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/es.json %}
{% endmeta %}

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the PivotGrid.

{% meta height:770 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% embed_file rtl/func/es.json %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug globalization_pivotgrid %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
