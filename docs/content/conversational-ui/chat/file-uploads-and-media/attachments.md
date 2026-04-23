---
title: Attachments
description: 'Display file attachments such as images, videos, and documents in KendoReact Chat messages.'
components: ["chat"]
slug: attachments_chat
position: 30
---

# Message Attachments

Chat messages may contain attachments such as images, videos, or data.

## Supported Attachment Types

The Chat provides built-in support for displaying:

-   Images&mdash;The `contentType` must start with `"image/"`. The `content` must be a valid URL.
-   Plain-text attachments&mdash;The built-in Chat template displays any content other than images as text.

## Defining Attachments

To define attachments for a message:

1. Populate the [`attachments`](slug:api_conversational-ui_message#toc-attachments) field of the message.
2. Set the `content` and an optional `contentType` for each [Attachment](slug:api_conversational-ui_attachment). Typically, the `content` type identifier for the attachment is MIME, but you can also use a string.

## Display Modes

By default, message attachments are displayed as a carousel or card deck below the message. You can also display attachments in a list by setting the [`attachmentLayout`](slug:api_conversational-ui_message#toc-attachmentlayout) of the message.

{% meta height:680 %}
{% embed_file chat/file-uploads-and-media/attachments/app.tsx preview %}
{% embed_file chat/file-uploads-and-media/attachments/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Attachment Templates](slug:customization_attachment_templates_chat)
-   [File Upload](slug:upload_chat)
-   [Speech to Text](slug:speech_to_text_chat)
-   [Chat API Reference](slug:api_conversational-ui)
