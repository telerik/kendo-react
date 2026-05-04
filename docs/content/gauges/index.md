---
title: Overview
page_title: 'React Gauge Component - KendoReact'
description: 'A React gauge component displays a value on a visual scale, like a speedometer, to represent progress, performance, or capacity.'
components: ['arcgauge', 'circulargauge', 'lineargauge', 'radialgauge']
slug: overview_gauges
position: 0
---

# KendoReact Gauges Overview

The KendoReact Gauges provide a set of React components for building common gauge types.

The Gauges components are part of the KendoReact library which provides native KendoReact components for the React ecosystem and are available under the [kendo-react-gauges NPM package](https://www.npmjs.com/package/@progress/kendo-react-gauges).

<CtaPanelOverview></CtaPanelOverview>

<Row>
    <Column count={6}>
        <Component href="{% slug overview_arcgauge_gauges %}">
        <svg id="arcgauge" viewBox="0 0 24 24">
            <path class="st0" d="M14,11l-2,2v4l2,2h2l2-2v-4l-2-2H14z M16,17h-2v-4h2V17z M6,11h5l0,2l-2,6l-2,0l1.8-6H6V11z M21.4,9.6L20,11
                c-1.8-2.4-4.7-4-8-4C6.5,7,2,11.5,2,17c0,0.5,0,1,0.1,1.5L0.2,19C0.1,18.4,0,17.7,0,17C0,10.4,5.4,5,12,5C15.8,5,19.2,6.8,21.4,9.6z
                M24,17c0,0.7-0.1,1.4-0.2,2l-1.9-0.5C22,18,22,17.5,22,17c0-1.5-0.3-2.9-0.9-4.2l1.5-1.5C23.5,13,24,14.9,24,17z"/>
        </svg>
        <ComponentTitle>ArcGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on an arc scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_circulargauge_gauges %}">
        <svg id="circulargauge" viewBox="0 0 24 24" >
            <path class="st0" d="M14,8l-2,2v4l2,2h2l2-2v-4l-2-2H14z M16,14h-2v-4h2V14z M6,8h5l0,2l-2,6l-2,0l1.8-6H6V8z M24,12c0,6.6-5.4,12-12,12 S0,18.6,0,12S5.4,0,12,0c3.8,0,7.2,1.8,9.4,4.6L21,5l-1,1l0,0c-1.8-2.4-4.7-4-8-4C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10 c0-1.5-0.3-2.9-0.9-4.2l1.5-1.5C23.5,8,24,9.9,24,12z"/>
        </svg>
        <ComponentTitle>CircularGauge</ComponentTitle>
        <ComponentDescription>A component for representing values using an arc over a fully enclosed circle.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_lineargauge_gauges %}">
        <svg id="lineargauge" viewbox="0 0 72 72">
            <path d="M30,33h12v36H30V33z M30,3h12v18H30V3z M18,24v6h30l6-6H18z"></path>
        </svg>
        <ComponentTitle>LinearGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on a linear scale.</ComponentDescription>
        </Component>
    </Column>
    <Column count={6}>
        <Component href="{% slug overview_radialgauge_gauges %}">
        <svg id="radialgauge" viewBox="0 0 72 72">
          	<path d="M30.3,54h8.5L72,20.7v-8.5L30.3,54z M36,12c8.3,0,15.9,3.4,21.3,8.9l4.2-4.2C55.1,10.1,46,6,36,6  C16.1,6,0,22.1,0,42c0,9.2,3.5,17.5,9.1,23.9l4.2-4.2C8.8,56.4,6,49.5,6,42C6,25.4,19.4,12,36,12z M64.8,33.9  c0.7,2.6,1.2,5.3,1.2,8.1c0,7.5-2.8,14.4-7.4,19.6l4.2,4.2C68.5,59.5,72,51.2,72,42c0-4.5-0.9-8.9-2.4-12.9L64.8,33.9z"></path>
        </svg>
        <ComponentTitle>RadialGauge</ComponentTitle>
        <ComponentDescription>A component for representing values on a radial scale.</ComponentDescription>
        </Component>
    </Column>
</Row>

The following example demonstrates the Arc, Linear, and Radial Gauges in action.

{% meta height:470 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## React Gauge Key Features

The React Gauge component provides a wide and always growing range of built-in features that isn't limited by the list in this section. This developer-friendly feature set allows you to create beautiful and functional applications faster. At the same time, the KendoReact development team works constantly to improve the performance of the components and their capabilities.

### Scale Options

All KendoReact Gauges components provide configuration options for customizing their scales and allow you to change the appearance of their labels and ticks, set their ranges, and more. [Read more about the scale options of the ArcGauge...]({% slug scaleoptions_arcgauge %})

### Export Options

The React Gauges provide a set of built-in options for Image, PDF, and SVG export resulting in Base64-encoded files which can be sent to a service or saved on the client. [Read more about the export options of the KendoReact Gauges...]({% slug export_gauges %})

### Appearance

The color and style of the Gauges are normally picked up by the current Kendo UI theme, but each aspect of the Gauges can be customized by theme variables or configuration options. [Read more about the appearance of the KendoReact Gauges...]({% slug styling_gauges %})

## Support Options

For any questions about the use of the React Gauge component, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Getting Started with the KendoReact Gauges]({% slug get_started_gauges %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
