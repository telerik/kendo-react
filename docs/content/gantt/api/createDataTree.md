---
title: createDataTree
description: "Learn how to build custom functionality when working with the React Gantt by Kendo UI with the help of the createDataTree."
api_reference: true
type: inner_api
slug: api_gantt_createdatatree
---

# createDataTree
Creates a tree from the passed dataset.




#### Parameters
##### dataset
<code>


any[]


</code>
The source dataset of data items.

##### getId
<code>


(item: any) => any


</code>
A function which will return the id of the data item.

##### getParentId
<code>


(item: any) => any


</code>
A function which will return the data item id of its parent data item.

##### subItemsField
<code>


string


</code>
The field which points to the subitems collection of each data item.

#### Returns
<code>


any[]


</code>
 - A collection of the generated data items that are structured in a tree.
