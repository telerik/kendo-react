---
title: How to Use Editor within the Form
description: Learn how to use Editor within the Form in the KendoReact form.
type: how-to
page_title: How to use Editor within the Form - KendoReact Form
slug: form-embed-editor
position:
tags: form, editor, buttons, submit, window, dialog
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

I want to use Editor in the Form component.

This knowledge base article also answers the following questions:

-   How can I embed an Editor inside the Form?
-   How can I implement a custom Form field containing an Editor?

## Solution

Create a custom form editor where you can handle the onChange event of the Editor and call the fieldRenderProps.onChange method with the value of the Editor

{% meta height:400 %}
{% embed_file form/embed-editor/app.tsx preview %}
{% embed_file form/embed-editor/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Form Documentation](https://www.telerik.com/kendo-react-ui/components/form/)
-   [API Reference of the Form](https://www.telerik.com/kendo-react-ui/components/form/api/formprops/)
-   [KendoReact Button Documentation](https://www.telerik.com/kendo-react-ui/components/buttons/)
-   [API Reference of the Button](https://www.telerik.com/kendo-react-ui/components/buttons/api/buttonprops/)
