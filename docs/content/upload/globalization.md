---
title: Globalization
description: 'Globalize the KendoReact Upload in React projects by adapting to specific cultures, translating messages, or using the RTL support.'
components: ["upload"]
slug: globalization_upload
position: 50
---

# Globalization

The globalization process combines the translation of component messages with adapting them to specific locales.

For more information on how globalization practices are implemented in KendoReact, refer to the [overview article]({% slug overview_globalization %}). For more information on the globalization aspects which are available for each component, refer to the article on [globalization support]({% slug l10nsupport_l10n %}).

The following example demonstrates how to localize the built-in messages of the KendoReact Upload.

{% meta height:280 %}
{% embed_file globalization/func/app.tsx preview %}
{% embed_file globalization/func/main.tsx %}
{% endmeta %}

## Internationalization

The internationalization process applies specific culture formats to a web application.

For more information, refer to:

-   [KendoReact documentation on internationalization]({% slug overview_intl %})
-   [kendo-intl (the base Internationalization package on GitHub)](https://github.com/telerik/kendo-intl)

## Messages

The Upload supports the localization of its messages by utilizing the [KendoReact Internationalization package]({% slug overview_intl %}).

The following table lists the built-in message keys and their default values.

| Message Key                    | Default Value                                             |
| :----------------------------- | :-------------------------------------------------------- |
| `upload.cancel`                | `Cancel`                                                  |
| `upload.clearSelectedFiles`    | `Clear`                                                   |
| `upload.dropFilesHere`         | `Drop files here to upload`                               |
| `upload.headerStatusUploaded`  | `Done`                                                    |
| `upload.headerStatusUploading` | `Uploading...`                                            |
| `upload.invalidFileExtension`  | `File type not allowed.`                                  |
| `upload.invalidFiles`          | `Invalid file(s). Please check file upload requirements.` |
| `upload.invalidMaxFileSize`    | `File size too large.`                                    |
| `upload.invalidMinFileSize`    | `File size too small.`                                    |
| `upload.remove`                | `Remove`                                                  |
| `upload.retry`                 | `Retry`                                                   |
| `upload.select`                | `Select files...`                                         |
| `upload.selectTitle`           | `Press to select more files`                              |
| `upload.selectNoFilesTitle`    | `No files selected`                                       |
| `upload.uploadSelectedFiles`   | `Upload`                                                  |
| `upload.total`                 | `Total`                                                   |
| `upload.files`                 | `files`                                                   |
| `upload.statusUploaded`        | `File(s) successfully uploaded.`                          |
| `upload.statusUploadFailed`    | `File(s) failed to upload.`                               |
| `upload.dropZoneHint`          | `Drag and drop files here to upload.`                     |
| `upload.defaultDropZoneNote`   | `''`                                                      |
| `upload.dropZoneNote`          | `Only {0} files are allowed.`                             |

## Right-to-Left Support

The following example demonstrates how to utilize the RTL support for the Upload.

{% meta height:280 %}
{% embed_file rtl/func/app.tsx preview %}
{% embed_file rtl/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Globalization]({% slug overview_globalization %})
-   [Internationalization]({% slug overview_intl %})
-   [Localization]({% slug localization_intl %})
