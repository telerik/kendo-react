---
title: Open KendoReact ComboBox popup on click or tab
description: An example on how to open the popup of the ComboBox on click and tab
type: how-to
page_title: Open The Popup On Click Or Tab - KendoReact ComboBox
slug: combobox-open-on-focus-and-tab
tags: combobox, popup, open, focus, tab
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
I want the popup of the ComboBox to open on click or when tabbing to it.


## Solution
Handle the onFocus event of the ComboBox and within a setTimeout function check the opened state and if the popup is not opened, call the "toggleBtnClick" method.

Here is an example demonstrating this approach:

{% meta id height:560 %}
{% embed_file dropdowns/combobox-open-on-focus-and-tab/main.jsx preview %}
{% endmeta %}
