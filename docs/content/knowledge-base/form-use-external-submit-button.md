---
title: Use Submit Button Outside of the Form
description: Learn how to create and use a Submit button outside of the Form component. You can also place the button in a dialog or window.
type: how-to
page_title: How to Add a Submit Button Outside the Form - KendoReact Form
slug: use-submit-button-outside-the-form
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
	    	<td>10.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact Form</td>
	    </tr>
    </tbody>
</table>

## Description

I want to customize the position of the Submit button and place it outside of the Form. How can I use a Submit button outside of the Form component?

This knowledge base article also answers the following questions:

* How can I show the Submit button in a Dialog?
* How can I show the Submit button in a Window?
* How can I submit a form from a button that's not part of the Form?
* How can I move the submit form functionality outside of the Form?
* How can I use an external Submit button?

## Solution

To handle the form submission outside of the Form component:
1. Set the `ref` of the Form component.
2. Use the `formRef.current.onSubmit()` event inside the `onClick` event handler of the button.

This is an example showcasing how to use an external submit Form button:

{% meta height:340 %}
{% embed_file form/submit-btn/basic/app.tsx preview %}
{% embed_file form/submit-btn/basic/main.tsx %}
{% endmeta %}


This is an example showcasing how to use an external submit Form button inside a Dialog or Window component:

{% meta height:400 %}
{% embed_file form/submit-btn/inside-dialog/app.tsx preview %}
{% embed_file form/submit-btn/inside-dialog/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact Form Documentation](https://www.telerik.com/kendo-react-ui/components/form/)
-   [API Reference of the Form](https://www.telerik.com/kendo-react-ui/components/form/api/formprops/)
-   [KendoReact Button Documentation](https://www.telerik.com/kendo-react-ui/components/buttons/)
-   [API Reference of the Button](https://www.telerik.com/kendo-react-ui/components/buttons/api/buttonprops/)
