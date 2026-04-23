---
title: ChunkProgressBarProps
description: "Learn how to build custom functionality when working with the React ProgressBars by Kendo UI with the help of the ChunkProgressBarProps."
api_reference: true
type: inner_api
slug: api_progressbars_chunkprogressbarprops
---

# ChunkProgressBarProps
Represents the props of the [KendoReact ChunkProgressBar component](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar).


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


#### ariaLabel?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides an accessible label for the component.

```jsx
<ProgressBar ariaLabel="Loading progress" />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### chunkCount?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


5


</code>


</td>
<td class="table-cell-comment">


Defines the number of chunks into which the ChunkProgressBar is divided. Defaults to `5`.
Each chunk visually represents a portion of the progress bar.




```jsx
<ChunkProgressBar chunkCount={10} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### className?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds a list of CSS classes to the progress bar element.

```jsx
<ProgressBar className="custom-progress-bar" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### dir?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `dir` HTML attribute to switch between LTR and RTL directions.

```jsx
<ProgressBar dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### disabled?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Determines whether the progress bar is in a disabled state.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/disabled)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/disabled)).

```jsx
<ProgressBar disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### emptyClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds additional CSS classes to the inner element representing the empty portion of the progress bar.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/appearance)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/appearance)).

```jsx
<ProgressBar emptyClassName="custom-empty-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### emptyStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles applied to the inner element representing the empty portion of the progress bar.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/appearance)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/appearance)).

```jsx
<ProgressBar emptyStyle={{ backgroundColor: 'lightgray' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### max?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


100


</code>


</td>
<td class="table-cell-comment">


Specifies the maximum value of the progress bar. Defaults to `100`.




```jsx
<ProgressBar max={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### min?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Specifies the minimum value of the progress bar. Defaults to `0`.




```jsx
<ProgressBar min={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### orientation?


</td>
<td type class="table-cell-type">


<code>


"horizontal" | "vertical"


</code>


</td>
<td class="table-cell-default">


<code>


"horizontal"


</code>


</td>
<td class="table-cell-comment">


Specifies the orientation of the progress bar. Can be `horizontal` or `vertical`. Defaults to `horizontal`.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/orientation)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/orientation)).




```jsx
<ProgressBar orientation="vertical" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### progressClassName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Adds additional CSS classes to the inner element representing the full portion of the progress bar.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/appearance)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/appearance)).

```jsx
<ProgressBar progressClassName="custom-progress-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### progressStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the styles applied to the inner element representing the full portion of the progress bar.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/appearance)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/appearance)).

```jsx
<ProgressBar progressStyle={{ backgroundColor: 'green' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### reverse?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


false


</code>


</td>
<td class="table-cell-comment">


If set to `true`, reverses the direction of the progress bar. Defaults to `false`.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar/direction)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar/direction)).




```jsx
<ProgressBar reverse={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### style?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Applies additional CSS styles to the progress bar.

```jsx
<ProgressBar style={{ backgroundColor: 'red' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` attribute of the progress bar for keyboard navigation.




```jsx
<ProgressBar tabIndex={0} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### value?


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">


<code>


0


</code>


</td>
<td class="table-cell-comment">


Sets the current value of the progress bar. Must be between the `min` and `max` values. Defaults to `0`.
Set to `null` to enable the indeterminate state of the progress bar.
See examples ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/progressbar)) and ([here](https://www.telerik.com/kendo-react-ui/components/progressbars/chunkprogressbar)).




```jsx
<ProgressBar value={50} />
```



</td>
</tr>
</tbody>
</table>



