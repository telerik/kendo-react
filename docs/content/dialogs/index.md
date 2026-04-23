---
title: Overview
description: 'Get started with the React Dialogs package by KendoReact and learn more about how to use the Dialogs components in React projects.'
slug: overview_dialogs
position: 0
---

# KendoReact Dialogs Overview

The KendoReact Dialogs is a collection of free, customizable, responsive, and interactive UI components that you can use to trigger actions or display content in your React apps.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Dialogs package:

{% meta height:450 %}
{% embed_file overview/overview-combined/func/app.tsx preview %}
{% embed_file overview/overview-combined/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Dialogs?

The Dialogs are native KendoReact components that provide a way to display modal dialogs built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-dialogs](https://www.npmjs.com/package/@progress/kendo-react-dialogs)

### Package Contents

All KendoReact Dialogs are freely available for use without a commercial license.

The package provides the following free React components:

<Row>
  <Column count={12}>
    <Component href="{% slug overview_dialog %}">
      <svg id="dialog" viewbox="0 0 24 24">
        <path d="M2,4v20h16l4-4h0V4H2z M20,19.2L17.2,22H4V6h16V19.2z M6,12h8l-2,2H6V12z M20,0h2v2h-2V0z M2,0h16v2H2V0z M6,18
        h5l-2,2H6V18z M13,18h5l-2,2h-3V18z M6,8h12l-2,2H6V8z" />
      </svg>
      <ComponentTitle>Dialog</ComponentTitle>
      <ComponentDescription>A prompt for users to take specific actions by interacting with a modal dialog.</ComponentDescription>
    </Component>
  </Column>
  <Column count={12}>
    <Component href="{% slug overview_window %}">
      <svg id="window" viewbox="0 0 24 24">
        <path d="M4,4H2v2v16v2h2h14l3.999-3.999H22V6V4h-2H4z M20,19.172L17.172,22H4V6h16V19.172z M18,10H6v2h10L18,10z
        M20,0h2v2h-2V0z M16,0h2v2h-2V0z M2,0h12v2H2V0z M12,16l2-2H6v2H12z" />
      </svg>
      <ComponentTitle>Window</ComponentTitle>
      <ComponentDescription>A non-modal HTML window which provides information and can be moved and resized by users.</ComponentDescription>
    </Component>
  </Column>
</Row>

### Key Features

The KendoReact Dialogs provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
-   Fully customizable [Action Buttons](slug://actionbuttons_dialog)
-   Flexible [Title customization](slug://title_dialog)
-   Adjustable dimensions via the `width` and `height` properties
-   [Globalization](slug://globalization_dialog)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Dialogs Work?

> The KendoReact Dialogs provide [free React dialogs](#package-contents) that don't require a commercial license key or an active trial license key to install or use.

The KendoReact Dialogs are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React dialogs and you can extend or override their default behaviors and appearance via props and event handlers.

### React Dialogs with Other KendoReact Components

You can combine multiple KendoReact components with the React dialogs in the same application:

-   Display confirmation Dialog in a [Grid](slug://overview_grid) for row actions
-   Embed [Form](slug://overview_form) inside a Window

> The Dialogs package is a dependency for multiple other KendoReact components.

### React Dialogs with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Dialogs Free to Use?

Yes. All KendoReact Dialogs are free to use without any license or registration with Progress or Telerik.

### How to Create Dialogs in React?

To create an dialog in React, you need to install the KendoReact Dialogs package and then import the respective dialog components in your application. After that, you can use the various available dialogs in your React application. For more information, refer to the [Getting Started with the KendoReact Dialogs](slug://get_started_dialogs) article.

### What are the Available Support Options?

For any questions about the use of the KendoReact Dialogs, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

**KendoReact license holders and anyone in an active trial** can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links
-   [Getting Started with the KendoReact Free Components](https://www.telerik.com/kendo-react-ui/components/free)

-   [Getting Started with the KendoReact Dialogs]({% slug get_started_dialogs %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with the KendoReact Free Components](slug:free_components_introduction)
-   [Explore the Free Project Tracker Sample Application](slug:project-tracker-with-free-components)
-   [Free Project Tracker app page template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
