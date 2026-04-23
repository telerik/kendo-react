---
title: Keyboard Navigation
description: 'Use the KendoReact Upload keyboard navigation in React projects.'
components: ["upload"]
slug: keyboard_navigation_upload
position: 60
---

# Keyboard Navigation

The keyboard navigation of the Upload is always available.

The Upload supports the following keyboard shortcuts.

| SHORTCUT      | DESCRIPTION                                                                 |
| :------------ | :-------------------------------------------------------------------------- |
| `Esc`         | Cancels the upload of the highlighted file.                                 |
| `Enter`       | Retries the upload of the failed file, or opens the **Select file** dialog. |
| `Space`       | Opens the **Select file** dialog if the **Select files** button is focused. |
| `Delete`      | Removes or cancels the highlighted file.                                    |
| `Tab`         | Blurs the Upload and moves the focus to the next focusable element on page. |
| `Down Arrow`  | Highlights the next file or the **Clear** button.                           |
| `Up Arrow`    | Highlights the previous file or the **Select files** button.                |
| `Left Arrow`  | Navigates between the **Clear** and **Upload** buttons.                     |
| `Right Arrow` | Navigates between the **Clear** and **Upload** buttons.                     |

{% meta height:280 %}
{% embed_file manual_upload/func/app.tsx preview %}
{% embed_file manual_upload/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Upload]({% slug api_upload_uploadprops %})
