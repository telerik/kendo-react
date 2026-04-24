---
title: BaseMenuItem
description: "Learn how to build custom functionality when working with the React Layout by Kendo UI with the help of the BaseMenuItem."
api_reference: true
type: inner_api
slug: api_layout_basemenuitem
---

# BaseMenuItem
An interface which holds the shared properties of the MenuItemModel and the MenuItem components.


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


#### contentRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering content instead of the item children ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/rendering#toc-content)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cssClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The additional CSS classes that will be rendered on the item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-styles-and-classes)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### cssStyle?


</td>
<td type class="table-cell-type">


<code>


CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The CSS styles that will be rendered on the item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-styles-and-classes)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Represents any additional data that is associated with the Menu item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the item is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-disabled-items)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the name of the [font icon](https://www.telerik.com/kendo-react-ui/components/styling/icons#toc-list-of-font-icons) that will be rendered for the item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-icon)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### linkRender?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering the link of the item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/rendering#toc-links)). The item link is a part of the visual representation of the item which, by default, includes an arrow, icon, and text.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### render?


</td>
<td type class="table-cell-type">


<code>


any


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


A React functional or class component which is used for rendering the innermost part of the Menu item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/rendering#toc-items)). By default, the innermost item part includes only the text for the item.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### separator?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if this is a separator item. If set to true only the `cssClass` and `cssStyle` props should be rendered along.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the SVG icon that will be rendered for the item ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-icon)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### text?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the item text ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-text)).


</td>
</tr>
<tr>
<td class="table-cell-name">


#### url?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies a URL which is rendered as a `href` attribute on the item link ([see example](https://www.telerik.com/kendo-react-ui/components/layout/menu/items/properties#toc-url)).


</td>
</tr>
</tbody>
</table>



