---
title: OrgChartProps
description: "Learn how to build custom functionality when working with the React OrgChart by Kendo UI with the help of the OrgChartProps."
api_reference: true
type: inner_api
slug: api_orgchart_orgchartprops
---

# OrgChartProps
Represents the props of the [KendoReact OrgChart component](https://www.telerik.com/kendo-react-ui/components/orgchart).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom aria-label to the OrgChart. The default value is "Org Chart"





</td>
</tr>
<tr>
<td class="table-cell-name">


#### avatarField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"avatar"


</code>


</td>
<td class="table-cell-comment">


Sets the field which provides an avatar representation for the item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### avatarType?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"image"


</code>


</td>
<td class="table-cell-comment">


Sets the type of the Avatar that renders for the OrgChart item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### cardHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the card of the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cardsColors?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets a string array with the colors for the items. By default the colors come from the current Kendo Theme.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cardWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the width of the card of the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### childrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the name of the field which provides an array representation of the item children.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional classes to the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### expandField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"expanded"


</code>


</td>
<td class="table-cell-comment">


Sets the name of the field which provides a Boolean representation for the expanded state of the item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the field by which the OrgChart data is grouped.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupSubtitleHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the subtitle of the grouped OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupSubtitleRender?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;OrgChartGroupSubtitleProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component that renders each of the grouped OrgChart subtitle.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupTitleHeight?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the title of the grouped OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### groupTitleRender?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;OrgChartGroupTitleProps&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component that renders each of the grouped OrgChart title.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### hasChildrenField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


undefined


</code>


</td>
<td class="table-cell-comment">


Sets the name of the field which indicates to the OrgChart that an item has
children even if the children are not initially passed. Used for implementing the load-on-demand feature.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets custom id to the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### idField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"id"


</code>


</td>
<td class="table-cell-comment">


Sets the name of the field which provides an id for the item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### itemRender?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[OrgChartItemRenderProps]({% slug api_orgchart_orgchartitemrenderprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the component that renders each of the OrgChart items.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### navigatable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Sets if the OrgChart can be navigated with the keyboard.




```jsx
<OrgChart navigatable={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onExpandChange?


</td>
<td type class="table-cell-type">


<code>


(ev: [OrgChartExpandChangeEvent]({% slug api_orgchart_orgchartexpandchangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a node or group is expanded.

```jsx
<OrgChart onExpandChange={(ev) => console.log('Expanded:', ev)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onGroupAction?


</td>
<td type class="table-cell-type">


<code>


(ev: [OrgChartActionEvent]({% slug api_orgchart_orgchartactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers the group action event.

```jsx
<OrgChart onGroupAction={(ev) => console.log('Group action:', ev)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemAction?


</td>
<td type class="table-cell-type">


<code>


(ev: [OrgChartActionEvent]({% slug api_orgchart_orgchartactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers the item action event.

```jsx
<OrgChart onItemAction={(ev) => console.log('Item action:', ev)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemContextMenu?


</td>
<td type class="table-cell-type">


<code>


(ev: [OrgChartActionEvent]({% slug api_orgchart_orgchartactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers the item context menu action event.

```jsx
<OrgChart onItemContextMenu={(ev) => console.log('Context menu:', ev)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onItemDoubleClick?


</td>
<td type class="table-cell-type">


<code>


(ev: [OrgChartActionEvent]({% slug api_orgchart_orgchartactionevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggers the item double-click action event.

```jsx
<OrgChart onItemDoubleClick={(ev) => console.log('Item double-clicked:', ev)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showAvatar?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Sets if the Avatar inside the OrgChart's cards is displayed.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets additional CSS styles to the OrgChart.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### subtitleField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"subtitle"


</code>


</td>
<td class="table-cell-comment">


Sets the name of the field which provides a subtitle representation for the item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### titleField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">


<code>


"text"


</code>


</td>
<td class="table-cell-comment">


Sets the name of the field which provides a title representation for the item.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### verticalLine?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the height of the vertical line of the OrgChart.


</td>
</tr>
</tbody>
</table>



