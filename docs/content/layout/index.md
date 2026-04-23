---
title: Overview
description: 'Try the variety of React layout components by KendoReact, and discover their features and rich configuration options.'
components: ["actionsheet", "appbar", "general", "avatar", "bottomnavigation", "breadcrumb", "card", "contextmenu", "drawer", "expansionpanel", "gridlayout", "menu", "panelbar", "splitter", "stacklayout", "stepper", "tabstrip", "tilelayout", "timeline"]
slug: overview_layout
position: 0
---

# KendoReact Layout Overview

The KendoReact Layout package provides a collection of customizable, responsive, and interactive UI components designed to help you create intuitive, easy-to-navigate application layouts for your web projects. The rich configuration options provided by these components give you the flexibility needed to meet any project requirements.

<CtaPanelOverview></CtaPanelOverview>

{% meta height:600 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% embed_file overview/func/styles.css %}
{% embed_file overview/func/DrawerRouterContainer.tsx %}
{% embed_file overview/func/AvatarComponent.tsx %}
{% embed_file overview/func/BottomNavigationComponent.tsx %}
{% embed_file overview/func/BreadcrumbComponent.tsx %}
{% embed_file overview/func/CardComponent.tsx %}
{% embed_file overview/func/ExpansionPanelComponent.tsx %}
{% embed_file overview/func/GridLayoutComponent.tsx %}
{% embed_file overview/func/MenuComponent.tsx %}
{% embed_file overview/func/PanelBarComponent.tsx %}
{% embed_file overview/func/SplitterComponent.tsx %}
{% embed_file overview/func/StackLayoutComponent.tsx %}
{% embed_file overview/func/StepperComponent.tsx %}
{% embed_file overview/func/TabStripComponent.tsx %}
{% embed_file overview/func/TileLayoutComponent.tsx %}
{% endmeta %}

## What Are the KendoReact Layout Components?

The KendoReact Layout components are native KendoReact components built specifically for the React ecosystem and distributed via npm.

