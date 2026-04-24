---
title: PagerProps
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the PagerProps."
api_reference: true
type: inner_api
slug: api_data-tools_pagerprops
---

# PagerProps



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


#### adaptive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Providing different rendering of the page sizes select element based on the screen dimensions.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### adaptiveTitle?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the text that is rendered as title in the adaptive page sizes select element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### buttonCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the maximum numeric buttons count before the buttons are collapsed.


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


Sets additional classes to the Pager.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the direction of the component.


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


Controls the disabled state of the Pager. Defaults to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### info?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the information about the current page and the total number of records.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### messagesMap?


</td>
<td type class="table-cell-type">


<code>


(messageKey: string) => { defaultMessage: string; messageKey: string; }


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Useful for modifying the Pager messages.


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




</td>
<td class="table-cell-comment">


If set to `true`, the user can use dedicated shortcuts to interact with the Pager.
By default, navigation is disabled and the Pager content is accessible in the normal tab sequence.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PageChangeEvent]({% slug api_data-tools_pagechangeevent %})) => void | (event: [BasePageChangeEvent]({% slug api_data-tools_basepagechangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the page of the Pager is changed. You have to handle the event yourself and page the data.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizes?


</td>
<td type class="table-cell-type">


<code>


number[] | string | number[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Displays a menu for selecting the page size.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### pageSizeValue?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the selected value of the page size Dropdownlist.
It is useful when the selected value could also be a string not only a number.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### previousNext?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Toggles the **Previous** and **Next** buttons.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responsive?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


`true`


</code>


</td>
<td class="table-cell-comment">


Defines if the pager will be responsive.
If true, hides the tools that do not fit to the available space.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


`medium`


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Pager.

The available options are:
- small
- medium
- large
- null&mdash;Does not set a size `className`.





</td>
</tr>
<tr>
<td class="table-cell-name">


#### skip


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be skipped.


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


The styles that are applied to the Pager.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### take


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The number of records that will be taken.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### total


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The total number of records.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### type?


</td>
<td type class="table-cell-type">


<code>


"input" | "numeric"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the type of the pager.
* (Default) `numeric` — Renders buttons with numbers.
* `input` — Renders an input field for typing the page number.


</td>
</tr>
</tbody>
</table>



