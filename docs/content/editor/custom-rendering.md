---
title: Custom Rendering
description: 'Enable the rendering customization of the KendoReact Editor in React projects.'
components: ["editor"]
slug: customrendering_editor
position: 6
---

# Custom Rendering

The React Editor, part of KendoReact, provides options for customizing the way it renders its elements&mdash;for example, HTML wrapper element, tools, and dialogs.

The following example demonstrates how to create a custom Editor with the `Bold`, `Italic`, `Underline`, and `Link` tools, and an **Insert Link** dialog.

{% meta height:420 %}
{% embed_file custom-editor/func/app.tsx preview %}
{% embed_file custom-editor/func/main.tsx %}
{% embed_file custom-editor/func/EditorCustom.tsx %}
{% embed_file custom-editor/func/InsertLinkDialog.tsx %}
{% embed_file custom-editor/func/customToolRendering.tsx %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
