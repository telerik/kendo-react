---
title: GridWebMcpProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridWebMcpProps."
api_reference: true
type: inner_api
slug: api_grid_gridwebmcpprops
---

# GridWebMcpProps
Configuration for the Grid's `webMcp` prop.

Enables browser-native AI agent tools via Web MCP (Chrome 146+).
Pass `true` for defaults or an object for fine-grained control.

```tsx
// Boolean — generic "data" label, tools auto-inferred from Grid props
<Grid webMcp={true} sortable />

// Config object — semantic naming in any language
<Grid webMcp={{ dataName: 'employees' }} sortable />
<Grid webMcp={{ dataName: 'empleados' }} sortable />
```


`type` GridWebMcpProps = `boolean` | { dataName: string; groupName?: string; tools?: [GridWebMcpToolsCallback]({% slug api_grid_gridwebmcptoolscallback %}); };
