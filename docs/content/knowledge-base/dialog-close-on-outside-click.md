---
title: Closing the KendoReact Dialog When Clicking Outside
description: Learn how to close the KendoReact Dialog when clicking outside of it by attaching a click handler to the overlay element.
type: how-to
page_title: How to Close KendoReact Dialog on Outside Click - KendoReact Dialog
slug: dialog-close-on-outside-click
tags: dialog, close, outside-click, overlay, toggle, dismiss
ticketid: 1676083
res_type: kb
category: knowledge-base
components: ['dialog']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>14.2.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Dialog</td>
		</tr>
	</tbody>
</table>

## Description

I want to close the KendoReact Dialog when the user clicks anywhere outside of it. By default, the Dialog only closes when the built-in close button or an explicit action button is pressed.

This knowledge base article also answers the following questions:

-   How to close the KendoReact Dialog on overlay click?
-   How can I implement outside-click handling for the KendoReact Dialog?
-   How to toggle KendoReact Dialog visibility when clicking the backdrop?

## Solution

When the Dialog is visible it renders a `.k-overlay` element that covers the rest of the page. Use a `React.useEffect` to attach a `click` listener to that overlay whenever the Dialog opens, and clean it up when the Dialog closes or unmounts.

<demo metaUrl="knowledge-base/dialogs/close-on-outside-click/" height="300"></demo>

### Key Details

-   **`.k-overlay`**: The semi-transparent backdrop element rendered by the Dialog behind the modal window.
-   **`useEffect` with `visible` dependency**: Attaches the listener only while the Dialog is open and removes it automatically on close or unmount, preventing memory leaks.
-   **`setVisible(false)` inside the handler**: Using the state setter directly avoids stale-closure issues that can occur when referencing a toggle function defined outside the effect.

## See Also

-   [KendoReact Dialog Overview](slug:overview_dialog)
-   [Dialog onClose Property](slug:api_dialogs_dialogprops#onclose)
-   [Centering KendoReact Dialog Within a Parent Component](slug:dialog-center-in-parent-component)
