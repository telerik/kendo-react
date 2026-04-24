---
title: mapMessageToCustomFormat
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the mapMessageToCustomFormat."
api_reference: true
type: inner_api
slug: api_conversational-ui_mapmessagetocustomformat
---

# mapMessageToCustomFormat
Maps a standard Message object back to custom field format
This is useful when you receive a new message in standard format but need to convert it
to your custom field mapping for data storage or API calls




#### Parameters
##### message
<code>


[Message]({% slug api_conversational-ui_message %})


</code>
Standard Message object

##### fieldMapping
<code>


[FieldMappingConfig]({% slug api_conversational-ui_fieldmappingconfig %})


</code>
Field mapping configuration (optional)

#### Returns
<code>


any


</code>
 Object with custom field names
