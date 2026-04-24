---
title: DiagramConnectionTooltipProps
description: "Learn how to build custom functionality when working with the React Diagram by Kendo UI with the help of the DiagramConnectionTooltipProps."
api_reference: true
type: inner_api
slug: api_diagram_diagramconnectiontooltipprops
---

# DiagramConnectionTooltipProps
Defines a custom template for connection tooltips within the `Diagram` component.
Use this to customize how tooltips appear when hovering over connections.

```tsx
import { Diagram, DiagramConnectionTooltip } from '@progress/kendo-react-diagram';

const App = () => (
  <Diagram>
    <DiagramConnectionTooltip>
      {(dataItem) => <span>{dataItem.tooltipText}</span>}
    </DiagramConnectionTooltip>
  </Diagram>
);
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### children


</td>
<td type class="table-cell-type">


<code>


(dataItem: TDataItem) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A render function that receives the hovered connection data item and returns the tooltip content.


</td>
</tr>
</tbody>
</table>



