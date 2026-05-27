---
title: Changelog
page_title: KendoReact AI Tools Changelog
description: 'Find out about the latest changes and improvements in the KendoReact AI Tools and the Agentic UI Generator.'
slug: ai_tools_changelog
position: 50
---

# KendoReact AI Tools Changelog

Learn about the latest changes, improvements, and bug fixes in the KendoReact AI Tools. The updates are structured in chronological order with the newest ones appearing first.

## March, 2026 Changelog

### Highlights

-   Added the new Getting Started Assistant to help you scaffold a React project, configure the KendoReact MCP server, and activate your license through a guided flow.
-   Expanded the Accessibility Assistant with contrast support to help validate color combinations against WCAG 2.2 Level AA requirements.

## February, 2026 Changelog

### Highlights

-   Added an Accessibility Assistant to the KendoReact MCP server to provide WCAG 2.2 Level AA guidance, help implement proper ARIA roles, and surface component-specific accessibility API references.
-   Updated the component snippets to align with the latest version.
-   Implemented an improved mechanism for scraping documentation articles.
-   Deprecated the AI Coding Assistant and included the Agentic UI Generator in all active subscription models.

## January, 2026 Changelog

### Highlights

-   The AI Coding Assistant and Agentic UI Generator are now delivered through a single [KendoReact MCP server](slug:agentic_ui_generator_getting_started).
-   Agentic UI Generator is migrated from remote to local MCP server.
-   The API key authentication of the Agentic UI Generator is replaced with Telerik license-based activation.
-   Unified [installation process](slug:agentic_ui_generator_getting_started) for both AI tools through a single MCP server configuration.
-   The MCP server automatically detects your Telerik license when configured globally, simplifying the setup process.
-   The MCP server grants access to the appropriate assistants based on your license type.
-   AI Coding Assistant now includes an intelligent orchestrator that coordinates two specialized assistants (Component Assistant and Icon Assistant).

## November, 2025 Changelog

### Highlights

#### Agentic UI Generator

-   Initial launch of the Agentic UI Generator for KendoReact.
-   Introduced AI-powered UI generator that creates complete, production-ready pages based on natural language prompts.
-   Enabled support for creating new pages from scratch and modifying existing ones with maintainable structure and responsive behavior.
-   Integrated specialized assistants working in an organized, agentic flow to deliver fully functional UIs from a single prompt.

#### AI Coding Assistant

-   Updated component snippets with refined code examples.
-   Improved API descriptions for better context matching and accuracy.
-   Overall improvement of the coding assistant answers through enhanced documentation context.

> [Microsoft sunset GitHub Copilot extensions](https://github.blog/changelog/2025-09-24-deprecate-github-copilot-extensions-github-apps) on November 10, 2025, in favor of the Model Context Protocol (MCP) standard.

> From that date, the Telerik and Kendo UI AI Coding Assistants are available exclusively through our [MCP server](slug:agentic_ui_generator_getting_started), ensuring you continue to enjoy the same powerful capabilities that are delivered by a modern, open, and officially recommended standard.

## October, 2025 Changelog

### Highlights

#### AI Coding Assistant

-   Enhanced the assistant to suggest the automated way of installing the KendoReact packages in your project.
-   Enhanced Grid implementation assistance to suggest the data-binding directive for simple scenarios and suggest the most up-to-date API setup.
-   Added support for the Grid's new smart features, enabling the assistant to configure them correctly in your application.

### Fixes

#### AI Coding Assistant

-   Resolved issue where the assistant referenced non-official documentation sources instead of the official KendoReact documentation.
-   Corrected icon recommendations to suggest SVG icons instead of font icons, unless otherwise specified.
-   Fixed the assistant using deprecated component properties, ensuring it can identify them and suggest their modern replacements.

## August, 2025 Changelog

### Highlights

#### AI Coding Assistant

-   Initial launch of the AI Coding Assistant for KendoReact.
-   Introduced AI-powered assistant that provides intelligent code suggestions, context-aware documentation, and quick access to component APIs.
-   Enabled support for automated code generation and error detection to streamline your development workflow.

## See Also

-   [KendoReact AI Tools Overview](slug:ai_tools_overview)
-   [Installing the KendoReact MCP Server](slug:agentic_ui_generator_getting_started)
-   [Agentic UI Generator Getting Started](slug:agentic_ui_generator_getting_started)
