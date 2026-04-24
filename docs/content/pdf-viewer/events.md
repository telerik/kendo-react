---
title: Events
description: 'Using the KendoReact PDF Viewer events in React projects.'
components: ["pdfviewer"]
slug: events_pdfviewer
position: 3
---

# Events

The KendoReact PDF Viewer component exposes several events to let you easily handle file operations logic in React apps. Below is a summary of the available events and their triggers:

-   `onLoad`—Fires when a PDF document has been loaded.
-   `onError`—Fires when an error occurs, for example, when the selected file cannot be read.
-   `onDownload`—Fires when the download tool has been clicked. To prevent the download, return `false`.
-   `onPageChange`—Fires when the page has changed.
-   `onZoom`—Fires when the zoom level has changed.
-   `onRenderContent`—Fires when the content component is about to be rendered.
-   `onRenderLoader`—Fires when the loading indication component is about to be rendered.
-   `onRenderToolbar`—Fires when the toolbar component is about to be rendered.

The following example demonstrates basic PDF Viewer events.

{% meta height:810 %}
{% embed_file events/func/app.tsx preview %}
{% embed_file events/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [React PDF Viewer](slug://overview_pdfviewer)
-   [API Reference of the KendoReact PDF Viewer]({% slug api_pdf-viewer_pdfviewer %})
