---
title: Globalization
description: 'Globalize the KendoReact TaskBoard in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["taskboard"]
slug: globalization_taskboard
position: 5
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

The TaskBoard supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                           | Default Value                                  |
| :------------------------------------ | :--------------------------------------------- |
| `taskBoard.toolbarAddColumnButton`    | `Add Column`                                   |
| `taskBoard.toolbarSearchField`        | `Search`                                       |
| `taskBoard.editColumnButton`          | `Edit column`                                  |
| `taskBoard.addCardButton`             | `Add card`                                     |
| `taskBoard.deleteColumnButton`        | `Delete column`                                |
| `taskBoard.editCardButton`            | `Edit card`                                    |
| `taskBoard.deleteCardButton`          | `Delete card`                                  |
| `taskBoard.deleteTaskDialogMessage`   | `Are you sure you want to delete this card?`   |
| `taskBoard.deleteTaskDialogTitle`     | `Delete Card`                                  |
| `taskBoard.deleteTaskConfirmButton`   | `Delete`                                       |
| `taskBoard.deleteTaskCancelButton`    | `Cancel`                                       |
| `taskBoard.deleteColumnDialogMessage` | `Are you sure you want to delete this column?` |
| `taskBoard.addCardTitleLabel`         | `Delete column?`                               |
| `taskBoard.deleteColumnConfirmButton` | `Delete?`                                      |
| `taskBoard.deleteColumnCancelButton`  | `Cancel?`                                      |
| `taskBoard.addCardTitle`              | `Create new card?`                             |
| `taskBoard.addCardCreateButton`       | `Create`                                       |
| `taskBoard.editPaneCancelButton`      | `Cancel`                                       |
| `taskBoard.editCardPaneTitle`         | `Edit`                                         |
| `taskBoard.editCardPaneSaveButton`    | `Save changes`                                 |
| `taskBoard.editPaneTitleLabel`        | `Title`                                        |
| `taskBoard.editPaneDescriptionLabel`  | `Description:`                                 |
| `taskBoard.editPanePriorityLabel`     | `Priority`                                     |
| `taskBoard.addCardTitleLabel`         | `Title`                                        |
| `taskBoard.addCardDescriptionLabel`   | `Description`                                  |
| `taskBoard.addCardPriorityLabel`      | `Priority`                                     |
| `taskBoard.previewPanePriorityLabel`  | `Priority:`                                    |
| `taskBoard.previewPaneDeleteButton`   | `Delete`                                       |
| `taskBoard.previewPaneEditButton`     | `Edit`                                         |

The following example demonstrates how to load and apply the messages.

{% meta height:760 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/cards.ts %}
{% embed_file globalization/func/es.json %}
{% endmeta %}

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the TaskBoard.

{% meta height:760 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% embed_file rtl/func/card.tsx %}
{% embed_file rtl/func/styles.css %}
{% embed_file rtl/func/cards.ts %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
