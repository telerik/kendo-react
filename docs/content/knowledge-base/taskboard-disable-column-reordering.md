---
title: Disable Column Reordering in TaskBoard
description: Learn how to disable column reordering in the KendoReact TaskBoard component using CSS.
type: how-to
page_title: How to Disable Column Reordering in KendoReact TaskBoard
slug: taskboard-disable-column-reordering
tags: taskboard, react, column, reordering, disable
res_type: kb
ticketid: 1664281
components: ["taskboard"]
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
	    	<td>Progress® KendoReact TaskBoard</td>
	    </tr>
    </tbody>
</table>

## Description

In a [TaskBoard](https://www.telerik.com/kendo-react-ui/components/taskboard/) component for React, it might be necessary to prevent users from reordering the columns.

This KB article also answers the following questions:

-   How can I disable dragging of columns in the TaskBoard for React?
-   Is it possible to lock the column order in the React TaskBoard?
-   How do I stop users from rearranging columns in my React TaskBoard?

## Solution

To disable column reordering in the TaskBoard for React, apply the CSS property `pointer-events: none` to the `.k-taskboard-column-header` class. This approach does not require built-in functionality and can be implemented with a simple CSS tweak.

Include the following CSS rule in your project:

```css
.k-taskboard-column-header {
    pointer-events: none;
}
```

This will prevent mouse events on the column headers, effectively disabling the ability to reorder columns.

Bellow is a demo that displays KendoReact TaskBoard with fixed columns:

{% meta height:600 %}
{% embed_file taskboard/taskboard-disable-column-reordering/app.jsx preview %}
{% embed_file taskboard/taskboard-disable-column-reordering/main.jsx %}
{% embed_file taskboard/taskboard-disable-column-reordering/style.css %}
{% embed_file taskboard/taskboard-disable-column-reordering/cards.js %}
{% endmeta %}

## See Also

-   [TaskBoard Overview](https://www.telerik.com/kendo-react-ui/components/taskboard/) - Official documentation for TaskBoard for React.
