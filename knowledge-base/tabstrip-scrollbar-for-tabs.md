---
title: Introducing scrollbar for the TabStrip and the Tabs
description: An example on how to show scrollbar for the Tabs in the TabStrip or the TabStrip itself
type: how-to
page_title: Adding Scrollbar To The Tabs And The TabStrip - KendoReact TabStrip
slug: tabstrip-scrollbar-for-tabs
tags: tabstrip, layout, kendoreact, scrollbar
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>5.14.1</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact</td>
		</tr>
	</tbody>
</table>

## Description
I want to show scrollbar for the Tabs in the TabStrip. I also have a TabStrip for which I need a scrollbar for the entire content and the tabs.

## Solution
Set className to the TabStrip and apply custom styles for changing the overflow of the rendered elements in the TabStrip.

Following is an example with two TabStrips. The first one introduces scrollbar for the tabs and the content and the second one is with scrollbar only for the tabs.

{% meta id height:760 %}
{% embed_file layout/tabstrip-scrollbar-for-tabs/main.jsx %}
{% embed_file layout/tabstrip-scrollbar-for-tabs/styles.css %}
{% endmeta %}
