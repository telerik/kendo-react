---
title: GridGroupColumnFn
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridGroupColumnFn."
api_reference: true
type: inner_api
slug: api_grid_gridgroupcolumnfn
---

# GridGroupColumnFn
A callback invoked once per active group level, receiving that level's `GroupDescriptor`,
and returning the settings to apply to the synthesized group column for that level.

```tsx
const groupColumnFn: GridGroupColumnFn = (groupDescriptor) => ({
    title: groupDescriptor.field,
    width: 200,
});

<Grid groupable={{ displayMode: 'multipleColumns', groupColumn: groupColumnFn }} />
```




