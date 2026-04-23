---
title: Overview
page_title: 'React Charts Library - Overview | KendoReact Docs & Demos'
description: 'React Charts is a powerful data visualization component designed to create interactive and visually appealing charts.'
components: ["chart"]
slug: overview_charts
position: 0
hideCta: true
---

# React Charts Overview

Our React Charts library features a large collection of data visualization charts and series&mdash;from Line, Bar, Pie, and Donut Charts to Sparkline and StockChart, tailored specifically for the finance industry.

> tip **Jumpstart Your Chart** <br/><br/> With the Agentic UI Generator, you can build components and layouts using natural language prompts — directly inside AI-powered IDEs like VS Code and Cursor. Get intelligent assistance with component implementation, styling, layout design, and iconography powered by our documentation and APIs. <br/><br/>[Try the Agentic UI Generator](slug:agentic_ui_generator_getting_started)

<!-- <CtaPanelOverview></CtaPanelOverview> -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/AYvVFUvxo0o" title="React Charts Made Easy: KendoReact Getting Started" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{% meta height:850 %}
{% embed_file overview/func/app.tsx preview %}
{% embed_file overview/func/main.tsx %}
{% endmeta %}

<!-- <Row>
  <Column count={6}>
    <Component href="{% slug overview_seriestypes_charts %}">
      <svg id="chart" viewBox="0 0 72 72">
        <path d="M0,60v6h66l6-6H0z M36,21h12v33H36V21z M54,6h12v48H54V6z M18,12h12v42H18V12z M0,27h12v27H0V27z" />
        <path className="cls-1" d="M0,60v6h66l6-6H0z M36,21h12v33H36V21z M54,6h12v48H54V6z M18,12h12v42H18V12z M0,27h12v27H0V27z"></path>
        <path d="M0,60v6h66l6-6H0z M36,21h12v33H36V21z M54,6h12v48H54V6z M18,12h12v42H18V12z M0,27h12v27H0V27z" />
      </svg>
      <ComponentTitle>Chart</ComponentTitle>
      <ComponentDescription>A highly customizable chart of categorical, circular, freeform, and scatter series types</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_sparkline_charts %}">
      <svg id="sparkline" viewBox="0 0 72 72">
        <path className="st0" d="M36,35.3l-12,12l-24-24v8.5l24,24l12-12l18,18l18-18v-8.5l-18,18L36,35.3z M51,32.3l-15-15L19.2,34.1l4.2,4.2
        L36,25.8l15,15l21-21v-8.5L51,32.3z M0,53.3v8.5l10.8-10.8l-4.2-4.2L0,53.3z" />
      </svg>
      <ComponentTitle>Sparkline</ComponentTitle>
      <ComponentDescription>A set of tiny charts without chart-specific elements, designed to be embedded in content</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_stockchart_charts %}">
      <svg id="stockchart" viewBox="0 0 72 72">
        <path className="st0" d="M0,60v6h66l6-6H0z M36,27h12v9H36V27z M18,24h12v6H18V24z M0,27h12v15H0V27z M9,6l-6,6v12h6V6z M27,9l-6,6v6h6
        V9z M45,12l-6,6v6h6V12z M3,45h6v9H3V45z M21,33h6v12h-6V33z M54,33h12v6H54V33z M57,42h6v6h-6V42z M63,15l-6,6v9h6V15z M39,39h6v12
        h-6V39z" />
      </svg>
      <ComponentTitle>StockChart</ComponentTitle>
      <ComponentDescription>A specialized component for exploring financial time series</ComponentDescription>
    </Component>
  </Column>
  <Column count={6}>
    <Component href="{% slug overview_sankey %}">
      <svg id="sankey" viewBox="0 0 26 26">
        <path className="st0" d="M24,4V0h-2C12,0,12,4,2,4v-2L0,4v16h2c10,0,10,4,20,4h2v-6h-2c-10,0-10-4-20-4h22v-6H2c10,0,10-4,20-4h2ZM22,
        20v2c-10,0-10-4-20-4v-2c10,0,10,4,20,4ZM22,10v2H2v-2h20Z" />
      </svg>
      <ComponentTitle>Sankey</ComponentTitle>
      <ComponentDescription>A diagram for depicting fluctuating flows through different domains</ComponentDescription>
    </Component>
  </Column>
</Row> -->

## Key Features of the KendoReact Charting Library

### Axes

If you need to change the labels, the background, the step, the lines, and any other axis option, the KendoReact Charts support in-depth customization. You can customize over 100+ options for the category and value axes of the Charts. The dedicated features for displaying time series get automatically activated when you bind an axis to `Date` objects. [Read more about the Chart axes...]({% slug axes_chart_charts %})

