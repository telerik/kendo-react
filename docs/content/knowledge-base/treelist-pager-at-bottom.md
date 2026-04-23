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
components: ["treelist"]
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
	    	<td>Progress® KendoReact TreeList</td>
	    </tr>
    </tbody>
</table>

## Description

How can I make the pager stick to the bottom of the TreeList, even if the page size is smaller?

## Solution

A custom [`Pager`]({% slug api_data-tools_pagerprops %}) should be rendered below the TreeList component and the [`onPageChange`]({% slug api_data-tools_pagerprops %}#toc-onpagechange) event should be handled to update accordingly the data visible on the current page.

{% meta height:650 %}
{% embed_file treelist/pager-at-bottom/app.tsx preview %}
{% embed_file treelist/pager-at-bottom/main.tsx %}
{% embed_file treelist/pager-at-bottom/pager.tsx %}
{% endmeta %}
