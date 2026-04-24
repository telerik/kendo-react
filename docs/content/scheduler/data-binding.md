---
title: Data Binding
description: 'Get started with the KendoReact Scheduler component, bind it to your data, and take advantage of the KendoReact Scheduler built-in editing functionality.'
components: ["scheduler"]
slug: data_binding_scheduler
position: 30
---

# Data Binding

The KendoReact Scheduler component accepts an array of [`DataItem`]({% slug api_scheduler_dataitem %}) objects through the [`data`]({% slug api_scheduler_schedulerprops %}#toc-data) property.

## Getting Started

The `DataItem` type does not limit the user to a specific fields in the `data` array but expects that the [`modelFields`]({% slug api_scheduler_schedulerprops %}#toc-modelfields) property is set as well, or that the `DataItem` has the default fields mapping.

When you bind the Scheduler to data, note the following specifics:

-   In order for the Scheduler to correctly render the data items, you have to define the `id`, `start`, and `end` fields.
-   In order for the Scheduler to correctly handle and format dates, you have to represent them by instances of the JavaScript `Date` object.

## Using the data Property

The `data` property represents an array of objects which either have `id`, `start`, and `end` fields, or fields which represent the same values.

The following example demonstrates how to take a simple object and render it in the Scheduler. The **Breakfast with Tom** event is rendered between the **8:30 AM** and **9:00 AM** slots on **27th of August**. The example does no focus on the `timezone` property&mdash;for more information, refer to the article on [timezones]({% slug timezones_scheduler %}).

{% meta height:770 %}
{% embed_file data-binding/data/func/app.tsx preview %}
{% embed_file data-binding/data/func/main.tsx %}
{% endmeta %}

## Using the modelFields Property

Since the `data` array items can be of any type, you can provide a custom mapping from the data items of the Scheduler by using the [`modelFields`]({% slug api_scheduler_schedulerprops %}#toc-modelfields) property.

{% meta height:770 %}
{% embed_file data-binding/model-fields/func/app.tsx preview %}
{% embed_file data-binding/model-fields/func/main.tsx %}
{% endmeta %}

## Handling Data Changes

When the [`editable`]({% slug api_scheduler_schedulerprops %}#toc-editable) or the corresponding `drag`, `resize`, or `edit` fields are set to `true`, the Scheduler will call the [`onDataChange`]({% slug api_scheduler_schedulerprops %}#toc-ondatachange) callback function.

`onDataChange` provides the following collections of items:

-   `updated`&mdash;Represents all updated items in the provided `data` collection.
-   `created`&mdash;Represents the newly created items.
-   `deleted`&mdash;Represents the deleted items from the provided `data` collection.

The most common scenario is to update the entries in your database and fetch the data again.

> Due to possible collisions with the `id` field of the newly created items and apart from notifying what changes need to be done, the Scheduler does not generate the new `data` collection. As a result, the handling of the data changes has to be controlled by you.

The following example demonstrates how to handle the `onDataChange` callback and update the local state. To trigger a data change, drag the slot in a different time slot. For more information, refer to the article on [editing the KendoReact Scheduler]({% slug editing_scheduler %}).

{% meta height:770 %}
{% embed_file data-binding/data-change/func/app.tsx preview %}
{% embed_file data-binding/data-change/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [Editing in the KendoReact Scheduler]({% slug editing_scheduler %})
-   [API Reference of the KendoReact Scheduler]({% slug api_scheduler_schedulerprops %})
-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
