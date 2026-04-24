---
title: Title
description: 'Display a title in the KendoReact Window and customize its behavior.'
components: ["window"]
slug: title_window
position: 80
---

# Title

The Window provides options for displaying a title and customizing its behavior.

To set a title to the Window, use its [`title`]({% slug api_dialogs_windowprops %}#toc-title) property.

{% meta height:450 %}
{% embed_file window/title-basic/func/app.tsx preview %}
{% embed_file window/title-basic/func/main.tsx %}
{% endmeta %}

To customize the title, add а component.

{% meta height:450 %}
{% embed_file window/title-component/func/app.tsx preview %}
{% embed_file window/title-component/func/main.tsx %}
{% endmeta %}

If `title` is not specified, instead of a title, the Window will display a title bar with the default actions.

{% meta height:450 %}
{% embed_file window/title-no/func/app.tsx preview %}
{% embed_file window/title-no/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Learn about KendoReact Free.](slug:free_components_introduction)

-   [API Reference of the Window]({% slug api_dialogs_windowprops %})
