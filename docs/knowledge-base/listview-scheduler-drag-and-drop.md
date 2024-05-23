---
title: Drag and Drop Items from KendoReact ListView to KendoReact Scheduler
description: Learn how to enable drag and drop functionality between KendoReact ListView and Scheduler components.
type: how-to
page_title: How to Enable Drag and Drop between KendoReact ListView and Scheduler
slug: drag-drop-kendoreact-listview-scheduler
tags: react, kendoReact, drag and drop, ListView, Scheduler
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | KendoReact |
| Version | 7.0.2|

## Description

Looking for a drag and drop between KendoReact ListView and KendoReact Scheduler. I want to transfer items from the ListView to the Scheduler.

## Solution

To enable drag and drop functionality between a KendoReact ListView and a KendoReact Scheduler, follow these steps:

1. Render a custom ListView item by using the [`item`](https://www.telerik.com/kendo-react-ui/components/listview/api/ListViewProps/#toc-item) prop. This allows you to make the row draggable and obtain the currently dragged item.
1. Add an `onDropEvent` to the Scheduler container using the [component ref](https://react.dev/reference/react/useRef).
1. When the user drops an item, add it to the Scheduler data by updating the state.

{% meta id:index height:900 %}
{% embed_file scheduler/dnd-from-listview/main.jsx preview %}
{% embed_file shared/data.js %}
{% endmeta %}

## Notes

- Make sure to install the required dependencies, such as `react-dnd`, `@progress/kendo-react-listview`, and `@progress/kendo-react-scheduler`.
- Refer to the official documentation for more information on the `DragSource` and `useRef` APIs.
- Adjust the code according to your specific use case and requirements.

## See Also

- [KendoReact ListView Documentation](https://www.telerik.com/kendo-react-ui/components/listview/)
- [KendoReact Scheduler Documentation](https://www.telerik.com/kendo-react-ui/components/scheduler/)
