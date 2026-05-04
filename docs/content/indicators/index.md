---
title: Overview
description: 'Try now the React Indicators package by KendoReact and discover the variety of features that it provides for your next React project.'
slug: overview_indicators
position: 0
---

# KendoReact Indicators Overview

The KendoReact Indicators package delivers components for creating a visual indication for current status, on-going process or state change.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:310 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Indicators?

The Indicators are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-indicators](https://www.npmjs.com/package/@progress/kendo-react-indicators)

## Package Contents

All KendoReact Indicators are freely available for use without a commercial license.

The package provides the following free React components:

<Row>
    <Column count={12}>
        <Component href="{% slug overview_badge %}">
            <svg viewBox="0 0 24 24">
                <path  d="M17,18H2V7h9V5H0V20H19V10H17ZM13,4V8h7l4-4Z"/>
            </svg>
            <ComponentTitle>Badge</ComponentTitle>
            <ComponentDescription>A component that represents a visual indicator such as status or notification.</ComponentDescription>
        </Component>
    </Column>
    <Column count={12}>
        <Component href="{% slug overview_loader %}">
            <svg viewBox="0 0 24 24">
                <path d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10 S17.5,22,12,22z M13,6l-2-2v8l5.1,5h2.8L13,11.1V6z"/>
            </svg>
            <ComponentTitle>Loader</ComponentTitle>
            <ComponentDescription>A component that represents a visual indication of an indeterminate wait time.</ComponentDescription>
        </Component>
    </Column>
    <Column count={12}>
        <Component href="{% slug overview_skeleton %}">
            <svg viewBox="0 0 24 24">
                <path d="M24,4H8v2h14L24,4z M3,8c1.7,0,3-1.3,3-3S4.7,2,3,2S0,3.3,0,5S1.3,8,3,8z M0,22h24V10H0V22z"/>
            </svg>
            <ComponentTitle>Skeleton</ComponentTitle>
            <ComponentDescription>A component that represents a placeholder that is rendered initially on a page before the actual content loads.</ComponentDescription>
        </Component>
    </Column>
</Row>

## Key Features

The KendoReact Indicators provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in appearance options to adjust the color, form and dimensions of your indicators
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   [Globalization](slug://rtl_indicators)

## How Do the KendoReact Indicators Work?

> The KendoReact Indicators provide [free React indicators](#package-contents) that don't require a commercial license key or an active trial license key to install or use.

The KendoReact Indicators are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React indicators and you can extend or override their default behaviors and appearance via props and event handlers.

### React Indicators with Other KendoReact Components

You can combine multiple KendoReact components with the React indicators in the same application.

-   Add a Loader to indicate that data is being fetched for a [Grid](slug://overview_grid).
-   Show unread notifications with a Badge on an [AppBar](slug://overview_appbar) or [Button](slug://overview_button).
-   Improve UX with Skeleton placeholders for a [Card](slug://overview_card) with profile details while data loads.

> The Indicators package is a dependency for multiple other KendoReact components.

### React Indicators with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Indicators Free to Use?

Yes. All KendoReact Indicators are free to use without any license or registration with Progress or Telerik.

### How to Create Indicators in React?

To create an indicator in React, you need to install the KendoReact Indicators package and then import the respective indicator components in your application. After that, you can use the various available indicators in your React application. For more information, refer to the [Getting Started with the KendoReact Indicators](slug://get_started_indicators) article.

### What are the Available Support Options?

For any questions about the use of the KendoReact Indicators, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

> tip KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Free Components](https://www.telerik.com/kendo-react-ui/components/free)

-   [Getting Started with the KendoReact Indicators]({% slug get_started_indicators %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with the KendoReact Free Components](slug:getting_started_free_vs_premium)
-   [Explore the Free Project Tracker Sample Application](slug:project-tracker-with-free-components)
-   [Free Project Tracker app page template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
