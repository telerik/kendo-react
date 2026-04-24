---
title: Centering KendoReact Dialog Within Parent Component
description: Learn how to constrain and center a KendoReact Dialog within a parent component instead of the entire page.
type: how-to
page_title: How to Center KendoReact Dialog Inside Parent Element - KendoReact Dialog
slug: dialog-center-in-parent-component
tags: dialog, appendto, position, customization, parent, container
ticketid: 1708667
res_type: kb
category: knowledge-base
components: ['dialog']
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>13.3.0</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>Progress® KendoReact Dialog</td>
		</tr>
	</tbody>
</table>

## Description

I want to constrain and center the KendoReact Dialog within its parent component rather than centering it on the entire page. By default, the Dialog uses `position: fixed` CSS, causing it to be centered relative to the viewport. I need the Dialog to appear near the area where it was triggered for better user experience.

This knowledge base article also answers the following questions:

-   How can I position a KendoReact Dialog relative to its parent container?
-   How do I use the appendTo property of the KendoReact Dialog?
-   How can I make a KendoReact Dialog appear near the trigger event?

## Solution

To center the KendoReact Dialog inside a parent component, follow these steps:

1. Set the `appendTo` property to `null` to render the Dialog within its parent container instead of the document body.
2. Override the Dialog's `style` property to adjust its position using `position: absolute`.
3. Ensure the parent container has `position: relative` set.

<demo metaUrl="knowledge-base/dialogs/center-in-parent/" height="420"></demo>

### Key Details

-   **appendTo={null}**: This renders the Dialog within its parent container instead of appending it to the document body.
-   **position: absolute**: This positions the Dialog relative to its nearest positioned ancestor (the parent container with `position: relative`).
-   **transform: translate(-50%, -50%)**: Combined with `top: 50%` and `left: 50%`, this contains the overlay within the parent.

## See Also

-   [KendoReact Dialog Overview](slug:overview_dialog)
-   [Dialog appendTo Property](slug:api_dialogs_dialogprops#appendto)
