---
title: Overview
description: 'React Diagram component visualizes relationships between entities, supports pan and zoom, data binding, custom shapes and connections, layouts, and export.'
components: ['diagram']
slug: overview_diagram
position: 0
tier: premium
hideCta: true
---

# React Diagram Overview

The KendoReact Diagram is a powerful visualization component that displays relationships between entities as nodes (shapes) and links (connections). It supports interactive panning and zooming, automatic layout algorithms, custom visual templates, tooltips, and exporting to PDF, PNG, and SVG.

The React Diagram component is part of the KendoReact library of React UI components. It is distributed through NPM under the [`@progress/kendo-react-diagram`](https://www.npmjs.com/package/@progress/kendo-react-diagram) package.

<CtaPanelOverview></CtaPanelOverview>

The following example demonstrates the Diagram in action.

<demo metaUrl="diagram/overview/" height="500"></demo>

## Key Features

The React Diagram provides a wide and always growing range of built-in features. This developer-friendly feature set allows you to create beautiful and functional graph visualizations faster.

### Shapes

The Diagram supports multiple built-in shape types—rectangles, circles, images, and a comprehensive set of flowchart shapes. You can also provide fully custom visual templates rendered with the drawing API. [Read more about shapes in the Diagram...]({% slug shapes_diagram %})

### Connections

Connections link shapes together and support customizable strokes, start and end caps, content labels, and connector points. [Read more about connections in the Diagram...]({% slug connections_diagram %})

### Data Binding

Bind the Diagram to flat or hierarchical data using the [`shapes`](slug:api_diagram_diagramprops#shapes) and [`connections`](slug:api_diagram_diagramprops#connections) props. Custom field mapping via [`ShapeModelFields`](slug:api_diagram_shapemodelfields) and [`ConnectionModelFields`](slug:api_diagram_connectionmodelfields) lets you use any data model without transforming it first. [Read more about data binding in the Diagram...]({% slug databinding_diagram %})

### Layouts

Automatic layout algorithms—tree, layered, and force-directed—arrange shapes without requiring manual coordinate placement. Grid settings control how multiple disconnected sub-graphs are positioned relative to each other. [Read more about layouts in the Diagram...]({% slug layouts_diagram %})

### Pan and Zoom

Users can navigate large diagrams by panning (scrolling) and zooming with the mouse wheel or the programmatic API. Minimum and maximum zoom levels can be configured.

### Tooltips

Shapes and connections can display rich tooltip content, including custom React components, on hover. [Read more about tooltips in the Diagram...]({% slug tooltips_diagram %})

### Export

The Diagram can be exported to PDF, PNG image, or SVG using the KendoReact Drawing API. [Read more about exporting in the Diagram...]({% slug export_diagram %})

### Events

The Diagram raises events for user interactions such as clicking, dragging, selecting, panning, and zooming so that you can respond to changes in your application. [Read more about events in the Diagram...]({% slug events_diagram %})

### Workflow Diagrams

The Diagram ships with a rich set of flowchart shape types ([`Terminator`](slug:api_diagram_terminator), [`Process`](slug:api_diagram_process), [`Decision`](slug:api_diagram_decision), [`Document`](slug:api_diagram_document), and more) that make it easy to build workflow and process diagrams. [Read more about workflow diagrams...]({% slug workflow_diagram %})

## React Diagram Support Options

For any questions about the use of React Diagram, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/kendo-react-ui/roadmap/) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Suggested Links

-   [Get Started with the KendoReact Diagram component]({% slug getstarted_diagram %})
-   [Getting Started with KendoReact (Online Guide)]({% slug getting_started %})
-   [Getting Started with KendoReact (Video Tutorials)](https://www.telerik.com/kendo-react-ui/resources#videos)
-   [Virtual Classroom (Training Courses for Registered Users)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
-   [React UI Components](https://www.telerik.com/kendo-react-ui/)
