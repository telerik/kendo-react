---
title: Globalization
description: 'Get started with the globalization functionality of the KendoReact TreeList and learn how to localize built-in messages.'
components: ["treelist"]
slug: globalization_treelist
position: 170
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to use the Spanish date format and month names and how to localize the built-in messages of the KendoReact TreeList component.

{% meta height:580 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/es.json %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The TreeList supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                            | Default Value                 |
| :------------------------------------- | :---------------------------- |
| `treelist.filterClearButton`           | `Clear`                       |
| `treelist.filterEqOperator`            | `Is equal to`                 |
| `treelist.filterNotEqOperator`         | `Is not equal to`             |
| `treelist.filterIsNullOperator`        | `Is null`                     |
| `treelist.filterIsNotNullOperator`     | `Is not null`                 |
| `treelist.filterIsEmptyOperator`       | `Is empty`                    |
| `treelist.filterIsNotEmptyOperator`    | `Is not empty`                |
| `treelist.filterStartsWithOperator`    | `Starts with`                 |
| `treelist.filterContainsOperator`      | `Contains`                    |
| `treelist.filterNotContainsOperator`   | `Does not contain`            |
| `treelist.filterEndsWithOperator`      | `Ends with`                   |
| `treelist.filterGteOperator`           | `Is greater than or equal to` |
| `treelist.filterGtOperator`            | `Is greater than`             |
| `treelist.filterLteOperator`           | `Is less than or equal to`    |
| `treelist.filterLtOperator`            | `Is less than`                |
| `treelist.filterIsTrue`                | `Is true`                     |
| `treelist.filterIsFalse`               | `Is false`                    |
| `treelist.filterBooleanAll`            | `(All)`                       |
| `treelist.filterAfterOrEqualOperator`  | `Is after or equal to`        |
| `treelist.filterAfterOperator`         | `Is after`                    |
| `treelist.filterBeforeOperator`        | `Is before`                   |
| `treelist.filterBeforeOrEqualOperator` | `Is before or equal to`       |
| `treelist.noRecords`                   | `No records available.`       |

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
