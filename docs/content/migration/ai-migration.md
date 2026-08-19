---
title: AI-Assisted Migration
page_title: KendoReact AI-Assisted Migration
description: 'Learn how the KendoReact Upgrade Assistant helps you upgrade between major versions by combining automated codemods with AI-powered code resolution.'
slug: ai_upgrade_assistant
position: 15
components: ["general"]
---

# AI-Assisted Migration

KendoReact provides AI-assisted migration through the [Upgrade Assistant](slug:ai_tools_overview#upgrade-assistant)&mdash;a dedicated tool in the [KendoReact MCP server](slug:ai_tools_overview) that helps you upgrade between major versions. It combines deterministic [codemods](slug:assisted_migration) with AI-powered code analysis to provide a reliable, end-to-end migration experience.

## How It Works

The Upgrade Assistant uses a two-phase hybrid approach:

1. **Automated transformations**&mdash;The assistant invokes the [Kendo CLI](slug:assisted_migration), which updates your NPM packages and runs all relevant codemods for the migration path. Some codemods rewrite your source files directly (for example, renaming a prop across your project), while others identify changes that require manual intervention and pass targeted guidance to the AI.
1. **AI-powered resolution**&mdash;The assistant reviews the codemod results and either applies further fixes automatically or guides you through any remaining manual steps, such as interface changes or project-specific edge cases.

This combination ensures that straightforward changes are handled automatically, while complex issues are resolved with precision.

## Prerequisites

To use the Upgrade Assistant, you need:

* A [compatible MCP client](https://modelcontextprotocol.io/clients) with MCP server support, such as VS Code or Cursor.
* An active Telerik subscription or trial license. See the [license requirements](slug:ai_tools_overview#license-requirements) for details.
* The KendoReact MCP server installed and configured in your IDE.
    > If you have not done this yet, follow the [Getting Started with the Agentic UI Generator](slug:agentic_ui_generator_getting_started) guide, which walks you through installing the Kendo CLI, configuring the KendoReact MCP server, and activating your license.

## Upgrade Your Project

To upgrade your KendoReact project to a new major version:

1. Open your IDE and start a new chat session.
1. Invoke the Upgrade Assistant with a prompt describing the migration path:
    ```prompt
    #kendo_upgrade_assistant Upgrade my project from KendoReact v10 to v11
    ```
    To target a specific package instead of the entire project, include the package name:
    ```prompt
    #kendo_upgrade_assistant Upgrade @progress/kendo-react-grid from v10 to v11
    ```

1. The assistant invokes the Kendo CLI, which updates your NPM packages and runs all codemods for the specified migration path. For a full list of what each codemod covers, see [Available Codemods](slug:available_codemods).
1. The assistant reviews the results and either applies further fixes automatically or guides you through any remaining manual steps.
1. Review the changes applied to your codebase.
1. Accept the suggested fixes and re-run the build to confirm all errors are resolved.
1. Do a test run of your project to verify that everything works as expected.

> If you encounter issues with the MCP server during the migration, refer to the [AI Tools Troubleshooting](slug:ai_tools_troubleshooting) guide.

## When to Use the Upgrade Assistant

Use the Upgrade Assistant when:

* You are upgrading between major KendoReact versions and want end-to-end guidance.
* Codemods alone have left compilation errors or project-specific issues that require further resolution.
* You want to reduce manual migration effort and get consistent outcomes across a large codebase.

If you prefer to run only the automated codemods without AI assistance, use the [Kendo CLI directly](slug:assisted_migration).

## See Also

-   [Assisted Migration Tooling](slug:assisted_migration)
-   [Available Codemods](slug:available_codemods)
-   [KendoReact AI Tools Overview](slug:ai_tools_overview)
-   [Getting Started with the Agentic UI Generator](slug:agentic_ui_generator_getting_started)
-   [AI Tools Troubleshooting](slug:ai_tools_troubleshooting)
