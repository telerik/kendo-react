---
title: Appearance
description: 'Get started with the KendoReact ChunkProgressBar and change its appearance in React projects.'
components: ["chunkprogressbar"]
slug: chunkprogressbar_appearance
position: 6
tag: updated
---

# Appearance

The ChunkProgressBar enables you to [set its dimensions](#toc-setting-the-dimensions) and to implement [custom styling for its status indicator and label](#customizing-the-status-indicator).

## Setting the Dimensions

To set the styling of the ChunkProgressBar wrapper element, use the respective CSS properties.

{% meta height:90 %}
{% embed_file chunkprogressbar/dimensions/func/app.tsx preview %}
{% embed_file chunkprogressbar/dimensions/func/main.tsx %}
{% endmeta %}

## Customizing the Status Indicator

You can customize the bar that indicates the task progress by setting custom styling or custom classes to the inner elements that are responsible for their rendering. To define the custom layout, use the [`progressStyle`]({% slug api_progressbars_chunkprogressbarprops %}#toc-progressstyle) and [`progressClassName`]({% slug api_progressbars_chunkprogressbarprops %}#toc-progressclassname) options for the completed part and [`emptyStyle`]({% slug api_progressbars_progressbarprops %}#toc-emptystyle) and [`emptyClassName`]({% slug api_progressbars_progressbarprops %}#toc-emptyclassname) options for the empty part.

{% meta height:240 %}
{% embed_file chunkprogressbar/appearance/func/app.tsx preview %}
{% embed_file chunkprogressbar/appearance/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [API Reference of the ChunkProgressBar]({% slug api_progressbars_chunkprogressbar %})
-   [API Reference of the ChunkProgressBarProps]({% slug api_progressbars_chunkprogressbarprops %})
-   [Creating Custom Styles]({% slug themebuilder %})
