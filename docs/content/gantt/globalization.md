---
title: Globalization
description: 'Get started with the globalization functionality of the KendoReact Gantt and learn how to localize built-in messages.'
components: ["gantt"]
slug: globalization_gantt
position: 9
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to use the Spanish date format and month names and how to localize the built-in messages of the KendoReact Gantt component.

{% meta height:580 %}
{% embed_file globalization/func/es.json %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Gantt supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                         | Default Value                                 |
| :---------------------------------- | :-------------------------------------------- |
| `gantt.filterClearButton`           | `Clear`                                       |
| `gantt.filterEqOperator`            | `Is equal to`                                 |
| `gantt.filterNotEqOperator`         | `Is not equal to`                             |
| `gantt.filterIsNullOperator`        | `Is null`                                     |
| `gantt.filterIsNotNullOperator`     | `Is not null`                                 |
| `gantt.filterIsEmptyOperator`       | `Is empty`                                    |
| `gantt.filterIsNotEmptyOperator`    | `Is not empty`                                |
| `gantt.filterStartsWithOperator`    | `Starts with`                                 |
| `gantt.filterContainsOperator`      | `Contains`                                    |
| `gantt.filterNotContainsOperator`   | `Does not contain`                            |
| `gantt.filterEndsWithOperator`      | `Ends with`                                   |
| `gantt.filterGteOperator`           | `Is greater than or equal to`                 |
| `gantt.filterGtOperator`            | `Is greater than`                             |
| `gantt.filterLteOperator`           | `Is less than or equal to`                    |
| `gantt.filterLtOperator`            | `Is less than`                                |
| `gantt.filterIsTrue`                | `Is true`                                     |
| `gantt.filterIsFalse`               | `Is false`                                    |
| `gantt.filterBooleanAll`            | `(All)`                                       |
| `gantt.filterAfterOrEqualOperator`  | `Is after or equal to`                        |
| `gantt.filterAfterOperator`         | `Is after`                                    |
| `gantt.filterBeforeOperator`        | `Is before`                                   |
| `gantt.filterBeforeOrEqualOperator` | `Is before or equal to`                       |
| `gantt.noRecords`                   | `No records available.`                       |
| `gantt.weekViewTitle`               | `Week`                                        |
| `gantt.dayViewTitle`                | `Day`                                         |
| `gantt.monthViewTitle`              | `Month`                                       |
| `gantt.yearViewTitle`               | `Year`                                        |
| `gantt.editorSave`                  | `Save`                                        |
| `gantt.editorCancel`                | `Cancel`                                      |
| `gantt.editorTitle`                 | `Task`                                        |
| `gantt.editorTaskTitle`             | `Title`                                       |
| `gantt.editorTaskStart`             | `Start`                                       |
| `gantt.editorTaskEnd`               | `End`                                         |
| `gantt.editorTaskComplete`          | `Complete`                                    |
| `gantt.editorValidationRequired`    | `Field is required.`                          |
| `gantt.editorValidationStart`       | `Start time must be be before End time.`      |
| `gantt.editorValidationEnd`         | `End time must be after Start time.`          |
| `gantt.addTask`                     | `Add Task`                                    |
| `gantt.addChild`                    | `Add Child`                                   |
| `gantt.addAbove`                    | `Add Above`                                   |
| `gantt.addBelow`                    | `Add Below`                                   |
| `gantt.editorDelete`                | `Delete`                                      |
| `gantt.deleteConfirmation`          | `Are you sure you want to delete this event?` |
| `gantt.deleteDialogTitle`           | `Delete Event`                                |

## Suggested Links

-   [React Gantt](slug://overview_gantt)
-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
