---
title: Modes of Operation
description: 'Use controlled and uncontrolled modes of operation for managing which files for upload will be rendered when working with the KendoReact Upload.'
components: ["upload"]
slug: controleduncontroled_upload
position: 3
---

# Modes of Operation

The Upload enables you to manage the files for upload that will be rendered by setting the Upload into its [controlled](#toc-controlled-mode) or [uncontrolled](#toc-uncontrolled-mode) mode.

-   **Controlled mode** gives you full control over the files list and requires you to handle all file changes via props and events.
-   **Uncontrolled mode** lets the Upload component manage its own file state, with the option to set an initial list of files.

## Controlled Mode

Controlled mode can be used when you need to:

-   Integrate file uploads with other form data or global application state.
-   Validate, filter, or modify files before they appear in the Upload list.
-   Fully control which files are displayed and when.

To enable the controlled mode of the files for upload:

1. Set the [`files`]({% slug api_upload_uploadprops %}#toc-files) property.
1. Subscribe to the following events for updates:

-   [`onAdd`]({% slug api_upload_uploadprops %}#toc-onadd)
-   [`onRemove`]({% slug api_upload_uploadprops %}#toc-onremove)
-   [`onProgress`]({% slug api_upload_uploadprops %}#toc-onprogress)
-   [`onStatusChange`]({% slug api_upload_uploadprops %}#toc-onstatuschange)

The following example demonstrates how to use controlled mode to prevent the Upload from uploading more than two files:

{% meta height:320 %}
{% embed_file controlled/func/app.tsx preview %}
{% embed_file controlled/func/main.tsx %}
{% embed_file controlled/func/uploadHandlers.ts %}
{% endmeta %}

## Uncontrolled Mode

In uncontrolled mode, the Upload component manages its own internal list of files.
You can set the initial files using the [`defaultFiles`]({% slug api_upload_uploadprops %}#toc-defaultfiles) property, but after that, the component handles all file state changes automatically.

{% meta height:280 %}
{% embed_file uncontrolled/func/app.tsx preview %}
{% embed_file uncontrolled/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Using saveUrl as a function]({% slug saveurl_as_function %})
-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
