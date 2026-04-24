---
title: Overview
description: 'Try now the React Barcodes package by KendoReact and discover the variety of features that it provides for your next React project.'
components: ["barcode"]
slug: overview_barcodes
position: 0
---

# KendoReact Barcodes Overview

The KendoReact Barcodes render common industry barcodes including a variety of one-dimensional (1D) and two-dimensional (2D or "matrix") barcodes suitable for display and high-quality prints.

The Barcodes components are part of the KendoReact library which provides native KendoReact components for the React ecosystem and are available under the [kendo-react-barcodes NPM package](https://www.npmjs.com/package/@progress/kendo-react-barcodes).

<CtaPanelOverview></CtaPanelOverview>

<Row>
  <Column count={6}>
    <Component href="{% slug overview_barcode_barcodes %}">
      <svg id="barcode" viewBox="0 0 24 24">
        <path d="M10,22h2V2h-2V22z M0,22h2V2H0V22z M5,16h2V2H5V16z M14,16h2V2h-2V16z M22,2v20h2V2H22z M18,16h2V2h-2V16z"/>
      </svg>
      <ComponentTitle>Barcode</ComponentTitle>
      <ComponentDescription>A component for rendering a variety of industry barcodes.</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_qrcode_barcodes %}">
      <svg id="qrcode" viewBox="0 0 24 24">
        <path d="M12,4h2V0h-4v2h2V4z M6,6H4v2h2V6z M10,4V2H8v2H10z M2,14H0v4h2V14z M18,12v-2h-4v2H18z M2,6H0v2h2V6z M4,2h4V0H0v4h4V2z
            M18,0h-2v2h2V0z M12,8v2h2V8H12z M4,14h2v-2H4V14z M10,16v-2H6v2H10z M2,10v2h2v-2H2z M8,6v4H6v2h4V8h2V6H8z M0,24h4v-4H0V24z
            M22,12h2V8h-2V12z M14,20v2h2v-2H14z M18,18h-2v2h2V18z M22,18h-2v2h4v-6h-2V18z M18,22h2v-2h-2V22z M18,4h-2v4h4V6h-2V4z M6,18H4
            v2h2V18z M20,0v6h2V4h2V0H20z M6,24h2v-2H6V24z M16,24h2v-2h-2V24z M24,24v-2h-4v2H24z M14,16h6v-2h-8v4h2V16z M12,20v-2H8v4h2v-2
            H12z M10,24h4v-2h-4V24z"/>
      </svg>
      <ComponentTitle>QR Code</ComponentTitle>
      <ComponentDescription>A dedicated component for QR Codes.</ComponentDescription>
    </Component>
  </Column>
</Row>

The following example demonstrates the Barcode and QR Code in action.

{% meta height:350 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

## Key Features

### Rendering Modes

The Barcodes support two modes for rendering&mdash;Canvas (bitmap) and SVG (vector graphics). By default, the Barcodes are rendered through SVG. Switching between the two is as easy as updating a single configuration option. [Read more about the rendering modes of the Barcode]({% slug rendering_barcodes %}).

### Export Options

The Barcodes provide built-in support to save your the output as an image (PNG), PDF, SVG, and the Kendo UI Drawing format (useful for further processing). [Read more about the export options of the Barcodes]({% slug export_barcodes %}).

## Support Options

For support options, see the [KendoReact Support](https://www.telerik.com/kendo-react-ui/support) page.


## Suggested Links

-   [Getting Started with the KendoReact Barcodes]({% slug get_started_barcodes %})
-   [Virtual Classroom (Introductory Course Available to Trial and Commercial License Holders)](https://learn.telerik.com/learn/course/external/view/elearning/14/kendoreact)
