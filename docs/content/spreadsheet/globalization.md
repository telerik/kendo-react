---
title: Globalization
description: 'Globalize the KendoReact Spreadsheet in React projects by adapting it to specific cultures, loading translated messages, or using the RTL support.'
components: ["spreadsheet"]
slug: globalization_spreadsheet
position: 90
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

The Spreadsheet supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                        | Default Value                                                           |
| :--------------------------------- | :---------------------------------------------------------------------- |
| `spreadsheet.bold`                 | `Bold`                                                                  |
| `spreadsheet.italic`               | `Italic`                                                                |
| `spreadsheet.underline `           | `Underline`                                                             |
| `spreadsheet.openFile`             | `Open...`                                                               |
| `spreadsheet.textColor`            | `Text Color`                                                            |
| `spreadsheet.background`           | `Background color`                                                      |
| `spreadsheet.addRowAbove`          | `Add row above`                                                         |
| `spreadsheet.addRowBelow`          | `Add row below`                                                         |
| `spreadsheet.addColumnLeft`        | `Add column left`                                                       |
| `spreadsheet.addColumnRight`       | `Add column right`                                                      |
| `spreadsheet.deleteRow`            | `Delete row`                                                            |
| `spreadsheet.deleteColumn`         | `Delete column`                                                         |
| `spreadsheet.undo`                 | `Undo`                                                                  |
| `spreadsheet.redo`                 | `Redo`                                                                  |
| `spreadsheet.fontSize`             | `Font size`                                                             |
| `spreadsheet.fontSizeIncrease`     | `Increase Font size`                                                    |
| `spreadsheet.fontSizeDecrease`     | `Decrease Font size`                                                    |
| `spreadsheet.fontName`             | `Font`                                                                  |
| `spreadsheet.format`               | `Custom format...`                                                      |
| `spreadsheet.alignHorizontally`    | `Align horizontally`                                                    |
| `spreadsheet.alignVertically`      | `Align vertically`                                                      |
| `spreadsheet.align`                | `Align`                                                                 |
| `spreadsheet.alignLeft`            | `Align Left`                                                            |
| `spreadsheet.alignRight`           | `Align Right`                                                           |
| `spreadsheet.alignCenter`          | `Align Center`                                                          |
| `spreadsheet.alignJustify`         | `Align Justify`                                                         |
| `spreadsheet.center`               | `Center`                                                                |
| `spreadsheet.justify`              | `Justify`                                                               |
| `spreadsheet.alignTop`             | `Align Top`                                                             |
| `spreadsheet.alignMiddle`          | `Align Middle`                                                          |
| `spreadsheet.increaseDecimal`      | `Increase decimal`                                                      |
| `spreadsheet.decreaseDecimal`      | `Decrease decimal`                                                      |
| `spreadsheet.textWrap`             | `Text Wrap`                                                             |
| `spreadsheet.gridLines`            | `Toggle gridlines`                                                      |
| `spreadsheet.exportToExcel`        | `Export to Excel`                                                       |
| `spreadsheet.nameBox`              | `Name Box`                                                              |
| `spreadsheet.defaultSheetName`     | `Sheet`                                                                 |
| `spreadsheet.home`                 | `Home`                                                                  |
| `spreadsheet.file`                 | `File`                                                                  |
| `spreadsheet.insert`               | `Insert`                                                                |
| `spreadsheet.addNewSheet`          | `Add new sheet`                                                         |
| `spreadsheet.formatTab`            | `Format`                                                                |
| `spreadsheet.modifyMerged`         | `Cannot change part of a merged cell.`                                  |
| `spreadsheet.cannotModifyDisabled` | `Cannot modify disabled cells.`                                         |
| `spreadsheet.openUnsupported`      | `Unsupported format. Please select an .xlsx file.`                      |
| `spreadsheet.duplicateSheetName`   | `There is an existing sheet with this name. Please enter another name.` |
| `spreadsheet.error`                | `Error`                                                                 |
| `spreadsheet.ok`                   | `OK`                                                                    |

The following example demonstrates how to load and apply the messages.

{% meta height:760 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/de.json %}
{% endmeta %}

<!-- ## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Spreadsheet.

{% meta height:760 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %} -->

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
