---
title: processListBoxData
description: "Learn how to build custom functionality when working with the React ListBox by Kendo UI with the help of the processListBoxData."
api_reference: true
type: inner_api
slug: api_listbox_processlistboxdata
---

# processListBoxData
Processes the data collections based on the clicked ListBoxToolbar tool.




#### Parameters
##### listBoxOneData
<code>


any[]


</code>
The first data collection.

##### listBoxTwoData
<code>


any[]


</code>
The second data collection. Pass an empty array if there is only one ListBox.

##### toolName
<code>


string


</code>
The tool that was clicked.

##### selectedField
<code>


string


</code>
The field that contains the selected information in the data object.

#### Returns
<code>


{ listBoxOneData: any[]; listBoxTwoData: any[]; }


</code>
 - The object that contains the new data collections.
