---
title: Globalization
description: 'Globalize the KendoReact Excel Export in React projects by adapting to specific cultures, loading translated messages, or using the RTL support.'
components: ["excelexport"]
slug: rtl_excelexport
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

The Excel Export component does not provide built-in translated messages.

## Right-to-Left Support

The Excel Export component supports right-to-left direction by switching the direction of the Excel sheet.

To enable the RTL mode for the Excel Export component and all KendoReact components in your React application, set the [`RTL`]({% slug api_excel-export_excelexportprops %}#toc-rtl) property of the `ExcelExport` component to `true`.

{% meta height:150 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React Excel Export](slug://overview_excelexport)
-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
