---
title: Export Options
description: 'Export the KendoReact Diagram to PDF, PNG, and SVG using the KendoReact Drawing API.'
components: ['diagram']
slug: export_diagram
position: 70
tier: premium
---

# Exporting to PDF, Image, or SVG

The KendoReact Diagram can be exported to PDF, PNG image, or SVG using the `@progress/kendo-drawing` and `@progress/kendo-file-saver` packages.

The following example demonstrates exporting a Diagram to PDF, PNG, and SVG formats using the built-in export API.

<demo metaUrl="diagram/export/basic/" height="550"></demo>

To export the KendoReact Diagram component to PDF, image, or SVG, you can use the Diagram's built-in exportVisual method along with the Drawing API. The following steps outline how to achieve this:

1. Attach a `ref` to the `Diagram` component.
1. Call `exportVisual()` on the ref to get a drawing visual.
1. Pass the visual to `exportPDF`, `exportImage`, or `exportSVG` from `@progress/kendo-drawing`.
1. Save the result with `saveAs` from `@progress/kendo-file-saver`.

```tsx-no-run
import { exportImage, exportPDF, exportSVG } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';

const diagramRef = React.useRef<any>(null);

const exportToPDF = () => {
    const visual = diagramRef.current?.exportVisual();
    if (!visual) { return; }
    exportPDF(visual).then((result) => saveAs(result, 'diagram.pdf'));
};

const exportToImage = () => {
    const visual = diagramRef.current?.exportVisual();
    if (!visual) { return; }
    exportImage(visual).then((result) => saveAs(result, 'diagram.png'));
};

const exportToSVG = () => {
    const visual = diagramRef.current?.exportVisual();
    if (!visual) { return; }
    exportSVG(visual).then((result) => saveAs(result, 'diagram.svg'));
};

<Diagram ref={diagramRef} shapes={shapes} connections={connections} />
```

## Suggested Links

-   [Keyboard Navigation]({% slug keyboard_navigation_diagram %})
-   [KendoReact Drawing API](https://www.telerik.com/kendo-react-ui/components/drawing/)
-   [`DiagramProps` API]({% slug api_diagram_diagramprops %})
