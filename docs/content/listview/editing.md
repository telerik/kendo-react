---
title: Editing
description: 'Get started with the editing capabilities of the KendoReact ListView and how to edit of items.'
components: ["listview"]
slug: editing_listview
position: 4
---

# Editing

The KendoReact ListView allows editing the items on the list.

## Basic Usage

The following example demonstrates how to render an item in two different states (read-only or edit) based on a boolean value.
In the example, we keep the state for each item, to only update that item during editing instead of the entire list.
Updating the entire list is also possible if we have depending values like aggregates.

{% meta height:580 %}
{% embed_file editing/func/app.tsx preview %}
{% embed_file editing/func/main.tsx %}
{% embed_file editing/func/myItemRender.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListView]({% slug api_listview_listviewprops %})
