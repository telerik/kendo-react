---
title: Conditional Editing of Scheduler Events
description: Learn how to enable or disable editing of specific Scheduler events based on underlying data conditions using a custom editItem component.
type: how-to
page_title: Conditional Editing of Scheduler Events - KendoReact Scheduler
slug: scheduler-conditional-editing
tags: scheduler, conditional-editing, edit-item, event-editing, data-driven
ticketid:
res_type: kb
category: knowledge-base
components: ["scheduler"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>12.0.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Scheduler</td>
		</tr>
	</tbody>
</table>

## Description

How can I enable editing for specific events in the Scheduler based on underlying data conditions? For example, some events should be read-only while others remain editable.

This knowledge base article also answers the following questions:

-   How do I conditionally enable or disable event editing in Scheduler?
-   How do I make certain Scheduler events read-only based on data properties?
-   How do I use custom editItem for conditional editing behavior?

## Solution

To implement conditional editing of Scheduler events, use a custom `editItem` component and set the `editable` property conditionally based on the `dataItem` values.

The custom `editItem` approach is clean and performant. Create a custom component that wraps `SchedulerEditItem` and conditionally sets the `editable` property:

```tsx
const CustomEditItem = (props: SchedulerEditItemProps) => {
    return (
        <SchedulerEditItem
            {...props}
            style={{ cursor: props.dataItem.isEditable ? 'pointer' : 'not-allowed' }}
            editable={props.dataItem.isEditable ? props.editable : false}
        />
    );
};
```

This approach prevents edit mode from being triggered for events that should be read-only, providing better performance and user experience.

The following example demonstrates a complete implementation:

{% meta height:830 %}
{% embed_file scheduler/scheduler-conditional-editing/app.tsx preview %}
{% embed_file scheduler/scheduler-conditional-editing/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Scheduler Overview](slug:overview_scheduler)
-   [Scheduler Editing](slug:editing_scheduler)
-   [Scheduler Custom EditItems](slug:edit-item_items_scheduler)
