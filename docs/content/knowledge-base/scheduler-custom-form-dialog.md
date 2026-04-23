---
title: Customizing the Action Buttons in KendoReact Scheduler Form
description: Learn how to customize the action buttons in KendoReact Scheduler Form.
type: how-to
page_title: How to Customize Action Buttons in KendoReact Scheduler Form
meta_title: How to Customize Action Buttons in KendoReact Scheduler Form
slug: scheduler-custom-form-dialog
tags: scheduler, react, form, validation, readonly
res_type: kb
ticketid: 1694355
components: ["scheduler"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>11.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Scheduler</td>
	    </tr>
    </tbody>
</table>

## Description

I want the customize the action buttons in the [KendoReact Scheduler](slug:overview_scheduler) form.

This knowledge base article also answers the following questions:

-   How to disable the save button based on the validation errors?
-   How to control the save button behavior in KendoReact Scheduler Form?
-   How to customize the validation logic in KendoReact Scheduler Form?
-   How to access the default properties of the action buttons in a custom SchedulerFrom Dialog?

## Solution

To customize the action buttons of the SchedulerForm Dialog, you can set the `dialog` prop of the SchedulerForm to control the rendered buttons. The following example displays how you can enable the Submit button based on the validation errors for the description field.

{% meta height:600 %}
{% embed_file scheduler/custom-form-dialog/app.tsx preview %}
{% embed_file scheduler/custom-form-dialog/custom-dialog.tsx %}
{% embed_file scheduler/custom-form-dialog/custom-form.tsx %}
{% embed_file scheduler/custom-form-dialog/main.tsx %}
{% embed_file scheduler/custom-form-dialog/sc-events-utc.ts %}
{% endmeta %}

## See Also

-   [KendoReact Scheduler Documentation](slug:overview_scheduler)
-   [KendoReact Scheduler Form API](slug:api_scheduler_schedulerform)
-   [Customizing Scheduler Form](slug:overview_customization_form_scheduler)
