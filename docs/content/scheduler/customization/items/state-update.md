---
title: Trigger State Update
description: 'Learn how to trigger a parent state update by utilizing the provided context fo the SchedulerEditItem component.'
components: ["scheduler"]
slug: state-update_items_scheduler
---

# Overview

Trigger a state update of a parent item through its children, by utilizing the built-in React [context](https://react.dev/reference/react/hooks#context-hooks) and [hooks](https://react.dev/reference/react/hooks) functionalities.

The [SchedulerEditItem]({% slug edit-item_items_scheduler %}) provides each of it's `value/callback` pairs through context to be available for each of its child components.

This architecture allows the user to define `what` is happening on every action. The `SchedulerEditItem` already has a default callback handlers, which the developer can override if needed, or explicitly call after custom logic is executed.

## Accessing the Parent State

The `SchedulerEditItem` internal state can be modified by accessing the `value/callback` pair you want to modify, and call the `callback` to trigger an action.

> Accessing the parent state through its children does not toggle `controlled-state` of the component, but rather define `when` a state change must happen. If you want to control the internal state from outside, please refer to the [SchedulerEditItem Controlled State]({% slug edit-item_items_scheduler %}#controlling-the-editing)

Accessing the internal state can be done through:

-   [Custom Hooks](#custom-hooks)
-   [Context.Consumer](#context-consumer)

### Custom Hooks

The following hooks are available for each child [Functional Component](https://react.dev/reference/react/Component) of the `SchedulerEditItem`:

-   [useSchedulerEditItemDragItemContext]({% slug api_scheduler_usescheduleredititemdragitemcontext %})
-   [useSchedulerEditItemFormItemContext]({% slug api_scheduler_usescheduleredititemformitemcontext %})
-   [useSchedulerEditItemRemoveItemContext]({% slug api_scheduler_usescheduleredititemremoveitemcontext %})
-   [useSchedulerEditItemResizeItemContext]({% slug api_scheduler_usescheduleredititemresizeitemcontext %})
-   [useSchedulerEditItemShowOccurrenceDialogContext]({% slug api_scheduler_usescheduleredititemshowoccurrencedialogcontext %})
-   [useSchedulerEditItemShowRemoveDialogContext]({% slug api_scheduler_usescheduleredititemshowremovedialogcontext %})

In order the trigger a state change, use the desired `hook` inside your custom component:

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const [formItem, setFormItem] = useSchedulerEditItemFormItemContext();

    const handleClick = React.useCallback(
        () => { setFormItem(props.dataItem); },
        [setFormItem, props.dataItem]
    )

    return (<SchedulerItem {...props} onClick={handleClick} />)
}
```

### Context.Consumer

The following Contexts are available for each child [Class Component](https://react.dev/reference/react/Component) of the `SchedulerEditItem`:

-   [SchedulerEditItemDragItemContext]({% slug api_scheduler_scheduleredititemdragitemcontext %})
-   [SchedulerEditItemFormItemContext]({% slug api_scheduler_scheduleredititemformitemcontext %})
-   [SchedulerEditItemRemoveItemContext]({% slug api_scheduler_scheduleredititemremoveitemcontext %})
-   [SchedulerEditItemResizeItemContext]({% slug api_scheduler_scheduleredititemresizeitemcontext %})
-   [SchedulerEditItemShowOccurrenceDialogContext]({% slug api_scheduler_scheduleredititemshowoccurrencedialogcontext %})
-   [SchedulerEditItemShowRemoveDialogContext]({% slug api_scheduler_scheduleredititemshowremovedialogcontext %})

In order the trigger a state change, use the desired `context` inside your custom component:

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const [, setFormItem] = React.useContext(SchedulerEditItemFormItemContext);

    return (
        <SchedulerItem
            {...props}
            onClick={() => { setFormItem(props.dataItem); }}
        />
    );
};
```

## Custom Action Binding

Providing custom bindings for a specific component provides the ability to bind specific actions to state changes. This allows the developer to define a `middleware` to change what is happening on a specific event.

For example, the default `onDoubleClick` handler is changing the internal `formItem` state from `null` to the `props.dataItem` (if `props.isRecurring` is false) which leads to the `form` dialog to be rendered, thus triggering edit. If the application requires such action to be triggered on `onClick`, the developer must handle the `onClick` callback of the `SchedulerItem` and set the corresponding `formItem` state of it's `SchedulerEditItem` parent.

The following example extends the [Attaching callback handlers]({% slug item_items_scheduler %}#toc-attaching-callback-handlers) demo, to provide editing through the visualized popup.

{% meta height:700 %}
{% embed_file items/context/action-binding/func/app.tsx preview %}
{% embed_file items/context/action-binding/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [Scheduler Context]({% slug context_scheduler %})
-   [Slot Context]({% slug state-update_slots_scheduler %})
-   [SchedulerEditSlot]({% slug api_scheduler_schedulereditslot %})
-   [SchedulerSlot]({% slug slot_slots_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
