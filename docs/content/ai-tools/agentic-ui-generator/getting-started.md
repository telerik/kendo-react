---
title: Getting Started
page_title: Getting Started with the KendoReact Agentic UI Generator
description: Learn how to use the Agentic UI Generator that integrates with your IDE for complete UI generation, styling, and responsive design.
slug: agentic_ui_generator_getting_started
position: 10
tag: updated
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

1. Open your terminal and install the Kendo CLI globally:

    ```sh
    npm i -g @progress/kendo-cli
    ```

1. Configure the KendoReact MCP server for your IDE and set up your Telerik license in a single step with the Kendo CLI:

    ```sh
    npx kendo react setup
    ```

1. Create a new empty folder for your project and open it in your IDE. Then, in the AI chat interface, invoke the **Getting Started Assistant**:

    ```prompt
    #kendo_getting_started_assistant create a new React project
    ```

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
