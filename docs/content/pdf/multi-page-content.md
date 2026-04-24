---
title: Multi-Page Content
description: 'Render multi-page content when you export files to PDF by using the KendoReact PDF Processing export components in React projects.'
components: ["pdfprocessing"]
slug: multipagecontent_pdf
position: 6
---

# Multi-Page Content

The PDF Processing component provides options for generating multi-page content in PDF, preventing the page-split, and rendering page templates.

-   [Manual page breaking](#toc-manual-page-breaking)
-   [Automatic page breaking](#toc-automatic-page-breaking)
-   [Page templates](#toc-page-templates)
-   [Preventing page breaking in elements](#toc-preventing-page-breaking-in-elements)

For more information on how to render multi-page content with the Drawing library, refer to its [PDF output documentation]({% slug multipagecontent_drawing %}).

## Manual Page Breaking

To manually specify the page breaks, use the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#forcepagebreak) property. As a result, a page break, which matches the `forcePageBreak` CSS selector, occurs before each element.

The following example demonstrates how to split the content into multiple pages.

{% meta height:612 %}
{% embed_file multi-page-content-manual/func/app.tsx preview %}
{% embed_file multi-page-content-manual/func/main.tsx %}
{% endmeta %}

## Automatic Page Breaking

The PDF Processing component supports automatic page breaking. To automatically insert page breaks, set the [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-papersize) option. You will still be able to apply the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#toc-forcepagebreak) configuration to manually specify the break points.

For more information, refer to the [known limitations of the Drawing library and the PDF Export component]({% slug limitationsbrowsersupport_drawing %}).

{% meta height:870 %}
{% embed_file multi-page-content-auto/func/app.tsx preview %}
{% embed_file multi-page-content-auto/func/main.tsx %}
{% endmeta %}

## Page Templates

When you request multi-page output through the [`forcePageBreak`]({% slug api_pdf_pdfexportprops %}#toc-forcepagebreak) or [`paperSize`]({% slug api_pdf_pdfexportprops %}#toc-papersize) options, you can additionally specify a [`pageTemplate`]({% slug api_pdf_pdfexportprops %}#toc-pagetemplate). The page template is inserted into each page before the output is produced and you can position it relatively to the page by using CSS.

{% meta height:650 %}
{% embed_file multi-page-content-template/func/content.tsx %}
{% embed_file multi-page-content-template/func/app.tsx preview %}
{% embed_file multi-page-content-template/func/main.tsx %}
{% embed_file multi-page-content-template/func/pageTemplate.tsx %}
{% endmeta %}

## Adding Page Numbers

To add sequential page numbers to your exported documents, define a [pageTemplate]({% slug api_pdf_pdfexportprops %}#toc-pagetemplate) and display the `pageNum` and `pageTotal` that can be obtained from the `props`.

{% meta height:650 %}
{% embed_file page-numbering/app.tsx preview %}
{% embed_file page-numbering/main.tsx %}
{% embed_file page-numbering/content.tsx %}
{% embed_file page-numbering/pageTemplate.tsx %}
{% endmeta %}

## Preventing Page Breaking in Elements

To prevent specific elements from being split across pages, use the [`keepTogether`]({% slug api_pdf_pdfexportprops %}#toc-keeptogether) option. `keepTogether` accepts CSS selectors that are passable to [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector).

All elements from the following example which have the `"prevent-split"` CSS class are kept within the boundaries of the pages and their content is not split. If they fall on a margin, they will be moved to the next page.

For more information on existing issues in element behavior during page breaking, refer to the article about [known limitations and browser support]({% slug multipagecontent_drawing %}).

{% meta height:650 %}
{% embed_file multi-page-content-keep-together/func/content.tsx %}
{% embed_file multi-page-content-keep-together/func/app.tsx preview %}
{% embed_file multi-page-content-keep-together/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the PDF Processing Component]({% slug api_pdf_pdfexportprops %})
-   [Rendering Multi-Page Content with the Drawing Library]({% slug multipagecontent_drawing %})
-   [Video tutorial: How to Export to PDF in React Part 1: Methods](https://www.telerik.com/videos/how-to-export-to-pdf-in-react-methods-react-pdf-generator-part-1)
-   [Video tutorial: How to Export to PDF in React Part 2: Exporting Scenarios](https://www.telerik.com/videos/how-to-export-to-pdf-in-react-invoices-and-charts-react-pdf-generator-part-2)
