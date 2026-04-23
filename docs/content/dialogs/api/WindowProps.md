---
title: WindowProps
description: "Learn how to build custom functionality when working with the React Dialogs by Kendo UI with the help of the WindowProps."
api_reference: true
type: inner_api
slug: api_dialogs_windowprops
---

# WindowProps
Represents the props of the [KendoReact Window component](https://www.telerik.com/kendo-react-ui/components/dialogs/window).


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


#### appendTo?


</td>
<td type class="table-cell-type">


<code>


"null" | HTMLElement


</code>


</td>
<td class="table-cell-default">


<code>


parent element


</code>


</td>
<td class="table-cell-comment">


Defines the container to which the Window will be appended. If set to `null`, the Window will be rendered without React Portal.




```jsx
<Window appendTo={document.body} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFocus?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Focus the Window container automatically when mounted.




```jsx
<Window autoFocus={false} />
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


Sets a class of the Window DOM element.

```jsx
<Window className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### closeButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will render the close button.

```jsx
<Window closeButton={CustomCloseButton} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### doubleClickStageChange?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the Window stage will change on title double click.




```jsx
<Window doubleClickStageChange={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### draggable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the Window will be draggable ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/positioning-dragging#toc-dragging)).




```jsx
<Window draggable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the height of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-dimensions)). When set to `null`, the window is automatically sized to fit its content.

```jsx
<Window height={500} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### id?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `id` attribute value of the wrapper element of the Window.

```jsx
<Window id="my-window" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialHeight?


</td>
<td type class="table-cell-type">


<code>


"null" | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial height of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-dimensions)). The component will be in an uncontrolled mode.

```jsx
<Window initialHeight={200} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialLeft?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial `left` value ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/positioning-dragging#toc-positioning)). The Window will be in an uncontrolled mode.

```jsx
<Window initialLeft={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialTop?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial `top` value ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/positioning-dragging#toc-positioning)). The component will be in an uncontrolled mode.

```jsx
<Window initialTop={50} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### initialWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the initial width of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-dimensions)). The component will be in an uncontrolled mode.

```jsx
<Window initialWidth={300} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### left?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the left coordinates of the Window.

```jsx
<Window left={150} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maximizeButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will render the maximize button.

```jsx
<Window maximizeButton={CustomMaximizeButton} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minHeight?


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


Specifies the minimum height of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-resizing)).




```jsx
<Window minHeight={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minimizeButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will render the minimize button.

```jsx
<Window minimizeButton={CustomMinimizeButton} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


120


</code>


</td>
<td class="table-cell-comment">


Specifies the minimum width of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-resizing)).




```jsx
<Window minWidth={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### modal?


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


Specifies if the Window will be modal by rendering an overlay under the component.




```jsx
<Window modal={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowActionsEvent]({% slug api_dialogs_windowactionsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the **Close** button in the title is clicked or when the `Esc` button is pressed.

```jsx
<Window onClose={(event) => console.log('Window closed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onMove?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowMoveEvent]({% slug api_dialogs_windowmoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Window is dragged.

```jsx
<Window onMove={(event) => console.log('Window moved', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onResize?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowMoveEvent]({% slug api_dialogs_windowmoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the Window resizes.

```jsx
<Window onResize={(event) => console.log('Window resized', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [WindowActionsEvent]({% slug api_dialogs_windowactionsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the `DEFAULT`, `FULLSCREEN`, or `MINIMIZED` state of the Window is changed.

```jsx
<Window onStageChange={(event) => console.log('Stage changed', event)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### overlayStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Set styles to the Window overlay element rendered when the `modal` prop is enabled.

```jsx
<Window overlayStyle={{ opacity: 0.5 }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### resizable?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">


<code>


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the Window will be resizable ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/dimensions-resizing#toc-resizing)).




```jsx
<Window resizable={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### restoreButton?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window will render the restore button.

```jsx
<Window restoreButton={CustomRestoreButton} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### shouldUpdateOnDrag?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies if the Window content will update during resizing.

```jsx
<Window shouldUpdateOnDrag={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### stage?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Controls the state of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/minimizing-fullscreen)).

The supported values are:
* `DEFAULT`
* `MINIMIZED`
* `FULLSCREEN`

```jsx
<Window stage="DEFAULT" />
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


Set styles to the Window element.

```jsx
<Window style={{ backgroundColor: 'red' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"primary" | "dark" | "light"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Window.

The available options are:
- primary
- dark
- light

```jsx
<Window themeColor="dark" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


React.ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the title of the Window ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/window/title)).

```jsx
<Window title="My Window" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### top?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the top coordinates of the Window.

```jsx
<Window top={100} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the width of the Window.

```jsx
<Window width={400} />
```



</td>
</tr>
</tbody>
</table>