### Rendering and Export

Depending on your application requirements, you can choose between two rendering modes for the KendoReact Charts&mdash;Canvas (bitmap) and SVG (vector graphics). When the users need to save charts locally, they can take advantage of the variety of supported formats for exporting. [Read more about the rendering modes]({% slug rendering_chart_charts %}) and the [export options...]({% slug export_chart_charts %})

### Panning and Zooming

The built-in panning and zooming features are intuitive and allow end-users to focus on a specific segment of the data or to change the displayed range. You can enable these functionalities of the KendoReact Charts library by using the `pannable` and `zoomable` options. [Read more about panning and zooming...]({% slug panzoom_chart_charts %})

### Appearance

Through a selection of [themes]({% slug themesandstyles %}), you can control the colors and styles of the components in the KendoReact Charts library. If desired, you can [customize these themes]({% slug customizingthemes %}) or use the [ThemeBuilder]({% slug themebuilder %}) to create new themes. Additionally, the highly customizable KendoReact Charts provide more than 1 000 customization options. [Read more about the appearance of the Chart...]({% slug appearance_chart_charts %})

### Globalization

The KendoReact Charts come with globalization features that allow you to create applications that can be used all over the world. This is achieved by combining the translation of component messages with adaptation to specific cultures. [Read more about the globalization of the Charts...]({% slug globalization_charts %})

## Types of KendoReact Charts and Graphs Available

### Categorical Charts

<article-card-container>
    <article-card
        href="slug://area_seriestypes_charts"
        src="./assets/svg/area.svg"
        title="Area"
        subTitle="Categorical Chart"
        description="Area charts and Vertical Area charts are categorical charts, which are suitable for displaying quantitative data by using continuous lines.">
    </article-card>
    <article-card
        href="slug://barcolumn_seriestypes_charts"
        src="./assets/svg/bar.svg"
        title="Bar"
        subTitle="Categorical Chart"
        description="Bar charts and Column charts are categorical charts, which display data by using horizontal or vertical bars whose lengths vary according to their value.">
    </article-card>
    <article-card
        href="slug://boxplot_seriestypes_charts"
        src="./assets/svg/box-plot.svg"
        title="Box Plot"
        subTitle="Categorical Chart"
        description="Box Plot charts are categorical charts, which graphically render groups of numerical data through their quartiles.">
    </article-card>
    <article-card
        href="slug://bullet_seriestypes_charts"
        src="./assets/svg/bullet.svg"
        title="Bullet"
        subTitle="Categorical Chart"
        description="Bullet charts are categorical charts, which are a variation of the Bar charts.">
    </article-card>
    <article-card
        href="slug://heatmap_seriestypes_charts"
        src="./assets/svg/heatmap.svg"
        title="Heatmap"
        subTitle="Categorical Chart"
        description="Heatmap charts use colors to indicate the relative value of data points in two dimensions.">
    </article-card>
    <article-card
        href="slug://line_seriestypes_charts"
        src="./assets/svg/line.svg"
        title="Line"
        subTitle="Categorical Chart"
        description="Line charts and Vertical Line charts are categorical charts, which display continuous data as lines that pass through points defined by the values of their items.">
    </article-card>
    <article-card
        href="slug://radar_seriestypes_charts"
        src="./assets/svg/radar.svg"
        title="Radar"
        subTitle="Categorical Chart"
        description="Radar charts, also known as Spider charts, are categorical charts, which wrap the X axis in a circle or polygon.">
    </article-card>
    <article-card
        href="slug://rangearea_seriestypes_charts"
        src="./assets/svg/range-area.svg"
        title="Range Area"
        subTitle="Categorical Chart"
        description="Range Area charts are categorical charts, which represent a variation of the Area charts.">
    </article-card>
    <article-card
        href="slug://rangebar_seriestypes_charts"
        src="./assets/svg/range-bar.svg"
        title="Range Bar"
        subTitle="Categorical Chart"
        description="Range Bar charts are categorical charts, which represent a variation of the Bar charts.">
    </article-card>
    <article-card
        href="slug://waterfall_seriestypes_charts"
        src="./assets/svg/waterfall.svg"
        title="Waterfall"
        subTitle="Categorical Chart"
        description="Waterfall charts are categorical charts, which display the cumulative effect of sequentially introduced positive or negative values.">
    </article-card>
</article-card-container>

### Circular Charts

