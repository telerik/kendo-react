---
title: PDF Export
description: 'Get started with the KendoReact TreeList which supports the export to PDF.'
components: ["treelist"]
slug: overview_pdfexport_treelist
position: 120
---

# PDF Export

The KendoReact TreeList provides options for exporting to PDF.

## Getting Started

To enable the PDF export:

1. Install `kendo-react-pdf` package.

    ```sh-no-run
    npm i @progress/kendo-react-pdf
    ```

1. Import the TreeListPDFExport component in your React Application.

    ```jsx-no-run
    import { TreeListPDFExport } from '@progress/kendo-react-pdf';
    ```

1. Wrap the TreeList inside a TreeListPDFExport component.

1. Get the `ref` of the TreeListPDFExport.

1. Call the [`save`]({% slug api_pdf_treelistpdfexport %}#toc-save) function of the TreeListPDFExport component.

The following example demonstrates the basic implementation of the PDF export functionality of the TreeList.

{% meta height:590 %}
{% embed_file pdf/basic/func/app.tsx preview %}
{% embed_file pdf/basic/func/main.tsx %}
{% endmeta %}

## Configuration

You can control the PDF export configuration through the arguments that are passed to the [`save`]({% slug api_pdf_treelistpdfexport %}#toc-save) function of the KendoReact PDF Export component.

The TreeListPDFExport enables you to:

-   [Export specific data](#toc-exporting-specific-data)
-   [Customizing Exported Columns](#toc-customizing-exported-columns)

### Exporting Specific Data

To export specific data, pass the data to the [`save`]({% slug api_pdf_treelistpdfexport %}#toc-save) function of the TreeListPDFExport component. For example, if the TreeList has its paging enabled but you need to export all pages and all records expanded, pass the processed data to the `save` function.

{% meta height:500 %}
{% embed_file pdf/all-data-expanded/func/app.tsx preview %}
{% embed_file pdf/all-data-expanded/func/main.tsx %}
{% endmeta %}

### Customizing Exported Columns

The TreeListPDFExport provides the ability to add or hide some of the columns in the exported PDF file. This is done by passing the columns that have to be exported to the [`save`]({% slug api_pdf_treelistpdfexport %}#toc-save) function.

{% meta height:590 %}
{% embed_file pdf/columns-modification/func/app.tsx preview %}
{% embed_file pdf/columns-modification/func/main.tsx %}
{% endmeta %}

## Known Limitations

For full list of the PDF export known limitations refer to the [drawing package]({% slug limitationsbrowsersupport_drawing %}).

## Suggested Links

-   [PDFExport Overview]({% slug overview_pdfgenerator %})
-   [API Reference of the TreeList Component]({% slug api_treelist_treelistprops %})
