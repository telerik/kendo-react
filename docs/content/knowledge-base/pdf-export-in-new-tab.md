---
title: Exporting PDF from KendoReact Data Grid and Opening in a New Tab
description: Learn how to export a PDF from KendoReact Data Grid and open it in a new tab without downloading.
type: how-to
page_title: How to Export PDF from KendoReact Data Grid and Open in a New Tab
meta_title: Export PDF from KendoReact Data Grid and Open in New Tab
slug: pdf-export-in-new-tab
tags: kendoreact, data grid, pdf processing, export, pdf
res_type: kb
ticketid: 1667727
components: ["grid"]
---

## Environment

<table>
  <tbody>
    <tr>
      <td>Product</td>
      <td>KendoReact Data Grid,<br/>KendoReact PDF Processing</td>
    </tr>
    <tr>
      <td>Version</td>
      <td>Current</td>
    </tr>
  </tbody>
</table>

## Description

I want to export the results of the [KendoReact Data Grid](https://www.telerik.com/kendo-react-ui/components/grid/) to a PDF and open the PDF in a new tab. I do not want the PDF file to be downloaded. The `save()` method of the PDF Grid is void, so I cannot obtain the blob directly from the return.

This knowledge base article also answers the following questions:

-   How to export KendoReact Data Grid to PDF without downloading?
-   How to open exported PDF in a new browser tab?
-   How to use KendoReact PDF Processing for custom PDF export?

## Solution

To achieve this behavior, use the [KendoReact PDF Processing](https://www.telerik.com/kendo-react-ui/components/pdfprocessing/) component to create the PDF. Then, pass the base64 string of the created PDF to a dynamically created iframe in a new tab. Follow these steps:

1. Use the `drawDOM` function from the PDF Processing component to render the grid as a PDF.
2. Pass the rendered content to the `exportPDF` function to generate a PDF data URI.
3. Open a new browser tab using `window.open('about:blank')`.
4. Create an iframe dynamically in the new tab.
5. Set the `src` attribute of the iframe to the generated PDF data URI.

Here is an example implementation:

```tsx
  const exportPDFWithMethod = () => {
    let gridElement = document.querySelector('.k-grid') as any;
    drawDOM(gridElement, { paperSize: 'A4' })
      .then((group) => {
        return exportPDF(group);
      })
      .then((dataUri) => {
        console.log(dataUri.split(';base64,')[1]);

        var w = window.open('about:blank');

        setTimeout(function () {
          let iframe = w.document.body.appendChild(
            w.document.createElement('iframe')
          );
          iframe.src = dataUri;
          iframe.width = '100%';
          iframe.height = '100%';
        }, 0);
      });
```

{% meta height:300 %}
{% embed_file pdf/export-in-new-tab/app.tsx preview %}
{% embed_file pdf/export-in-new-tab/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact PDF Processing Overview](https://www.telerik.com/kendo-react-ui/components/pdfprocessing/)
-   [Base64 String Creation in PDF Processing](https://www.telerik.com/kendo-react-ui/components/pdfprocessing/base64string/)
-   [KendoReact Data Grid Documentation](https://www.telerik.com/kendo-react-ui/components/grid/)
-   [StackOverflow: Opening PDF in iframe](https://stackoverflow.com/a/46510790/5611574)
-   [Example Implementation on StackBlitz](https://stackblitz.com/edit/react-wsajei?file=app%2Fapp.tsx)
