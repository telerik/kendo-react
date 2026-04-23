---
title: Resizing
description: 'Learn more about the resizing options supported by the KendoReact Editor and how to configure them in your React application.'
components: ["editor"]
slug: resizing_editor
position: 11
---

# Resizing

The React Editor component, part of KendoReact, provides a resizing feature that you can enable by setting the `resizable` prop. You can also allow the resizing of images by using the provided built-in plugin.

## Editor Resizing

To enable the Editor resizing, set the [`resizable`]({% slug api_editor_editorprops %}#toc-resizable) prop to `true`. To restrict the Editor width and height, set the desired `minWidth`, `minHeight`, `maxWidth`, and `maxHeight` values through Editor's `style` prop. You can configure the resize direction through the Editor's [`resize`](https://developer.mozilla.org/en-US/docs/Web/CSS/resize) `style` prop.

The following example shows how to enable and configure the resizing.

{% meta height:460 %}
{% embed_file resizing/editor/func/app.tsx preview %}
{% embed_file resizing/editor/func/main.tsx %}
{% endmeta %}

## Images Resizing

To enable the resizing of images, add the image resizing plugin to the plugins collection.

{% meta height:580 %}
{% embed_file resizing/images/func/app.tsx preview %}
{% embed_file resizing/images/func/main.tsx %}
{% endmeta %}

## Tables Resizing

To enable the resizing of tables, use the `tableResizing` function to add the table resizing plugins collection to the Editor.

Once you enable the resizing of tables, the users can alter the size of the following elements:

-   Columns and Rows&mdash;hover over the border of a cell, and a resize handle will appear. Drag the handle to resize the column or row.
-   Tables&mdash;click in the table to set the caret/selection inside it and the resize handles will appear.

{% meta height:580 %}
{% embed_file resizing/tables/func/app.tsx preview %}
{% embed_file resizing/tables/func/main.tsx %}
{% embed_file resizing/tables/func/content.ts %}
{% endmeta %}

## Suggested Links

-   [React Rich Text Editor](slug://overview_editor)
-   [API Reference of the Editor]({% slug api_editor_editor %})
