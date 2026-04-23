---
title: Configuration of Margins
description: 'Set the margins of the output files when you export content with the KendoReact PDF Processing components in React projects.'
components: ["pdfprocessing"]
slug: settingmargin_pdf
position: 4
---

# Configuration of Margins

The PDF Processing package delivers options for setting the margins of the output PDF files.

To set the margin of an output file, you can use any of the following approaches:

-   [Setting the margin as a property](#toc-setting-margins-as-properties)
-   [Setting the margin as a child component](#toc-setting-margins-as-child-components)
-   [Setting the margin as an argument](#toc-setting-margins-as-arguments)

## Setting Margins as Properties

To set the margin as a property, use the [`PDFExport`]({% slug api_pdf_pdfexport %}) component and the [`margin`]({% slug api_pdf_pdfexportprops %}#toc-margin) property.

```jsx-no-run
<PDFExport margin={{ top: 20, left: 100, right: 30, bottom: 40 }} >
    <DataToExport />
</PDFExport>
```

```jsx-no-run
 <PDFExport margin="2cm" >
    <DataToExport />
</PDFExport>
```

## Setting Margins as Child Components

To set the margin as a child component, use the [`PDFExport`]({% slug api_pdf_pdfexport %}) and [`PDFMargin`]({% slug api_pdf_pdfmarginprops %}) components.

```jsx-no-run
import { PDFExport, PDFMargin } from '@progress/kendo-react-pdf';

<PDFExport>
    <PDFMargin top="50mm" bottom="30mm" />
 </PDFExport>
```

## Setting Margins as Arguments

To set the margin as an argument, use the [`savePDF`]({% slug api_pdf_savepdf %}) method and the [`margin`]({% slug api_pdf_pdfexportprops %}#toc-margin) option.

```js-no-run
import { savePDF } from '@progress/kendo-react-pdf';

savePDF(domElement, { margin: "2cm" });
```

## Suggested Links

-   [API Reference of the Drawing Library]({% slug overview_drawing %})
-   [Export of Drawings in PDF]({% slug pdfexport_drawing %})
