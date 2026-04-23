---
title: Drag and Drop
description: 'Get started with the React ListBox and learn how to set up the drag and drop functionality.'
components: ["listbox"]
slug: draganddrop_listbox
position: 50
---

# Drag and Drop

The KendoReact ListBox enables users to drag and drop items within the same list, to reorder them, or to move them between lists.

## Setup

The drag and drop functionality has the following requirements:

1. Use the [onDragStart]({% slug api_listbox_listboxprops %}#toc-ondragstart) event of the ListBox to save in the state which item is being dragged.
1. Utilize the [onDrop]({% slug api_listbox_listboxprops %}#toc-ondrop) event to capture where the item was dropped.
1. With the `onDrop` event, use the [processListBoxDragAndDrop]({% slug api_listbox_processlistboxdraganddrop %}) method, which will automatically process the data based on the provided parameters.

## Basic Usage

The following example demonstrates the ListBox drag and drop functionality in action.

{% meta height:500 %}
{% embed_file drag-and-drop/func/app.tsx preview %}
{% embed_file drag-and-drop/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ListBox]({% slug api_listbox_listboxprops %})
-   [API Reference of the ListBoxToolbar]({% slug api_listbox_listboxtoolbarprops %})
-   [draggable API](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)
-   [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
