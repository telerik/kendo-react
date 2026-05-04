---
title: Overview
description: 'Get started with the React Tooltips package by KendoReact and learn more about how to use the Tooltips components in React projects.'
slug: overview_tooltips
position: 0
---

# KendoReact Tooltips Overview

The KendoReact Tooltips provides popups with information that is related to a UI element. They get displayed when this UI element is clicked or hovered over.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Tooltips package:

{% meta height:550 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/styles.css %}
{% endmeta %}

## What are the KendoReact Tooltips?

The Tooltips are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-tooltip](https://www.npmjs.com/package/@progress/kendo-react-tooltip)

### Package Contents

All KendoReact Tooltips are freely available for use without a commercial license.

The package provides the following free React components:

<Row>
    <Column count={6}>
        <Component href="{% slug overview_tooltip %}">
            <svg id="tooltip" viewbox="0 0 24 24">
                <path d="M18,6H6v2h10L18,6z M2,0v19h5l5,5l5-5h5V0H2z M20,17h-3.8L12,21.2L7.8,17H4V2h16V17z M14,10H6v2h6L14,10z" />
            </svg>
            <ComponentTitle>Tooltip</ComponentTitle>
            <ComponentDescription>Displays informative text when an element is hovered over or clicked</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_popover %}">
            <svg id="popover" viewbox="0 0 24 24">
                <path d="M6,17h6l2-2H6V17z M17,5l-5-5l-1.4,1.4l0,0L7,5H2v19h20V5H17z M20,22H4V7h3.8L12,2.8L16.2,7H20V22z M6,13h10l2-2H6V13z" />
            </svg>
            <ComponentTitle>Popover</ComponentTitle>
            <ComponentDescription>Displays additional interactive content next to given anchor.</ComponentDescription>
        </Component>
    </Column>
</Row>

### Key Features

The KendoReact Tooltips provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
-   Full control over the [Positioning](slug://positioning_tooltip)
-   Customizable content rendering via [Templates](slug://templates_tooltip)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Tooltips Work?

> The KendoReact Tooltips provide [free React tooltips](#package-contents) that don't require a commercial license key or an active trial license key to install or use.

The KendoReact Tooltips are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React tooltips and you can extend or override their default behaviors and appearance via props and event handlers.

### React Tooltips with Other KendoReact Components

You can combine multiple KendoReact components with the React tooltips in the same application:

-   Display a Tooltip with more details in a [Grid](slug://overview_grid) cell
-   Render a Tooltip when hovering over a [Button](slug://overview_buttons)

> The Tooltips package is a dependency for multiple other KendoReact components.

### React Tooltips with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Tooltips Free to Use?

Yes. All KendoReact Tooltips are free to use without any license or registration with Progress or Telerik.

### How to Create Tooltips in React?

To create a tooltip in React, you need to install the KendoReact Tooltips package and then import the respective tooltips components in your application. After that, you can use the various available tooltips in your React application. For more information, refer to the [Getting Started with the KendoReact Tooltips](slug://getstarted_tooltips) article.

### What are the Available Support Options?

For any questions about the use of the KendoReact Tooltips, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

**KendoReact license holders and anyone in an active trial** can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Free Components](https://www.telerik.com/kendo-react-ui/components/free)

-   [Getting Started with the KendoReact Tooltips]({% slug getstarted_tooltips %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with the KendoReact Free Components](slug:getting_started_free_vs_premium)
-   [Explore the Free Project Tracker Sample Application](slug:project-tracker-with-free-components)
-   [Free Project Tracker app page template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
