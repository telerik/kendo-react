---
title: Overview
page_title: KendoReact WebMCP Tools Overview
description: Learn how KendoReact components expose their operations as Web MCP tools, allowing AI agents to discover and control component state through the browser.
slug: web_mcp_overview
tags: web, mcp, tools, ai, model-context-protocol
published: True
position: 1
---

# KendoReact WebMCP Tools Overview

> important WebMCP is an experimental browser standard. It is currently available behind a feature flag in some Chromium-based browsers. The API and behavior may change as the standard evolves. The KendoReact WebMCP integration is a preview feature.

[WebMCP](https://developer.chrome.com/blog/webmcp-epp) is a browser standard that lets web applications expose actions to AI agents running in the browser. Instead of the AI reading the DOM or simulating clicks, each component tells the AI exactly what it can do.

KendoReact components support WebMCP out-of-the-box via the `@progress/kendo-react-webmcp` package. When enabled, a component registers its operations (sorting, filtering, navigation, value changes, and more) as tools that an AI agent can call directly. For example, an AI can sort a Grid, navigate a Scheduler to a date, or set a value in an input - all from a natural language prompt.

## See It in Action

When a component has WebMCP enabled, a connected AI agent can control it through natural language. The user types a prompt and the component reacts without the need to click buttons and fill-in forms.

For example:

-   _"Show only orders from last month"_ - the Grid filters accordingly.
-   _"Go to next week"_ — the Scheduler navigates forward.
-   _"Set the discount to 15"_ — the NumericTextBox updates its value.

The result is the same as if the user had interacted with the UI directly.

To learn more, visit the [AI-Ready Components](https://www.telerik.com/ai-components) page and see the following videos below.

<div style="display: flex; gap: 1em; flex-wrap: wrap;">

<div>
<p><strong>AI Agent-Ready Dashboard</strong></p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/YSbnMzPu9SM" title="AI Agent-Ready Dashboard powered by Telerik and Kendo UI with WebMCP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div>
<p><strong>Telerik and Kendo UI Workflows</strong></p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/UPzLqOjUsuM" title="Telerik and Kendo UI Workflows Powered by WebMCP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

</div>

## Enable Browser WebMCP

### 1. Enable the Browser Flag

WebMCP is currently available behind a browser flag in Chromium-based browsers.

1. Open `chrome://flags/#enable-webmcp-testing` in your Chromium browser (these URLs cannot be clickable).
1. You should see **WebMCP for testing**. Set the flag to **Enabled**.
1. Restart the browser.

### 2. Install the Telerik & Kendo WebMCP Browser Extension

The browser flag enables the WebMCP API, but you still need an AI client that can discover and call the registered tools. The [Telerik WebMCP Extension](https://chromewebstore.google.com/detail/telerik-kendo-ui/bikfklddeekcicbafiejfbbpdjnaaiid) is a browser extension that provides a chat interface connected to an AI model. It reads the tools on the current page and invokes them based on your prompts.

[Install the Telerik WebMCP Browser Extension](https://chromewebstore.google.com/detail/telerik-kendo-ui/bikfklddeekcicbafiejfbbpdjnaaiid) from the Chrome Web Store. Then, see the [Extension Documentation](slug:web_mcp_extension) for details on the extension features and settings.

### 3. Try the Demos

Once you enable WebMCP in your browser and [configure the Telerik WebMCP browser extension](slug:web_mcp_extension#settings), you can explore WebMCP in action:

-   [WebMCP Operations Hub Demo](https://demos.telerik.com/kendo-react-ui/ai-tools/webmcp/zero-click-dashboard?theme=meridian-main-dark)
-   [Zero Click Dashboard Demo](https://demos.telerik.com/kendo-react-ui/ai-tools/webmcp/operations-hub?theme=meridian-main-dark)

## Enable WebMCP for KendoReact Components

All KendoReact components that support WebMCP follow the same configuration pattern using the `webMcp` prop and the `WebMcpProvider` from `@progress/kendo-react-webmcp`.

### Installation

```bash
npm i @progress/kendo-react-webmcp
```

### WebMcpProvider

Wrap your application (or the relevant section) with `WebMcpProvider` to enable WebMCP tool registration for all components underneath it.

```jsx
import { WebMcpProvider } from '@progress/kendo-react-webmcp';

function App() {
    return <WebMcpProvider>{/* KendoReact components with webMcp prop */}</WebMcpProvider>;
}
```

### Enable The `webMcp` Prop

Each KendoReact component that supports WebMCP accepts a `webMcp` prop. Set it to `true` to register the component's tools with the browser, or pass a configuration object for more control.

```jsx
// Simplest — registers tools with a generic label
<Grid data={data} webMcp={true} />

// With a semantic data name - AI agents use this to target the right component
<Grid data={data} webMcp={{ dataName: 'employees' }} sortable filterable />
```

The `dataName` is embedded in every tool name registered by the component. For example, with `dataName: 'employees'`, the sort tool becomes `employees_grid_sort`. AI agents understand natural language in any language, so `dataName` can be in any language.

### Settings and Tool Overrides

Components register tools based on their configuration. For example, the Grid registers the `{dataName}_grid_sort` tool only when `sortable={true}`. Some tools like `{dataName}_grid_highlight` are always registered when `webMcp` is set. See [Supported Components](slug:web_mcp_supported_components) for a list of all component tools and their registration conditions.

Some tools are never registered by default even when `webMcp` is set. For example, `{dataName}_grid_get_data` returns all Grid rows to the AI model, which can expose sensitive data or bloat the AI context. Such tools are useful when you want the AI to read and process your data, but they require an explicit opt-in. Use the `tools` configuration in the `webMcp` prop to enable them:

```jsx
<Grid
    data={data}
    webMcp={{
        dataName: 'sales',
        tools: (tools) => tools.map((t) => (t.name === 'get_data' ? { ...t, enabled: true } : t))
    }}
    sortable
    filterable
/>
```

### Tool Overrides

You can customize individual tools through the `tools` configuration in the `webMcp` prop:

| Option     | Type                                              | Description                                                                                                                                                        |
| ---------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dataName` | `string`                                          | Human-readable data name exposed to AI agents. Used as the prefix for all tool names.                                                                              |
| `tools`    | `(tools: WebMcpTool[], helpers?) => WebMcpTool[]` | A callback that receives the component's registered tools and returns the final tool list. Use it to override tool descriptions, remove tools, or add custom ones. |

> tip Components provide default descriptions for each tool. However, to ensure a smooth and more deterministic user experience, you can customize the description of each enabled tool and add more context for the AI model. For example, provide descriptions that reflect your data, as users rarely mention component names in their prompts. For example, _"show me sales above $500"_ should match a filter tool on a Sales table, not just any filter. Thus, the `filter` tool description of the Grid should mention "sales".

In the following example:

-   The `filter` tool uses a custom description.
-   The `export_excel` tool is disabled and will not be registered.
-   The `get_data` tool is explicitly enabled. It is disabled by default because it returns raw grid data to the AI model, which may include sensitive information. Only enable it when the data is safe to expose.
-   All other tools that match the Grid's enabled features (sorting, paging) are registered with their default names and descriptions.

> caption Customize tool registrations in a KendoReact Grid

```jsx
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { WebMcpProvider } from '@progress/kendo-react-webmcp';

function SalesGrid({ data }) {
    return (
        <WebMcpProvider>
            <Grid
                data={data}
                webMcp={{
                    dataName: 'sales',
                    tools: (tools) =>
                        tools
                            .filter((t) => t.name !== 'export_excel')
                            .map((t) => {
                                if (t.name === 'filter') {
                                    return { ...t, description: 'Filter the sales data grid by a column.' };
                                }
                                if (t.name === 'get_data') {
                                    return {
                                        ...t,
                                        description: 'Get the records from the sales data grid.',
                                        enabled: true
                                    };
                                }
                                return t;
                            })
                }}
                sortable
                filterable
                pageable
            >
                <GridColumn field="name" title="Name" />
                <GridColumn field="price" title="Price" />
            </Grid>
        </WebMcpProvider>
    );
}
```

### Multiple Instances on the Same Page

If two instances of the same component are on the same page, they will register tools with identical names and the AI will not know which one to use. Set `dataName` on the `webMcp` prop to give each instance a unique prefix.

For example, with `dataName: 'sales'` and `dataName: 'inventory'`, the tools become `sales_grid_sort` and `inventory_grid_sort`. The AI can now target each instance separately.

> caption Set distinct WebMCP tool names for two Grid instances on the same page

```jsx
<WebMcpProvider>
    <Grid data={salesData} webMcp={{ dataName: 'sales' }} sortable />
    <Grid data={inventoryData} webMcp={{ dataName: 'inventory' }} sortable />
</WebMcpProvider>
```

The AI sees `sales_grid_sort` and `inventory_grid_sort` as separate tools and targets each independently.

## Supported Components

For the full list of components, their available tools, and tool conditions, see [WebMCP Supported Components](slug:web_mcp_supported_components).

## Next Steps

-   [Learn about the Telerik & Kendo UI WebMCP browser extension](slug:web_mcp_extension)
-   [Find out which KendoReact components support WebMCP](slug:web_mcp_supported_components)
