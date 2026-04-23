---
title: Custom Rendering
description: 'Customize the KendoReact PDF Viewer rendering in React projects.'
slug: custom_rendering_pdfviewer
position: 6
---

# Custom Rendering

The PDF Viewer exposes three events allowing you to customize the default rendering of its nested components:

-   [onRenderToolbar](#custom-tools)—Allows you to add custom tools inside the toolbar.
-   [onRenderContent](#custom-content)—Allows the customization of the content layout.
-   [onRenderLoader](#custom-loader)—Allows the customization of the loader's look and feel.

## Custom Tools

The following example showcases how to add a custom tool to the PDF Viewer toolbar by keeping some of the built-in tools at the same time. For this purpose, collect all built-in tools available in the [`onRenderToolbar`]({% slug api_pdf-viewer_pdfviewerprops %}#onrendertoolbar) event arguments, and then return only the desired ones and a custom **Mark as read** button.

{% meta height:660 %}
{% embed_file custom-rendering/func/app.tsx preview %}
{% embed_file custom-rendering/func/main.tsx %}
{% endmeta %}

## Custom Content

The PDF Viewer allows you to customize the loaded content by overwriting the result returned by the [onRenderContent]({% slug api_pdf-viewer_pdfviewerprops %}#onrendercontent) event. In this example, you will see how to add a red border to the element that wraps the loaded PDF document.

{% meta height:660 %}
{% embed_file custom-content/func/app.tsx preview %}
{% embed_file custom-content/func/main.tsx %}
{% endmeta %}

## Custom Loader

To change the default rendering of the loader that appears while the PDF document is loading, use the [onRenderLoader]({% slug api_pdf-viewer_pdfviewerprops %}#onrenderloader) event of the PDF Viewer. Below you can see how to apply custom styling to the default `loading` element.

{% meta height:770 %}
{% embed_file custom-loader/func/app.tsx preview %}
{% embed_file custom-loader/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React PDF Viewer](slug://overview_pdfviewer)
-   [Toolbar]({% slug events_pdfviewer %})
-   [Events]({% slug toolbar_pdfviewer %})
-   [API Reference of the KendoReact PDF Viewer]({% slug api_pdf-viewer_pdfviewer %})
