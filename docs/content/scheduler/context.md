---
title: Context Providers
description: 'Get started with the context providers used internally in the KendoReact Scheduler component. Access pre-calculated values or dispatch actions.'
components: ["scheduler"]
slug: context_scheduler
position: 700
---

# Context

The KendoReact Scheduler renders multiple context `providers` which can be `consumed` by every child component inside it. This architecture removes the need of passing every property down the tree, and makes it available through the built-in [React Context](https://react.dev/reference/react/hooks#context-hooks) and [React Hooks](https://react.dev/reference/react/hooks).

> This article covers the `context` provided by the root `Scheduler` component. For other context providers refer to the [Item Context]({% slug state-update_items_scheduler %}) and [Slot Context]({% slug state-update_slots_scheduler %}) articles.

Instead of having one big object called `SchedulerContext`, we split it to multiple smaller contexts to allow for more deterministic [Memoization](https://react.dev/reference/react/Component#shouldcomponentupdate) which depends on the context value.

The scheduler context `providers` allows access to:

-   [Static values](#toc-static-values)
-   [Internal Scheduler state](#toc-internal-state)
-   [Internal Scheduler reducers](#toc-reducers)

## Static values

The KendoReact `Scheduler` components applies additional calculations based on the provided properties. One example is how the `dateRange` is calculated based on the [numberOfDays]({% slug api_scheduler_schedulerviewprops %}#toc-numberofdays) and the internal `date` state. Some times those values might come in need when building custom components on top of the default [`Item`]({% slug overview_items_scheduler %}) and [`Slot`]({% slug overview_slots_scheduler %}) composition trees.

Because of this, we are providing any additional variables which the `Scheduler` creates through context. The contexts are available both through `custom hooks` and `Context.Consumer`.

### Custom Hooks

The following `custom hooks` are available for accessing `static values` inside the Scheduler:

-   [useSchedulerPropsContext]({% slug api_scheduler_useschedulerpropscontext %})
-   [useSchedulerViewsContext]({% slug api_scheduler_useschedulerviewscontext %})
-   [useSchedulerFieldsContext]({% slug api_scheduler_useschedulerfieldscontext %})
-   [useSchedulerGroupsContext]({% slug api_scheduler_useschedulergroupscontext %})
-   [useSchedulerDateRangeContext]({% slug api_scheduler_useschedulerdaterangecontext %})
-   [useSchedulerOrientationContext]({% slug api_scheduler_useschedulerorientationcontext %})

In order to access those values, use the desired `hook` inside your custom component:

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const { timezone } = useSchedulerPropsContext();

    return (
        <SchedulerItem {...props}>
            <Label>Timezone: <span>{timezone}</span></Label>
        </SchedulerItem>
    )
}
```

### Context.Consumer

The following `contexts` are available for accessing `static values` inside the Scheduler:

-   [SchedulerPropsContext]({% slug api_scheduler_schedulerpropscontext %})
-   [SchedulerViewsContext]({% slug api_scheduler_schedulerviewscontext %})
-   [SchedulerFieldsContext]({% slug api_scheduler_schedulerfieldscontext %})
-   [SchedulerGroupsContext]({% slug api_scheduler_schedulergroupscontext %})
-   [SchedulerDateRangeContext]({% slug api_scheduler_schedulerdaterangecontext %})
-   [SchedulerOrientationContext]({% slug api_scheduler_schedulerorientationcontext %})

In order to access those values, use the desired `context` inside your custom component.

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const { timezone } = React.useContext(SchedulerPropsContext);

    return (
        <SchedulerItem {...props}>
            <Label>
                Timezone: <span>{timezone}</span>
            </Label>
        </SchedulerItem>
    );
};
```

## Internal State

The KendoReact `Scheduler` components keeps both `date` and `activeView` variables in its state. Changing those variables based on a user action, without rendering the component in a [Controlled State]({% slug date_selection_scheduler %}#toc-controlled-mode) is possible through `custom hooks` and `Context.Consumer`.

### Custom State Hooks

The following `custom hooks` are available for accessing `internal state` inside the Scheduler:

-   [useSchedulerDateContext]({% slug api_scheduler_useschedulerdatecontext %})
-   [useSchedulerActiveViewContext]({% slug api_scheduler_usescheduleractiveviewcontext %})

In order to access those values, use the desired `hook` inside your custom component:

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const [date, setDate] = useSchedulerDateContext();

    const handlePrevClick = React.useCallback(
        () => { setDate(props.start); },
        [props.state.getTime(), setDate]
    );

    const handleNextClick = React.useCallback(
        () => { setDate(props.end); },
        [props.end.getTime(), setDate]
    );

    return (
        <SchedulerItem {...props}>
            {props.children}
            {props.tail && (<Button onClick={handlePrevClick}>Prev</Button>)}
            {props.head && (<Button onClick={handleNextClick}>next</Button>)}
        </SchedulerItem>
    )
}
```

### State Context.Consumer

The following `contexts` are available for accessing `internal` state inside the Scheduler:

-   [SchedulerDateContext]({% slug api_scheduler_schedulerdatecontext %})
-   [SchedulerActiveViewContext]({% slug api_scheduler_scheduleractiveviewcontext %});

In order to access those values, use the desired `context` inside your custom component:

```jsx-no-run
const CustomSchedulerItem = (props) => {
    const [, setDate] = React.useContext(SchedulerDateContext);

    return (
        <SchedulerItem>
            {props.children}
            {props.tail && (
                <Button onClick={() => { setDate(props.start); }}>Prev</Button>
            )}
            {props.head && (
                <Button onClick={() => { setDate(props.end); }}>Next</Button>
            )}
        </SchedulerItem>
    );
};
```

## Reducers

The KendoReact `Scheduler` component provides access to the internal `data` reducer. Due to the complexity of the data operations, a predefined action [types]({% slug api_scheduler_data_action %}) are available to be [dispatched](https://react.dev/reference/react/useReducer).

### Custom Reducers Hooks

The following `custom hook` is available for accessing the `internal data reducer` inside the Scheduler;

-   [useSchedulerDataContext]({% slug api_scheduler_useschedulerdatacontext %})

### Reducer Context.Consumer

The following `context` is available for accessing `internal` state inside the Scheduler.

-   [SchedulerDataContext]({% slug api_scheduler_schedulerdatacontext %})

### Example Usage

The following example demonstrates creating a copy of an item on `"D" keydown`.

{% meta height:970 %}
{% embed_file context/example/func/app.tsx preview %}
{% embed_file context/example/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the KendoReact Scheduler]({% slug api_scheduler_schedulerprops %})
-   [Item Context]({% slug state-update_items_scheduler %})
-   [Slot Context]({% slug state-update_slots_scheduler %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
