---
title: moveTreeItem
description: "Learn how to build custom functionality when working with the React Data Tools by Kendo UI with the help of the moveTreeItem."
api_reference: true
type: inner_api
slug: api_data-tools_movetreeitem
---

# moveTreeItem
Moves the targeted item in the tree to another position.




#### Parameters
##### data
<code>


any[]


</code>
The data tree.

##### target
<code>


number[]


</code>
The level of the target tree item which will be moved.

##### destination
<code>


"null" | number[]


</code>
The level of the destination tree item where the target item will be moved in.
If it is null, the target item will be added at the root level.

##### subItemsField
<code>


string


</code>
The field which points to the subitems collection of each data item.

#### Returns
<code>


any[]


</code>
 - The new data tree.
