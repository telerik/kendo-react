---
title: handleAIResponse
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the handleAIResponse."
api_reference: true
type: inner_api
slug: api_grid_handleairesponse
---

# handleAIResponse
Processes an AI response and returns the updated grid state.
This is a pure function that takes the current state and AI response,
and returns a new state object with all the changes applied.




```tsx
const App = () => {
  const [gridState, setGridState] = useState<GridAIState>({
    sort: [],
    filter: undefined,
    group: [],
    columnsState: initialColumns,
    skip: 0,
    take: 20
  });
  const gridRef = useRef<GridHandle>(null);

  const handleAIRequest = async (prompt: string) => {
    const response = await axios.post('/api/ai/grid', { prompt, columns: gridState.columnsState });
    const result = handleAIResponse(response, gridState, gridRef.current);

    // Update state with AI changes
    setGridState(result.state);

    // Handle PDF export if requested
    if (result.shouldExportPdf && gridRef.current) {
      gridRef.current.exportAsPdf();
    }

    // Show messages to user
    console.log(result.messages);
  };

  return (
    <Grid
      ref={gridRef}
      data={data}
      {...gridState}
      onSortChange={(e) => setGridState(prev => ({ ...prev, sort: e.sort }))}
      onFilterChange={(e) => setGridState(prev => ({ ...prev, filter: e.filter }))}
      onGroupChange={(e) => setGridState(prev => ({ ...prev, group: e.group }))}
      onColumnsStateChange={(e) => setGridState(prev => ({ ...prev, columnsState: e.columnsState }))}
      onPageChange={(e) => setGridState(prev => ({ ...prev, skip: e.page.skip, take: e.page.take }))}
    />
  );
};
```


#### Parameters
##### response
<code>


AxiosResponse&lt;any&gt;


</code>
The axios response from the AI service containing commands

##### currentState
<code>


[GridAIState]({% slug api_grid_gridaistate %})


</code>
The current grid state

##### gridRef
<code>


"null" | Pick&lt;[GridHandle]({% slug api_grid_gridhandle %})&gt;


</code>
Reference to grid methods (getTotal, getLeafDataItems, exportAsPdf)

#### Returns
<code>


[GridAIResponseResult]({% slug api_grid_gridairesponseresult %})


</code>
 Object containing the new state, messages, and export flag
