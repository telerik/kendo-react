---
title: GridToolbarAIAssistantProps
description: "Learn how to build custom functionality when working with the React Grid by Kendo UI with the help of the GridToolbarAIAssistantProps."
api_reference: true
type: inner_api
slug: api_grid_gridtoolbaraiassistantprops
---

# GridToolbarAIAssistantProps
Represents the props interface for the GridToolbarAIAssistant component.
This component provides AI-powered functionality for grid operations through natural language prompts.
Users can request sorting, filtering, grouping, and highlighting through conversational input.

```tsx
<Grid data={products}>
  <GridToolbar>
    <GridToolbarAIAssistant
      requestUrl="/api/ai/grid"
      promptPlaceHolder="Ask AI to sort, filter, or group your data"
      suggestionsList={[
        'Sort products by price',
        'Show only electronics',
        'Group by category'
      ]}
      onResponseSuccess={(response) => console.log('AI processed:', response)}
    />
  </GridToolbar>
</Grid>
```



<table class="api-table api-table-properties">
<thead>
<tr>
<th class="th-name">Name</th>
<th class="th-type">Type</th>
<th class="th-default">Default</th>
<th class="th-desc">Description</th>
</tr>
</thead>
<tbody class="api-table-body">
<tr>
<td class="table-cell-name">


#### enableSpeechToText?


</td>
<td type class="table-cell-type">


<code>


boolean | SpeechToTextButtonProps


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Enables the speech-to-text functionality for the input of the GridToolbarAIAssistant.

```jsx
<GridToolbarAIAssistant enableSpeechToText={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### gridAIPrompt?


</td>
<td type class="table-cell-type">


<code>


CustomComponent&lt;[GridAIPromptProps]({% slug api_grid_gridaipromptprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Customizes the AI prompt component.

```jsx
<GridToolbarAIAssistant gridAIPrompt={MyCustomPromptComponent} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### icon?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the icon rendered in the GridToolbarAIAssistant tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/icon)).

```jsx
<GridToolbarAIAssistant icon="home" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### loading?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the AI prompt is in loading mode.

```jsx
<GridToolbarAIAssistant loading={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCloseWindow?


</td>
<td type class="table-cell-type">


<code>


() => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The method that will be called to close the column menu.

```jsx
<GridToolbarAIAssistant onCloseWindow={() => console.log('close menu');} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPromptRequest?


</td>
<td type class="table-cell-type">


<code>


(request: [GridAIRequestData]({% slug api_grid_gridairequestdata %}), isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called before the request is sent.

```jsx
<GridToolbarAIAssistant onPromptRequest={(request) => console.log(request)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResponseError?


</td>
<td type class="table-cell-type">


<code>


(error: any) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the response returns an error.

```jsx
<GridToolbarAIAssistant onResponseError={(error) => console.error(error)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResponseSuccess?


</td>
<td type class="table-cell-type">


<code>


(response: AxiosResponse&lt;any&gt;, promptMessage?: string, isRetry?: boolean) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Called when the response is received.

```jsx
<GridToolbarAIAssistant onResponseSuccess={(response) => console.log(response)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### outputs?


</td>
<td type class="table-cell-type">


<code>


AIPromptOutputInterface[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the outputs of the AI prompt.

```jsx
<GridToolbarAIAssistant outputs={[{ id: 1, title: 'Output 1', responseContent: '...' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### promptPlaceHolder?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the placeholder text for the AI prompt input.

```jsx
<GridToolbarAIAssistant promptPlaceHolder="Ask AI to filter, sort or group" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestOptions?


</td>
<td type class="table-cell-type">


<code>


AxiosRequestConfig&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the options for the axios request.

```jsx
<GridToolbarAIAssistant requestOptions={{ timeout: 5000 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### requestUrl?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the URL to which the request will be sent.

```jsx
<GridToolbarAIAssistant requestUrl="https://example.com/api/ai" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### role?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the user role for the request. Defaults to 'user'.

```jsx
<GridToolbarAIAssistant role="admin" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### show?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the popup will be displayed.

```jsx
<GridToolbarAIAssistant show={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### streaming?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines if the AI prompt is in streaming mode.

```jsx
<GridToolbarAIAssistant streaming={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### suggestionsList?


</td>
<td type class="table-cell-type">


<code>


string[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the list of suggestions for the AI prompt.

```jsx
<GridToolbarAIAssistant suggestionsList={['Sort by Amount', 'Group by Account Type']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### svgIcon?


</td>
<td type class="table-cell-type">


<code>


SVGIcon


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines the SVG icon rendered in the GridToolbarAIAssistant tool ([see example](https://www.telerik.com/kendo-react-ui/components/common/svgicon)).

```jsx
import { gearIcon } from '@progress/kendo-svg-icons';

<GridToolbarAIAssistant svgIcon={gearIcon} />
```



</td>
</tr>
</tbody>
</table>



