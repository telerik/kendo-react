---
title: Multiple Selection
description: 'Learn how to implement multi-select editing throw dragging or resizing for the KendoReact SchedulerEditItem'
components: ["scheduler"]
slug: multiple-selection_items_scheduler
position: 4
---

# Multiple Selection

The KendoReact `SchedulerEditItem` component supports multiple event selection, which allows for quick and easy `dragging` or `resizing` of multiple items all at once.

> For future versions of the `@progress/kendo-react-scheduler` we aim to support editing of multiple events at once through `form`.

By default, the `SchedulerEditItem` enables `selecting` multiple items by holding the `CTRL` (`COMMAND` on MacOS) key. Dragging or resizing a single item while holding `CTRL`(`COMMAND` on MacOS) will edit all selected items at once.

## Default behavior

The following example demonstrates the `multiple` selection and editing of the KendoReact `SchedulerEditItem` component.

| SHORTCUT                               | DESCRIPTION                              |
| :------------------------------------- | :--------------------------------------- |
| `CTRL` (`COMMAND` on MacOS) + `CLICK`  | Add or remove an item from the selection |
| `CTRL` (`COMMAND` on MacOS) + `DRAG`   | Drag all selected items                  |
| `CTRL` (`COMMAND` on MacOS) + `RESIZE` | Resize all selected items                |

{% meta height:700 %}
{% embed_file items/multiple-selection/default-behavior/func/app.jsx preview %}
{% embed_file items/multiple-selection/default-behavior/func/main.jsx %}
{% endmeta %}

## Custom Trigger

While the `SchedulerEditItem` aims to provide an intuitive default behavior, the `multiple selection` behavior can be customized according to application requirements.

The following example demonstrates how to change the default `multiple` toggle key from `CTRL` to `SHIFT`.

{% meta height:700 %}
{% embed_file items/multiple-selection/custom-trigger/func/app.jsx preview %}
{% embed_file items/multiple-selection/custom-trigger/func/main.jsx %}
{% embed_file items/multiple-selection/custom-trigger/func/custom-item.jsx %}
{% endmeta %}

## Custom Implementation

Providing an entirely custom behavior for the multiple editing in the context of the `SchedulerEditItem` component can be achieved through returning one or many predefined `actions` for each specific user `event`.

> For additional information and a list of all available actions can be found in the [SchedulerEditItemAction]({% slug api_scheduler_scheduleredititemaction %}).

The default behavior has those predefined `actions` in the `defaultProps` of the component. For example, here is the default internal behavior of the `onClickAction` callback:

```jsx
SchedulerEditItem.defaultProps = {
    onClickAction: (event) => [
        {
            type:
                event.syntheticEvent.metaKey || event.syntheticEvent.ctrlKey
                    ? ITEMS_SELECT_ACTION.add
                    : ITEMS_SELECT_ACTION.select
        }
    ]
};
```

If, however, the application requirements are different and `selection` should happen on `doubleClick` instead of on `click`, the following customization can be applied:

-   Disabled the default `onClickAction` by providing a `null` as a value;
-   Return the `ITEMS_SELECT_ACTION` type for the `onDoubleClickAction`;

```jsx
<SchedulerEditItem
    {...props}
    onClickAction={null}
    onDoubleClick={(event) => [
        {
            type:
                event.syntheticEvent.metaKey || event.syntheticEvent.ctrlKey
                    ? ITEMS_SELECT_ACTION.add
                    : ITEMS_SELECT_ACTION.select
        }
    ]}
/>
```

Another requirement might be to entirely disable `multiple-selection`. To achieve this, simply remove the `ITEMS_SELECT_ACTION.add` from the returned actions:

```jsx
<SchedulerEditItem {...props} onClickAction={null} onDoubleClick={(event) => [{ type: ITEMS_SELECT_ACTION.select }]} />
```

The following example demonstrates a custom behavior of the `multiple-selection`, where an item is selected on `ENTER` key-down. Then, `multi-drag` and `multi-resize` is always triggered, even without holding `CTRL`.

| SHORTCUT        | DESCRIPTION                                   |
| :-------------- | :-------------------------------------------- |
| `FOCUS`         | Additional `focus` style is applied           |
| `ENTER`         | `add` item to selection                       |
| `DRAG`          | `drag` all selected items                     |
| `RESIZE`        | `resize` all selected items                   |
| `ESC`           | resets the `selection`                        |
| `TAB`           | `focus` the `next` item, without selecting it |
| `TAB` + `SHIFT` | `focus` the `prev` item, without selecting it |

{% meta height:700 %}
{% embed_file items/multiple-selection/custom-behavior/func/app.jsx preview %}
{% embed_file items/multiple-selection/custom-behavior/func/main.jsx %}
{% embed_file items/multiple-selection/custom-behavior/func/custom-item.jsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the SchedulerEditItem]({% slug api_scheduler_scheduleredititem %})
-   [All available SchedulerEditItem `actions`]({% slug api_scheduler_scheduleredititemaction %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
