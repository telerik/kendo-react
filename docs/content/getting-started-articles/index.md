---
title: Quick Start
page_title: Getting Started With React Component Library - KendoReact
description: "Learn how to use KendoReact components and see how to take your React application's UI to the next level."
slug: getting_started
position: 10
category: getting-started
tag: updated
---

# Getting Started with KendoReact

Get up and running with KendoReact - scaffold a project in just a few steps, then explore the most popular components to start building your UI.

<CtaPanelOverview title="New to KendoReact?" message="@KendoReactLink is an enterprise-grade React UI library with 120+ free and premium components for building polished, performant apps.">
<span token="KendoReactLink">

[KendoReact](https://www.telerik.com/kendo-react-ui)

</span>
</CtaPanelOverview>

## Quick Start

Set up your first KendoReact project and start building in minutes. Use the **Kendo CLI** for fast command-line scaffolding (recommended), or the **VS Code Extension** for a visual, wizard-driven experience with full customization:

<TabStrip>
<TabStripTab title="CLI">

### Create a Project with the Kendo CLI

The [Kendo CLI](https://www.npmjs.com/package/@progress/kendo-cli) generates ready-to-run Vite projects with JavaScript or TypeScript.

1.  Install the CLI globally:

    ```sh
    npm i -g @progress/kendo-cli
    ```

1.  Configure the MCP server for your IDE and set up your Telerik license:

    ```sh
    npx kendo react setup
    ```

1.  Generate a new project by running the [preferred command](slug:kendo_cli_options#generate-a-kendoreact-project) in the terminal:

    ```sh Vite
    npx kendo react create vite MyKendoApp --free
    ```
    ```sh Next.js
    npx kendo react create nextjs MyKendoApp --free
    ```
    ```sh Astro
    npx kendo react create astro MyKendoApp --free
    ```

    <p style="font-size: 18px; font-style: italic; color: #666; margin-top: 12px; line-height: 1.5;">
    <em>
    *  Use the <code>--free</code> or <code>--premium</code> flag to choose between KendoReact <strong>Free</strong> and  <strong>Premium</strong> project templates and component tier.
    </em> <br/>
    </p>

1.  Navigate to the project and start the dev server:

    ```sh
    cd MyKendoApp && npm i
    npm run dev
    ```

Now that you have created your first KendoReact project and set up the [KendoReact MCP server](slug:ai_tools_overview), you can use the **Agentic UI Generator** in your IDE to add and customize components with natural language.

```prompt
#kendo_ui_generator Create an area chart with time data using date/time axis and enabled zooming.
```

For a full list of example prompts, see the [Agentic UI Generator Prompt Library](slug:agentic_ui_generator_prompt_library).

</TabStripTab>
<TabStripTab title="VS Code Extension">

### Create a Project with the VS Code Extension

Use the [Kendo UI Productivity Tools extension for VS Code](slug:vscodewizard_installation) to scaffold a project from a template wizard.

1. Install the extension from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=KendoUI.kendotemplatewizard)

1. Open the **VS Code Command Palette** (`Ctrl/Command + Shift + P`) and type **"Kendo UI Template Wizard"**.

1. Set the project **name** and **path**, choose **KendoReact** as the project type and configure the following options:

    - **Product tier** - KendoReact Free (50+ components) or KendoReact Premium (120+ components)
    - **Framework** - Vite, Next.js, or Astro
    - **Programming language** - JavaScript or TypeScript
    - **Theme** - Default, Bootstrap, Material, or Fluent
    - **Styling** - CSS or Sass

1. Click **Create Project**, then install dependencies and run:

    ```sh
    npm i && npm run dev
    ```

The extension also provides [code snippets](slug:snippets_vscode_installation) (type `kr-` in your editor) and a [scaffolding tool](slug:scaffolders_vscode_installation) for generating complex components like Charts, Forms, and Schedulers.

</TabStripTab>

</TabStrip>

### Have an Existing Project?

If you want to add any KendoReact component to an existing project, follow the steps below:

1. Add the required package and preferred [Kendo theme](https://www.telerik.com/design-system/docs/themes/get-started/introduction/):

    ```sh
    npm i @progress/kendo-react-dateinputs @progress/kendo-theme-default
    ```

1. Import the component and the theme styles in your page:

    ```tsx
    import { Calendar } from '@progress/kendo-react-dateinputs';
    import '@progress/kendo-theme-default/dist/all.css';
    ```

## Next Steps

We are sure that you are looking for more — [browse the components section](https://www.telerik.com/kendo-react-ui/components/) and discover the amazing features that KendoReact brings to the table.

Happy coding!

<article-card-container>
    <article-card
        href="slug://overview_grid"
        src="./images/grid.svg"
        darkSrc="./images/grid.svg"
        title="Data Grid"
        subTitle="UI Component"
        description="Transform data into interactive experiences with powerful sorting, filtering, paging, and editing built right in.">
    </article-card>
    <article-card
        href="slug://overview_charts"
        src="./images/charts.svg"
        darkSrc="./images/charts.svg"
        title="Charts"
        subTitle="UI Component"
        description="Turn complex datasets into stunning visual stories with 70+ customizable chart types and real-time updates.">
    </article-card>
    <article-card
        href="slug://overview_form"
        src="./images/form.svg"
        darkSrc="./images/form.svg"
        title="Form"
        subTitle="UI Component"
        description="Build robust forms effortlessly with automatic validation, field management, and seamless data handling.">
    </article-card>
    <article-card
        href="slug://ai_tools_overview"
        title="AI Tools"
        src="./images/productivity-3.svg"
        darkSrc="./images/productivity-3.svg"
        subTitle="Productivity Tools"
        description="Build UIs faster than ever - just describe what you need, and watch AI generate production-ready components instantly.">
    </article-card>
    <article-card
        href="slug://overview_vscode_installation"
        title="VS Code Extension"
        src="./images/productivity-3.svg"
        darkSrc="./images/productivity-3.svg"
        subTitle="Productivity Tools"
        description="Boost your productivity with instant project scaffolding, smart snippets, and one-click component generation right in your editor.">
    </article-card>
    <article-card
        href="https://www.telerik.com/design-system/docs/"
        title="Progress Design System"
        src="./images/productivity-3.svg"
        darkSrc="./images/productivity-3.svg"
        subTitle="Productivity Tools"
        description="Create pixel-perfect, accessible interfaces with ready-to-use Figma kits and comprehensive design patterns.">
    </article-card>
</article-card-container>

<style>
[class^="tab-strip-module--container"] {
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    padding: 15px;
}

[class^="tab-strip-module--tabList"] [class^="tab-strip-module--tabElement"]:first-child::after {
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
</style>
