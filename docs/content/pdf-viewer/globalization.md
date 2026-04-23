---
title: Globalization
description: 'Globalize the KendoReact PDF Viewer in React projects by adapting it to specific cultures, loading translated messages, or using the RTL support.'
components: ["pdfviewer"]
slug: globalization_pdfviewer
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

The PDF Viewer supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                  | Default Value             |
| :--------------------------- | :------------------------ |
| `pdfviewer.zoomIn`           | `Zoom in`                 |
| `pdfviewer.zoomOut`          | `Zoom out`                |
| `pdfviewer.enableSelection ` | `Enable selection`        |
| `pdfviewer.enablePanning`    | `Enable panning`          |
| `pdfviewer.search`           | `Search`                  |
| `pdfviewer.open`             | `Open `                   |
| `pdfviewer.download`         | `Download`                |
| `pdfviewer.print`            | `Print`                   |
| `pdfviewer.close`            | `Close`                   |
| `pdfviewer.matchCase`        | `Match case`              |
| `pdfviewer.searchOf`         | `of`                      |
| `pdfviewer.prevMatch`        | `Previous match`          |
| `pdfviewer.nextMatch`        | `Next match`              |
| `pdfviewer.actualWidth`      | `Actual width`            |
| `pdfviewer.fitToWidth`       | `Fit to width`            |
| `pdfviewer.fitToPage`        | `Fit to page`             |
| `pdfviewer.popupBlocked`     | `Popup is blocked.`       |
| `pager.itemsPerPage`         | `items per page`          |
| `pager.info`                 | `{0} - {1} of {2} items`  |
| `pager.firstPage`            | `Go to the first page`    |
| `pager.previousPage`         | `Go to the previous page` |
| `pager.nextPage`             | `Go to the next page`     |
| `pager.lastPage`             | `Go to the last page`     |
| `pager.page`                 | `Page`                    |
| `pager.of`                   | `of`                      |
| `pager.totalPages`           | `{0}`                     |
| `dropdowns.clear`            | `Clear`                   |

The following example demonstrates how to load and apply the messages.

{% meta height:610 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% embed_file globalization/func/es.json %}
{% endmeta %}

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the PDF Viewer.

{% meta height:610 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% embed_file rtl/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [React PDF Viewer](slug://overview_pdfviewer)
-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
