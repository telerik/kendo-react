---
title: Disabling Specific Options in KendoReact RadioGroup
description: Learn how to disable specific options in KendoReact RadioGroup by setting the "disabled" property for individual items in the data array.
type: how-to
page_title: How to Disable Individual Items in KendoReact RadioGroup
meta_title: How to Disable Individual Items in KendoReact RadioGroup
slug: radiogroup-disable-specific-options
tags: kendoreact, radiogroup, disabled, radiobuttonprops, react
res_type: kb
ticketid: 1698894
components: ["radiogroup"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>12.0.2</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact RadioGroup</td>
	    </tr>
    </tbody>
</table>

## Description

I want to disable specific options, not all, in the [KendoReact RadioGroup](slug:overview_radiogroup). The default documentation discusses disabling the entire RadioGroup, but it does not cover how to disable individual items.

This knowledge base article also answers the following questions:

-   How do I make certain items in a RadioGroup non-selectable?
-   Is it possible to disable specific radio options in KendoReact?
-   How can I programmatically disable radio buttons in KendoReact RadioGroup?

## Solution

To disable specific options in the KendoReact RadioGroup, define the `data` array passed to the RadioGroup component. Each item in the `data` array is an object of type [RadioButtonProps](slug:api_inputs_radiobuttonprops). Set the `disabled` property to `true` for the items that need to be disabled.

{% meta height:180 %}
{% embed_file inputs/radiogroup-disable-specific-options/app.tsx preview %}
{% embed_file inputs/radiogroup-disable-specific-options/main.tsx %}
{% endmeta %}

### Key Points:

1. The `data` property of the RadioGroup accepts an array of items.
2. Each item can include the `disabled` property to disable specific options.

## See Also

-   [KendoReact RadioGroup Overview](slug:overview_radiogroup)
-   [RadioGroup Props](slug:api_inputs_radiogroupprops)
-   [RadioButton Props](slug:api_inputs_radiobuttonprops)
