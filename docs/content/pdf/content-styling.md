---
title: Styling of Content
description: 'Style the output document when you export content by using the KendoReact PDF Processing components in React projects.'
components: ["pdfprocessing"]
slug: stylingofcontent_pdf
position: 9
---

# Styling of Content

To change the appearance of the content for export, write CSS rules that apply only to the PDF output.

The available approaches are:

-   [Using the `.k-pdf-export` class](#toc-using-the-pdf-export-class)
-   [Using the `kendo-pdf-document` element](#toc-using-the-pdf-document-element)

## Using the PDF Export Class

The `.k-pdf-export` CSS class is applied to the exported element right before the drawing starts and is removed shortly afterwards. Drawing is synchronous&mdash;the page is not updated between the moment the class is added and the moment it is removed. As a result, the applied styles are not visible on screen.

The following example demonstrates how to define a style that places a border around all paragraphs in the PDF output.

{% meta height:380 %}
{% embed_file styling/func/app.tsx preview %}
{% embed_file styling/func/main.tsx %}
{% embed_file styling/func/styles.css %}
{% endmeta %}

When you use this approach, you cannot add background images. The style in the following example will not be applied because the image will be loaded after the export completes.

```css-no-run
.k-pdf-export p {
  background: url('image.jpg');
}
```

For more information on how to add background images, refer to the section about [using the `<kendo-pdf-document>` element](#toc-using-the-pdf-document-element).

## Using the PDF Document Element

This approach works only if your project requests multi-page documents&mdash;that is, only when either the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#toc-forcepagebreak) or the [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-pagesize) option is provided. To make it work in the cases when you need a single page, set a dummy value such as `forcePageBreak="-"`.

When you use the `<kendo-pdf-document>` element, the DOM renderer creates a clone of the element which does the page-breaking without destroying the original content. The DOM renderer places the cloned element inside a custom `<kendo-pdf-document>` element which is hidden from the view. As a result, you can apply custom styles under `kendo-pdf-document` by restricting the rules to the elements.

You can also use the `<kendo-pdf-document>` element to add background images as demonstrated in the following example.

{% meta height:380 %}
{% embed_file styling-element/func/app.tsx preview %}
{% embed_file styling-element/func/main.tsx %}
{% embed_file styling-element/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
