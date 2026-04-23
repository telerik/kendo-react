title: Customizing KendoReact SchedulerItem to Keep Date Display
description: Learn how to customize the KendoReact SchedulerItem and keep the date visible while using a custom slot.
type: how-to
page_title: How to Customize KendoReact SchedulerItem and Preserve Date Visibility
meta_title: How to Customize KendoReact SchedulerItem and Preserve Date Visibility
slug: scheduler-item-customization
tags: kendoreact,scheduler,customization,scheduleritem,date,props
res_type: kb
ticketid: 1664310

---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>KendoReact Scheduler</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

When customizing the KendoReact [Scheduler](https://docs.telerik.com/kendo-react-ui/components/scheduler/overview/) to use a custom slot in the Month view, the default date number may become hidden. I want to keep the date number visible while retaining custom components in the slot.

This knowledge base article also answers the following questions:

-   How can I keep the date visible in KendoReact Scheduler's custom slot?
-   How to preserve default props while customizing SchedulerItem in KendoReact?
-   How to modify SchedulerItem in KendoReact without hiding the date?

## Solution

To preserve the date number while customizing the slot, reuse the default children (`props.children`) provided by KendoReact Scheduler. You can add the first child of the default children to your custom component to ensure the date remains visible.

Follow these steps:

1. Create a new array containing the default children and your custom component.
2. Pass the modified array as the `children` property to the `SchedulerEditSlot`.

Use the following code snippet:

```jsx
const MyCustomSlot = (props) => {
    const newChildren = [props.children[0], <MyCustomShowMoreButton {...props} />];

    return <SchedulerEditSlot {...props} children={newChildren} />;
};
```

Replace `MyCustomShowMoreButton` with your custom component. This approach ensures the default date rendering remains intact alongside your custom elements.

{% meta height:600 %}
{% embed_file scheduler/item-customization/app.tsx preview %}
{% embed_file scheduler/item-customization/main.tsx %}
{% embed_file scheduler/item-customization/events-utc.ts %}
{% endmeta %}

## See Also

-   [KendoReact Scheduler Documentation](https://docs.telerik.com/kendo-react-ui/components/scheduler/overview/)
-   [KendoReact Scheduler API Reference](https://docs.telerik.com/kendo-react-ui/api/scheduler)
-   [KendoReact Sample for Custom Slot](https://stackblitz.com/edit/react-4wedch-qwhc9q?file=index.html)
