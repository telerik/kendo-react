---
title: useDroppable
description: "Learn how to build custom functionality when working with the React Common by Kendo UI with the help of the useDroppable."
api_reference: true
type: inner_api
slug: api_common_usedroppable
---

# useDroppable
Represents the KendoReact `useDroppable` hook.
Use it to attach `drop` events to a native HTML DOM elements, or custom React Components.

For more information, refer to the [KendoReact Droppable](https://www.telerik.com/kendo-react-ui/components/common/drag-and-drop/droppable) article.

#### Parameters
##### ref
<code>


RefObject&lt;"null" | HTMLElement | { element: "null" | HTMLElement; }&gt;


</code>
The `ref` of the HTML Element or React Component which will enable the `droppable` functionality.

##### callbacks
<code>


{ onDragEnter?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onDragLeave?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onDragOver?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; onDrop?: (event: [NormalizedDragEvent]({% slug api_common_normalizeddragevent %})) => void; }


</code>
A collection of callbacks, called by the `useDroppable` hook when a specific action occurs.

##### options
<code>


[DroppableOptions]({% slug api_common_droppableoptions %})


</code>
The options for the `useDroppable` hook.

