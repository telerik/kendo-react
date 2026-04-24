---
title: Overview
description: 'Get started with the Smart functionality of the KendoKendoReact Data Grid.'
components: ['datagrid']
slug: smart_grid
position: 0
tier: premium
---

# KendoReact Smart DataGrid

The KendoReact Smart Grid enhances the traditional data grid with AI-powered capabilities that make data exploration more intuitive and efficient. By leveraging artificial intelligence, the Smart Grid can automatically analyze data patterns, suggest relevant operations, and provide intelligent insights to help users discover meaningful information faster.

<CtaPanelOverview></CtaPanelOverview>

## Overview

Explore the Smart Grid capabilities through the following examples:

<Row>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:smart_grid_basic_operations">
      <ComponentTitle>AI Smart Box</ComponentTitle>
      <ComponentDescription>Versatile search box combining traditional search, semantic search, and AI-powered Grid operations.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:smartbox_semantic_search_mode">
      <ComponentTitle>Semantic Search</ComponentTitle>
      <ComponentDescription>AI-enhanced search that interprets user intent and matches related terms and contextual meanings.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:ai_chat_assistant">
      <ComponentTitle>AI Chat Assistant</ComponentTitle>
      <ComponentDescription >Conversational Chat interface for performing Grid operations through natural language commands.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:ai_highlight">
      <ComponentTitle>AI-Powered Row Highlight</ComponentTitle>
      <ComponentDescription>Intelligent row highlighting based on natural language criteria.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:smart_grid_toolbar_assistant">
      <ComponentTitle>AI Toolbar Assistant</ComponentTitle>
      <ComponentDescription>Natural language control over data operations, column management, selection, highlighting, and export.</ComponentDescription>
    </Component>
  </Column>
  <Column count={[24,24,12]}>
    <Component className="tile pd-b" href="slug:ai_custom_column">
      <ComponentTitle>AI Column Assistant</ComponentTitle>
      <ComponentDescription>Personalized insights and explanations for individual data records through natural language questions.</ComponentDescription>
    </Component>
  </Column>
</Row>

## Supported Operations

The AI Assistant toolbar tool currently supports applying the following Grid operations through natural language prompts:

<table>
    <thead>
        <tr>
            <th width="25%" style="font-size: 19px;">Category</th>
            <th width="75%" style="font-size: 19px;">Operations</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong style="font-size: 19px;">Data Operations</strong></td>
            <td>
                <ul>
                    <li style="font-size: 19px;"><strong>Filtering</strong>&mdash;Filter data based on specific criteria.</li>
                    <li style="font-size: 19px;"><strong>Sorting</strong>&mdash;Sort data by one or multiple columns.</li>
                    <li style="font-size: 19px;"><strong>Grouping</strong>&mdash;Group data by specific fields.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong style="font-size: 19px;">Column Operations</strong></td>
            <td>
                <ul>
                    <li style="font-size: 19px;"><strong>Resize</strong>&mdash;Resize columns to specific widths.</li>
                    <li style="font-size: 19px;"><strong>Reorder</strong>&mdash;Change the order of columns.</li>
                    <li style="font-size: 19px;"><strong>Show/Hide</strong>&mdash;Show or hide specific columns.</li>
                    <li style="font-size: 19px;"><strong>Lock/Unlock</strong>&mdash;Lock or unlock columns to keep them visible while scrolling.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong style="font-size: 19px;">Highlighting and Selection</strong></td>
            <td>
                <ul>
                    <li style="font-size: 19px;"><strong>Row/Cell Highlighting</strong>&mdash;Highlight specific rows or cells that meet certain conditions.</li>
                    <li style="font-size: 19px;"><strong>Row/Cell Selection</strong>&mdash;Select/deselect rows or cells based on criteria, or select/deselect all items.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td><strong style="font-size: 19px;">Export</strong></td>
            <td>
                <ul>
                    <li style="font-size: 19px;"><strong>Excel/PDF Export</strong>&mdash;Export Grid data to Excel or PDF format.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Smart Grid Tools

The Smart Grid provides the following specialized toolbar tools that enable natural language interaction with your Grid data.

### AI Smart Box

The [AI Smart Box](slug:smart_grid_basic_operations) is a versatile search box that combines traditional search functionality with AI-powered capabilities. It provides three distinct modes that you can enable independently or in combination:

-   [Search Mode](slug:smart_grid_basic_operations)&mdash;Traditional keyword-based filtering across the Grid columns.
-   [Semantic Search Mode](slug:smart_grid_basic_operations)&mdash;Enhanced search that interprets user intent and matches related terms, synonyms, and contextual meanings to find semantically relevant data in the Grid.
-   [AI Assistant Mode](slug:smart_grid_basic_operations)&mdash;Full AI-powered Grid control with the same capabilities as the [AI Toolbar Assistant](slug:smart_grid_toolbar_assistant). Users can perform any [supported Grid operation](#supported-operations) through natural language prompts entered in the AI Assistant mode of the Smart Box.

The AI Smart Box is ideal when you want to provide a unified search and AI interaction experience in a single Grid toolbar control.

### AI Toolbar Assistant

> tip For an enhanced user experience with additional search capabilities, prompt suggestions, and streamlined UI, we recommend using the [AI Smart Box](slug:smart_grid_basic_operations). The AI Smart Box combines traditional search, semantic search, and AI-powered operations in a single, unified interface.

The [AI Toolbar Assistant](slug:smart_grid_toolbar_assistant) is a dedicated toolbar button with a distinctive AI sparkles icon that provides a streamlined interface for AI-powered Grid control, allowing users to enter natural language prompts to perform Grid operations.

This tool is ideal when you want to provide AI capabilities as a dedicated feature in your Grid toolbar, separate from other Grid controls. It offers a focused user experience specifically designed for performing [supported Grid operations](#supported-operations) through natural language prompts.

> For more information about setting up and integrating these tools, refer to the [AI Assistant Tools Setup](slug:ai_assistant_tools_setup) article.

## AI Service Configuration

The [Smart Grid AI Assistant tools](slug:ai_assistant_tools_setup) require a backend AI service that you must implement to process natural language prompts and return structured Grid operation commands. This service acts as the bridge between user prompts and Grid operations.

When a user interacts with the Smart Grid, your React application sends the prompt to your backend, which should process it using your configured AI provider, and return structured commands that the Grid can apply automatically.

### Smart Extensions

To simplify your backend implementation, we provide the `Telerik.AI.SmartComponents.Extensions` library for .NET applications. This library handles the complexity of interpreting natural language and generating Grid-compatible responses.

The library integrates with `Microsoft.Extensions.AI` and supports Azure OpenAI, OpenAI API, or local LLM models. It provides pre-built functionality for processing Grid-specific prompts and formatting responses correctly.

> For detailed implementation instructions, including package installation, AI provider configuration, and controller setup, see [AI Service Setup](slug:ai_service_setup).

### Custom Implementation

If you use a non-.NET backend (such as Node.js, Python, or Java) or have specific requirements that Smart Extensions does not cover, you can build your own AI service implementation.

Your custom backend must:

-   Accept requests with the user's prompt and Grid column information.
-   Process the prompt using your chosen AI provider or LLM.
-   Return responses in the format that the KendoKendoReact Data Grid expects.

Use the detailed information about the expected request and response structures from the [AI Service Setup](slug:ai_service_setup#request-and-response-format) article to build a compatible custom service.

<!-- Remove after the cards are fixed in docs-builder -->
<style>
.pd-b div:first-child {
  padding-top: 10px;
}
</style>
