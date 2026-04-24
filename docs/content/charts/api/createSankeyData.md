---
title: createSankeyData
description: "Learn how to build custom functionality when working with the React Charts by Kendo UI with the help of the createSankeyData."
api_reference: true
type: inner_api
slug: api_charts_createsankeydata
---

# createSankeyData
Converts data objects to Sankey data.

#### Parameters
##### data
<code>


object[]


</code>


##### dimensions
<code>


{ value: (item: object) => string; }[]


</code>


##### measure
<code>


{ value: (item: object) => number; }


</code>


#### Returns
<code>


{ links: [SankeyLink]({% slug api_charts_sankeylink %})[]; nodes: [SankeyNode]({% slug api_charts_sankeynode %})[]; }


</code>

