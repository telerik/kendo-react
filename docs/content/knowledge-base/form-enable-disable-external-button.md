---
title: How to Disable and Enable External Submit Button
description: Learn how to disable and enable external submit button in the KendoReact form.
type: how-to
page_title: How to disable and enable external submit button - KendoReact Form
slug: form-enable-disable-external-button
position:
tags: form, outside, buttons, submit, window, dialog
ticketid: 1680489
res_type: kb
category: knowledge-base
components: ["form"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>12.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Form</td>
	    </tr>
    </tbody>
</table>

## Description

I have a button outside of the Form component and I want it to behave as a submit button placed within the Form (using the formRenderProps.allowSubmit).

This knowledge base article also answers the following questions:

-   How can I show the Submit button outside the Form?
-   How can I submit a form from a button that's not part of the Form?
-   How can I move the submit form functionality outside of the Form?
-   How can I use an external Submit button?

## Solution

Use the Form ref and add a function within the rendering of the Form that will be called on each change in the state. Within the function you can pass the formRenderProps and update a state variable that can determine the enabled state of the external button.

{% meta height:400 %}
{% embed_file form/disable-ext-btn/app.tsx preview %}
{% embed_file form/disable-ext-btn/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Form Documentation](https://www.telerik.com/kendo-react-ui/components/form/)
-   [API Reference of the Form](https://www.telerik.com/kendo-react-ui/components/form/api/formprops/)
-   [KendoReact Button Documentation](https://www.telerik.com/kendo-react-ui/components/buttons/)
-   [API Reference of the Button](https://www.telerik.com/kendo-react-ui/components/buttons/api/buttonprops/)
