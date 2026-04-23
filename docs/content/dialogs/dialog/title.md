---
title: Title
description: 'Display a title in the KendoReact Dialog and customize its behavior.'
components: ["dialog"]
slug: title_dialog
position: 1
---

# Title

The Dialog provides options for displaying a title and customizing its behavior.

To set a title to the Dialog, use its [`title`]({% slug api_dialogs_dialogprops %}#toc-title) property.

{% meta height:450 %}
{% embed_file dialog/title/title-property/func/app.tsx preview %}
{% embed_file dialog/title/title-property/func/main.tsx %}
{% endmeta %}

To customize the title, add components, functions, or HTML elements.

{% meta height:450 %}
{% embed_file dialog/title/title-template/func/app.tsx preview %}
{% embed_file dialog/title/title-template/func/main.tsx %}
{% endmeta %}

If `title` is not specified, the Dialog will not display a title.

{% meta height:450 %}
{% embed_file dialog/title/no-title/func/app.tsx preview %}
{% embed_file dialog/title/no-title/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Dialog]({% slug api_dialogs_dialog %})
