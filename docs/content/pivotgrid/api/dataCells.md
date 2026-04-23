---
title: dataCells
description: "Learn how to build custom functionality when working with the React PivotGrid by Kendo UI with the help of the dataCells."
api_reference: true
type: inner_api
slug: api_pivotgrid_datacells
---

# dataCells
Generates suitable data for Charting visualization.




#### Parameters
##### rows?
<code>


[Tuple]({% slug api_pivotgrid_tuple %})[]


</code>
The PivotGrid's rows prop.

##### columns?
<code>


[Tuple]({% slug api_pivotgrid_tuple %})[]


</code>
The PivotGrid's columns prop.

##### data?
<code>


[PivotDataItem]({% slug api_pivotgrid_pivotdataitem %})[]


</code>
The PivotGrid's data prop.

#### Returns
<code>


{ cells: [PivotDataItem]({% slug api_pivotgrid_pivotdataitem %})[]; row: string[]; }[]


</code>
 - Suitable data for Charting visualization.
