---
title: Tooltips
description: 'Display rich tooltip content on shapes and connections in the KendoReact Diagram, including custom React component templates.'
components: ['diagram']
slug: tooltips_diagram
position: 60
tier: premium
---

# Diagram Tooltips

The KendoReact Diagram lets you display tooltips when hovering over [shapes]({% slug shapes_diagram %}) and [connections]({% slug connections_diagram %}). Tooltips provide additional information about diagram elements and enhance the user experience.

The following example demonstrates shape and connection tooltips with custom React templates, showing employee details and relationship information on hover.

<demo metaUrl="diagram/tooltips/overview/" height="650"></demo>

## Basic Configuration

The tooltip content is specified using the [`tooltipText`](slug:api_diagram_shapeoptions#tooltipText) property on shapes and the [`tooltipText`](slug:api_diagram_connectionoptions#tooltipText) property on connections. This property holds the text that displays when the user hovers over the element.

To control when tooltips appear, use the [`tooltip.visible`](slug:api_diagram_tooltipoptions#visible) property. You can enable tooltips globally for all elements or individually for specific shapes and connections.

```tsx-no-run
const shapes: ShapeOptions[] = [
    {
        id: '1',
        content: { text: 'CEO' },
        tooltipText: 'Chief Executive Officer',
        tooltip: { visible: true }
    }
];

const connections: ConnectionOptions[] = [
    {
        from: '1',
        to: '2',
        tooltipText: 'Reports to CEO',
        tooltip: { visible: true }
    }
];
```

The following example demonstrates basic tooltip configuration with simple text tooltips for shapes and connections.

<demo metaUrl="diagram/tooltips/basic-configuration/" height="650"></demo>

## Controlling Tooltip Visibility

Tooltips can be enabled globally for all shapes and connections, or individually per item.

### Global Enablement

To enable tooltips for all shapes in the Diagram, set the [`tooltip.visible`](slug:api_diagram_tooltipoptions#visible) property to `true` in the [`shapeDefaults`](slug:api_diagram_shapedefaults) configuration. Similarly, enable tooltips for all connections using the [`connectionDefaults`](slug:api_diagram_connectiondefaults) configuration.

```tsx-no-run
const shapeDefaults: ShapeDefaults = {
    tooltip: {
        visible: true
    }
};

const connectionDefaults: ConnectionDefaults = {
    tooltip: {
        visible: true
    }
};
```

When tooltips are enabled globally, the Diagram displays tooltips for items that have a [`tooltipText`](slug:api_diagram_shapeoptions#tooltipText) property defined.

<demo metaUrl="diagram/tooltips/global-enablement/" height="470"></demo>

### Per-Item Enablement

You can also enable or disable tooltips for individual shapes or connections by setting the [`tooltip.visible`](slug:api_diagram_tooltipoptions#visible) property on the item. This overrides the global default configuration.

```tsx-no-run
const shapes: ShapeOptions[] = [
    {
        id: '1',
        content: { text: 'Manager' },
        tooltip: { visible: true },
        tooltipText: 'Department Manager - Oversees daily operations'
    },
    {
        id: '2',
        content: { text: 'Developer' },
        tooltip: { visible: false }, // Tooltip disabled for this shape
        tooltipText: 'This tooltip will not be displayed'
    }
];
```

The following example demonstrates per-element tooltip enablement where some shapes and connections have tooltips disabled while others remain enabled.

<demo metaUrl="diagram/tooltips/per-element-enablement/" height="460"></demo>

## Customizing Tooltips

The Diagram provides several options for customizing tooltip appearance and content, from simple styling with CSS classes to advanced customization using React templates.

The following example demonstrates how to use both shape and connection tooltip templates together to create a comprehensive tooltip experience.

<demo metaUrl="diagram/tooltips/template-overview/" height="650"></demo>

### Styling Tooltips

You can apply custom styles to tooltips using the [`cssClass`](slug:api_diagram_tooltipoptions#cssClass) option. This allows you to define specific CSS classes that style the tooltip's appearance.

```tsx-no-run
const shapes: ShapeOptions[] = [
    {
        id: '1',
        content: { text: 'Designer' },
        tooltipText: 'Creative Designer - Crafts visual concepts',
        tooltip: {
            visible: true,
            cssClass: 'role-tooltip'
        }
    }
];
```

The following example demonstrates how to style tooltips using the [`cssClass`](slug:api_diagram_tooltipoptions#cssClass) option.

<demo metaUrl="diagram/tooltips/styling-tooltips/" height="540"></demo>

### Shape Tooltip Template

Use the [`DiagramShapeTooltip`](slug:api_diagram_diagramshapetooltip) component to define a custom template for shape tooltips. The template context provides direct access to the shape's [`dataItem`](slug:api_diagram_shapeoptions#dataItem).

```tsx-no-run
import { DiagramShapeTooltip } from '@progress/kendo-react-diagram';

const shapeTooltipRender = (shape: any) => (
    <div style={{ padding: 8 }}>
        <strong>{shape.dataItem.name}</strong>
        <p style={{ margin: '4px 0 0' }}>{shape.dataItem.title}</p>
    </div>
);

const App = () => (
    <Diagram shapes={shapes} connections={connections}>
        <DiagramShapeTooltip>
            {shapeTooltipRender}
        </DiagramShapeTooltip>
    </Diagram>
);
```

You can access any properties defined in your shape's data model through the [`dataItem`](slug:api_diagram_shapeoptions#dataItem) property.

The following example demonstrates a custom shape tooltip template with employee information.

<demo metaUrl="diagram/tooltips/shape-template/" height="530"></demo>

### Connection Tooltip Template

Use the [`DiagramConnectionTooltip`](slug:api_diagram_diagramconnectiontooltip) component to define a custom template for connection tooltips. The template context provides direct access to the connection's [`dataItem`](slug:api_diagram_connectionoptions#dataItem).

```tsx-no-run
import { DiagramConnectionTooltip } from '@progress/kendo-react-diagram';

const connectionTooltipRender = (connection: any) => (
    <div style={{ padding: 8 }}>
        <strong>From:</strong> {connection.from}<br/>
        <strong>To:</strong> {connection.to}
    </div>
);

const App = () => (
    <Diagram shapes={shapes} connections={connections}>
        <DiagramConnectionTooltip>
            {connectionTooltipRender}
        </DiagramConnectionTooltip>
    </Diagram>
);
```

You can access any properties defined in your connection's data model through the [`dataItem`](slug:api_diagram_connectionoptions#dataItem) property.

The following example demonstrates a custom connection tooltip template with financial transfer information.

<demo metaUrl="diagram/tooltips/connection-template/" height="660"></demo>

## See Also

-   [Diagram API Reference]({% slug api_diagram %})
-   [Diagram Data Binding]({% slug databinding_diagram %})
-   [Diagram Exporting]({% slug export_diagram %})
-   [Diagram Layouts]({% slug layouts_diagram %})
