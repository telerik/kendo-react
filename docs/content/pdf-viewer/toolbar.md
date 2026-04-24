---
title: Toolbar
description: 'Using the KendoReact PDF Viewer toolbar in React projects.'
components: ["pdfviewer"]
slug: toolbar_pdfviewer
position: 2
---

# Toolbar

The PDF Viewer toolbar can render both built-in and [custom tools]({% slug custom_rendering_pdfviewer %}#custom-tools). This article describes the built-in tools and shows how to reorder them.

## Built-in Tools

By default, the PDF Viewer displays all its built-in tools in the order below. Use the `tools` prop to enable only part of the tools or change their default order.

The toolbar collection includes the following built-in tools:

-   `pager`
-   `spacer`
-   `zoomInOut`
-   `zoom`
-   `selection`
-   `spacer`
-   `search`
-   `open`
-   `download`
-   `print`

The following example demonstrates the basic configuration options for the PDF Viewer toolbar tools, which will be used by default if no `tools` are set. You can also add `spacer` elements, in order to visually split the tools.

{% meta height:650 %}
{% embed_file toolbar/func/app.tsx preview %}
{% embed_file toolbar/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React PDF Viewer](slug://overview_pdfviewer)
-   [API Reference of the KendoReact PDF Viewer]({% slug api_pdf-viewer_pdfviewer %})
-   [Custom Rendering]({% slug custom_rendering_pdfviewer %})
