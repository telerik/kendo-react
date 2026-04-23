---
title: Overview
description: 'Discover the React Inputs package by KendoReact, learn more about its features and how to get started with the Inputs components in React projects.'
components: ["checkbox", "colorgradient", "colorpalette", "colorpicker", "flatcolorpicker", "input", "maskedtextbox", "numerictextbox", "radiobutton", "radiogroup", "rangeslider", "rating", "signature", "slider", "switch", "textarea", "textbox"]
slug: overview_inputs
position: 0
---

# KendoReact Inputs Overview

The KendoReact Inputs are fields that allow users to enter data based on specific and predefined formats.

<CtaPanelOverview></CtaPanelOverview>

The following demo shows the components included in the KendoReact Inputs package:

{% meta height:1200 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Inputs?

The Inputs are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-inputs](https://www.npmjs.com/package/@progress/kendo-react-inputs)

###  Package Contents

The package includes a rich selection of fully configurable inputs that help you create stylish and practical applications.

#### Free React Inputs

<Row>
    <Column count={8}>
        <Component href="{% slug overview_checkbox %}">
            <svg id="checkbox" viewBox="0 0 24 24">
                <path d="M0,0V24H24V0ZM22,22H2V2H22ZM20,7.8V5L10,15.2,6.8,12H4l6,6Z"/>
            </svg>
            <ComponentTitle>Checkbox</ComponentTitle>
            <ComponentDescription>A component for selecting one or more items from a set.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_input %}">
           <svg id="input" viewbox="0 0 72 72">
                <path d="M12,54h30l-6,6H12V54z M72,30v42H0V30H72z M66,36H6v30h60V36z" />
            </svg>
            <ComponentTitle>Input</ComponentTitle>
            <ComponentDescription>A component for submitting a value in a single line</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_colorpalette %}">
            <svg id="colorpalette" viewBox="0 0 24 24">
                <path d="M12,2c0.8,0,1.5,0.1,2.3,0.3C14.1,2.8,14,3.4,14,4c0,3.3,2.7,6,6,6c0.6,0,1.2-0.1,1.7-0.3c0.2,0.7,0.3,1.5,0.3,2.3
                    c0,5.5-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2 M12,0C5.4,0,0,5.4,0,12c0,6.6,5.4,12,12,12s12-5.4,12-12c0-1.9-0.4-3.6-1.2-5.2
                    C22.1,7.6,21.1,8,20,8c-2.2,0-4-1.8-4-4c0-1.1,0.4-2.1,1.2-2.8C15.6,0.4,13.9,0,12,0L12,0z M10.1,4.2c-1.1,0-2,0.9-2,2s0.9,2,2,2
                    s2-0.9,2-2S11.2,4.2,10.1,4.2z M6.1,8.7c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S7.2,8.7,6.1,8.7z M7.9,14.3c-1.1,0-2,0.9-2,2
                    c0,1.1,0.9,2,2,2s2-0.9,2-2C9.9,15.2,9,14.3,7.9,14.3z M13.8,15.8c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2s2-0.9,2-2
                    C15.8,16.7,14.9,15.8,13.8,15.8z M17.9,11.6c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S19.1,11.6,17.9,11.6z M12,11
                    c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,11,12,11 M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10L12,10z"/>
            </svg>
            <ComponentTitle>ColorPallete</ComponentTitle>
            <ComponentDescription>A component for selecting one or more items from a set.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_textbox %}">
            <svg id="textbox" viewbox="0 0 72 72">
                <path d="M12,54h30l-6,6H12V54z M72,30v42H0V30H72z M66,36H6v30h60V36z" />
            </svg>
            <ComponentTitle>TextBox</ComponentTitle>
            <ComponentDescription>A component for getting or displaying text input submitted by the user.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_maskedtextbox %}">
            <svg id="textbox" viewbox="0 0 72 72">
                <path d="M12,54h30l-6,6H12V54z M72,30v42H0V30H72z M66,36H6v30h60V36z" />
            </svg>
            <ComponentTitle>MaskedTextBox</ComponentTitle>
            <ComponentDescription>A component for controlling the input of the user.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_numerictextbox %}">
            <svg id="numerictextbox" viewbox="0 0 72 72">
              <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M36,54H12v6h18L36,54z M54,42h6v6h-6V42z M54,54h6v6h-6V54z" />
            </svg>
            <ComponentTitle>NumericTextBox</ComponentTitle>
            <ComponentDescription>A component for editing and submitting specific numeric values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_radiobutton %}">
            <svg id="radiobutton" viewBox="0 0 24 24">
                <path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0-7A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/>
            </svg>
            <ComponentTitle>RadioButton</ComponentTitle>
            <ComponentDescription>A component for selecting an option.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_radiogroup %}">
            <svg id="signature" viewBox="0 0 24 24">
                <path class="cls-1" d="M18.5,9A2.5,2.5,0,1,0,21,11.5,2.5,2.5,0,0,0,18.5,9Zm0-3A5.5,5.5,0,1,0,24,11.5,5.5,5.5,0,0,0,18.5,6Zm0,9.9a4.4,4.4,0,1,1,4.4-4.4A4.4,4.4,0,0,1,18.5,15.9ZM5.5,6A5.5,5.5,0,1,0,11,11.5,5.5,5.5,0,0,0,5.5,6Zm0,9.9a4.4,4.4,0,1,1,4.4-4.4A4.4,4.4,0,0,1,5.5,15.9Z"/>
            </svg>
            <ComponentTitle>RadioGroup</ComponentTitle>
            <ComponentDescription>A component for selecting one option from a set.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_slider %}">
            <svg id="slider" viewbox="0 0 72 72">
                <path d="M72,37H60v6h6L72,37z M0,37h36v6H0V37z M36,69h30l6-6H36V69z M0,63h12v6H0V63z M42,34h12v12H42V34z M18,60h12v12H18V60z" />
            </svg>
            <ComponentTitle>Slider</ComponentTitle>
            <ComponentDescription>A component for selecting values from a predefined range.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_rating %}">
            <svg id="rating" viewBox="0 0 24 24">
                <path class="cls-1" d="M0,13H2V11H0Zm4,1H8V10H4Zm16-3v2h2l2-2ZM10,13h2V11H10Zm4,1h4V10H14Z"/>
            </svg>
            <ComponentTitle>Rating</ComponentTitle>
            <ComponentDescription>A component for rating.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_switch %}">
            <svg id="switch" viewbox="0 0 72 72">
                <path d="M0,36v36h72V36H0z M66,66H6V42h60V66z M36,60H12V48h24V60z" />
            </svg>
            <ComponentTitle>Switch</ComponentTitle>
            <ComponentDescription>A component for toggling between checked and unchecked states.</ComponentDescription>
        </Component>
    </Column>
    <Column count={8}>
        <Component href="{% slug overview_textarea %}">
            <svg id="textarea" viewbox="0 0 24 24">
                <path d="M0,0v2v20v1v1h22h1h1V2V0H0z M22,22H2V2h20V22z M18,18h2v2h-2V18z M6,11h2v3h2v-3V8.93V6L8,4H6L4,6v2.93V11v3h2 V11z M6,6h2v3H6V6z M18,12v-2l-1-1l1-1V6l-2-2h-4v10h4L18,12z M14,6h2v2h-2V6z M14,10h2v2h-2V10z"/>
            </svg>
            <ComponentTitle>TextArea</ComponentTitle>
            <ComponentDescription>A component for getting or displaying text input on multiple lines submitted by the user.</ComponentDescription>
        </Component>
    </Column>
