---
title: removeItems
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the removeItems."
api_reference: true
type: inner_api
slug: api_treelist_removeitems
---

# removeItems
Removes the items from the passed `data` which match the passed `condition`.




#### Parameters
##### data
<code>


any[]


</code>
The data tree.

##### subItemsField
<code>


string


</code>
The field which points to the subitems collection of each data item.

##### condition
<code>


(item: any) => boolean


</code>
A function that will be executed for each data item
in the tree data and the items for which returns true will be removed.

#### Returns
<code>


any[]


</code>
 - The new data tree.