> [@progress/kendo-react-layout](https://www.npmjs.com/package/@progress/kendo-react-layout)

### Package Contents

The package includes a rich selection of fully configurable UI components that help you define the structure, arrangement, and alignment of content in your web applications.

#### Free React Layout Components

The following React layout components are available for use without a commercial license.

<Row>
    <Column count={6}>
      <Component href="{% slug overview_appbar %}">
        <svg id="appbar" viewBox="0 0 24 24">
          <path d="M24,6V0H0v6v16v2h2h18l4-4V6z M20,3h2v2h-2V3z M17,3h2v2h-2V3z M14,3h2v2h-2V3z M5,3h8l-2,2H5V3z M2,3h2v2H2V3z M2,22V8h20 v11l-3,3H2z"/>
        </svg>
        <ComponentTitle>AppBar</ComponentTitle>
        <ComponentDescription>A component for displaying information, actions, branding titles and additional navigation on the current screen.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_avatar %}">
        <svg id="avatar" viewBox="0 0 24 24">
          <path d="M12,7a3,3,0,1,0,3,3A3,3,0,0,0,12,7Zm0-7A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm6.44,19.65a6.5,6.5,0,0,0-12.88,0,10,10,0,1,1,12.88,0Z"/>
        </svg>
        <ComponentTitle>Avatar</ComponentTitle>
        <ComponentDescription>A component for displaying images, icons, or other entities.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_bottomnavigation %}">
        <svg id="bottomnavigation" viewBox="0 0 24 24">
            <path d="M11.6,8.6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2l0,0C13.6,9.5,12.7,8.6,11.6,8.6L11.6,8.6z M19.6,8.6c-1.1,0-2,0.9-2,2
 s0.9,2,2,2s2-0.9,2-2l0,0C21.6,9.5,20.7,8.6,19.6,8.6L19.6,8.6z M11.6,11.6c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1l0,0
 C12.6,11.2,12.1,11.6,11.6,11.6L11.6,11.6z M3.6,8.6c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2l0,0C5.6,9.5,4.7,8.6,3.6,8.6L3.6,8.6z
  M6.6,13.6h-6v2h4L6.6,13.6z M14.6,13.6h-6v2h4L14.6,13.6z M22.6,13.6h-6v2h4L22.6,13.6z"/>
        </svg>
        <ComponentTitle>BottomNavigation</ComponentTitle>
        <ComponentDescription>A component for navigating among primary destinations in an application.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_breadcrumb %}">
        <svg id="breadcrumb" viewBox="0 0 24 24">
            <path d="M12.9,13l1-1l0,0l-1-1L12,10.1l-1.8-1.8V10l1,1l0.9,0.9l0.1,0.1l-2,2v1.7l1.9-1.8L12.9,13z M20,11h-5v2h3L20,11z M9,11H4v2 h3L9,11z M0,5v14h24V5H0z M22,17H2V7h20V17z"/>
        </svg>
        <ComponentTitle>Breadcrumb</ComponentTitle>
        <ComponentDescription>A component for navigating among primary destinations in an application.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_card %}">
        <svg id="card" viewBox="0 0 24 24">
            <path class="st0" d="M2,0v24h16l4-4h0V0H2z M20,19.2L17.2,22H4V2h16V19.2z M18,4.4l-4,4l-2-2L8.5,9.9L6,7.4V13h12V4.4z M13,20h3 l2-2h-5V20z M11,18H6v2h3L11,18z"/>
        </svg>
        <ComponentTitle>Card</ComponentTitle>
        <ComponentDescription>A component for displaying data in Card layout.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_drawer %}">
        <svg id="drawer" viewBox="1 1 22 22">
          <path d="M7,15h16l-2,2H7V15z M7,13h14l2-2H7V13z M7,9h14l2-2H7V9z M7,5h14l2-2H7V5z M7,21h14l2-2H7V21zM5,1H1v22h4V1z" />
        </svg>
        <ComponentTitle>Drawer</ComponentTitle>
        <ComponentDescription>A dismissible navigation panel.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_expansionpanel %}">
        <svg id="expansionpanel" viewBox="0 0 24 24">
          <path d="M22,8l-3,3l-3-3 M0,16h22l2-2H0V16z"/>
        </svg>
        <ComponentTitle>ExpansionPanel</ComponentTitle>
        <ComponentDescription>An expandable details-summary view component.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_gridlayout %}">
        <svg id="stacklayout" viewbox="0 0 24 24">
          <path d="M11,1H0v4h7L11,1z M0,16h20l4-4V7H0V16z M2,9h20v2.2L19.2,14H2V9z M24,1H13v4h7L24,1z M0,22h20l4-4H0V22z"/>
        </svg>
        <ComponentTitle>GridLayout</ComponentTitle>
        <ComponentDescription>A component based on grid-layout system with rows and columns.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_menu %}">
        <svg id="menu" viewBox="0 0 322.39 322.39">
          <path d="M322.39,14.65H87.92V44H293.08ZM87.92,131.89H293.08l29.31-29.31H87.92Zm0,87.92H293.08l29.31-29.31H87.92Zm0,87.93H293.08l29.31-29.31H87.92ZM0,0H58.62V58.62H0ZM0,87.92H58.62v58.62H0Zm0,87.93H58.62v58.62H0Zm0,87.92H58.62v58.62H0Z" />
        </svg>
        <ComponentTitle>Menu</ComponentTitle>
        <ComponentDescription>A multi-level component for hierarchical data.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_panelbar %}">
        <svg id="panelbar" viewbox="0 0 72 72">
          <path d="M66,0H0v6h60L66,0z M54,24H12v6h36L54,24z M12,42h24l6-6H12V42z M0,60h60l6-6H0V60z M0,72h60l6-6H0V72z M0,12v6 v30h6V18h54l6-6H6H0z" />
        </svg>
        <ComponentTitle>PanelBar</ComponentTitle>
        <ComponentDescription>A multi-level component for hierarchical data.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_stacklayout %}">
        <svg id="stacklayout" viewbox="0 0 24 24">
          <path d="M18,2v20h2l4-4V2H18z M22,17.2l-2,2V4h2V17.2z M0,22h2l4-4V2H0V22z M2,4h2v13.2l-2,2V4z M8,22h4l4-4V2H8V22z M10,4h4v13.2 l-2,2h-2V4z"/>
        </svg>
        <ComponentTitle>StackLayout</ComponentTitle>
        <ComponentDescription>A component for aligning multiple elements in a stack.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_stepper %}">
        <svg id="stepper" viewbox="0 0 24 24">
          <path class="cls-1" d="M2.06,11.94h0a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2h0A2,2,0,0,1,2.06,11.94Zm10-4a2,2,0,1,0,2,2h0A2,2,0,0,0,12.06,7.94Zm0,3a1,1,0,0,1,0-2,1,1,0,0,1,1,1h0A1,1,0,0,1,12.06,10.94Zm12-1h0a2,2,0,0,0-2-2h0a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0A2,2,0,0,0,24.06,9.94Zm-19-1h4l-2,2h-2Zm10,0h4l-2,2h-2Zm-15,7h24v-2H.06Z"/>
        </svg>
        <ComponentTitle>Stepper</ComponentTitle>
        <ComponentDescription>A component for visualizing progress via sequence of logical steps.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_tabstrip %}">
        <svg id="tabstrip" viewbox="0 0 72 72">
          <path d="M26,12V0h-6H0v3v3v60v6h6h48l12-12V18v-6h-6H26z M60,57.5L51.5,66H6V6h14v6v6h6h34V57.5z M12,36h36l6-6H12V36z M52,0h14v6H52V0z M12,48h24l6-6H12V48z M32,0h14v6H32V0z" />
        </svg>
        <ComponentTitle>TabStrip</ComponentTitle>
        <ComponentDescription>A tab collection for associated content.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_tilelayout %}">
        <svg id="tilelayout" viewbox="0 0 24 24">
          <path d="M0,24h7l4-4v-5H0V24z M2,17h7v2.2L6.2,22H2V17z M13,0v9h7l4-4V0H13z M22,4.2L19.2,7H15V2h7V4.2z M0,13h7l4-4V0H0V13z M2,2h7
 v6.2L6.2,11H2V2z M13,24h7l4-4v-9H13V24z M15,13h7v6.2L19.2,22H15V13z"/>
        </svg>
        <ComponentTitle>TileLayout</ComponentTitle>
        <ComponentDescription>A component for creating dashboard layouts.</ComponentDescription>
      </Component>
    </Column>
