---
title: Getting Started
page_title: Getting Started with the KendoReact Agentic UI Generator
description: Learn how to use the Agentic UI Generator that integrates with your IDE for complete UI generation, styling, and responsive design.
slug: agentic_ui_generator_getting_started
position: 10
tag: updated
release_tag: Q2 2026
---

# Getting Started with the Agentic UI Generator

The Agentic UI Generator is an intelligent development tool delivered through the [KendoReact MCP server](https://www.npmjs.com/package/@progress/kendo-react-mcp) that enables UI generation from natural language prompts. Once configured and authenticated, you can use the Agentic UI Generator tool (`#kendo_ui_generator`) together with the available specialized MCP assistants.

## Prerequisites

To use the KendoReact MCP server, you need:

-   A [compatible MCP client](https://modelcontextprotocol.io/clients), such as VS Code or Cursor, with support for MCP server integrations.
-   An [active Telerik license](slug:ai_tools_overview#license-requirements), either trial or subscription, that provides access to the KendoReact MCP server.

## Quick Start

Instead of manually creating configuration files, you can use the [Kendo CLI](https://www.npmjs.com/package/@progress/kendo-cli) and the built-in **Getting Started Assistant** to handle the entire setup automatically - whether you are starting a new project or adding KendoReact to an existing one.

Follow these steps to set up the Agentic UI Generator and use it in your IDE (VS Code or another supported AI-enabled IDE):

<TabStrip>
<TabStripTab title="CLI">

1. Open your terminal and install the Kendo CLI globally:

    ```sh
    npm i -g @progress/kendo-cli@latest
    ```

1. Configure the KendoReact MCP server for your IDE and set up your Telerik license in a single step with the Kendo CLI:

    ```sh
    npx kendo setup react
    ```

1. Create a new empty folder for your project and open it in your IDE. Then, in the AI chat interface, invoke the **Getting Started Assistant**:

    ```prompt
    #kendo_getting_started_assistant create a new React project
    ```

</TabStripTab>
<TabStripTab title="Manual Setup">

1. Ensure you have a [supported license](slug:ai_tools_overview#license-requirements) and set up your Telerik license key globally on your machine or in the `mcp.json` configuration. The server automatically recognizes your license and activates the available MCP tools.

    ```sh
        npm i @progress/kendo-licensing
        npx kendo-ui-license refresh && npx kendo-ui-license activate
    ```

1. To add the MCP server to your IDE, add the following `mcp.json` configuration in your workspace:

    <TabStrip>
    <TabStripTab title="Visual Studio Code">

    For more information about using MCP servers in Visual Studio Code, refer to [Use MCP servers in VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers).

    > Make sure that [`chat.mcp.enabled`](vscode://settings/chat.mcp.enabled) is enabled in the VS Code settings.

    #### Workspace Configuration

    To enable the KendoReact MCP server [in a specific workspace](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_add-an-mcp-server) or React app, add a `.vscode` folder with an `mcp.json` file at the root of the workspace with the following content:

    ```json
    {
        "servers": {
            "kendo-react-mcp-server": {
                "type": "stdio",
                "command": "npx",
                "args": ["-y", "@progress/kendo-react-mcp@latest"]
                // set any of the `env` parameters below only if you haven't set a license key globally on your machine
                //   "env": {
                //     "TELERIK_LICENSE_PATH": "THE_PATH_TO_YOUR_LICENSE_FILE"
                // or
                //     "TELERIK_LICENSE": "YOUR_LICENSE_KEY"
                //   }
            }
        }
    }
    ```

    The server name `kendo-react-mcp-server` can be changed to a custom value based on your preferences.

    #### Global Configuration

    To add the KendoReact MCP server [globally for VS Code](https://code.visualstudio.com/docs/copilot/customization/mcp-servers#_add-an-mcp-server), run the **MCP: Open User Configuration** command from the Command Palette and add the above content to the automatically created `mcp.json` file in your user profile.

    Alternatively, manually create an `mcp.json` file with the above content in your user folder.

    </TabStripTab>
    <TabStripTab title="Cursor">

    For more information about using MCP servers in Cursor, refer to [Model Context Protocol](https://docs.cursor.com/context/mcp).

    #### Workspace Configuration

    To enable the KendoReact MCP server in [a specific workspace](https://cursor.com/docs/context/mcp#using-mcpjson) or React app, add a `.cursor` folder with an `mcp.json` file at the root of the workspace with the following content:

    ```json
    {
        "mcpServers": {
            "kendo-react-mcp-server": {
                "type": "stdio",
                "command": "npx",
                "args": ["-y", "@progress/kendo-react-mcp@latest"]
                //// set any of the `env` parameters below only if you haven't set a license key globally on your machine
                //   "env": {
                //     "TELERIK_LICENSE_PATH": "THE_PATH_TO_YOUR_LICENSE_FILE"
                //// or
                //     "TELERIK_LICENSE": "YOUR_LICENSE_KEY"
                //   }
            }
        }
    }
    ```

    The server name `kendo-react-mcp-server` can be changed to a custom value based on your preferences.

    #### Global Configuration

    To add the MCP server [globally for Cursor](https://docs.cursor.com/context/mcp#configuration-locations), add a `.cursor` folder with the above `mcp.json` file in your user folder.

    </TabStripTab>
    </TabStrip>

1. Open the AI chat interface of your IDE and start your prompt with the `#kendo_ui_generator` handle to invoke the Agentic UI Generator orchestrator:
    ```prompt
    #kendo_ui_generator Create a dashboard page with a grid showing sales data and a chart visualizing monthly trends.
    ```

</TabStripTab>
</TabStrip>

## Use Cases

The Agentic UI Generator is designed to help with various development scenarios:

-   Generate specific КendoReact components with particular configurations and features like filtering, validation, and data binding.
-   Create full responsive pages
    -   Build complete dashboards, landing pages, and listing pages in existing applications.
    -   Generate pages similar to the [Progress Design System page templates](https://www.telerik.com/design-system/docs/ui-templates/overview/).
-   Modify existing pages
    -   Enhance existing dashboards by adding new sections.
    -   Insert new sections that match existing layout style and responsiveness.
-   Create and modify themes
-   Implement Responsive Layout
    -   Create new responsive pages and sections.
    -   Convert existing pages to be responsive for mobile and tablet views.

For a comprehensive collection of sample prompts covering general UI tasks, layout organization, component implementation, styling, accessibility, and icon selection, see the [Agentic UI Generator Prompt Library](slug:agentic_ui_generator_prompt_library).

> While the Agentic UI Generator performs great with powerful models like **Claude Sonnet 4.6**, **GPT-5.2**, or **Gemini 3 Pro**, it also excels with smaller models as well (such as **Haiku** and **GPT 5.1 mini**).

## See Also

-   [Agentic UI Generator Prompt Library](slug:agentic_ui_generator_prompt_library)
-   [KendoReact MCP Server Overview](slug:ai_tools_overview)
-   [Progress Design System](https://www.telerik.com/design-system/docs/)

<style>
/* Border only on the outermost TabStrip — excludes any TabStrip nested inside another */
[class^="tab-strip-module--container"]:not([class^="tab-strip-module--container"] [class^="tab-strip-module--container"]) {
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    padding: 15px;
}

/* Breathing room after the nested TabStrip before following content */
[class^="tab-strip-module--container"] [class^="tab-strip-module--container"] {
    margin-bottom: 1.5rem;
    background: #f8f8f8;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    padding: 10px;
}

/* "Recommended" badge only on the CLI tab — excludes tablists inside a nested TabStrip */
[class^="tab-strip-module--tabList"]:not([class^="tab-strip-module--container"] [class^="tab-strip-module--container"] [class^="tab-strip-module--tabList"]) [class^="tab-strip-module--tabElement"]:first-child::after {
    content: "Recommended";
    display: inline-block;
    margin-left: 6px;
    padding: 2px 8px;
    border-radius: 999px;
    background: #e7f6ec;
    color: #1f7a3d;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    vertical-align: middle;
}

/* Dark mode overrides */
body.t-dark [class^="tab-strip-module--container"]:not([class^="tab-strip-module--container"] [class^="tab-strip-module--container"]) {
    border-color: rgba(113, 166, 255, 0.32);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

body.t-dark [class^="tab-strip-module--container"] [class^="tab-strip-module--container"] {
    background: #11184b;
    border-color: rgba(113, 166, 255, 0.32);
}

body.t-dark [class^="tab-strip-module--tabList"]:not([class^="tab-strip-module--container"] [class^="tab-strip-module--container"] [class^="tab-strip-module--tabList"]) [class^="tab-strip-module--tabElement"]:first-child::after {
    background: #0E2F1F;
    color: #4BBC19;
}
</style>
