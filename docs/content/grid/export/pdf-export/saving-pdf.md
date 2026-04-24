---
title: Implementing Server Proxies
description: 'Get started with the KendoKendoReact Data Grid allowing you to save exported PDF files by implementing a server proxy.'
components: ["datagrid"]
slug: savingfiles_pdfexport_grid
position: 60
subject: PDF Export feature of the Grid
---

# Implementing Server Proxies

Some browsers (typically older browsers) may not support the saving of the exported PDF file and require implementation of a [server proxy]({% slug overview_filesaver %}).

<CtaPanelOverview></CtaPanelOverview>

To specify the server proxy URL when you export the KendoReact Data Grid to PDF, set the [`proxyURL`]({% slug api_pdf_pdfexportprops %}#toc-proxyurl) property.

Your project might require you to send the generated PDF file to a remote service. To achieve this behavior, specify the [`proxyURL`]({% slug api_pdf_pdfexportprops %}#toc-proxyurl) property and set the [`forceProxy`]({% slug api_pdf_pdfexportprops %}#toc-forceproxy) property to `true`. If the proxy returns `204 No Content`, the **Save As...** dialog will not appear on the client.

## Suggested Links

-   [PDF Export Known Limitations]({% slug limitations_pdfexport_grid %})
-   [API Reference of the Grid]({% slug api_grid_gridprops %})
-   [File Saver / Server Proxy]({% slug overview_filesaver %})
