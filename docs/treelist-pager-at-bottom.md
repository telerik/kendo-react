---
title: Make the Pager Stick to the Bottom of the TreeList
description: An example on how to make the pager always visible and appear at the bottom of the KendoReact TreeList.
type: how-to
page_title: Make the Pager Stick to the Bottom of the TreeList  - KendoReact TreeList
slug: treelist-pager-at-bottom
tags: treelist, kendoreact, pager, bottom, stick
ticketid: 1510981
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>4.5.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I make the pager stick to the bottom of the TreeList, even if the page size is smaller?

## Solution

A custom [`Pager`]({% slug pi_datatools_pagerprops %}) should be rendered below the TreeList component and the [`onPageChange`]({% slug api_datatools_pagerprops %}#toc-onpagechange) event should be handled to update accordingly the data visible on the current page.


{% meta id height:760 %}
{% embed_file treelist/pager-at-bottom/main.jsx preview %}
{% embed_file treelist/pager-at-bottom/pager.jsx %}
{% embed_file shared/treelist-data.js %}
{% endmeta %}