</Row>

#### Premium React Inputs

The following components require a commercial license.

<Row>
    <Column count={8}>
        <Component href="{% slug overview_colorgradient %}">
            <svg id="colorgradient" viewBox="0 0 24 24">
                <path d="M21,24V11h2v11L21,24z M23,3V0l-2,0v3H23z M20,5v4h4V5H20z M9,2.8c-2.7,2.8-7,8-7,12.2c0,3.9,3.1,7,7,7s7-3.1,7-7
                    C16,10.8,11.7,5.6,9,2.8 M9,0c0,0,9,8,9,15c0,5-4,9-9,9s-9-4-9-9C0,8,9,0,9,0L9,0z M13,14h-2c0,1.7-1.3,3-3,3v2
                    C10.8,19,13,16.8,13,14z"/>
            </svg>
            <ComponentTitle>ColorGradient</ComponentTitle>
            <ComponentDescription>A component for displaying gradient, a hue and an alpha slider used to pick colors.</ComponentDescription>
        </Component>
    </Column>
       <Column count={8}>
        <Component href="{% slug overview_colorpicker %}">
            <svg id="colorpicker" viewBox="0 0 72 72">
                <path d="M36,0C36,0,9,24,9,45c0,14.9,12.1,27,27,27s27-12.1,27-27C63,24,36,0,36,0z M36,66c-11.6,0-21-9.4-21-21 C15,27,36,8.1,36,8.1S57,27,57,45C57,56.6,47.6,66,36,66z M33,51v6c8.3,0,15-6.7,15-15h-6C42,47,38,51,33,51z"></path>
            </svg>
            <ComponentTitle>ColorPicker</ComponentTitle>
            <ComponentDescription>A component for selecting and submitting color values.</ComponentDescription>
        </Component>
    </Column>
        <Column count={8}>
        <Component href="{% slug overview_colorpicker %}">
            <svg id="colorpicker" viewBox="0 0 72 72">
                <path d="M36,0C36,0,9,24,9,45c0,14.9,12.1,27,27,27s27-12.1,27-27C63,24,36,0,36,0z M36,66c-11.6,0-21-9.4-21-21 C15,27,36,8.1,36,8.1S57,27,57,45C57,56.6,47.6,66,36,66z M33,51v6c8.3,0,15-6.7,15-15h-6C42,47,38,51,33,51z"></path>
            </svg>
            <ComponentTitle>FlatColorPicker</ComponentTitle>
            <ComponentDescription>A component that provides a flat view for the ColorGradient and the ColorPalette components and adds a header and footer.</ComponentDescription>
        </Component>
    </Column>
           <Column count={8}>
        <Component href="{% slug overview_signature %}">
            <svg id="radiogroup" viewBox="0 0 24 24">
                <polygon points="10,15.1 10,17.9 24,3.9 24,1.1"/>
                <polygon points="7,17.9 9,15.9 4,15.9 4,17.9"/>
                <polygon points="20,10.9 22,10.9 22,20.9 2,20.9 2,10.9 11,10.9 13,8.9 0,8.9 0,22.9 24,22.9 24,8.9 22,8.9"/>
            </svg>
            <ComponentTitle>Signature</ComponentTitle>
            <ComponentDescription>A component for creating handwritten signatures.</ComponentDescription>
        </Component>
    </Column>
        <Column count={8}>
        <Component href="{% slug overview_rangeslider %}">
            <svg id="rangeslider" viewBox="0 0 24 24">
                <path class="cls-1" d="M0,13H2V11H0Zm4,1H8V10H4Zm16-3v2h2l2-2ZM10,13h2V11H10Zm4,1h4V10H14Z"/>
            </svg>
            <ComponentTitle>RangeSlider</ComponentTitle>
            <ComponentDescription>A component for selecting range-values from a predefined range.</ComponentDescription>
        </Component>
    </Column>
