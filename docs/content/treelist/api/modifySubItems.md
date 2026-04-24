---
title: modifySubItems
description: "Learn how to build custom functionality when working with the React TreeList by Kendo UI with the help of the modifySubItems."
api_reference: true
type: inner_api
slug: api_treelist_modifysubitems
---

# modifySubItems
Changes the `subItems` collection of each data item which matches the passed `condition`.




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
A function that will be executed for each data item and
will return `true` for items that have to change the subitems collection.

##### change
<code>


(subItems: any[]) => any[]


</code>
A function which
has as a parameter the subitems collection of the matched items and which will return the new subitems collection.

#### Returns
<code>


any[]


</code>
 - The new data tree.
