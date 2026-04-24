---
title: GridAICommands
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridAICommands."
api_reference: true
type: inner_api
slug: api_grid_gridaicommands
---

# GridAICommands
Enum defining the available AI command types for grid operations.
These commands control different aspects of grid functionality through AI prompts.

```tsx
// Used internally when processing AI responses
const command = {
  type: GridAICommands.GridSort,
  sort: { field: 'name', dir: 'asc' }
};
```


## Values

### GridClearFilter
Clears all applied filters from the grid
### GridClearSort
Clears all applied sorting from the grid
### GridClearGroup
Clears all applied grouping from the grid
### GridClearHighlight
Clears all applied highlighting from the grid
### GridClearSelect
Clears all applied selections from the grid
### GridSort
Applies sorting to grid columns
### GridFilter
Applies filtering to grid data
### GridGroup
Applies grouping to grid data
### GridHighlight
Applies highlighting to grid cells or rows
### GridSelect
Applies select to grid cells or rows
### GridExportPDF
Exports the grid data as a PDF document
### GridColumnResize
Resizes grid columns to specified dimensions
### GridColumnHide
Hides specified grid columns from view
### GridColumnShow
Shows previously hidden grid columns
### GridColumnReorder
Reorders grid columns to new positions
### GridColumnLock
Locks grid columns to prevent horizontal scrolling
### GridColumnUnlock
Unlocks previously locked grid columns
### GridPage
Navigates to a specific page number in the grid
### GridPageSize
Changes the number of items displayed per page in the grid
