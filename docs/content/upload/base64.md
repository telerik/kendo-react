---
title: Uploaded file to Base64
description: 'Learn how to use the KendoReact Upload package for getting a file as Base64 string.'
components: ["upload"]
slug: file_to_base64
position: 11
---

# Uploaded file to Base64

In order to get reference to a Base64 string from an uploaded file you can set the [`saveUrl`]({% slug api_upload_uploadprops %}#toc-saveurl) to a function where you can use a FileReader to retrieve the Base64 string.

{% meta height:150 %}
{% embed_file base64/func/app.tsx preview %}
{% embed_file base64/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
