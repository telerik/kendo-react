---
title: Droppable
description: 'Get started with the useDroppable hook and Droppable component, and learn how to add drop functionality to a native HTML Element or custom React Component'
components: ["drag&drop"]
slug: droppable_drag-and-drop
position: 4
---

# Getting Started with Droppable

The `useDroppable` hook and `Droppable` component allow a native HTMLElement or custom React Component to become a `drop` target during a `drag`.

The `droppable` functionality provides the following callbacks which enable the developer to implement custom positioning, styling, or behavior based on the current application state and the event arguments:

-   [onDragEnter]({% slug api_common_droppableprops %}#toc-ondragenter)&mdash;A callback indicating that a `draggable` item collides with the `drop` for the first time.
-   [onDragOver]({% slug api_common_droppableprops %}#toc-ondragover)&mdash;A callback called on every `pointer`/`touch` action and indicating that a `drag` is happening over the current `drop` instance.
-   [onDragLeave]({% slug api_common_droppableprops %}#toc-ondragleave)&mdash;A callback indicating that the `draggable` item is no longer colliding with the `drop`.
-   [onDrop]({% slug api_common_droppableprops %}#toc-ondrop)&mdash;A callback indicating that the `draggable` item has been dropped into the `drop`.

## Basic Usage

The following example demonstrates the `droppable` functionality in action.

{% meta height:360 %}
{% embed_file drag-and-drop/overview/func/app.tsx preview %}
{% embed_file drag-and-drop/overview/func/main.tsx %}
{% embed_file drag-and-drop/overview/func/draggable-button.tsx %}
{% embed_file drag-and-drop/overview/func/droppable-box.tsx %}
{% endmeta %}

## Registering for Drop

Before registering for `drop`, provide a common `DragAndDrop` parent for all `drag` and `drop` components. This enables the communication between the two functionalities.

```tsx
import { DragAndDrop } from '@progress/kendo-react-common';
// ..
return (
    <DragAndDrop>
        <DragComponent />

        <DropComponent />
        <DropComponent />
        <DropComponent />
        <DropComponent />
    </DragAndDrop>
);
```

To register an element/component to the `useDroppable` hook, pass it as the first parameter. For the `Droppable` component, it is enough to provide a single `children` prop to the component.

In the following section, you will learn how to:

-   Pass a native HTML element to the `useDroppable` hook or the `Droppable` component.
-   Pass a custom React component to the `useDroppable` hook or the `Droppable` component.

### Native HTML Element

-   To pass a native HTML Element to the `useDroppable` hook, obtain the `ref` object by using the `React.useRef` hook.

> You can use the same `ref` object for other parts of your application, as long as you do not mutate it directly.

```tsx
const element = React.useRef<HTMLDivElement>(null);
// ...
useDroppable(element, {});
// ...
return <div ref={element}>Drop Here</div>;
```

-   To pass a native HTML Element to the `Droppable` component, it is enough to pass the desired element as a direct child.

```tsx
return (
    <Droppable>
        <div>Drop Here</div>
    </Droppable>
);
```

-   The `Droppable` component will obtain the `ref` of the child component. If you require a `reference`, use the [`childRef`]({% slug api_common_droppableprops %}#toc-childRef).

```tsx
const element = React.useRef<HTMLDivElement>(null);
// ...
React.useEffect(() => {
    // Sample code
    element.current?.focus();
}, []);
// ...
return (
    <Droppable childRef={element}>
        <div>Drop Here</div>
    </Droppable>
);
```

### Custom React Component

There are two ways to pass a custom React Component to the `useDroppable` hook:

-   If the Component is a [Functional Component](https://react.dev/reference/react/Component):

    1. To obtain the `ref`, wrap the component in [`React.forwardRef`](https://react.dev/reference/react/forwardRef#forwarding-a-ref-through-multiple-components).

        ```tsx
        const CustomComponent = React.forwardRef<HTMLDivElement>((props, ref) => {
            return <div ref={ref}>Drop Here</div>;
        });
        ```

        Alternatively, if you are already using the `ref` and [applying additional properties](https://react.dev/reference/react/useImperativeHandle), add the `element` field to the ref, which will resolve to the HTML element underneath.

        ```tsx
        const CustomComponent = React.forwardRef<{ element: HTMLDivElement | null }>((props, ref) => {
            const element = React.useRef<HTMLDivElement>(null);

            React.useImperativeHandle(ref, () => ({
                element: element.current
            }));

            return <div ref={element}>Drop Here</div>;
        });
        ```

    2. Obtain the `ref` of your `CustomComponent` and pass it to the `useDroppable` hook.

        ```tsx
        const component = React.useRef<HTMLDivElement>(null);
        // ...
        useDroppable(component, {});
        // ...
        return <CustomComponent ref={component}>Drop Here</CustomComponent>;
        ```

## Handling Drop Events

The KendoReact `drop` callbacks provide additional information that you can leverage to implement custom styling that depends on the current `drag` state.

The following example demonstrates how to utilize the `drop` callbacks in order to show a visual clue on where the current `drag` will be dropped. Try to drag an item from one list to the other.

{% meta height:360 %}
{% embed_file drag-and-drop/drop/events/func/app.tsx preview %}
{% embed_file drag-and-drop/drop/events/func/main.tsx %}
{% embed_file drag-and-drop/drop/events/func/list.tsx %}
{% embed_file drag-and-drop/drop/events/func/list-item.tsx %}
{% embed_file drag-and-drop/drop/events/func/draggable-list-item.tsx %}
{% embed_file drag-and-drop/drop/events/func/droppable-list.tsx %}
{% embed_file drag-and-drop/drop/events/func/data.ts %}
{% endmeta %}

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
