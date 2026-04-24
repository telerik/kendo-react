---
title: DropDownList with Recent Selections Memory
description: Learn how to implement a DropDownList that remembers recent selections and displays them at the top of the options list for better user experience.
type: how-to
page_title: DropDownList with Recent Selections Memory - KendoReact DropDowns
slug: dropdownlist-recent-selections-memory
tags: dropdownlist, kendoreact, recent-selections, memory, local-storage, custom-hooks, grouping
ticketid:
res_type: kb
category: knowledge-base
components: ["dropdownlist"]
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
			<td>Progress® KendoReact DropDownList</td>
		</tr>
	</tbody>
</table>

## Description

How can I implement a DropDownList that remembers the user's recent selections and displays them at the top of the options list for quick access using modern React patterns?

This knowledge base article also answers the following questions:

-   How to store recent selections in localStorage for persistence?
-   How to use React custom hooks for reusable selection logic?
-   How to group DropDownList items by recent usage?
-   How to implement a clean recent selections feature without complex custom rendering?

## Solution

To implement recent selections memory using modern React patterns:

1. Create a custom hook (`useRecentSelections`) for reusable recent selections logic
2. Use localStorage to persist recent selections across sessions with utility functions
3. Leverage the DropDownList's built-in `groupField` property to separate recent items
4. Combine recent selections with all options in a clean data structure
5. Limit the number of recent items to maintain good UX

The implementation uses:

-   **Custom Hook Pattern**: Encapsulates all recent selections logic
-   **Built-in Grouping**: Uses DropDownList's `groupField` instead of custom rendering

Here is a complete implementation:

{% meta height:400 %}
{% embed_file dropdowns/dropdownlist-recent-selections-memory/app.tsx preview %}
{% embed_file dropdowns/dropdownlist-recent-selections-memory/main.tsx %}
{% embed_file dropdowns/dropdownlist-recent-selections-memory/recentSelectionsService.ts %}
{% endmeta %}

## See Also

-   [KendoReact DropDownList Overview](slug:overview_dropdownlist)
-   [DropDownList Data Binding](slug:binding_dropdownlist)
-   [DropDownList Grouping](slug:grouping_dropdownlist)
-   [React Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
-   [LocalStorage API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
