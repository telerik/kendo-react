---
title: Draggable
description: 'Get started with the useDraggable hook and Draggable component, and learn how to add drag functionality to a native HTML Element or custom React Component'
components: ["drag&drop"]
slug: draggable_drag-and-drop
position: 3
---

# Getting Started with Draggable

The `useDraggable` hook and `Draggable` component enable the user to drag a native HTML Element or custom React Component.

The `draggable` functionality provides the following callbacks which enable the developer to implement custom positioning, styling, or behavior based on the current application state and the event arguments:

-   [onPress]({% slug api_common_draggableprops %}#toc-onpress)&mdash;A callback indicating that the `draggable` item has been pressed, but not dragged yet.
-   [onDragStart]({% slug api_common_draggableprops %}#toc-ondragstart)&mdash;A callback indicating that the `draggable` item has been dragged for the first time.
-   [onDrag]({% slug api_common_draggableprops %}#toc-ondrag)&mdash;A callback called on every `pointer`/`touch` action, indicating that a drag is happening.
-   [onDragEnd]({% slug api_common_draggableprops %}#toc-ondragend)&mdash;A callback indicating that the `draggable` item is no longer being dragged.
-   [onRelease]({% slug api_common_draggableprops %}#toc-onrelease)&mdash;A callback indicating that the `draggable` item has been released.

## Basic Usage

The following example demonstrates the `draggable` functionality in action.

{% meta height:280 %}
{% embed_file drag-and-drop/drag/basic/func/app.tsx preview %}
{% embed_file drag-and-drop/drag/basic/func/main.tsx %}
{% endmeta %}

## Registering for Drag

To register an element/component to the `useDraggable` hook, pass it as the first parameter. For the `Draggable` component, it is enough to provide a single `children` prop to the component.

In the following section, you will learn how to:

-   Pass a native HTML element to the `useDraggable` hook or the `Draggable` component.
-   Pass a custom React component to the `useDraggable` hook or the `Draggable` component.

### Native HTML Element

To pass a native HTML Element to the `useDraggable` hook, obtain the `ref` object by using the `React.useRef` hook.

> You can use the same `ref` object for other parts of your application, as long as you do not mutate it directly.

```tsx
const element = React.useRef<HTMLDivElement>(null);
// ...
useDraggable(element, {});
// ...
return <div ref={element}>Drag Me</div>;
```

The `Draggable` component will obtain the `ref` of the child component. If you require a `reference`, use the [childRef]({% slug api_common_draggableprops %}#toc-childRef).

```tsx
const element = React.useRef<HTMLDivElement>(null);
// ...
React.useEffect(() => {
    // Sample code
    element.current?.focus();
}, []);
// ...
return (
    <Draggable childRef={element}>
        <div>Drag Me</div>
    </Draggable>
);
```

### Custom React Component

To pass a custom Functional Component to the `useDraggable` hook:

1. Wrap the component in [`React.forwardRef`](https://react.dev/reference/react/forwardRef#forwarding-a-ref-through-multiple-components) to obtain the `ref`.

    ```tsx
    const CustomComponent = React.forwardRef<HTMLDivElement>((props, ref) => {
        return <div ref={ref}>Drag Me</div>;
    });
    ```

    Alternatively, if you are already using the `ref` and [applying additional properties](https://react.dev/reference/react/useImperativeHandle), add the `element` field to the `ref`, which will resolve to the HTML element underneath.

    ```tsx
    const CustomComponent = React.forwardRef<{ element: HTMLDivElement | null }>((props, ref) => {
        const element = React.useRef<HTMLDivElement>(null);

        React.useImperativeHandle(ref, () => ({
            element: element.current
        }));

        return <div ref={element}>Drag Me</div>;
    });
    ```

2. Obtain the `ref` of your `CustomComponent` and pass it to the `useDraggable` hook.

    ```tsx
    const component = React.useRef<HTMLDivElement>(null);
    // ...
    useDraggable(component, {});
    // ...
    return <CustomComponent ref={component}>Drag Me</CustomComponent>;
    ```

Alternatively, you can wrap your `CustomComponent` into a `Draggable` component.

```tsx
return (
    <Draggable>
        <CustomComponent>Drag Me</CustomComponent>
    </Draggable>
);
```

## Handling Drag Events

The KendoReact `drag` callbacks provide the necessary information to apply correct positioning on the page. The `drag` can be positioned `relatively` to its parent or `absolutely` in the document body.

### Relative Positioning

To calculate the `drag` position correctly, you need:

-   The initial `clientX`/`clientY`&mdash;The `client` coordinates where the `dragging` begins.
-   The current `clientX`/`clientY`&mdash;The `client` coordinates of the current positioning of the `pointer`.
-   The `offsetX`/`offsetY`&mdash;The `offset` coordinates indicating where the `pointer` was positioned relative to the `drag`.
-   The `scrollX`/`scrollY`&mdash;The `scroll` coordinates required to account for the current scroll position of the parent.

To position the `drag` relative to its parent:

1. Set the initial [`offsetX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) and [`offsetY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY) values by handling the `onPress` callback.

    ```tsx
    const handlePress = (event: NormalizedDragEvent) => {
        setOffset({ x: event.offsetX, y: event.offsetY });
    };
    ```

1. Set the initial [`clientX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and [`clientY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) values by handling the `onDragStart` callback.

    ```tsx
    const handleDragStart = (event: NormalizedDragEvent) => {
        setInitial({ x: event.clientX - offset.x, y: event.clientY - offset.y });
    };
    ```

1. Calculate the current position of the `drag` by handling the `onDrag` callback.

    ```tsx
    const handleDrag = (event: NormalizedDragEvent) => {
        setTranslate({
            x: event.clientX - initial.x - offset.x + event.scrollX,
            y: event.clientY - initial.y - offset.y + event.scrollY
        });
    };
    ```

1. Finally, apply the `transform` style to the element.

    ```tsx
    return (
        <div
            style={{
                transform: `translate(${translate.x}px, ${translate.y}px)`
            }}
        >
            Drag Me
        </div>
    );
    ```

### Absolute Positioning

Absolute positioning is most-suitable for scenarios where the drag might happen between two different parent elements.

To calculate the `drag` position correctly, you need:

-   The initial `clientX`/`clientY`&mdash;The `client` coordinates where the `dragging` begins.
-   The current `clientX`/`clientY`&mdash;The `client` coordinates of the current positioning of the `pointer`.
-   The offsetX/offsetY&mdash;The `offset` coordinates indicating where the `pointer` was positioned relative to the `drag`.

> Due to the `drag` being positioned `absolutely` within the `body` element, there is no need to account for the `scroll` coordinates of the parent.

To position the `drag` element `absolutely`:

1. Set the initial [`offsetX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) and [`offsetY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY) values by handling the `onPress` callback.

    ```tsx
    const handlePress = (event: NormalizedDragEvent) => {
        setOffset({ x: event.offsetX, y: event.offsetY });
    };
    ```

1. Set the initial [`clientX`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) and [`clientY`](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) values by handling the `onDragStart` callback.

    ```tsx
    const handleDragStart = (event: NormalizedDragEvent) => {
        setInitial({ x: event.clientX - offset.x, y: event.clientY - offset.y });
    };
    ```

1. Calculate the current position of the `drag` by handling the `onDrag` callback.

    ```tsx
    const handleDrag = (event: NormalizedDragEvent) => {
        setCoordinates({
            x: event.clientX - initial.x - offset.x,
            y: event.clientY - initial.y - offset.y
        });
    };
    ```

1. Finally, apply the `transform` style to the element.

    ```tsx
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                left: coordinates.x,
                top: coordinates.y
            }}
        >
            Drag Me
        </div>,
        document.body
    );
    ```

## Suggested Links

-   [Getting Started with the KendoReact Layout Package]({% slug getstarted_layout %})
-   [API Reference of the `useDraggable` hook]({% slug api_common_usedraggable %})
-   [API Reference of the `useDroppable` hook]({% slug api_common_usedroppable %})
-   [API Reference of the `Draggable` Component]({% slug api_common_draggable %})
-   [API Reference of the `Droppable` Component]({% slug api_common_droppable %})
-   [API Reference of the `DragAndDrop` Component]({% slug api_common_draganddrop %})
