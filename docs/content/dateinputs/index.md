---
title: Overview
description: 'React date inputs allow users to select a date from a calendar or manually enter it, enabling easy date management.'
components: ["calendar", "dateinput", "datepicker", "daterangepicker", "datetimepicker", "multiviewcalendar", "timepicker"]
slug: overview_dateinputs
position: 0
---

# React Date Inputs Overview

The KendoReact Date Inputs is a collection of customizable, responsive, and interactive UI components that let the user pick dates and times when filling in data or scheduling appointments. Based on the chosen component, end users can type the date and time directly, set it with the arrow buttons from the keyboard, or select it from beautifully rendered popups.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:750 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## What are the KendoReact Date Inputs?

The KendoReact Date Inputs are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-dateinputs](https://www.npmjs.com/package/@progress/kendo-react-dateinputs)

### Package Contents

The package includes a rich selection of fully configurable button types that help you create stylish and practical applications.

#### Free React Date Inputs

The following components are available for use without a commercial license.

<Row>
    <Column count={6}>
        <Component href="slug://overview_calendar">
        <svg id="calendar" viewBox="0 0 72 72">
            <path d="M60,57.5L51.5,66H12V15H6v51v6h6h42l12-12V15h-6V57.5z M45,0h6v12h-6V0z M27,24l-6,6v24h6V24z M33,30h12v6h-6 l-6,6v6l6,6h6l6-6H39v-6h6l6-6v-6l-6-6h-6L33,30z M21,0h6v12h-6V0z M0,3h18v6H0V3z M54,3v6h12l6-6H54z M30,3h12v6H30V3z" />
        </svg>
        <ComponentTitle>Calendar</ComponentTitle>
        <ComponentDescription>A component for date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug://overview_dateinput">
        <svg id="dateinput" viewBox="0 0 72 72">
        <path d="M0,30v42h72V30H0z M66,66H6V36h60V66z M16.2,60L12,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L25.2,51L21,55.2 L16.2,60z M37.2,60L33,55.8l4.8-4.8l4.2-4.2l4.8-4.8l4.2,4.2L46.2,51L42,55.2L37.2,60z" />
        </svg>
        <ComponentTitle>DateInput</ComponentTitle>
        <ComponentDescription>An input field which recognizes and formats values as dates.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug://overview_datepicker">
            <svg id="datepicker" viewBox="0 0 72 72">
            <path d="M30,21h9v9h-9V21z M42,21h9v9h-9V21z M18,33h9v9h-9V33z M30,33h9v9h-9V33z M42,33h9v9h-9V33z M18,45h9v9h-9V45z M30,45h9v9h-9V45z M57,57.5L48.5,66H12V12H6v60h6h39l12-12V12h-6V57.5z M0,0v6h66l6-6H0z" />
            </svg>
        <ComponentTitle>DatePicker</ComponentTitle>
        <ComponentDescription>A component which allows the fast selection of date values.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug://overview_datetimepicker">
            <svg id="datepicker" viewBox="0 0 72 72">
            <path d="M39,24h-9v-9h9V24z M51,15h-9v9h9V15z M27,27h-9v9h9V27z M39,27h-9v9h9V27z M51,27h-9v9h9V27z M27,39h-9v9h9V39z M27,51h-9v9h9V51z M63,12h-6v24h6V12z M12,66V12H6v60h21v-6H12z M0,6h66l6-6H0V6z M63,55.5c0,9-7.5,16.5-16.5,16.5S30,64.5,30,55.5S37.5,39,46.5,39S63,46.5,63,55.5z M57,55.5C57,49.8,52.2,45,46.5,45S36,49.8,36,55.5S40.8,66,46.5,66S57,61.2,57,55.5z M48,54v-3h-3v6h6v-3H48z"></path>
            </svg>
        <ComponentTitle>DateTimePicker</ComponentTitle>
        <ComponentDescription>A component which allows the fast selection of date and time values.</ComponentDescription>
        </Component>
    </Column>
</Row>

#### Advanced React Date Inputs

The following components require a commercial license.

<Row>
    <Column count={6}>
        <Component href="slug://overview_daterangepicker">
            <svg id="daterangepicker" viewBox="0 0 24 24" >
                <path d="M13,5v3h-3V5H13z M17,5h-3v3h3V5z M6,9v3h3V9H6z M6,20h3v-3H6V20z M13,20v-3h-3v3H13z M19,19.2L16.2,22H4V4H2 v20h15l4-4h0V4h-2V19.2z M0,0v2h22l2-2H0z M10,12h7v-1h-6v-1h6V9h-7V12z M6,15v1h7v-3H6v1h6v1H6z M17,16v-3h-3v3H17z"/>
            </svg>
        <ComponentTitle>DateRangePicker</ComponentTitle>
        <ComponentDescription>A set of directives and components which provide date-range selection.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug://overview_multiviewcalendar">
            <svg version="1.1" viewBox="0 0 24 24">
            <path d="M16.2,21H1V5h2v14h12.3l1.7-1.7V5h2v13.2L16.2,21z M7,7L5,9v8h2V7z M9,9h4v2h-2l-2,2v2l2,2h2l2-2h-4v-2h2l2-2V9l-2-2h-2L9,9z M15,0h-2v4h2V0z M7,0H5v4h2V0z M4,1H0v2h4V1z M16,1v2h6l2-2H16z M12,1H8v2h4V1z M20,19l-3,3H2v2h15.8l2-2l2.2-2.2V5h-2V19z"/>
            </svg>
        <ComponentTitle>MultiView Calendar</ComponentTitle>
        <ComponentDescription>A component with multiple month views which provides date selection and navigation.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="slug://overview_timepicker">
            <svg id="timepicker" viewBox="0 0 72 72">
            <path d="M36,36V21l-6-6v21v6h6h21l-6-6H36z M36,0C16.1,0,0,16.1,0,36s16.1,36,36,36s36-16.1,36-36S55.9,0,36,0z M36,66 C19.4,66,6,52.6,6,36C6,19.4,19.4,6,36,6s30,13.4,30,30C66,52.6,52.6,66,36,66z"/>
            </svg>
        <ComponentTitle>TimePicker</ComponentTitle>
        <ComponentDescription>A component for selecting time values from a time-list.</ComponentDescription>
        </Component>
    </Column>
</Row>

### Key Features

The KendoReact Date Inputs provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in appearance options to adjust the size, fill, and form your date inputs
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   Built-in **disabled mode** and **read-only mode** via the `disabled` and `readOnly` properties
-   Native implementation for **form validation**
-   Predefined and custom **date and time formats**
-   Customization options for the inputs and popups of all Date Inputs components
-   [Globalization](slug://globalization_dateinputs)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Date Inputs Work?

> The KendoReact Date Inputs provide both [free React date inputs](#free-react-date-inputs) and advanced date inputs which require a commercial license key or an active trial license key. If you need to develop apps using the [advanced React date inputs](#advanced-react-date-inputs) or other advanced KendoReact components and features, follow the instructions on the [My License page](slug://my_license) to activate your license.

The KendoReact Date Inputs are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React date inputs and you can extend or override their default behaviors and appearance via props and event handlers.

### React Date Inputs with Other KendoReact Components

You can combine multiple KendoReact components with the React date inputs in the same application:

-   Add date inputs to your [Forms](slug://overview_form).
-   Show [Notifications](slug://overview_notification) when end users select or enter a date.
-   Include date and time selections in your [Grid](slug://overview_grid).

> The Date Inputs package is a dependency for multiple other KendoReact components.

### React Date Inputs with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Date Inputs Free to Use?

The KendoReact Date Inputs provide both [free React date inputs](#free-react-date-inputs) and [advanced date inputs](#advanced-date-inputs) which require a commercial license key or an active trial license key.

You can start using the free components without any license or registration with Progress or Telerik.

### How to Create Date Inputs in React?

To create a date input in React, you need to install the KendoReact Date Inputs package and then import the respective date input components in your application. After that, you can use the various available date inputs in your React application. For more information, refer to the [Getting Started with the KendoReact Date Inputs](slug://get_started_dateinputs) article.

### How to Upgrade to the Advanced Date Inputs?

If you want to use any of the advanced [React date inputs](#advanced-react-date-inputs), UI components, or component features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the advanced features before purchase.

### What are the Available Support Options?

For any questions about the use of KendoReact Date Inputs, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

> tip KendoReact license holders and anyone in an active trial can also take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Date Inputs]({% slug get_started_dateinputs %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
