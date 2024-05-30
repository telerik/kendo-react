---
title: Open KendoReact ComboBox popup initially on load
description: An example on how to manually open the popup of the ComboBox on load
type: how-to
page_title: Opening the popup after the initialization of the component - KendoReact ComboBox
slug: combobox-open-popup-initially
tags: combobox, popup, open
ticketid: 
res_type: kb
category: knowledge-base
---

## Environment
<table>
    <tbody>
	    <tr> 
	    	<td>Product Version</td>
	    	<td>5.13.1</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description
I want the popup of the ComboBox to open when the component is initialized 


## Solution
For manually opening the popup of the ComboBox after the initialization we can use its "ref" within React.useEffect and use "toggleBtnClick" to simulate a click and trigger the opening.

Here is an example demonstrating this approach:

{% meta id height:480 %}
{% embed_file dropdowns/combobox-open-popup-initially/app.jsx preview %}
{% embed_file dropdowns/combobox-open-popup-initially/main.jsx %}
{% endmeta %}
