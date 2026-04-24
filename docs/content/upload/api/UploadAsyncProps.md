---
title: UploadAsyncProps
description: "Learn how to build custom functionality when working with the React Upload by Kendo UI with the help of the UploadAsyncProps."
api_reference: true
type: inner_api
slug: api_upload_uploadasyncprops
---

# UploadAsyncProps
Represents the async properties of the Upload component.


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



