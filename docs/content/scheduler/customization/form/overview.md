---
title: Form
description: 'Get started with the SchedulerForm component and learn how to customize through properties, or completely override it by providing a custom component.'
components: ["scheduler"]
slug: overview_customization_form_scheduler
position: 1
---

# Form Customization

The `SchedulerForm` is a composite component, built on top of the [`KendoReact Form`]({% slug api_form_form %}) component, and provides default rendering and functionality to enable creating a new `dataItem` or edit an existing one.

In order to allow gradual customization, we've exposed the [`form`]({% slug api_scheduler_schedulerprops %}#toc-form) property on a couple of different levels:

-   Scheduler `form` customization&mdash;Customize all `form` components across the Scheduler.

```jsx-no-run
<Scheduler form={CustomForm} />
```

-   View `form` customization&mdash;Customize `form` components for a specific view only.

```jsx-no-run
<Scheduler>
    <WeekView />
    <MonthView form={MonthViewForm} />
</Scheduler>
```

-   Item/Slot `form` customization&mdash;Customize the `form` component of a specific `SchedulerEditItem` or `SchedulerEditSlot` instance.

```jsx-no-run
    const EditItemWithCustomForm = (props) => {
        return (
            <SchedulerEditItem
                {...props}
                form={EditItemForm}
            />
        )
    }
    const EditSlotWithCustomForm = (props) => {
        return (
            <SchedulerEditSlot
                {...props}
                form={EditSlotForm}
            />
        )
    }

    <!-- ... -->
    <Scheduler
        editItem={EditItemWithCustomForm}
        editSlot={EditSlotWithCustomForm}
    />
```

For more information related to `Item/Slot` customization, please refer to the [Scheduler Items]({% slug overview_items_scheduler %}) and [Scheduler Slots]({% slug overview_slots_scheduler %}) articles.

## Importing the default components

Before we begin with customizing the default `form`, we must first import it. We're shipping the `SchedulerForm` component through the `@progress/kendo-react-scheduler` package, so you can import it in any React project with the following import statement.

```jsx-no-run
    // ES2015 module syntax
    import { SchedulerForm } from '@progress/kendo-react-scheduler';
```

```jsx-no-run
    // CommonJS format
    const { SchedulerForm } = require('@progress/kendo-react-scheduler');
```

## Customizing the Default Rendering

In order to reuse the default rendering, and still apply some customizations, we've exposed a set of properties which can be applied to the root element and additional render-properties for replacing some of components rendered inside as a children. This approach is most-commonly used for styling and providing additional functionalities (like validation) to the `SchedulerForm` component.

Customization is achieved by providing a custom component, which renders the default `SchedulerForm` with additional props.

### Extend Functionality

The following example demonstrates how to extend the default `SchedulerForm` by providing an additional validator for the `description` field. For the full list of properties accepted by the `SchedulerForm` please refer to the [`SchedulerFormProps`]({% slug api_scheduler_schedulerformprops %}) API.

{% meta height:800 %}
{% embed_file customization/form/default-rendering/func/app.tsx preview %}
{% embed_file customization/form/default-rendering/func/main.tsx %}
{% embed_file customization/form/default-rendering/func/custom-form.tsx %}
{% endmeta %}

### Custom Components

To provide out of the box functionality we distribute the `SchedulerForm` as a standalone component, which is responsible for rendering all child components. By default the `SchedulerForm` is rendering a `Dialog` component and a `SchedulerFormEditor` component. We expose properties which enables customization of those components using the same approach as customizing the `SchedulerForm` itself.

> Customizing the `SchedulerFormEditor` component is the most common (and complex) scenario for a custom component. We are covering it in depth in the [SchedulerFormEditor Customization]({% slug overview_customization_form_editor_scheduler %}) article.

The following example demonstrates customizing the `Dialog` component through the `dialog` property of the `SchedulerForm` by adding a `remove` icon next to the title which triggers the `remove` sequence of actions when clicked. For the full list of properties accepted by the `dialog`, please refer to the [`DialogProps`]({% slug api_dialogs_dialog %}) API.

{% meta height:800 %}
{% embed_file customization/form/custom-components/func/app.tsx preview %}
{% embed_file customization/form/custom-components/func/main.tsx %}
{% embed_file customization/form/custom-components/func/custom-form-dialog.tsx %}
{% embed_file customization/form/custom-components/func/custom-form.tsx %}
{% endmeta %}

## Suggested Links

-   [Custom Form Editor](slug:overview_customization_form_editor_scheduler)
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
