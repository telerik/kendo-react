---
title: Create Scheduler Events with External Button in React
description: A guide on adding scheduler items using an external button in React applications.
type: how-to
page_title: How to Add Scheduler Events Using an External Button in KendoReact Scheduler
slug: create-scheduler-item-entry-button-react
tags: scheduler, react, add, item, entry, button, click
res_type: kb
ticketid: 1672962
components: ["scheduler"]
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product Version</td>
            <td>10.0.0</td>
        </tr>
        <tr>
            <td>Product</td>
            <td>Progress® KendoReact Scheduler</td>
        </tr>
    </tbody>
</table>

## Description

When using the Scheduler component, there might be scenarios where it's not immediately clear that users should click on the calendar to add an event, or they might prefer not to have the date pre-selected. To accommodate this, an "Add" button can be introduced on the page to facilitate the creation of new scheduler entries.

This knowledge base article also answers the following questions:

-   How can I add a new event to the Scheduler with a button click?
-   Is it possible to use an external button to create Scheduler entries in React?
-   How do I implement an "Add" button for the Scheduler in a React application?

## Solution

To achieve the addition of Scheduler entries through an external button, you can utilize the `handleDataChange` method. This method, when triggered, allows you to add events to the Scheduler. Specifically, you can use an external button to open a [SchedulerForm](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerform) and, upon the form's submission, pass the data to `handleDataChange`. This can be accomplished via props or context, depending on your application's architecture.

Below are examples showcasing both approaches:

-   **Using Props**:
    {% meta height:600 %}
    {% embed_file scheduler/add-event-button/with-props/app.tsx preview %}
    {% embed_file scheduler/add-event-button/with-props/main.tsx %}
    {% embed_file scheduler/add-event-button/with-props/sc-events-utc.ts %}
    {% endmeta %}

-   **Using Context**:
    {% meta height:600 %}
    {% embed_file scheduler/add-event-button/with-context/app.tsx preview %}
    {% embed_file scheduler/add-event-button/with-context/main.tsx %}
    {% embed_file scheduler/add-event-button/with-context/sc-events-utc.ts %}
    {% endmeta %}

These examples demonstrate how to integrate an external "Add" button into your application, allowing for the creation of new Scheduler entries without directly interacting with the calendar component.

## See Also

-   [Scheduler Component Overview](https://www.telerik.com/kendo-react-ui/components/scheduler/)
-   [SchedulerForm API Reference](https://www.telerik.com/kendo-react-ui/components/scheduler/api/schedulerform)
-   [React Context for State Management](https://reactjs.org/docs/context.html)
