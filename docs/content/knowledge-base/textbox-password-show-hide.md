---
title: Implementing a Password Input with Show/Hide Icon Button in KendoReact
description: Learn how to add a toggle button to show or hide the password in a KendoReact TextBox.
type: how-to
page_title: How to Create a Toggle Password Visibility Button in KendoReact
slug: textbox-password-show-hide
tags: kendo-react-ui, input, password, show-hide, toggle, textbox
res_type: kb
ticketid: 1662713
components: ["textbox"]
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>9.0.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact TextBox</td>
	    </tr>
    </tbody>
</table>

## Description

I want to create a login form using KendoReact. For the password input, I need to include a button to toggle the visibility of the password, using an eye icon. This KB article also answers the following questions:

-   How can I add a show/hide button to a password field in KendoReact?
-   Is it possible to toggle password visibility in a KendoReact TextBox?
-   How to use adornments in a KendoReact TextBox for password visibility?

## Solution

To implement a password input with a toggle button for showing or hiding the password in KendoReact, follow these steps:

1. Add a [KendoReact TextBox](https://www.telerik.com/kendo-react-ui/components/inputs/textbox/overview/) component to your application.
2. Manage the `type` property of the TextBox as a state variable (`'password'` or `'text'`).
3. Utilize the `suffix` adornment feature to include a toggle button within the TextBox. Refer to the official [adornments documentation](https://www.telerik.com/kendo-react-ui/components/inputs/textbox/adornments/) for more details.
4. Implement an `onClick` handler for the toggle button that switches the `type` state between `'password'` and `'text'`, effectively showing or hiding the password.

Here's an example code snippet demonstrating the solution:

{% meta height:500 %}
{% embed_file inputs/textbox-show-hide-password/app.tsx preview %}
{% embed_file inputs/textbox-show-hide-password/main.tsx %}
{% endmeta %}

## See Also

-   [KendoReact TextBox Overview](https://www.telerik.com/kendo-react-ui/components/inputs/textbox/overview/)
-   [TextBox Adornments in KendoReact](https://www.telerik.com/kendo-react-ui/components/inputs/textbox/adornments/)
