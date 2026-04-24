---
title: Tiles
description: "Use the configuration options of the TileLayout tiles and set their positions and dimensions as well as their resize, drag, and scrolling behavior in React projects."
components: ["tilelayout"]
slug: tiles_tilelayout
position: 3
---

# Tiles

The TileLayout provides options for setting the behavior of its tiles.

By using these options, you can configure the following tile features:

* [Position and Dimensions](#toc-position-and-dimensions)
* [Controlling the Position](#toc-controlling-the-position)
* [Resizing](#toc-resizing)
* [Reordering](#toc-reordering)
* [Custom Rendering](#toc-custom-rendering)

## Position and Dimensions

There are several properties that control the position and dimensions of the TileLayout tiles. You can pass these properties either as a [defaultPosition]({% slug api_layout_tilelayoutitem %}#toc-defaultPosition) object for each tile (uncontrolled mode), or though the [positions]({% slug api_layout_tilelayoutprops %}#toc-positions) property of the TileLayout component. See [Controlling the Position](#toc-controlling-the-position) for details.

The possible configuration options are:

* [col]({% slug api_layout_tileposition %}#toc-col) (Required)&mdash;Defines on which column-line the tile will start. The _reordering_ and _resizing_ functionalities require it to work as expected.
* [row]({% slug api_layout_tileposition %}#toc-row)&mdash;Defines on which row-line the tile will start.
* [colSpan]({% slug api_layout_tileposition %}#toc-colSpan)&mdash;Specifies the number of cols that the tile spans.
* [rowSpan]({% slug api_layout_tileposition %}#toc-rowSpan)&mdash;Specifies the number of rows that the tile spans.
* [order]({% slug api_layout_tileposition %}#toc-order)&mdash;Defines the order index of the tile. If not set, tiles will receive a sequential order.



{% meta height:560 %}
{% embed_file tilelayout/tiles/positions/func/app.tsx preview %}
{% embed_file tilelayout/tiles/positions/func/main.tsx %}
{% endmeta %}


## Controlling the Position

The TileLayout provides options for controlling the position of each item by using the [positions]({% slug api_layout_tilelayoutprops %}#toc-positions) property of the TileLayout.

To manage the positions of the TileLayout items:

1. Use its [`positions`]({% slug api_layout_tilelayoutprops %}#toc-positions) property.
1. Handle the [`onReposition`]({% slug api_layout_tilelayoutprops %}#toc-onReposition) event.
1. Pass the new value through the props.



{% meta height:350 %}
{% embed_file tilelayout/tiles/controlled-mode/func/app.tsx preview %}
{% embed_file tilelayout/tiles/controlled-mode/func/main.tsx %}
{% endmeta %}


## Resizing

Users can resize the tiles by dragging their bottom and right-hand side borders or the bottom-right corner. Use the [resizable]({% slug api_layout_tilelayoutitem %}#toc-resizable) property to determine if the tile can be resized or allow one-direction resizing only.

The possible values are:
* `'horizontal'`&mdash;Users can resize the tile only in a horizontal direction by using the right resize handle.
* `'vertical'`&mdash;Users can resize the tile only in a vertical direction by using the bottom resize handle.
* `true` (Default)&mdash;Users can resize the tile in both horizontal and vertical directions by using the resize handles from the right and bottom sides and bottom-right corner.
* `false`&mdash;Users cannot resize the tile.

Extending a tile in the direction of an adjacent tile will push the adjacent tile down on the next row but on the same column-line. Narrowing a tile produces a gap that can be filled by another, if it fits and if it's on the same column-line.

> Note: The resizing functionality is enabled by default.



{% meta height:500 %}
{% embed_file tilelayout/tiles/resizing/func/app.tsx preview %}
{% embed_file tilelayout/tiles/resizing/func/main.tsx %}
{% endmeta %}


## Reordering

Users can reorder the tiles by dragging the whole item space. Use the [reorderable]({% slug api_layout_tilelayoutitem %}#toc-reorderable) boolean property to configure dragging.

Dragging a tile in the direction of an adjacent tile will push the adjacent tile down on the next row but on the same column-line. The initial placement of the dragged tile can be filled by another, if it fits and if it's on the same column-line. Non-reorderable tiles can fill gaps from reordering other tiles.

> Note: The reordering functionality is enabled by default.



{% meta height:500 %}
{% embed_file tilelayout/tiles/reordering/func/app.tsx preview %}
{% embed_file tilelayout/tiles/reordering/func/main.tsx %}
{% endmeta %}


## Custom Rendering

The TileLayout tiles enable you to customize its whole appearance. For that purpose, use the [item]({% slug api_layout_tilelayoutitem %}#toc-item) property.

The following example demonstrates how to customize the look and feel of the tiles.



{% meta height:300 %}
{% embed_file tilelayout/tiles/custom-rendering/func/app.tsx preview %}
{% embed_file tilelayout/tiles/custom-rendering/func/main.tsx %}
{% endmeta %}


## Suggested Links

* [API Reference of the TileLayout]({% slug api_layout_tilelayout %})
* [API Reference of the TileLayoutProps]({% slug api_layout_tilelayoutprops %})
* [API Reference of the TileLayoutItem]({% slug api_layout_tilelayoutitem %})
