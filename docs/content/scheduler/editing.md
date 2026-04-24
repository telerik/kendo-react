---
title: Editing
description: 'Get started with the KendoReact Scheduler component and create, edit, and delete its events.'
components: ["scheduler"]
slug: editing_scheduler
position: 40
---

# Editing

The Scheduler enables you to create, update, and delete its events.

## Getting Started

The Scheduler provides a `data` property and an `onDataChange` callback to allow full user control. For more information on handling data changes, refer to the article on [data binding]({% slug data_binding_scheduler %}).

To enable all edit modes in the Scheduler, set its [`editable`]({% slug api_scheduler_schedulerprops %}#toc-editable) property to `true`.

```jsx-no-run
    <Scheduler editable={true} />
```

To configure which edit modes will be enabled, set the `editable` property to an `Object` of type [`EditableProp`]({% slug api_scheduler_editableprop %}) with your custom configuration.

The `EditableProp` option provides the following options:

-   `add`&mdash;Allows the creation of a new `DataItem` when the user double-clicks a `time` or a `day` slot.
-   `remove`&mdash;Allows the deletion of the `DataItem` which is associated with the clicked event.
-   `drag`&mdash;Changes the `start` and `end` settings, or the provided [`resources`]({% slug resources_scheduler %}) configuration of the `DataItem`.
-   `resize`&mdash;Changes the duration of the `DataItem`.
-   `edit`&mdash;Provides advanced editing through a form component.

```jsx-no-run
    <Scheduler
        editable={{
            add: false,
            remove: false,
            drag: true,
            resize: true,
            edit: true
        }}
    />
```

## Setup

The Scheduler provides the `created`, `updated`, and `deleted` data items through the [`onDataChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatachange) callback function.

The following example demonstrates how to allow editing in the Scheduler component and modify the local data based on the parameters that are passed as arguments to the `onDataChange` callback. To avoid the same `id` configurations on two data items, the following example uses a [`guid`](http://guid.one/guid) setting for the newly created data items.

{% meta height:1000 %}
{% embed_file data-operations/editing/setup/func/app.tsx preview %}
{% embed_file data-operations/editing/setup/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Binding in the KendoReact Scheduler]({% slug data_binding_scheduler %})
-   [Grouping in the KendoReact Scheduler]({% slug grouping_scheduler %})
-   [Handling the KendoReact Scheduler Resources]({% slug resources_scheduler %})
-   [API Reference of the KendoReact SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