</Row>

## Key Features

The KendoReact Inputs provide the following key features. Note that this is not an exhaustive list.

-   Easy form integration
-   Out-of-the-box accessibility and keyboard navigation
-   Built-in control of the component's state using the `value` property and the `onChange` event
-   Highly customizable and easy to style **appearance**
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   [Globalization](slug://globalization_labels)

## How Do the KendoReact Inputs Work?

> The KendoReact Inputs provide both [free React inputs](#free-react-inputs) and premium inputs which require a commercial license key or an active trial license key. If you need to develop apps using the [advanced React inputs](#advanced-react-inputs) or other advanced KendoReact components and features, follow the instructions on the [My License page](slug://my_license) to activate your license.

The KendoReact Inputs are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

### React Inputs with Other KendoReact Components

You can combine multiple KendoReact components with the React inputs in the same application:

-   Edit data in your [Grid](slug://overview_grid).
-   Use Inputs to submit data with [Forms](slug://overview_form).

### React Input with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Inputs Free to Use

The KendoReact Inputs provide both [free React inputs](#free-react-inputs) and [premium inputs](#premium-react-inputs) which require a commercial license key or an active trial license key.

You can start using the free components without any license or registration with Progress or Telerik.

### How to Create Inputs in React

To create an input in React, you need to install the KendoReact Inputs package and then import the respective input components in your application. After that, you can use the various available input components in your React application. For more information, refer to the [Getting Started with the KendoReact Inputs](slug://getstarted_inputs) article.

### How to Upgrade to the Premium Inputs

If you want to use any of the premium [React inputs](#premium-react-inputs), UI components, or component features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the premium features before purchase.

### What are the Available Support Options

For any questions about the use of KendoReact Inputs, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

> tip KendoReact license holders and anyone in an active trial can also take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Inputs]({% slug getstarted_inputs %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
