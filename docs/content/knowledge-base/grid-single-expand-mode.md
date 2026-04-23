---
title: Implementing Single-Expand Mode for Detail Rows in KendoReact Grid
description: Learn how to implement single-expand mode for detail rows in the KendoReact Grid since it is not available out of the box.
type: how-to
page_title: How to Implement a Single-Expand Row Mode in KendoReact Grid
meta_title: Implementing Single-Expand Row Mode in KendoReact Grid
slug: grid-single-expand-mode
tags: kendoreact, grid, detail row, single-expand, customization
res_type: kb
ticketid: 1712323
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> KendoReact Grid </td>
</tr>
<tr>
<td> Version </td>
<td> Current </td>
</tr>
</tbody>
</table>

## Description

The KendoReact [Grid](https://www.telerik.com/kendo-react-ui/components/grid/) does not support a single-expand mode for detail rows out of the box. Single-expand mode ensures that expanding one row automatically collapses any previously expanded rows. Implementing this feature requires custom logic.

This knowledge base article also answers the following questions:
- How can I collapse all other rows when expanding one in the KendoReact Grid?
- How do I create single-expand functionality for Grid detail rows in KendoReact?
- Is it possible to manage detail row expansion programmatically in KendoReact Grid?

## Solution

To implement single-expand mode for detail rows in the KendoReact Grid, follow these steps:

1. Track the expanded state of detail rows using a state hook.
2. Implement a method to identify and manage the expanded row.
3. Use the `onExpandChange` event of the Grid to update the expanded state.

```tsx
  function getNewOrChangedEntries(
    oldObj: Record<string, any>,
    newObj: Record<string, any>
  ) {
    return Object.fromEntries(
      Object.entries(newObj).filter(([key, value]) => oldObj[key] !== value)
    );
  }

  const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
    const diff = getNewOrChangedEntries(detailExpand, event.detailExpand);

    setDetailExpand(diff);
  };
```

<demo metaUrl="knowledge-base/grid/grid-single-expand-mode/" height="600"></demo>

## See Also

- [KendoReact Grid Documentation](https://www.telerik.com/kendo-react-ui/components/grid/)
- [Grid Detail Rows](https://www.telerik.com/kendo-react-ui/components/grid/detail-row/)
- [Grid Events](https://www.telerik.com/kendo-react-ui/components/grid/events/)
- [StackBlitz Example](https://stackblitz.com/edit/react-w4wkofb3?file=app%2Fapp.tsx,app%2Fdetail.tsx)
