---
title: DialogProps
description: "Learn how to build custom functionality when working with the React Dialogs by Kendo UI with the help of the DialogProps."
api_reference: true
type: inner_api
slug: api_dialogs_dialogprops
---

# DialogProps
Represents the props of the [KendoReact Dialog component](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog).


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


any


</code>


</td>
<td class="table-cell-default">


<code>


document.body


</code>


</td>
<td class="table-cell-comment">


Defines the container to which the Dialog will be appended.
* If set to `null` the Dialog will be rendered without React Portal.




```jsx
<Dialog appendTo={document.getElementById('container')} />
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


false


</code>


</td>
<td class="table-cell-comment">


Set the focus the Dialog container automatically when mounted.




```jsx
<Dialog autoFocus={true} />
```






</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoFocusedElement?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the query selector used to set the initial focus ([see examples](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog/initial-focus)).

```jsx
<Dialog autoFocusedElement="#input-id" />
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


Sets a class of the Dialog DOM element.

```jsx
<Dialog className="custom-class" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### closeIcon?


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


Specifies whether a close button should be rendered at the top corner of the dialog.




```jsx
<Dialog closeIcon={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### contentStyle?


</td>
<td type class="table-cell-type">


<code>


React.CSSProperties


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


The styles that are applied to the content of the Dialog.

```jsx
<Dialog contentStyle={{ padding: '20px' }} />
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


Represents the `dir` HTML attribute.

```jsx
<Dialog dir="rtl" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### height?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the height of the Dialog ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog/dimensions)).

```jsx
<Dialog height="300px" />
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


Sets the `aria-labelledby` value.

```jsx
<Dialog id="dialog-id" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minWidth?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the minimum width of the Dialog.

```jsx
<Dialog minWidth="200px" />
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


true


</code>


</td>
<td class="table-cell-comment">


Specifies if the Dialog will be modal by rendering an overlay under the component.




```jsx
<Dialog modal={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onClose?


</td>
<td type class="table-cell-type">


<code>


(event: DialogCloseEvent) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the **Close** button in the title is clicked or when the `Esc` button is pressed.

```jsx
<Dialog onClose={(event) => console.log(event)} />
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


Set styles to the Dialog overlay element rendered when the `modal` prop is enabled.

```jsx
<Dialog overlayStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
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


The styles that are applied to the Dialog.

```jsx
<Dialog style={{ border: '1px solid black' }} />
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


Configures the `themeColor` of the Dialog.

The available options are:
- primary
- dark
- light

```jsx
<Dialog themeColor="dark" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### title?


</td>
<td type class="table-cell-type">


<code>


string | ReactElement&lt;any&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the title of the Dialog ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog/title)). If you do not specify the `title`, the Dialog does not render a **Close** button.

```jsx
<Dialog title="Dialog Title" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### width?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Specifies the width of the Dialog ([see example](https://www.telerik.com/kendo-react-ui/components/dialogs/dialog/dimensions)).

```jsx
<Dialog width="400px" />
```



</td>
</tr>
</tbody>
</table>



