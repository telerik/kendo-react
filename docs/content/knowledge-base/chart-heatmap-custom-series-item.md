---
title: Set custom rendering for the Heatmap ChartSeriesItem
description: An example on how to set custom rendering for the ChartSeriesItem in Heatmap
type: how-to
page_title: Setting Different ChartSeriesItem Visual in Heatmap - KendoReact Chart
slug: chart-heatmap-custom-series-item
tags: chart, chartseriesitem, customization, visual
ticketid:
res_type: kb
category: knowledge-base
components: ["chart"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>5.14.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Chart</td>
	    </tr>
    </tbody>
</table>

## Description

I want to add border radius in Heatmap series items (ChartSeriesItem)

## Solution

Set custom visual for ChartSeriesItem and draw custom shape with border radius.

This is an example demonstrating the above approach:

```jsx
import * as React from 'react';

import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesMarkers,
    ChartXAxis,
    ChartXAxisItem
} from '@progress/kendo-react-charts';

import { Path } from '@progress/kendo-drawing';
//Data generator
function makeDataObjects(rows, cols) {
    const data = [];

    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        Array.from(Array(cols)).map((_, colIndex) => {
            data.push({
                a: `А${rowIndex + 1}`,
                b: `B${colIndex + 1}`,
                value: cols + rowIndex * colIndex
            });
        });
    }

    return data;
}
//Generate test data
const data = makeDataObjects(10, 10);

//Custom rendering for the series item
const myCustomMarker = (e) => {
    var width = e.rect.size.width - 3;
    var height = e.rect.size.height - 3;
    var originY = e.rect.origin.y;
    var originX = e.rect.origin.x;
    const path = new Path({
        stroke: { color: e.series.color, width: 1 }, // you can set the width to 0 if you don't want border
        fill: { color: e.options.background }
    });
    const borderRadius = 3;
    path.moveTo(originX + borderRadius, originY)
        .lineTo(originX + width - borderRadius, originY)
        .arcTo([originX + width, originY + borderRadius], borderRadius, borderRadius, false)
        .lineTo(originX + width, originY + height - borderRadius)
        .arc(0, 90, borderRadius, borderRadius)
        .lineTo(originX + borderRadius, originY + height)
        .arc(90, 180, borderRadius, borderRadius)
        .lineTo(originX, originY + borderRadius)
        .arc(180, 270, borderRadius, borderRadius)
        .close();

    return path;
};
const ChartContainer = () => {
    const [shape, setShape] = React.useState('roundedRect');

    return (
        <div>
            <Chart>
                <ChartSeries>
                    <ChartSeriesItem
                        type="heatmap"
                        data={data}
                        xField="a"
                        yField="b"
                        field="value"
                        visual={myCustomMarker}
                    >
                        <ChartSeriesMarkers />
                        <ChartSeriesLabels visible={false} />
                    </ChartSeriesItem>
                </ChartSeries>
                <ChartXAxis>
                    <ChartXAxisItem
                        labels={{
                            rotation: 'auto'
                        }}
                    />
                </ChartXAxis>
            </Chart>
        </div>
    );
};

export default ChartContainer;
```
