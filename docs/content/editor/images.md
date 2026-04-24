---
title: Paste, Drag and Drop, and Upload Images
description: 'Get started with the KendoReact Editor and paste, drag and drop, and upload images.'
components: ["editor"]
slug: images_editor
position: 15
---

# Upload Images from Local File System

By default, the KendoReact Editor does not provide an option for uploading images. However, you can implement it and extend the built-in functionality.

## Paste, Drag and Drop, and Upload Images

The following example demonstrates how to:

-   Add plugin which handles paste and drop DOM events, and then inserts images in Base64 format.
-   Add tool and dialog with an Upload component.

> In this example the selected image files are handled on the client side, i.e., no actual upload process is being initiated. You can still re-create the scenario by using a real backend service.

{% meta height:550 %}
{% embed_file images/func/app.tsx preview %}
{% embed_file images/func/main.tsx %}
{% embed_file images/func/insertImageDialog.tsx %}
{% embed_file images/func/insertImagePlugin.ts %}
{% embed_file images/func/insertImageTool.tsx %}
{% embed_file images/func/utils.ts %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
-   [ProseMirror Plugin System](http://prosemirror.net/docs/ref/#state.Plugin_System)
