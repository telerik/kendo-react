---
title: Lazy load the items of the KendoReact MultiSelectTree component.
description: An example on how to lazy load the items in the KendoReact MultiSelectTree component.
type: how-to
page_title: Lazy load the items of the MultiSelectTree component - KendoReact MultiSelectTree
slug: multiselecttree-lazy-loading
tags: multiselecttree, lazy loading, lazy
ticketid: 1627782
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>6.0.3</td>
	    </tr> 
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

How can I lazy load the items of the KendoReact MultiSelect component?

## Solution

The below example simulates an API call for the MultiSelectTree component by loading a `loadingPanel` component to the MultiSelectTree element when an item is expanded.
In addition, the loadingPanel is added to the MultiSelectTree element using ReactDOM.createPortal in the LoadingPanel component. Also, the `loading` state variable is set to true in the `onExpandChange` event handler and in that case the panel will appear since it is rendered conditionally with the `loading` variable.
Moreover, in the `onExpandChange` method, set a 1000ms timeout in order to simulate an API call. Inside the `setTimeout` method, set the new expanded state and `loading` variable to false:

{% meta id height:580 %}
{% embed_file multiselecttree/multiselecttree-lazy-loading/main.jsx preview %}
{% embed_file multiselecttree/multiselecttree-lazy-loading/multiselecttree-data-operations.jsx %}
{% embed_file multiselecttree/multiselecttree-lazy-loading/style.css %}
{% embed_file multiselecttree/multiselecttree-lazy-loading/tree-data.js %}
{% endmeta %}
