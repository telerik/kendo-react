---
title: Decrease the KendoReact Scheduler slot height below 40px
description: An example on how to decrease the slot height of the KendoReact Scheduler below 40px
type: how-to
page_title: Dots Title - KendoReact Scheduler
slug: scheduler-slot-height
tags: scheduler, scheduler slot, scheduler height, scheduler slot height
res_type: kb
category: knowledge-base
---

## Environment

<table>
<tbody>
<tr>
<td>Product Version</td>
<td>v7.2.3</td>
</tr>
<tr>
<td>Product</td>
<td>Progress® KendoReact</td>
</tr>
</tbody>
</table>


## Description

I want to decrease the height of the Scheduler Slots. When setting the constant height by rendering a [custom view slot](https://www.telerik.com/kendo-react-ui/components/scheduler/adaptive-slot-height/#toc-constant-slot-height), the height can not be decreased below `40px`.

## Solution

The desired height can be achieved by setting the `min-height` property to the `.k-scheduler-cell` element. As the elements in the side-nav of the scheduler (listing the hours values) are still keeping the height of the row, it is recommended to also apply the `line-height`.

Mind the calculation for the correct height, as the scheduler cells have 8px padding and 1px border. In order to achieve 20px height for example, use the following formula:
Desired height = 2*8px + 1px + min-height/line-height.

In the case with `20px` total height, the formula would look like:
20px = 2*8px + 1px + 3px (where 3px is the min-height and line-height).

```css
.k-scheduler-layout-flex .k-scheduler-cell {
  min-height: 3px;
  line-height: 3px;
}
```