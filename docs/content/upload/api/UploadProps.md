---
title: UploadProps
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadProps."
api_reference: true
type: inner_api
slug: api_upload_uploadprops
---

# UploadProps
Represents the props of the [KendoReact Upload component](https://www.telerik.com/kendo-react-ui/components/upload).


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


#### accept?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `accept` attribute of the file input element to specify allowed file types.

Example:
```jsx
<Upload accept=".jpg,.png" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### actionsLayout?


</td>
<td type class="table-cell-type">


<code>


[UploadActionsLayout]({% slug api_upload_uploadactionslayout %})


</code>


</td>
<td class="table-cell-default">


<code>


"end"


</code>


</td>
<td class="table-cell-comment">


Specifies the layout of the action buttons. Defaults to `end`.




```jsx
<Upload actionsLayout="start" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaDescribedBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies elements that describe the Upload component, similar to the `aria-describedby` attribute.

Example:
```jsx
<Upload ariaDescribedBy="upload-description" />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### ariaLabelledBy?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Identifies elements that label the Upload component, similar to the `aria-labelledby` attribute.

Example:
```jsx
<Upload ariaLabelledBy="upload-label" />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### autoUpload?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


By default, the selected files are immediately uploaded.
To change this behavior, set `autoUpload` to `false`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### batch?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


When enabled, all files in the selection are uploaded in one request.
Any files that are selected one after the other are uploaded in separate requests.


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


Adds a custom CSS class to the Upload container element.

Example:
```jsx
<Upload className="custom-upload-class" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultFiles?


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the initial list of files to be displayed in uncontrolled mode.

Example:
```jsx
<Upload defaultFiles={[{ name: 'file1.jpg', size: 1024 }]} />
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


<code>


false


</code>


</td>
<td class="table-cell-comment">


Disables the Upload component. Defaults to `false`.




```jsx
<Upload disabled={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### files?


</td>
<td type class="table-cell-type">


<code>


[UploadFileInfo]({% slug api_upload_uploadfileinfo %})[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Provides the list of files to be displayed in controlled mode.

Example:
```jsx
<Upload files={[{ name: 'file1.jpg', size: 1024 }]} />
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


Specifies the `id` attribute of the Upload component.

Example:
```jsx
<Upload id="upload-component" />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### listItemUI?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[UploadListItemProps]({% slug api_upload_uploadlistitemprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Customizes the rendering of list items in the file list.

Example:
```jsx
<Upload listItemUI={(props) => <CustomListItem {...props} />} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### multiple?


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


Enables or disables the selection of multiple files. Defaults to `true`.




```jsx
<Upload multiple={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onAdd?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnAddEvent]({% slug api_upload_uploadonaddevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when new files are selected for upload.

Example:
```jsx
<Upload onAdd={(event) => console.log(event.files)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBeforeRemove?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnBeforeRemoveEvent]({% slug api_upload_uploadonbeforeremoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered before a file removal request is made. Can be used to add extra data to the request.

Example:
```jsx
<Upload onBeforeRemove={(event) => console.log(event.additionalData)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onBeforeUpload?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnBeforeUploadEvent]({% slug api_upload_uploadonbeforeuploadevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered before a file upload request is made. Can be used to add extra data to the request.

Example:
```jsx
<Upload onBeforeUpload={(event) => console.log(event.additionalData)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onCancel?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnCancelEvent]({% slug api_upload_uploadoncancelevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the user cancels an upload in progress. Useful for custom cancellation logic.

Example:
```jsx
<Upload onCancel={(event) => console.log('Upload canceled')} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onProgress?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnProgressEvent]({% slug api_upload_uploadonprogressevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the upload progress of a file changes.

Example:
```jsx
<Upload onProgress={(event) => console.log(event.percentComplete)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRemove?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnRemoveEvent]({% slug api_upload_uploadonremoveevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when files are removed. May include a server response if applicable.

Example:
```jsx
<Upload onRemove={(event) => console.log(event.files)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### onStatusChange?


</td>
<td type class="table-cell-type">


<code>


(event: [UploadOnStatusChangeEvent]({% slug api_upload_uploadonstatuschangeevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Triggered when the status of files changes. May include a server response if applicable.

Example:
```jsx
<Upload onStatusChange={(event) => console.log(event.files)} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key
which contains the list of file names that are submitted to `removeUrl`.
Defaults to `fileNames`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeHeaders?


</td>
<td type class="table-cell-type">


<code>


[UploadHttpHeaders]({% slug api_upload_uploadhttpheaders %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `HttpHeaders` that are attached to each `remove` request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeMethod?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [request method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) of the `remove` request.
Defaults to `POST`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### removeUrl?


</td>
<td type class="table-cell-type">


<code>


string | (files: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})[], options: { formData: FormData; requestOptions: any; }) => Promise&lt;{ uid: string; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL of the endpoint for the `remove` request.
The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) request
key is named after the `removeField` property.
It contains the list of file names which will be removed.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### responseType?


</td>
<td type class="table-cell-type">


<code>


"text" | "arraybuffer" | "blob" | "json"


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the expected [response type](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType)
of the server.
Used to parse the response appropriately.
Defaults to `json`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### restrictions?


</td>
<td type class="table-cell-type">


<code>


[UploadFileRestrictions]({% slug api_upload_uploadfilerestrictions %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures file restrictions such as allowed extensions and maximum file size.

Example:
```jsx
<Upload restrictions={{ allowedExtensions: ['.jpg', '.png'], maxFileSize: 1048576 }} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveField?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key which
contains the files submitted to `saveUrl`. Defaults to `files`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveHeaders?


</td>
<td type class="table-cell-type">


<code>


[UploadHttpHeaders]({% slug api_upload_uploadhttpheaders %})


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures the `HttpHeaders` that are attached to each upload request.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveMethod?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the [`request`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) method of the upload request.
Defaults to `POST`.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveUrl?


</td>
<td type class="table-cell-type">


<code>


string | (files: [UploadFileInfo]({% slug api_upload_uploadfileinfo %})[], options: { formData: FormData; requestOptions: any; }, onProgress: (uid: string, event: ProgressEvent&lt;EventTarget&gt;) => void) => Promise&lt;{ uid: string; }&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL of the endpoint for the upload request.
The requested [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) key is named after
the `saveField` property and contains the list of files that will be uploaded.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### selectMessageUI?


</td>
<td type class="table-cell-type">


<code>


React.ComponentType&lt;[UploadSelectMessageProps]({% slug api_upload_uploadselectmessageprops %})&gt;


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Customizes the content of the add button in the Upload component.

Example:
```jsx
<Upload selectMessageUI={(props) => <CustomSelectMessage {...props} />} />
```


</td>
</tr>
<tr>
<td class="table-cell-name">


#### showActionButtons?


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


Toggles the visibility of action buttons when `autoUpload` is set to `false`.




```jsx
<Upload autoUpload={false} showActionButtons={true} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### showFileList?


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


Toggles the visibility of the file list in the Upload component.




```jsx
<Upload showFileList={false} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tabIndex?


</td>
<td type class="table-cell-type">


<code>


string | number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the `tabIndex` attribute of the Upload component.

Example:
```jsx
<Upload tabIndex={0} />
```





</td>
</tr>
<tr>
<td class="table-cell-name">


#### withCredentials?


</td>
<td type class="table-cell-type">


<code>


boolean


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Configures whether credentials (cookies, headers) will be sent for cross-site requests.
Defaults to `true`. Setting `withCredentials` has no effect on same-site requests.
To add credentials to the request, use the `saveHeaders` or `removeHeaders` property.


</td>
</tr>
</tbody>
</table>



