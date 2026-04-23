---
title: Context Мenu
description: 'Explore the integration of the ContextMenu component into the TreeList component for React.'
components: ["treelist"]
slug: context_menu_treelist
position: 115
---

# Context Menu

The KendoReact TreeList displays a context menu using the [`ContextMenu component`]({% slug overview_contextmenu %}). The right-click action triggers the context menu, and the [`onRowContextMenu` event]({% slug api_treelist_treelistrowcontextmenuevent %}) is fired when TreeList cells are rendered.

## Row Operations

You can add arbitrary options to the ContextMenu and execute different actions based on your application's requirements. The example demonstrates how to open a custom [`Dialog`]({% slug overview_dialog %}).

{% meta height:320 %}
{% embed_file context-menu/app.tsx preview %}
{% embed_file context-menu/main.tsx %}
{% embed_file context-menu/customDialog.tsx %}
{% embed_file context-menu/sampleData.ts %}
{% embed_file context-menu/sampleTypes.ts %}
{% endmeta %}

## Suggested Links

-   [TreeList API Reference]({% slug api_treelist %})

<div data-component="StartKendoReactFreeSection"></div>
