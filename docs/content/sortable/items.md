---
title: Items
description: 'Get started with the KendoReact Sortable component and learn how to enable and disable its items.'
components: ["sortable"]
slug: items_sortable
position: 3
---

# Items

You can [disable](#disabling-items) and provide an [item](#using-the-item-component) or an [empty item](#using-the-empty-item-component) component when you render the items of the Sortable component.

## Disabling Items

To disable the items of the Sortable, define its [`disabledField`]({% slug api_sortable %}#toc-disabledindexes) property.

{% meta height:330 %}
{% embed_file disabled/func/app.tsx preview %}
{% embed_file disabled/func/main.tsx %}
{% endmeta %}

## Using the Item Component

The component that you pass to [`itemUI`]({% slug api_sortable_sortableprops %}#toc-itemUI) receives [`SortableItemUIProps`]({% slug api_sortable_sortableitemuiprops %}) as its properties. When you implement the item component, pass the following props to the first element child:

-   [`attributes`]({% slug api_sortable_sortableitemuiprops %}#toc-attributes)
-   [`forwardRef`]({% slug api_sortable_sortableitemuiprops %}#toc-forwardRef)
-   [`style`]({% slug api_sortable_sortableitemuiprops %}#toc-style)

```jsx
const SortableItemUI = (props) => {
    const { style, attributes, forwardRef, dataItem } = props;

    return (
        <div
            {...attributes}
            ref={forwardRef}
            style={{
                ...style
            }}
        >
            {dataItem.text}
        </div>
    );
};
```

## Using the Empty Item Component

The component that you pass to [`emptyItemUI`]({% slug api_sortable_sortableprops %}#toc-emptyitemui) receives [`SortableEmptyItemUIProps`]({% slug api_sortable_sortableemptyitemuiprops %}) as its properties. The empty item component will be rendered when the data of the Sortable is empty.

```jsx
const SortableEmptyItemUI = (props: SortableEmptyItemUIProps) => {
    const { message } = props;

    return <div>{message}</div>;
};
```

## Suggested Links

-   [API Reference of the Sortable]({% slug api_sortable %})
