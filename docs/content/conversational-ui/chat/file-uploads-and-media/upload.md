---
title: File Upload
description: 'Enable file upload functionality in the KendoReact Chat component for sharing documents, images, and media.'
components: ["chat"]
slug: upload_chat
position: 20
---

# File Upload

The Chat component allows users to share documents, images, and other media files. This feature enables rich content sharing and collaboration.

To enable file upload, configure the [`uploadConfig`](slug:api_conversational-ui_chatprops#toc-uploadconfig) property. This property accepts either a boolean or an [`UploadProps`](slug:api_upload_uploadprops) object. Set to `true` for default settings or use an object for more precise configuration.

The file upload feature displays an attachment button next to the message input. Users can click to select files, which are automatically uploaded and attached to messages. You can control how attached files are displayed using the [`messageFilesLayout`](slug:api_conversational-ui_chatprops#toc-messagefileslayout) property, which supports three layout modes: `vertical` (stacked vertically), `wrap` (wraps to new rows), and `horizontal` (single row with overflow).

{% meta height:830 %}
{% embed_file chat/file-uploads-and-media/upload/app.tsx preview %}
{% embed_file chat/file-uploads-and-media/upload/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Speech to Text](slug:speech_to_text_chat)
-   [Message Tools](slug:messages_tools_chat)
-   [Events Handling](slug:events_chat)
-   [Chat API Reference](slug:api_conversational-ui)
