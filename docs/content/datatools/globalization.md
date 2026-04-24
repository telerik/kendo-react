---
title: Globalization
description: 'Globalize the KendoReact Data Tools in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["filter", "pager"]
slug: globalization_datatools
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to localize the built-in messages of the KendoReact Pager and Filter components.

{% meta height:610 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Pager and Filter components support the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                                  | Default Value                 |
| :------------------------------------------- | :---------------------------- |
| `pager.itemsPerPage`                         | `items per page`              |
| `pager.info`                                 | `{0} - {1} of {2} items`      |
| `pager.firstPage`                            | `Go to the first page`        |
| `pager.previousPage`                         | `Go to the previous page`     |
| `pager.nextPage`                             | `Go to the next page`         |
| `pager.lastPage`                             | `Go to the last page`         |
| `pager.page`                                 | `Page`                        |
| `pager.of`                                   | `of`                          |
| `pager.totalPages`                           | `{0}`                         |
| `pager.pageSelection`                        | `Select page`                 |
| `pager.pageLabel`                            | `Page`                        |
| `pager.ariaKeyshortcuts`                     | `Enter ArrowRight ArrowLeft`  |
| `pager.ariaLabel`                            | `Pager`                       |
| `pager.mobileSelect`                         | `Select`                      |
| `filter.eqOperator`                          | `Is equal to`                 |
| `filter.notEqOperator`                       | `Is not equal to`             |
| `filter.isNullOperator`                      | `Is null`                     |
| `filter.isNotNullOperator`                   | `Is not null`                 |
| `filter.isEmptyOperator`                     | `Is empty`                    |
| `filter.isNotEmptyOperator`                  | `Is not empty`                |
| `filter.startsWithOperator`                  | `Starts with`                 |
| `filter.containsOperator`                    | `Contains`                    |
| `filter.notContainsOperator`                 | `Does not contain`            |
| `filter.endsWithOperator`                    | `Ends with`                   |
| `filter.gteOperator`                         | `Is greater than or equal to` |
| `filter.gtOperator`                          | `Is greater than`             |
| `filter.lteOperator`                         | `Is less than or equal to`    |
| `filter.ltOperator`                          | `Is less than`                |
| `filter.isTrue`                              | `Is true`                     |
| `filter.isFalse`                             | `Is false`                    |
| `filter.afterOrEqualOperator`                | `Is after or equal to`        |
| `filter.afterOperator`                       | `Is after`                    |
| `filter.beforeOperator`                      | `Is before`                   |
| `filter.beforeOrEqualOperator`               | `Is before or equal to`       |
| `filter.andLogic`                            | `And`                         |
| `filter.orLogic`                             | `Or`                          |
| `filter.addExpression`                       | `Add Expression`              |
| `filter.addGroup`                            | `Add Group`                   |
| `filter.close`                               | `Close`                       |
| `filter.ariaLabel`                           | `Filter`                      |
| `filter.expressionAriaLabel`                 | `Filter expression row`       |
| `filter.expressionDropdownAriaLabel`         | `Filter dropdown`             |
| `filter.expressionOperatorDropdownAriaLabel` | `Filter operator dropdown`    |
| `filter.enumFilterDropdownAriaLabel`         | `Select True/False`           |
| `filter.numericFilterAriaLabel`              | `Enter number`                |
| `filter.textFilterAriaLabel`                 | `Enter number`                |
| `columnMenu.filterClearButton`               | `Clear`                       |
| `columnMenu.filterSubmitButton`              | `Filter`                      |
| `columnMenu.filterTitle`                     | `Filter`                      |
| `columnMenu.sortAscending`                   | `Sort Ascending`              |
| `columnMenu.sortDescending`                  | `Sort Descending`             |
| `columnMenu.filterEqOperator`                | `Is equal to`                 |
| `columnMenu.filterNotEqOperator`             | `Is not equal to`             |
| `columnMenu.filterIsNullOperator`            | `Is null`                     |
| `columnMenu.filterIsNotNullOperator`         | `Is not null`                 |
| `columnMenu.filterIsEmptyOperator`           | `Is empty`                    |
| `columnMenu.filterIsNotEmptyOperator`        | `Is not empty`                |
| `columnMenu.filterStartsWithOperator`        | `Starts with`                 |
| `columnMenu.filterContainsOperator`          | `Contains`                    |
| `columnMenu.filterNotContainsOperator`       | `Does not contain`            |
| `columnMenu.filterEndsWithOperator`          | `Ends with`                   |
| `columnMenu.filterGteOperator`               | `Is greater than or equal to` |
| `columnMenu.filterGtOperator`                | `Is greater than`             |
| `columnMenu.filterLteOperator`               | `Is less than or equal to`    |
| `columnMenu.filterLtOperator`                | `Is less than`                |
| `columnMenu.filterIsTrue`                    | `Is true`                     |
| `columnMenu.filterAfterOrEqualOperator`      | `Is after or equal to`        |
| `columnMenu.filterAfterOperator`             | `Is after`                    |
| `columnMenu.filterBeforeOperator`            | `Is before`                   |
| `columnMenu.filterBeforeOrEqualOperator`     | `Is before or equal to`       |
| `columnMenu.filterAndLogic`                  | `And`                         |
| `columnMenu.filterOrLogic`                   | `Or`                          |
| `sort.ariaLabel`                             | `Sortable`                    |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Pager.

{% meta height:220 %}
{% embed_file pager/rtl/func/app.tsx preview %}
{% embed_file pager/rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
