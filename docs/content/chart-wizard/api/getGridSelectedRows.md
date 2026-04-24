---
title: getGridSelectedRows
description: "Learn how to build custom functionality when working with the React Chart Wizard by Kendo UI with the help of the getGridSelectedRows."
api_reference: true
type: inner_api
slug: api_chart-wizard_getgridselectedrows
---

# getGridSelectedRows
Maps the Grid selectedState to a more general DataRows type you can display in the Chart Wizard.

The selectedKeys can be either row keys or cell keys.




#### Parameters
##### args
<code>


{ data: any[]; dataItemKey: string; grid: "null" | GridHandle; selectedState: {[id: string]: boolean | number[]}; }


</code>


#### Returns
<code>


[DataRow]({% slug api_chart-wizard_datarow %})[]


</code>
 DataRow array that you can pass to `getWizardDataFromDataRows` to bind the Chart Wizard.
