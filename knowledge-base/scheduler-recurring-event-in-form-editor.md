---
title: Recurring event field in custom form editor
description: An example on how to show the recurring event field in the Form Editor of the KendoReact Scheduler.
type: how-to
page_title: Adding the recurring event field for the SchedulerFormEditor - KendoReact Scheduler
slug: scheduler-recurring-event-custom-editor
tags: scheduler, recurring, recurrent, editor, scheduler form
ticketid: 1609140
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.16.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to add a recurring event field in the custom form editor of the Scheduler component.

## Solution
You can add recurring events to a custom form editor by referencing the `recurrenceEditor`. The main idea is to import the `SchedulerFormEditor` from the `@progress/kendo-react-scheduler` package, add a Field in your custom form, and reference the `recurrenceEditor` that is now available via props using the component prop.

In the following example, when you double-click a recurring item, a Window component appears asking if you want to edit the current occurrence or the whole series

{% meta id:index height:760 %}
{% embed_file scheduler/recurring-event-form-editor/main.jsx preview%}
{% embed_file scheduler/recurring-event-form-editor/custom-form-editor.jsx %}
{% embed_file scheduler/recurring-event-form-editor/custom-dialog.jsx %}
{% embed_file scheduler/recurring-event-form-editor/custom-form.jsx %}
{% embed_file scheduler/recurring-event-form-editor/custom-item.jsx %}
{% embed_file scheduler/recurring-event-form-editor/editor.jsx %}
{% embed_file scheduler/recurring-event-form-editor/data.js %}
{% endmeta %}
