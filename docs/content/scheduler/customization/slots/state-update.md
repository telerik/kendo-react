---
title: Trigger State Update
description: 'Learn how to trigger a parent state update by utilizing the provided context fo the SchedulerEditSlot component.'
components: ["scheduler"]
slug: state-update_slots_scheduler
---

# Overview

Trigger a state update of a parent slot through its children, by utilizing the built-in React [context](https://react.dev/reference/react/hooks#context-hooks) and [hooks](https://react.dev/reference/react/hooks) functionalities.

The [SchedulerEditSlot]({% slug api_scheduler_schedulereditslot %}) provides each of it's `value/callback` pairs through context to be available for each of its child components.

This architecture allows the user to define `what` is happening on every action. The `SchedulerEditSlot` already have a default callback handlers, which the developer can override if needed, or explicitly call after custom logic is executed.

## Accessing the Parent State

The `SchedulerEditSlot` internal state can be modified by accessing the `value/callback` pair you want to modify, and call the `callback` to trigger an action.

> Accessing the parent state through its children does not toggle `controlled-state` of the component, but rather define `when` a state change must happen. If you want to control the internal state from outside, please refer to the [SchedulerEditSlot Controlled State]({% slug api_scheduler_schedulereditslot %}#toc-controllingtheediting)

Accessing the internal state can be done through:

-   [Custom Hooks](#toc-custom-hooks)
-   [Context.Consumer](#toc-context-consumer)

### Custom Hooks

The following hooks are available for each child [Functional Component](https://react.dev/reference/react/Component) of the `SchedulerEditSlot`:

-   [useSchedulerEditSlotFormItemContext]({% slug api_scheduler_useschedulereditslotformitemcontext %})

In order to trigger a state change, use the desired `hook` inside your custom component:

```jsx-no-run
const CustomSchedulerSlot = (props) => {
    const [formItem, setFormItem] = useSchedulerEditSlotFormItemContext();

    const handleClick = React.useCallback(
        () => { setFormItem(createEmptyFormItem()); },
        [setFormItem]
    )

    return (<SchedulerSlot {...props} onClick={handleClick} />)
}
```

### Context.Consumer

The following Contexts are available for each child [Class Component](https://react.dev/reference/react/Component) of the `SchedulerEditSlot`:

-   [SchedulerEditSlotFormItemContext]({% slug api_scheduler_schedulereditslotformitemcontext %})

In order to trigger a state change, use the desired `context` inside your custom component:

```jsx-no-run
const CustomSchedulerSlot = (props) => {
    const [formItem, setFormItem] = React.useContext(SchedulerEditSlotFormItemContext);

    return (
        <SchedulerSlot
            {...props}
            onClick={() => { setFormItem(createEmptyFormItem()); }}
        />
    );
};
```

## Custom Action Binding

Providing custom bindings for a specific component provides the ability to bind specific actions to state changes. This allows the developer to define a `middleware` to change what is happening on a specific event.

For example, the default `onDoubleClick` handler is changing the internal `formItem` state from `null` to an `empty DataItem` with predefined `start`, `end`, `isAllDay` and `resources` of the slot. This state change triggers the display of the `form` dialog, thus triggering edit . If the application requires such action to be triggered on `onClick`, the developer must handle the `onClick` callback of the `SchedulerSlot` and set the corresponding `formItem` state of it's `SchedulerEditSlot` parent.

The following example demonstrates changing the internal `formItem` state of the `SchedulerEditSlot` through the `onClick` event of the `SchedulerSlot`.

{% meta height:700 %}
{% embed_file slots/context/action-binding/func/app.tsx preview %}
{% embed_file slots/context/action-binding/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the Scheduler]({% slug api_scheduler_scheduler %})
-   [Scheduler Context]({% slug context_scheduler %})
-   [Item Context]({% slug state-update_items_scheduler %})
-   [SchedulerEditItem]({% slug edit-item_items_scheduler %})
-   [SchedulerItem]({% slug item_items_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
