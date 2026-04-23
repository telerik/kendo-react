---
title: Overview
page_title: KendoReact AI Tools Overview
description: Discover the KendoReact MCP server tools and learn how the Agentic UI Generator helps you build production-ready UIs faster.
slug: ai_tools_overview
position: 10
tag: updated
---

# KendoReact AI Tools Overview

The KendoReact AI Tools are delivered through a single [Model Context Protocol (MCP) server](https://modelcontextprotocol.io/introduction) that connects your AI client to KendoReact-specific knowledge and UI-generation capabilities.

From idea to implementation, you can use the MCP server to generate complete pages, configure components correctly, align with the Progress Design System, and reduce repetitive setup work.

## What Are the KendoReact AI Tools

KendoReact AI Tools are available through:

> [`@progress/kendo-react-mcp`](https://www.npmjs.com/package/@progress/kendo-react-mcp)

The KendoReact MCP server uses an orchestration-first model, centered on the Agentic UI Generator tool. It contains a core set of specialized assistants. Click the cards below for more details on each assistant:

<Row>
    <Column count={[24,12,8]}>
        <Component className="tile card-icon" href="#how-the-agentic-flow-works">
            <ComponentTitle>UI Generator (Orchestrator)</ComponentTitle>
        </Component>
     </Column>
    <Column count={[24,12,8]}>
        <Component className="tile card-icon" href="#getting-started-assistant">
            <ComponentTitle>Getting Started Assistant</ComponentTitle>
        </Component>
    </Column>
    <Column count={[24,12,8]}>
        <Component className="tile card-icon" href="#component-assistant">
            <ComponentTitle>Component Assistant</ComponentTitle>
        </Component>
    </Column>
    <Column count={[24,12,6]}>
        <Component className="tile card-icon" href="#icon-assistant">
            <ComponentTitle>Icon Assistant</ComponentTitle>
        </Component>
    </Column>
    <Column count={[24,12,6]}>
        <Component className="tile card-icon" href="#layout-assistant">
        <ComponentTitle>Layout Assistant</ComponentTitle>
        </Component>
    </Column>
    <Column count={[24,12,6]}>
        <Component className="tile card-icon" href="#styling-assistant">
        <ComponentTitle>Styling Assistant</ComponentTitle>
    </Column>
    <Column count={[24,12,6]}>
      <Component className="tile card-icon" href="#accessibility-assistant">
        <ComponentTitle>Accessibility Assistant</ComponentTitle>
        </Component>
    </Column>
</Row>

The Agentic UI Generator orchestrates all assistants so you can build pages and components, apply styling and theming, and stay aligned with the design system in one seamless process. You can use the full end-to-end flow when you need complete page generation, or call a specific assistant directly when you need a focused change.

 <img alt="MCP Server Assistants Diagram" src="images/ai-assistants.png"/>

## How the Agentic Flow Works

The Agentic UI Generator takes one prompt and manages the flow for you. It decides which assistants to use and combines their output into a single result. Use it when you want to generate a full page quickly, or call a specific assistant when you need a focused update to the layout, components, styling, theme, or icons in your project.

<img alt="Icon Assistant" src="images/ui-templates.png" style="width: 50%"/>

### Getting Started Assistant

Use the Getting Started Assistant when you want a guided onboarding flow for first-time setup. Call it to scaffold a React project, configure the MCP server, and complete license activation with minimal manual steps.

It is useful when setting up a new environment, validating your initial MCP integration, or preparing a clean proof of concept quickly.

<!-- <img alt="Getting Started Assistant" src="images/getting-started-assistant.png" style="width: 30%"/> -->

### Layout Assistant

Use the Layout Assistant to set up or refine the page structure. It helps with section order, spacing, and responsive behavior so the UI stays clear across desktop, tablet, and mobile.

Typical tasks include adding a new dashboard section, cleaning up visual hierarchy, and converting desktop-first screens into responsive layouts.

<img alt="Layout Assistant" src="images/layout-assistant.png" style="width: 100%"/>

### Component Assistant

Use the Component Assistant when you need help implementing or configuring KendoReact components. It helps you pick the right component and wire it correctly with real API patterns.

Common tasks include enabling Grid features (sorting, paging, filtering, grouping), building validated forms, setting up virtual scrolling or export, and using sample data for safe prototyping.

<img alt="Component Assistant" src="images/component-assistant.png" style="width: 650px"/>

### Styling Assistant

Use the Styling Assistant when you want consistent visuals across the app. It helps define reusable tokens and CSS variables for scalable theming.

Typical tasks include applying brand colors, adding dark mode or high-contrast variants, and keeping styling behavior consistent as new pages are added.

<img alt="Styling Assistant" src="images/style-assistant.png" style="width: 90%"/>

### Icon Assistant

Use the Icon Assistant to choose icons that match user actions and UI context. It helps keep navigation, status indicators, and action buttons visually consistent.

It is useful for toolbars, navigation menus, cards, and any new section where icon consistency matters.

<img alt="Icon Assistant" src="images/icon-assistant.png" style="width: 50%"/>

### Accessibility Assistant

Use the Accessibility Assistant to apply WCAG 2.2 Level AA guidance during implementation, not after it. It helps with ARIA usage, keyboard navigation, semantic markup, and color contrast validation for text and UI controls.
It is especially useful for interactive templates, complex component flows, and final semantic checks before release.

<img alt="Icon Assistant" src="images/accessibility-assistant.png" style="width: 50%"/>

### When to Use Orchestrated vs Targeted Mode

Use `#kendo_ui_generator` for a complete orchestration-first workflow from a single prompt. When you need finer control or want to adjust just one aspect (such as layout, theme, or a component), you can call a specialized assistant directly by its dedicated handle. For details, see [Target the Assistants (Advanced)](slug:agentic_ui_generator_prompt_library#assistant-specific-prompts).

## Start Building in Minutes

Go from zero setup to your first generated UI quickly with the smart Getting Started assistant. Start with [Agentic UI Generator Getting Started](slug:agentic_ui_generator_getting_started) for a simple, guided flow through MCP setup, license activation, and your first prompt.

Then move faster with ready-to-use examples in the [Agentic UI Generator Prompt Library](slug:agentic_ui_generator_prompt_library).

## License Requirements

The KendoReact MCP server and its tools are offered as a single experience through the **Agentic UI Generator** (`#kendo_ui_generator`) in [all active Telerik subscription models](https://www.telerik.com/purchase.aspx?filter=web).

<table>
<thead>
<tr>
<th width="40%">License Type</th>
<th width="30%">Agentic UI Generator</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Subscription License</strong>
</td>
<td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg></td>
</tr><tr>
<td><strong>Trial License</strong></td>
<td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" stroke="white" stroke-width="2"/></svg></td>
</tr>
<tr>
<td><strong>Perpetual License</strong></td>
<td>No*</td>
</tr>

</tbody>
</table>

<p style="font-size: 18px; font-style: italic; color: #666; margin-top: 12px; line-height: 1.5;">
<em>
*  All AI tools are available with a <a href="https://www.telerik.com/mcp-servers-react/thank-you">30-day AI Tools trial</a> or <a href="https://www.telerik.com/try/kendo-react-ui">a KendoReact trial</a>.
</em> <br/>

</p>

## Privacy

The KendoReact MCP server operates under the following conditions:

-   The MCP server does not have access to your workspace and application code. Note that when using the KendoReact MCP server (or any other MCP server), the LLM generates parameters for the MCP server request, which may include parts of your application code.
-   The MCP server does not use your prompts to train Telerik AI models.
-   The MCP server does not generate the actual responses and has no access to these responses. The MCP server only provides better context that helps your selected model (for example, GPT, Gemini, Claude) produce better responses.
-   The MCP server does not associate your prompts with your Telerik user account. Your prompts and generated context are anonymized and stored for statistical and troubleshooting purposes.

## Next Steps

-   Install the KendoReact MCP server and get started with the [Agentic UI Generator Getting Started](slug:agentic_ui_generator_getting_started) guide.
-   Check out the [Agentic UI Generator Prompt Library](slug:agentic_ui_generator_prompt_library).
-   Review the [Changelog](slug:ai_tools_changelog) for the latest updates.

<style>
div .card-icon {
    padding: 10px 0;
}

.d-print-none button:nth-child(2) {
  display: none !important;
}
</style>
