---
title: Add Classification Banners to Charts and Exported Images
description: Learn how to add classification labels (like UNCLASSIFIED) to KendoReact Charts and include them in exported images.
type: how-to
page_title: Add Classification Banners to Charts and Exported Images - KendoReact Chart
slug: chart-classification-banners
tags: chart, export, classification, banner, label, image-export
ticketid: 1709507
res_type: kb
category: knowledge-base
components: ["chart"]
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>14.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Chart</td>
		</tr>
	</tbody>
</table>

## Description

I need to add classification banners (such as "UNCLASSIFIED") to charts, pages, and exported images. The classification labels should appear at the top left and bottom right of the chart, and must be included when exporting the chart to an image.

This KB article also answers the following questions:

-   How do I add classification labels to KendoReact Charts?
-   Can I include custom text in chart image exports?
-   How to add security classification banners to charts?

## Solution

To add classification banners to KendoReact Charts that persist in exported images, display the labels using HTML elements in the UI, then use the `kendo-drawing` API to add them to the exported image. Use `exportVisual()` to get the chart's drawing visual and calculate positions based on the chart's bounding box (`bbox()`). Append `Text` elements for top-left and bottom-right labels, insert a solid background using `Path.fromRect()`, then export with `exportImage()` and save using `@progress/kendo-file-saver`.

The following example demonstrates adding "UNCLASSIFIED" labels that appear both on screen and in the exported image:

<demo metaUrl="charts/chart/classification-banners/" height="600"></demo>

## See Also

-   [KendoReact Chart Export](https://www.telerik.com/kendo-react-ui/components/charts/chart/export/)
-   [KendoReact Drawing API - Basic Shapes](https://www.telerik.com/kendo-react-ui/components/drawing/basic-shapes/)
-   [KendoReact Chart API](https://www.telerik.com/kendo-react-ui/components/charts/api/Chart/)
