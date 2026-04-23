---
title: Rendering Modes
description: 'Enable the edit mode customization of the KendoReact Editor in React projects.'
components: ["editor"]
slug: renderingmode_editor
position: 5
---

# Rendering Modes

By default, the React Editor, part of KendoReact, will render its content in an `iframe` element.

To render the React Editor, part of KendoReact, content in a `div` element, set the [`defaultEditMode`]({% slug api_editor_editorprops %}#toc-defaulteditmode) property to `div`.

The following example demonstrates how to change the rendering mode and how to style the Editor content.

{% meta height:470 %}
{% embed_file rendering-mode/func/app.tsx preview %}
{% embed_file rendering-mode/func/main.tsx %}
{% embed_file rendering-mode/func/styles.css %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
