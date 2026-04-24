---
title: Show Message During PDF Export in KendoReact Grid
description: Learn how to display a loading message while the KendoReact Grid is exporting data to PDF
type: how-to
page_title: How to Show Message During PDF Export - KendoReact Grid
slug: grid-pdfexport-show-message
tags: grid, pdf, export, message, loading, gridpdfexport
ticketid: 1670043
res_type: kb
category: knowledge-base
components: ["grid"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>13.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Grid</td>
        </tr>
    </tbody>
</table>

## Description

How can I show a message while the KendoReact Grid is exporting data to PDF? Specifically, I need to:

- Display a loading or progress message when the user clicks the export button
- Keep the message visible during the PDF generation process
- Hide the message after the PDF export is complete

## Solution

Use the `GridPDFExport` ref to initiate the export and set a state variable with the message before calling the `save` method. After the file is saved, use the callback parameter to change the message back to an empty string or hide the element showing the message.

{% meta height:500 %}
{% embed_file grid/grid-pdfexport-show-message/app.tsx preview %}
{% embed_file grid/grid-pdfexport-show-message/main.tsx %}
{% embed_file grid/grid-pdfexport-show-message/products.ts %}
{% endmeta %}

## See Also

- [Grid PDF Export Overview](slug:overview_pdfexport_grid)
- [GridPDFExport API](slug:api_pdf_gridpdfexport)
- [Grid Overview](slug:overview_grid)
