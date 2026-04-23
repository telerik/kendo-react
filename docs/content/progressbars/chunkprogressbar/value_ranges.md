---
title: Value and Ranges
description: "Get started with the KendoReact ChunkProgressBar and set its ranges and value in React projects."
components: ["chunkprogressbar"]
slug: chunkprogressbar_value_ranges
position: 2
---

# Value and Ranges

The ChunkProgressBar provides option for setting its value or a range of values and for indicating the progress of an ongoing task.

* To set the value of the ChunkProgressBar, use its [`value`]({% slug api_progressbars_chunkprogressbarprops %}#toc-value) option.
* To define the start and end values of the range, use the [`min`]({% slug api_progressbars_chunkprogressbarprops %}#toc-min) and [`max`]({% slug api_progressbars_chunkprogressbarprops %}#toc-max) ChunkProgressBar settings respectively.
* To indicate that a task is still in progress, set the [`value`]({% slug api_progressbars_chunkprogressbarprops %}#toc-value) property to `null`.

{% meta height:220 %}
{% embed_file chunkprogressbar/value_ranges/func/app.tsx preview %}
{% embed_file chunkprogressbar/value_ranges/func/main.tsx  %}
{% endmeta %}


## Suggested Links

* [API Reference of the ChunkProgressBar]({% slug api_progressbars_chunkprogressbar %})
