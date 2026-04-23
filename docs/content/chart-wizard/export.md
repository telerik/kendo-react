---
title: Export Options
description: 'Bind the KendoReact Chart Wizard to data in React projects'
components: ["chartwizard"]
slug: export_chart-wizard
position: 40
---

# Export Options

The Chart Wizard allows the user to save the charts in PDF, PNG and SVG formats by setting the [`exportOptions`]({% slug api_chart-wizard_chartwizardprops %}#exportOptions) property to an [ExportOptions](slug:api_chart-wizard_exportoptions) object.

```jsx
const exportOptions: ExportOptions = {
    fileName: 'report',
    pdf: {
        paperSize: 'Letter'
    },
    image: {
        width: 1900, // px
        height: 1200
    }
};
```

You can further configure the exported file type by setting the `image` property to an [`ImageExportOptions`](slug:api_kendo-drawing_imageexportoptions) object and the `pdf` property to a [`PDFOptions`](slug:api_kendo-drawing_pdf_pdfoptions) object.

The following example demonstrates how to customize the export options of the component by configuring options like [`fileName`]({% slug api_chart-wizard_exportoptions %}#fileName), [`pdf.paperSize`]({% slug api_kendo-drawing_pdf_pdfoptions %}#paperSize) and [`image`]({% slug api_chart-wizard_exportoptions %}#image) dimensions inside the [`exportOptions`]({% slug api_chart-wizard_chartwizardprops %}#exportOptions) of the component.

{% meta height:750 %}
{% embed_file export-options/app.tsx preview %}
{% embed_file export-options/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Kendo Drawing PDFOptions](slug:api_kendo-drawing_pdf_pdfoptions)
-   [Kendo Drawing ImageExportOptions](slug:api_kendo-drawing_imageexportoptions)
-   [API Reference of the Chart Wizard](slug:api_chart-wizard)
-   [API Reference of Kendo Drawing](slug:api_kendo-drawing)
