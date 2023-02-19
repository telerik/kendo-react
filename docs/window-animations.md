---
title: Animate the Window
description: An example on how to Animate the KendoReact Window.
type: how-to
page_title: Animate the Window - KendoReact TreeView
slug: animate-window
tags: window, kendoreact, animation
ticketid: 1408162
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>


## Description

How can I add animation to the KendoReact Window?

## Solution

The Window can be animated with CSS.

```jsx-no-run
	.k-window {
		transform: translateY(100%);
		opacity: 0;
		transition-property: transform, opacity;
		transition-duration: .5s;
		transition-function: ease-in-out;
	}

	.k-window.shown {
		transform: translateY(0);
		opacity: 1;
	}
```

A runnable example is available [here.](https://stackblitz.com/edit/kendo-react-widnow-animation?file=app/main.jsx)
