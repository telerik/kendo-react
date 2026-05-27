---
title: Drag and Drop to Reorder TabStrip Tabs
description: 'Learn how to enable drag-and-drop reordering for tabs in the KendoReact TabStrip using the useDraggable and useDroppable hooks.'
type: how-to
page_title: Drag and Drop to Reorder Tabs - KendoReact TabStrip
slug: tabstrip-drag-drop-reorder-tabs
tags: kendoreact, tabstrip, layout, drag, drop, reorder, tabs
res_type: kb
ticketid: 1711456
category: knowledge-base
components: ["tabstrip"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>14.4.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact TabStrip</td>
        </tr>
    </tbody>
</table>

## Description

The KendoReact TabStrip does not support drag-and-drop reordering of tabs out of the box. I want to allow end users to rearrange tabs by dragging them.

## Solution

Render a custom element inside the `title` prop of each `TabStripTab` and attach drag-and-drop behavior to it using the [`useDraggable`](slug:api_common_usedraggable) and [`useDroppable`](slug:api_common_usedroppable) hooks from `@progress/kendo-react-common`. When a drop occurs, update the array of tabs in state and recalculate which index is selected so the active tab stays the same after the reorder.

The example below demonstrates the complete approach:

<demo metaUrl="knowledge-base/layout/tabstrip-drag-drop-reorder-tabs/" height="400"></demo>

## See Also

-   [TabStrip Documentation](slug:overview_tabstrip)
-   [TabStrip API](slug:api_layout_tabstripprops)
-   [Drag and Drop Overview](slug:overview_drag-and-drop)
-   [`useDraggable` Hook API](slug:api_common_usedraggable)
-   [`useDroppable` Hook API](slug:api_common_usedroppable)
