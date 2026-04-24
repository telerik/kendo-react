---
title: Overview
description: 'Try now the React Labels package by KendoReact and discover the variety of features that it provides for your next React project.'
slug: overview_labels
position: 0
---

# KendoReact Labels Overview

The KendoReact Labels package delivers components for adding hints, error messages, and labels to your React apps and React form editors and inputs in particular.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Labels package:

{% meta height:230 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Labels?

The Labels are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-labels](https://www.npmjs.com/package/@progress/kendo-react-labels)

### Package Contents

All KendoReact Labels are freely available for use without a commercial license.

The package provides the following components:

<Row>
  <Column count={6}>
    <Component href="slug://label_labels">
      <ComponentIcon>
        <title>Label</title>
        <path d="M9,7V17h4l2-2V13l-1-1,1-1V9L13,7Zm4,8H11V13h2Zm0-4H11V9.12h2ZM2,7,0,9v8H2V14H4v3H6V9L4,7Zm2,2V9H4ZM20,9h4L22,7H20L18,9v6l2,2h2l2-2H20Z"></path>
      </ComponentIcon>
      <ComponentTitle>Label</ComponentTitle>
      <ComponentDescription>
        A component that associates a focusable component or HTML element with a HTML Label element.
      </ComponentDescription>
    </Component>
  </Column>

  <Column count={6}>
    <Component href="slug:floating_label_labels">
      <ComponentIcon>
        <title>FloatingLabel</title>
        <path d="M21,9.07l2-2H19v-4h4l-2-2H19l-2,2v5l2,1ZM0,10V24H24V10ZM22,22H2V12H22Zm-8-4H4v2h8ZM3,7.07H5v2H7v-6l-2-2H3l-2,2v6H3Zm0-4H5v2H3Zm12,5v-2l-1-1,1-1v-2l-2-1H9v8h4ZM11,2.19h2V4.07H11Zm0,3.88h2v2H11Z"></path>
      </ComponentIcon>
      <ComponentTitle>FloatingLabel</ComponentTitle>
      <ComponentDescription>
        A component that enables the floating label functionality for Kendo UI and HTML input elements.
      </ComponentDescription>
    </Component>
  </Column>

  <Column count={6}>
    <Component href="slug:hint_labels">
      <ComponentIcon>
        <title>Hint</title>
        <path d="M0,3v14H24V3H0ZM22,15H2V5H22V15Zm-10-2H4v-2H14l-2,2ZM0,19H13l-2,2H0v-2Z"></path>
      </ComponentIcon>
      <ComponentTitle>Hint</ComponentTitle>
      <ComponentDescription>
        A component that guides users with a hint next to the form field they need to fill in.
      </ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="slug:error_labels">
      <ComponentIcon>
        <title>Error</title>
        <path d="M4,14v-2H14l-2,2H4ZM20,2h-2V10h2V2Zm2,2v12H2V6h14v-2H0v14H24V4h-2Zm-2,8h-2v2h2v-2ZM0,22H11l2-2H0v2Z"></path>
      </ComponentIcon>
      <ComponentTitle>Error</ComponentTitle>
      <ComponentDescription>
        A component that displays an error next to the respective focusable component when the input is invalid.
      </ComponentDescription>
    </Component>
  </Column>
</Row>

### Key Features

The KendoReact Labels provide the following key features. Note that this is not an exhaustive list.

-   Automatically rendered **optional** suffix via the `optional` property
-   Built-in **invalid state** via the `editorValid` property
-   Control over the **text direction** of [hints](slug://direction_hint) and [errors](slug://direction_error)
-   Highly customizable and easy to style **appearance**
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   [Globalization](slug://globalization_labels)

## How Do the KendoReact Labels Work?

> The KendoReact Labels provide [free React labels](#package-contents) that don't require a commercial license key or an active trial license key to install or use.

The KendoReact Labels are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React labels and you can extend or override their default behaviors and appearance via props and event handlers.

### React Labels with Other KendoReact Components

You can combine multiple KendoReact components with the React labels in the same application.

-   Provide descriptions and indicate the expected input for [TextBoxes](slug://overview_textbox), [NumericTextBoxes](slug://overview_numerictextbox), or [MaskedTextBoxes](slug://overview_maskedtextbox).
-   Explain dropdown menus like the [ComboBox](slug://overview_combobox), [DropDownList](slug://overview_dropdownlist), or [MultiSelect](slug://overview_multiselect).
-   Clarify the available selections for [Checkboxes](slug://overview_checkbox) and [RadioButtons](slug://overview_radiobutton).
-   Improve the UX for [Sliders](slug://overview_slider) and [Switches](slug://overview_switch) with clear explanations about the available selections and states.
-   Enhance [Date](slug://overview_datepicker) and [TimePickers](slug://overview_timepicker) with hints and errors for the input fields.

> The Labels package is a dependency for multiple other KendoReact components.

### React Labels with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Labels Free to Use?

Yes. All KendoReact Labels are free to use without any license or registration with Progress or Telerik.

### How to Create Labels in React?

To create a label in React, you need to install the KendoReact Labels package and then import the respective label components in your application. After that, you can use the various available labels in your React application. For more information, refer to the [Getting Started with the KendoReact Labels](slug://get_started_labels) article.

### What are the Available Support Options?

For any questions about the use of KendoReact Labels, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

**KendoReact license holders and anyone in an active trial** can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Labels](slug://get_started_labels)
-   [Getting Started with KendoReact (Online Guide)](slug://getting_started)
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
-   [Getting Started with the KendoReact Free Components](slug:free_components_introduction)
-   [Explore the Free Project Tracker Sample Application](slug:project-tracker-with-free-components)
-   [Free Project Tracker app page template (built with free components)](https://www.telerik.com/design-system/docs/ui-templates/templates/project-tracker/)
-   [Getting Started with the KendoReact Free Components](https://www.telerik.com/kendo-react-ui/components/free)
