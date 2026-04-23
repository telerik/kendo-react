---
title: Overview
description: 'Try now the React DropDowns package by KendoReact and discover the variety of features that it provides for your next React project.'
components: ["autocomplete", "combobox", "dropdownlist", "dropdowntree", "multicolumncombobox", "multiselect", "multiselecttree"]
slug: overview_dropdowns
position: 0
hideCta: true
---

# KendoReact Dropdowns Overview

The KendoReact Dropdowns allow you to choose from a predefined list of options.

The Dropdowns components are part of the KendoReact library which provides native KendoReact components for the React ecosystem and are available under the [kendo-react-dropdowns NPM package](https://www.npmjs.com/package/@progress/kendo-react-dropdowns).

> tip **Jumpstart Your DropDowns** <br/><br/> With the Agentic UI Generator, you can build components and layouts using natural language prompts — directly inside AI-powered IDEs like VS Code and Cursor. Get intelligent assistance with component implementation, styling, layout design, and iconography powered by our documentation and APIs. <br/><br/>[Try the Agentic UI Generator](slug:agentic_ui_generator_getting_started)

<!-- <CtaPanelOverview></CtaPanelOverview> -->

The following example demonstrates the AutoComplete, ComboBox, MultiColumnComboBox, DropDownList, and MultiSelect components in action.

{% meta height:650 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file shared/shared-dd-data.ts preview %}
{% endmeta %}

## What are the KendoReact Dropdowns?

The Dropdowns are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-dropdowns](https://www.npmjs.com/package/@progress/kendo-react-dropdowns)

### Package Contents

The package includes a rich selection of fully configurable dropdowns that help you create stylish and practical applications.

#### Free React Dropdowns

The following components are available for use without a commercial license.

<Row>
    <Column count={6}>
        <Component href="{% slug overview_autocomplete %}">
            <svg id="autocomplete" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V18H6v54h48l12-12V15h-6V57.5z M18,21v6h30l6-6H18z M54,33H18v6h30L54,33z M18,51h18l6-6H18 V51z M42,3v6h24l6-6H42z M0,0h36v12H0V0z" />
            </svg>
            <ComponentTitle>AutoComplete</ComponentTitle>
            <ComponentDescription>A list of suggestions for typed content.</ComponentDescription>
        </Component>
    </Column>
</Row>

#### Premium React Dropdowns

<Row>
   <Column count={6}>
        <Component href="{% slug overview_combobox %}">
            <svg id="combobox" viewbox="0 0 72 72">
                <path d="M66,12v48L54,72H12H6v-6V12h6v54h39.5l8.5-8.5V12H66z M18,24h30l6-6H18V24z M54,6h12l6-6H54V6z M0,6h48V0H0V6z M18,36h30l6-6H18V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>ComboBox</ComponentTitle>
            <ComponentDescription>A list for picking single items or entering custom values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multicolumncombobox %}">
            <svg id="multicolumncombobox" viewbox="0 0 24 24">
                <path d="M18,0v2h4l2-2H18z M20,18.2L17.2,21H4V4H2v19h16l4-4V4h-2V18.2z M16,0H0v2h16V0z M15,6v1h-2V6h-2v1H9V6H7v1H6v2h1v2H6v2h1v2
	            H6v2h1v2l2-2h2v2l2-2h2v2l4-4h-2v-2l2-2h-2V9l2-2h-2V6H15z M11,15H9v-2h2V15z M11,11H9V9h2V11z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z"/>
            </svg>
            <ComponentTitle>MultiColumnComboBox</ComponentTitle>
            <ComponentDescription>A list for picking single items or entering custom values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_dropdowntree %}">
            <svg id="dropdowntree" viewbox="0 0 24 24">
                <path d="M13,10v1h4l1-1H13z M15,13h-3v3h3V13z M16,14v1h1l1-1H16z M20,19.2L17.2,22H4V4H2v20h16l4-4l0,0V4h-2V19.2z M18,18h-5v1h4  L18,18z M9,12h3V9H9V12z M0,0v2h22l2-2H0z M10,6v1h7l1-1H10z M6,8h3V5H6V8z M9,20h3v-3H9V20z" />
            </svg>
            <ComponentTitle>DropDownTree</ComponentTitle>
            <ComponentDescription>A predefined hierarchical list of options.</ComponentDescription>
        </Component>
    </Column>
        <Column count={6}>
        <Component href="{% slug overview_multiselecttree %}">
            <svg id="multiselecttree" viewbox="0 0 24 24">
                <path d="M13,10v1h4l1-1H13z M15,13h-3v3h3V13z M16,14v1h1l1-1H16z M20,19.2L17.2,22H4V4H2v20h16l4-4l0,0V4h-2V19.2z M18,18h-5v1h4  L18,18z M9,12h3V9H9V12z M0,0v2h22l2-2H0z M10,6v1h7l1-1H10z M6,8h3V5H6V8z M9,20h3v-3H9V20z" />
            </svg>
            <ComponentTitle>MultiSelectTree</ComponentTitle>
            <ComponentDescription>A predefined hierarchical list of options.</ComponentDescription>
        </Component>
    </Column>
