---
title: Overview
description: 'Get started with the React Buttons package by KendoReact and learn more about how to use the Buttons components in React projects.'
components:
    [
        'button',
        'buttongroup',
        'chip',
        'chiplist',
        'dropdownbutton',
        'floatingactionbutton',
        'segmentedcontrol',
        'smartpaste',
        'speechtotextbutton',
        'splitbutton',
        'toolbar'
    ]
slug: overview_buttons
position: 0
---

# KendoReact Buttons Overview

The KendoReact Buttons is a collection of customizable, responsive, and interactive UI components that you can use to trigger actions or display content in your React apps.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Buttons package:

{% meta height:490 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/styles.css %}
{% endmeta %}

## What are the KendoReact Buttons?

The Buttons are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-buttons](https://www.npmjs.com/package/@progress/kendo-react-buttons)

### Package Contents

#### Free React Buttons

The following components are available for use without a commercial license.

<Row>
   <Column count={6}>
    <Component href="slug://overview_button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>button</title>
        <path d="M0,5V19H24V5ZM22,17H2V7H22Zm-3-6H5v2H17Z" />
      </svg>
      <ComponentTitle>Button</ComponentTitle>
      <ComponentDescription>A React <code>button</code> component.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_buttongroup">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>buttongroup</title>
        <path class="cls-1" d="M0,7v9H24V7Zm7,7H2V9H7Zm8,0H9V9h6Zm7,0H17V9h5Z" />
      </svg>
      <ComponentTitle>ButtonGroup</ComponentTitle>
      <ComponentDescription>Grouped Buttons with identical functionalities.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_chip">
      <svg id="chip" viewbox="0 0 72 72">
        <path d="M57,48H15v6h36L57,48z M0,30v42h72V30H0z M66,66H6V36h60V66z" />
      </svg>
      <ComponentTitle>Chip</ComponentTitle>
      <ComponentDescription>A component allowing users to enter information, make selections, filter content, or trigger actions.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_chiplist">
      <svg id="chiplist" viewbox="0 0 72 72">
        <path d="M57,48H15v6h36L57,48z M0,30v42h72V30H0z M66,66H6V36h60V66z" />
      </svg>
      <ComponentTitle>ChipList</ComponentTitle>
      <ComponentDescription>A component allowing you to maintain a set of selected chips.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_floatingactionbutton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>floatingactionbutton</title>
          <path d="M17,15H0l2-2h15V15z M17,7H2L0,9h17V7z M17,1H2L0,3h17V1z M21,18c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S22.7,18,21,18z
	 M21,12c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,12,21,12z M21,6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,6,21,6z M21,0
	c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S22.1,0,21,0z"/>
      </svg>
      <ComponentTitle>FloatingActionButton</ComponentTitle>
      <ComponentDescription>A component for specifying the primary action in an application.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_segmentedcontrol">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>segmentedcontrol</title>
        <path class="cls-1" d="M0,7v9H24V7Zm7,7H2V9H7Zm8,0H9V9h6Zm7,0H17V9h5Z" />
      </svg>
      <ComponentTitle>SegmentedControl</ComponentTitle>
      <ComponentDescription>A component displaying a horizontal set of mutually exclusive buttons for single-option selection.</ComponentDescription>
    </Component>
  </Column>
    <Column count={6}>
        <Component href="slug://overview_toolbar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>toolbar</title>
        <path class="cls-1" d="M0,0V24H20l4-4V0ZM22,19.17,19.17,22H2V10H22ZM22,8H2V2H22ZM20,4H16V6h4ZM8,4H4V6H8Zm6,0H10V6h4Z" />
      </svg>
      <ComponentTitle>Toolbar</ComponentTitle>
      <ComponentDescription>A React <code>toolbar</code> component for holding Button and ButtonGroup elements.</ComponentDescription>
    </Component>
  </Column>
</Row>

#### Premium React Buttons

The following components require a commercial license.

<Row>
  <Column count={6}>
    <Component href="slug://overview_dropdownbutton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>dropdownbutton</title>
        <path class="cls-1" d="M19,11H17v2h2ZM0,5V19H24V5ZM22,17H2V7H22Zm-8-6H5v2h7Z" />
      </svg>
      <ComponentTitle>DropDownButton</ComponentTitle>
      <ComponentDescription>A component for executing additional action items.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug://overview_splitbutton">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>splitbutton</title>
        <path class="cls-1" d="M12,11H5v2h5ZM0,5V19H24V5ZM15,17H2V7H15Zm7,0H17V7h5Z" />
      </svg>
      <ComponentTitle>SplitButton</ComponentTitle>
      <ComponentDescription>A component for executing default or predefined actions.</ComponentDescription>
    </Component>
  </Column>
    <Column count={6}>
    <Component href="slug:overview_smartpaste">
      <ComponentIcon>
        <path class="cls-1" d="M10.5 0.75c1.11 0 2.08 0.61 2.6 1.5h2.22l-0.94 2.38-5.88 1.62H6V3.75H3v18h15v-5.97l1.5-3.81V21.75c0 0.83-0.67 1.5-1.5 1.5H3c-0.83 0-1.5-0.67-1.5-1.5V3.75c0-0.83 0.67-1.5 1.5-1.5h4.91c0.52-0.89 1.49-1.5 2.59-1.5m0 1.5c-0.83 0-1.5 0.67-1.5 1.5h3c0-0.83-0.67-1.5-1.5-1.5m6.75 0 1.48 3.77 3.77 1.48-3.77 1.48-1.48 3.77-1.48-3.77-3.77-1.48 3.77-1.48z"/>
      </ComponentIcon>
      <ComponentTitle>SmartPasteButton</ComponentTitle>
      <ComponentDescription>A component for intelligent clipboard operations with AI-powered content transformation.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug:overview_speechtotextbutton">
      <ComponentIcon>
        <path class="cls-1" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-4 0V4a2 2 0 0 1 2-2zm5 8a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-3.08A7 7 0 0 0 19 10h-2z"/>
      </ComponentIcon>
      <ComponentTitle>SpeechToTextButton</ComponentTitle>
      <ComponentDescription>A component for converting spoken input into text using speech recognition.</ComponentDescription>
    </Component>
  </Column>
</Row>

### Key Features

The KendoReact Buttons provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in appearance options to adjust the form and dimensions of your buttons
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   Built-in **disabled mode** via the `disabled` property
-   Customization with **[icons](slug://icons_button)**, **[avatars](slug://customization_chip)**, and **[animations](slug://customization_dropdownbutton)**
-   [Globalization](slug://rtl_buttons)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Buttons Work?

The KendoReact Buttons are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React buttons and you can extend or override their default behaviors and appearance via props and event handlers.

### React Buttons with Other KendoReact Components

You can combine multiple KendoReact components with the React buttons in the same application:

-   Add buttons to your [Grid](slug://overview_grid) header or rows.
-   Use buttons to submit data with [Inputs](slug://overview_inputs).
-   Build more interactive [Dialogs](slug://overview_dialogs) with buttons.
-   Show [Notifications](slug://overview_notification) when you trigger an action with a button.
-   Toggle between [Chart](slug://overview_charts) types in complex reporting apps.

> The Buttons package is a dependency for multiple other KendoReact components.

## Support Options

For support options, see the [KendoReact Support](https://www.telerik.com/kendo-react-ui/support) page.

## Suggested Links

-   [Getting Started with the KendoReact Free Components](slug:free_components_introduction)
