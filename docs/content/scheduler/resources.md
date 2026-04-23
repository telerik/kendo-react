---
title: Resources
description: 'Get started with the KendoReact Scheduler component and provide resources to visually separate events based on their fields.'
components: ["scheduler"]
slug: resources_scheduler
position: 60
---

# Resources

The Scheduler component accepts a [`resources`]({% slug api_scheduler_schedulerprops %}#toc-resources) property which is used to change the appearance of the events based on the provided configuration.

## Getting Started

An event can have one or more resources assigned to it&mdash;for example, a meeting room or a guest list. For more information on configuring the Scheduler to display each resource as a sub-view, refer to the article on [grouping]({% slug grouping_scheduler %}).

Each resource is described by a [`SchedulerResource`]({% slug api_scheduler_schedulerresource %}) object that contains all possible values for it. To define the resources, set the [`resources`]({% slug api_scheduler_schedulerprops %}#toc-resources) property.

As a minimum configuration, you have to define the following fields:

-   `field`&mdash;The field name of the event that contains the resource value.
-   `data`&mdash;The resource data array.
-   `valueField`&mdash;The field name from the data that contains the value of the resource.
-   `textField`&mdash;The field name from the data that contains the text of the resource.

## Using Visual Separation

One of the most useful use cases for the `resources` property is to visually separate the events based on their field values.

The following example demonstrates how to color the events based on their `roomId` field.

{% meta height:770 %}
{% embed_file data-operations/resources/visual/func/app.tsx preview %}
{% embed_file data-operations/resources/visual/func/main.tsx %}
{% endmeta %}

## Setting Multiple Resources

The `resources` property accepts a collection of resources which means that you can provide two or more resources. If you provide multiple resources, the event will acquire the `color` of the first matched resource.

The following example is based on the previous example and provides two resources.

{% meta height:770 %}
{% embed_file data-operations/resources/multiple/func/app.tsx preview %}
{% embed_file data-operations/resources/multiple/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Data Binding in the KendoReact Scheduler]({% slug data_binding_scheduler %})
-   [Editing in the KendoReact Scheduler]({% slug editing_scheduler %})
-   [API Reference of the KendoReact SchedulerDataChangeEvent]({% slug api_scheduler_schedulerprops %}#toc-ondatachange)
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
