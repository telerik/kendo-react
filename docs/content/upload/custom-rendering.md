---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact Upload in React projects.'
components: ["upload"]
slug: rendering_upload
position: 9
---

# Custom Rendering

The Upload enables you to customize the user interface of its file-list items.

To customize the appearance of the files for upload, pass a custom component to the `listItemUI` property. The component will receive the [`UploadListItemProps`]({% slug api_upload_uploadlistitemprops %}) properties.

The following example demonstrates how to customize the rendering of the files.

{% meta height:280 %}
{% embed_file customize_rendering/func/app.tsx preview %}
{% embed_file customize_rendering/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload %})
