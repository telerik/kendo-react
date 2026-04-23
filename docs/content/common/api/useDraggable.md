---
title: useDraggable
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the useDraggable."
api_reference: true
type: inner_api
slug: api_common_usedraggable
---

# useDraggable
Represents the KendoReact `useDraggable` hook.
Use it to attach `drag` events to a native HTML DOM elements, or custom React Components.

For more information, refer to the [KendoReact Draggable](https://www.telerik.com/kendo-react-ui/components/common/drag-and-drop/draggable) article.

#### Parameters
##### ref
<code>


RefObject&lt;"null" | HTMLElement | { element: "null" | HTMLElement; }&gt;


</code>
The `ref` of the HTML Element or React Component which will enable the `draggable` functionality.

##### callbacks
<code>


{ onDrag?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onDragEnd?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onDragStart?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onPress?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onRelease?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; }


</code>
A collection of callbacks, called by the `useDraggable` hook when a specific action occurs.

##### options
<code>


[DraggableOptions]({% slug api_common_draggableoptions %})


</code>
Additional configuration of the `useDraggable` hook.