</Row>

#### Premium React Layout Components

The following components require a commercial license.

<Row>
    <Column count={6}>
      <Component href="{% slug overview_timeline %}">
        <svg id="splitter" viewbox="0 0 24 24">
          <path id="timeline" d="M21,5h-5V3h7l-2,2Zm-5,16h5l2-2h-7v2ZM1,13H6l2-2H1v2ZM13,6.82v2.37c1.16,.41,2,1.51,2,2.82s-.84,2.4-2,2.82v2.37c1.16,.41,2,1.51,2,2.82,0,1.66-1.34,3-3,3s-3-1.34-3-3c0-1.3,.84-2.4,2-2.82v-2.37c-1.16-.41-2-1.51-2-2.82s.84-2.4,2-2.82v-2.37c-1.16-.41-2-1.51-2-2.82,0-1.66,1.34-3,3-3s3,1.34,3,3c0,1.3-.84,2.4-2,2.82Zm0,13.18c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Zm0-16c0-.55-.45-1-1-1s-1,.45-1,1,.45,1,1,1,1-.45,1-1Z"/>
        </svg>
        <ComponentTitle>Timeline</ComponentTitle>
        <ComponentDescription>A component that displays events in chronological order.</ComponentDescription>
      </Component>
    </Column>
    <Column count={6}>
      <Component href="{% slug overview_splitter %}">
        <svg id="splitter" viewbox="0 0 72 72">
          <path d="M33,72l6-6V0l-6,6V72z M6,36l4.2,4.2L27,57v-8.5L14.5,36L27,23.5V15L10.2,31.8L6,36z M61.8,31.8L45,15v8.5 L57.5,36L45,48.5V57l16.8-16.8L66,36L61.8,31.8z" />
        </svg>
        <ComponentTitle>Splitter</ComponentTitle>
        <ComponentDescription>A component for resizable layouts.</ComponentDescription>
      </Component>
    </Column>
</Row>

### Key Features

The KendoReact Layout components provide the following key features. Note that this is not an exhaustive list.

-   Highly customizable and easy to style **appearance**
    -   Built-in content arrangement and positioning options
    -   [Built-in themes](slug://themesandstyles)
    -   [Theme customization](slug://customizingthemes)
    -   [Custom themes](slug://themebuilder)
    -   [Unstyled mode](slug://overview_unstyled)
-   Built-in **animations** for the components that show and hide
-   Configurable **orientation** to determine the direction of the elements
-   [Globalization](slug://rtl_layout)
-   Out-of-the-box **accessibility** and **keyboard navigation**

## How Do the KendoReact Layout Components Work?

> The KendoReact Layout components provide both [free React layout components](#free-react-layout-components) and premium layout components which require a commercial license key or an active trial license key. If you need to develop apps using the [premium React layout components](#premium-react-layout-components) or other premium KendoReact components and features, follow the instructions on the [My License page](slug://my_license) to activate your license.

The KendoReact Layout components are built natively for React, with no dependencies. They leverage key React concepts such as components-based architecture, props and state management, conditional rendering, and event handling.

You have complete control over your React layout components and you can extend or override their default behaviors and appearance via props and event handlers.

### React Layout Components with Other KendoReact Components

You can combine multiple KendoReact components with the React layout components in the same application, for example:

-   Add a [chart](slug://overview_charts) or a [grid](slug://overview_grid) to a [TileLayout](slug://overview_tilelayout).
-   Show a [Calendar](slug://overview_calendar) when end users select an item in the [Drawer](slug://overview_drawer) component.

> The Layouts package is a dependency for multiple other KendoReact components.

### React Layout Components with Other Telerik Components

Based on the frameworks and technologies used in your project, you can combine UI components from different Telerik and Progress suites.

## Frequently Asked Questions

### Are the KendoReact Layout Components Free to Use?

The KendoReact Layout components provide both [free React layout components](#free-react-layout-components) and [advanced latyout components](#advanced-react-layout-components) which require a commercial license key or an active trial license key.

You can start using the free components without any license or registration with Progress or Telerik.

### How to Create Layout Components in React?

To create a layout component, you need to install the KendoReact Layout package and then import the respective layout components in your application. After that, you can use the various layout components in your React application. For more information, refer to the [Getting Started with the KendoReact Layout](slug://getstarted_layout) article.

### How to Upgrade to the Premium Layout Components?

If you want to use any of the advanced [React layout](#advanced-react-layout-components), UI components, or component features, you need a valid commercial license or an active trial license. A [free trial](https://www.telerik.com/try/kendo-react-ui) is available, if you want to try out the advanced features before purchase.

### What Are the Available Support Options?

For any questions about the use of KendoReact Layout components, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).

> tip KendoReact license holders and anyone in an active trial can also take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).

Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Layout Components]({% slug getstarted_layout %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
