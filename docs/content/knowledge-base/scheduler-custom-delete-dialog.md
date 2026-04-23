---
title: Customizing the Delete Confirmation Dialog in KendoReact Scheduler
description: Learn how to replace the default delete confirmation dialog with a custom one in the KendoReact Scheduler.
type: how-to
page_title: How to Customize the Delete Confirmation Dialog in KendoReact Scheduler
slug: scheduler-customize-delete-dialog
tags: react, scheduler, custom, delete, dialog, customization
res_type: kb
ticketid: 1663901
components: ["scheduler"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>8.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Scheduler</td>
	    </tr>
    </tbody>
</table>

## Description

I want to customize the delete confirmation dialog box in the [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/).

This KB article also answers the following questions:

-   How can I replace the default delete confirmation dialog in the KendoReact Scheduler?
-   What are the steps to implement a custom dialog for delete confirmation in KendoReact Scheduler?
-   Can I use a custom component for the delete confirmation dialog in the KendoReact Scheduler?

## Solution

To customize the delete confirmation dialog in the KendoReact Scheduler, follow these steps:

1. Create your custom dialog component that will be used as the delete confirmation dialog. Ensure your custom dialog component handles the delete confirmation logic according to your requirements.

2. Use the `removeDialog` property of the [SchedulerEditItem](https://www.telerik.com/kendo-react-ui/components/scheduler/customization/items/edit-item/) component to specify your custom dialog component. This property allows you to replace the default delete confirmation dialog with your custom component.

3. Specify the custom edit item component, which includes your custom dialog, in the `editItem` prop of the Scheduler component.

```jsx
const CustomEditItem = props => {
  return <SchedulerEditItem {...props} removeDialog={MyDialog} />;
};

<Scheduler
  ...
  editItem={CustomEditItem}
  ...
/>
```

4. Ensure that all necessary props and logic are passed to your custom dialog component for it to function as expected within the Scheduler component.

For a practical example demonstrating these steps, refer to the following demo:

{% meta height:600 %}
{% embed_file scheduler/custom-delete-dialog/app.jsx preview %}
{% embed_file scheduler/custom-delete-dialog/main.jsx %}
{% endmeta %}

## See Also

-   [KendoReact Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/)
-   [API Reference of the Scheduler](https://www.telerik.com/kendo-react-ui/components/scheduler/api/SchedulerProps/#toc-edititem)
