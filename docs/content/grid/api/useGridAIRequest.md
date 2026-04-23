---
title: useGridAIRequest
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the useGridAIRequest."
api_reference: true
type: inner_api
slug: api_grid_usegridairequest
---

# useGridAIRequest
A custom hook that encapsulates the AI request logic for the Grid.
This hook can be used by both GridToolbarAIAssistant and SmartBox components.




```tsx
const { loading, streaming, sendRequest, cancelRequest } = useGridAIRequest({
  requestUrl: '/api/ai/grid',
  columns: gridColumns,
  gridState: currentState,
  gridRef: gridRef.current,
  onStateChange: (newState) => setGridState(newState),
  onMessages: (messages) => console.log(messages)
});

// Send a request
sendRequest('Sort by price descending');

// Cancel if needed
cancelRequest();
```


#### Parameters
##### options
<code>


[UseGridAIRequestOptions]({% slug api_grid_usegridairequestoptions %})


</code>
Configuration options for the hook

#### Returns
<code>


[UseGridAIRequestReturn]({% slug api_grid_usegridairequestreturn %})


</code>
 Object containing loading state and request methods
