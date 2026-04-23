---
title: File Processing
description: 'Control the way the KendoReact Upload processes the desired files for upload in React projects.'
components: ["upload"]
slug: fileprocessing_upload
position: 5
---

# File Processing

The Upload provides configuration options for controlling the way it processes the desired files for upload.

> By default, once a file is selected and unless the [`autoUpload`]({% slug api_upload_uploadprops %}#toc-autoupload) option is set to `false`, the Upload automatically initiates a `POST` request to the server.

The Upload supports the following file-processing operations:

-   [Automatic upload of files](#toc-automatic-upload-of-files)
-   [Upload of single or multiple files](#toc-upload-of-single-or-multiple-files)
-   [Upload of batches of files](#toc-upload-of-batches-of-files)

## Automatic Upload of Files

The Upload allows the immediate upload of selected files through the default configuration of its [`autoUpload`]({% slug api_upload_uploadprops %}#toc-autoupload) option to `true`. If you set `autoUpload` to `false`, the upload will occur only when explicitly confirmed by the user through a button-click.

{% meta height:280 %}
{% embed_file manual_upload/func/app.tsx preview %}
{% embed_file manual_upload/func/main.tsx %}
{% endmeta %}

## Upload of Single or Multiple Files

The Upload allows the selection of multiple files through the default configuration of its [`multiple`]({% slug api_upload_uploadprops %}#toc-multiple) option to `true`. If you set `multiple` to `false`, the selection of files will be limited to a single file.

{% meta height:280 %}
{% embed_file single_file_upload/func/app.tsx preview %}
{% embed_file single_file_upload/func/main.tsx %}
{% endmeta %}

## Upload of Batches of Files

The Upload allows the upload of the selected files in separate requests through the default configuration of its [`batch`]({% slug api_upload_uploadprops %}#toc-batch) option to `false`. If you set `batch` to `true`, all selected files will be uploaded in a single request.

{% meta height:280 %}
{% embed_file batch_upload/func/app.tsx preview %}
{% embed_file batch_upload/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