</Row>

### Free React Dropdowns with Premium features

<Row>
    <Column count={6}>
        <Component href="{% slug overview_dropdownlist %}">
            <svg id="dropdownlist" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V12H6v54v6h6h42l12-12V12h-6V57.5z M18,18v6h30l6-6H18z M0,0v6h66l6-6H0z M18,36h30l6-6H18 V36z M18,48h18l6-6H18V48z" />
            </svg>
            <ComponentTitle>DropDownList</ComponentTitle>
            <ComponentDescription>A predefined list of options for picking single values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_multiselect %}">
            <svg id="multiselect" viewbox="0 0 72 72">
                <path d="M60,57.5L51.5,66H12V24H6v42v6h6h42l12-12V24h-6V57.5z M54,30H18v6h30L54,30z M0,18h66l6-6H0V18z M18,48h18l6-6 H18V48z M72,0H30v6h36L72,0z M0,0h24v6H0V0z" />
            </svg>
            <ComponentTitle>MultiSelect</ComponentTitle>
            <ComponentDescription>A predefined list of options for multiple item selection.</ComponentDescription>
        </Component>
    </Column>
</Row>

### Key Features

The KendoReact Dropdowns provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in appearance options to adjust the form and dimensions of your dropdowns
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   Built-in **disabling** of items
-   Option to enable adaptive mode for the component via the `adaptive` prop
-   Displaying grouped data
-   Built-in form support
-   [Globalization](slug://globalization_dropdowns)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Dropdowns Work?

> The KendoReact Dropdowns provide both [free React dropdowns](#free-react-dropdowns), free dropdowns with premium features and premium dropdowns which require a commercial license key or an active trial license key. If you need to develop apps using the [premium React dropdowns](#premium-react-dropdowns) or other premium KendoReact components and features, follow the instructions on the [My License page](slug://my_license) to activate your license.

### React Dropdowns with Other KendoReact Components

You can combine multiple KendoReact components with the React dropdowns in the same application:

-   Add dropdowns to your [Grid](slug://overview_grid) custom cells.
-   Use dropdowns to submit data with [Forms](slug://overview_form).

> The Dropdowns package is a dependency for multiple other KendoReact components.

### React Dropdowns with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Dropdowns Free to Use

The KendoReact Dropdowns provide both [free React dropdowns](#free-react-dropdowns) and [premium dropdowns](#premium-react-dropdowns) which require a commercial license key or an active trial license key.

You can start using the free components without any license or registration with Progress or Telerik.

### How to Create Dropdowns in React

To create a dropdown in React, you need to install the KendoReact dropdowns package and then import the respective dropdown components in your application. After that, you can use the various available dropdown components in your React application. For more information, refer to the [Getting Started with the KendoReact Dropdowns](slug://get_started_dropdowns) article.

### How to Upgrade to the Premium Dropdowns

If you want to use any of the premium [React dropdowns](#premium-react-dropdowns), UI components, or component features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the premium features before purchase.

### What are the Available Support Options

For any questions about the use of KendoReact Dropdowns, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several free support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

**KendoReact license holders and anyone in an active trial** can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Dropdowns](slug://get_started_dropdowns)
-   [Getting Started with KendoReact (Online Guide)](slug://getting_started)
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
<!-- More links
-   Freemium hub page
-   Freemium Sample app
-   Freemium Page templates
    -->
