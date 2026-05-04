---
title: Overview
description: 'Try now the React ProgressBars package by KendoReact and discover the variety of features that it provides for your next React project.'
components: ['chunkprogressbar', 'progressbar']
slug: overview_progressbars
position: 0
---

# KendoReact ProgressBars Overview

The KendoReact Progress Bars is a collection of customizable, responsive, and interactive UI components that you can use to display any form of progress in a React application.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Progress Bars package:

{% meta height:180 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Progress Bars?

The Progress Bars are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-progressbars](https://www.npmjs.com/package/@progress/kendo-react-progressbars)

### Package Contents

The package includes two fully configurable progress bar types that help you create stylish and practical applications.

#### Free React Progress Bars

The following component is available for use without a commercial license.

<Row>
  <Column count={12}>
    <Component href="{% slug overview_progressbar %}">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path class="cls-1" d="M24,3H20V5h2ZM4,10H0v4H4ZM18,2H0V6H18ZM0,22H12V18H0Zm14-1h8l2-2H14ZM6,13H22l2-2H6Z"/>
        </svg>
        <ComponentTitle>ProgressBar</ComponentTitle>
        <ComponentDescription>A component for tracking and displaying the progress of a task.</ComponentDescription>
    </Component>
  </Column>
</Row>

#### Premium React Progress Bars

The following component requires a commercial license.

<Row>
  <Column count={12}>
    <Component href="{% slug overview_chunkprogressbar %}">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path class="cls-1" d="M0,14H6V10H0Zm0,8H6V18H0ZM14,2H8V6h6ZM24,3H16V5h6ZM0,6H6V2H0Zm8,7H22l2-2H8Zm8,8h6l2-2H16ZM8,22h6V18H8Z"/>
        </svg>
        <ComponentTitle>ChunkProgressBar</ComponentTitle>
        <ComponentDescription>A component for displaying the progress of a task in chunks.</ComponentDescription>
    </Component>
  </Column>
</Row>

### Key Features

The KendoReact Progress Bars provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in appearance options to adjust the dimensions of your Progress Bars
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
-   Built-in **disabled mode** via the `disabled` property
-   Customize the orientation of your Progress Bars
-   Control the direction of your Progress Bars via the `reverse` property
-   [Globalization](slug://rtl_progressbars)

## How Do the KendoReact Progress Bars Work?

> The KendoReact Progress Bars package provides a [free React ProgressBar](#free-react-progress-bars) and a premium ChunkProgressBar which requires a commercial license key or an active trial license key. If you need to develop apps using the [premium React progress bars](#premium-react-progress-bars) or other premium KendoReact components and features, follow the instructions on the [My License page](slug://my_license) to activate your license.

The KendoReact Progress Bars are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React progress bars and you can extend or override their default behaviors and appearance via props and event handlers.

### React Progress Bars with Other KendoReact Components

You can combine multiple KendoReact components with the React progress bars in the same application:

-   Display a percentage value in a [Grid](slug://overview_grid) column.
-   Combine with the [Loader](slug://overview_loader) to build a loading indicator.
-   Add a ProgressBar within a [Form](slug://overview_form) to indicate progress.

> The Progress Bars package is a dependency for multiple other KendoReact components.

### React Progress Bars with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Progress Bars Free to Use?

The KendoReact Progress Bars package provides a [free React ProgressBar](#free-react-progress-bars) and a premium ChunkProgressBar which requires a commercial license key or an active trial license key.

You can start using the free React ProgressBar without any license or registration with Progress or Telerik.

### How to Create Progress Bars in React?

To create a progress bar in React, you need to install the KendoReact Progress Bars package and then import the respective progress bar components in your application. After that, you can use the various available progress bar components in your React application. For more information, refer to the [Getting Started with the KendoReact Progress Bars](slug://get_started_progressbars) article.

### How to Upgrade to the Premium Progress Bars?

If you want to use the premium [React ChunkProgressBar](#premium-react-progress-bars), UI components, or component features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the premium features before purchase.

### What are the Available Support Options?

For any questions about the use of KendoReact Progress Bars, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several free support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

**KendoReact license holders and anyone in an active trial** can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Free Components](https://www.telerik.com/kendo-react-ui/components/free)

-   [Getting Started with the KendoReact Progress Bars](slug://get_started_progressbars)
-   [Getting Started with KendoReact (Online Guide)](slug://getting_started)
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with the KendoReact Free Components](slug:getting_started_free_vs_premium)
-   [Explore the Free Project Tracker Sample Application](slug:project-tracker-with-free-components)
-   [Free Project Tracker app page template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
