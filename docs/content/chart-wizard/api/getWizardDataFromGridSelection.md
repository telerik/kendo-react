---
title: getWizardDataFromGridSelection
description: "Learn how to build custom functionality when working with the React Chart Wizard by Kendo UI with the help of the getWizardDataFromGridSelection."
api_reference: true
type: inner_api
slug: api_chart-wizard_getwizarddatafromgridselection
---

# getWizardDataFromGridSelection
Maps the Grid selectedState to data you can display in the Chart Wizard.

Supports both row and cell selection.




#### Parameters
##### args
<code>


{ data: any[]; dataItemKey: string; grid: "null" | GridHandle; selectedState: {[id: string]: boolean | number[]}; }


</code>


#### Returns
<code>


[ChartWizardDataRow]({% slug api_chart-wizard_chartwizarddatarow %})[]


</code>
 A collection that you can use as Chart Wizard data.