<article-card-container>
    <article-card
        href="slug://donut_seriestypes_charts"
        src="./assets/svg/donut.svg"
        title="Donut"
        subTitle="Circular Chart"
        description="Donut charts are circular charts, which represent a variation of the Pie charts and are capable of displaying multiple nested series.">
    </article-card>
    <article-card
        href="slug://pie_seriestypes_charts"
        src="./assets/svg/pie.svg"
        title="Pie"
        subTitle="Circular Chart"
        description="Pie charts are circular charts, which display data in the form of single-series sectors from a two-dimensional circle and are useful for rendering data as part of a whole.">
    </article-card>
</article-card-container>

### Freeform Charts

<article-card-container>
    <article-card
        href="slug://funnel_seriestypes_charts"
        src="./assets/svg/funnel.svg"
        title="Funnel"
        subTitle="Freeform Chart"
        description="Funnel charts are freeform charts, which display a single series of data in progressively decreasing or increasing proportions that are organized in segments, where each segment represents the value for the particular item from the series.">
    </article-card>
    <article-card
        href="slug://pyramid_seriestypes_charts"
        src="./assets/svg/pyramid.svg"
        title="Pyramid"
        subTitle="Freeform Chart"
        description="Pyramid charts are freeform charts, which display a single series of data as pyramid segments, where each segment represents the value for the particular item from the series.">
    </article-card>
</article-card-container>

### Scatter Charts

<article-card-container>
    <article-card
        href="slug://bubble_seriestypes_charts"
        src="./assets/svg/bubble.svg"
        title="Bubble"
        subTitle="Scatter Chart"
        description="Bubble charts are scatter charts, which display data as points with coordinates and sizes that are defined by the value of their items.">
    </article-card>
    <article-card
        href="slug://polar_seriestypes_charts"
        src="./assets/svg/polar.svg"
        title="Polar"
        subTitle="Scatter Chart"
        description="Polar charts are scatter charts which display two-dimensional data series in polar coordinates.">
    </article-card>
    <article-card
        href="slug://scatterline_seriestypes_charts"
        src="./assets/svg/scatter-plot.svg"
        title="Scatter Plot and Scatter Line"
        subTitle="Scatter Chart"
        description="Scatter Plot and Scatter Line charts are the two main variations of scatter charts and are suitable for displaying numerical data.">
    </article-card>
</article-card-container>

### Sparkline Chart

<article-card-container>
    <article-card
        href="slug://overview_sparkline_charts"
        src="./assets/svg/sparkline.png"
        title="Sparkline"
        subTitle="Mini Chart"
        description="Sparklines are tiny, word-sized graphics without typical chart elements like axes, coordinates, legends, or titles. You can embed them in tables, headlines, or chunks of text.">
    </article-card>
</article-card-container>

### StockChart

<article-card-container>
    <article-card
        href="slug://overview_stockchart_charts"
        src="./assets/svg/stockchart.png"
        title="StockChart"
        subTitle="Financial Chart"
        description="StockCharts are a specialized control for visualizing the price movement of a financial instrument over a certain period of time.">
    </article-card>
</article-card-container>

## Support Options

For any issues you might encounter while working with the KendoReact Charts, or any other [KendoReact components](https://www.telerik.com/kendo-react-ui/components/), there are [several support options available](https://www.telerik.com/kendo-react-ui/support):

-   KendoReact license holders and anyone in an active trial can take advantage of the outstanding KendoReact customer support delivered by the developers who built the library. To submit a support ticket, use the [Telerik support system](https://www.telerik.com/account/support-tickets).
-   The [KendoReact forums](https://www.telerik.com/forums/kendo-ui-react) are part of the free support you can get from the community and from the KendoReact team on all kinds of general issues.
-   [KendoReact Feedback Portal](https://feedback.telerik.com/kendo-react-ui) and [KendoReact Roadmap](https://www.telerik.com/support/whats-new/kendo-react-ui/roadmap) provide information on the features in discussion and also those planned for release.
-   KendoReact uses [GitHub Issues](https://github.com/telerik/kendo-react) as its bug tracker, and you can submit any related reports there. Also, check out the [closed list](https://github.com/telerik/kendo-react/issues?q=is%3Aissue+is%3Aclosed).
-   Need something unique that is tailor-made for your project? Progress offers its [Progress Services](https://www.progress.com/services) group that can work with you to create any customized solution that you might need.

## Implementing KendoReact Charts: Video Tutorial

With this 10-minute video tutorial, you'll learn how to implement a good-looking chart customized with animations, title, custom axes, chart legend and tooltips with just a few lines of code. You'll also see how to connect your KendoReact Charts to a data set.

-   [KendoReact Charts Tutorial with the KendoReact Chart Library](https://www.telerik.com/videos/react-charts-tutorial-with-the-kendoreact-chart-library)

## Suggested Links

-   [Getting Started with the KendoReact Charts]({% slug getstarted_charts %})
-   [API Reference of the Charts](slug:api_charts)
