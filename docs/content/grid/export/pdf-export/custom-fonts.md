---
title: Customizing Fonts
description: 'Get started with the PDF export functionality of the KendoKendoReact Data Grid allowing you to embed custom fonts in order to render international characters.'
components: ["datagrid"]
slug: customfonts_pdfexport_grid
position: 50
subject: PDF Export feature of the Grid
---

# Customizing Fonts

The default fonts in the PDF files provide limited Unicode support.

<CtaPanelOverview></CtaPanelOverview>

To ensure proper rendering of international characters and special symbols, you may need to embed an external font. For more information, refer to the article on [custom fonts and PDF export]({% slug embeddedfonts_drawing %}) and to the following example.

{% meta height:470 %}
{% embed_file pdf-custom-fonts/func/app.tsx preview %}
{% embed_file pdf-custom-fonts/func/main.tsx %}
{% embed_file pdf-custom-fonts/func/products.js %}
{% embed_file pdf-custom-fonts/func/styles.js %}
{% endmeta %}

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
