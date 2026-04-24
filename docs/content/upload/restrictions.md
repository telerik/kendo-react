---
title: File Restrictions
description: 'Restrict the content of a KendoReact Upload for based on predefined rules for their size and extension.'
components: ["upload"]
slug: filerestrictions_upload
position: 6
---

# File Restrictions

You can restrict the selected files for upload based on predefined rules for their size and/or extension.

## Types of File Restrictions

The Upload supports three types of file restrictions:

-   [File extension](#toc-file-extension)
-   [Maximum file size](#toc-maximum-file-size)
-   [Minimum file size](#toc-minimum-file-size)

### File Extension

You can define the file types that are eligible for upload by using the [`allowedExtensions`]({% slug api_upload_uploadfilerestrictions %}#toc-allowedextensions) property. The files with extensions which are not included in the list will not be uploaded and the Upload will display them as invalid. The `allowedExtensions` option recognizes entries of both `.type` (for example, `.docx`, `.png`, `.svg`, `.xls`, and others) and `type` (for example, `docx`, `png`, `svg`, `xls`, and others) values.

{% meta height:280 %}
{% embed_file extensions/func/app.tsx preview %}
{% embed_file extensions/func/main.tsx %}
{% endmeta %}

### Maximum File Size

You can restrict the maximum allowed file size (in bytes) by using the [`maxFileSize`]({% slug api_upload_uploadfilerestrictions %}#toc-maxfilesize) property. If the selected file exceeds the maximum size, an error message will be displayed.

{% meta height:280 %}
{% embed_file maxfilesize/func/app.tsx preview %}
{% embed_file maxfilesize/func/main.tsx %}
{% endmeta %}

### Minimum File Size

You can restrict the minimum allowed file size (in bytes) by using the [`minFileSize`]({% slug api_upload_uploadfilerestrictions %}#toc-minfilesize) property. If the selected file is less than the minimum size, an error message will be displayed.

{% meta height:280 %}
{% embed_file minfilesize/func/app.tsx preview %}
{% embed_file minfilesize/func/main.tsx %}
{% endmeta %}

## Browser Limitations

Internet Explorer versions up to and including version 9 provide no information on the file size. As a result, the Upload restriction for the `minFileSize` and `maxFileSize` options does not work.

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
