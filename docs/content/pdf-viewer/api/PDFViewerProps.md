---
title: PDFViewerProps
description: "Learn how to build custom functionality when working with the React PDF Viewer by Kendo UI with the help of the PDFViewerProps."
api_reference: true
type: inner_api
slug: api_pdf-viewer_pdfviewerprops
---

# PDFViewerProps
The props of the KendoReact [PDF Viewer](https://www.telerik.com/kendo-react-ui/components/pdf-viewer/api/pdfviewer) component.


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


#### arrayBuffer?


</td>
<td type class="table-cell-type">


<code>


ArrayBuffer


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the raw binary data buffer of the PDF file.

```jsx
<PDFViewer arrayBuffer={new ArrayBuffer(1024)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### data?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the PDF file in Base64 format.

```jsx
<PDFViewer data="JVBERi0xLjQKJ..." />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### defaultZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


1


</code>


</td>
<td class="table-cell-comment">


Sets the default zoom value.




```jsx
<PDFViewer defaultZoom={1} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### maxZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


4


</code>


</td>
<td class="table-cell-comment">


Sets the maximum zoom value.




```jsx
<PDFViewer maxZoom={4} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### minZoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0.5


</code>


</td>
<td class="table-cell-comment">


Sets the minimum zoom value.




```jsx
<PDFViewer minZoom={0.5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onDownload?


</td>
<td type class="table-cell-type">


<code>


(event: [DownloadEvent]({% slug api_pdf-viewer_downloadevent %})) => boolean | void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the download tool has been clicked. To prevent the download, return `false`.

```jsx
<PDFViewer onDownload={(event) => console.log(event.fileName)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onError?


</td>
<td type class="table-cell-type">


<code>


(event: [ErrorEvent]({% slug api_pdf-viewer_errorevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when an error occurs.

```jsx
<PDFViewer onError={(event) => console.log(event.error)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onLoad?


</td>
<td type class="table-cell-type">


<code>


(event: [LoadEvent]({% slug api_pdf-viewer_loadevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when a PDF document has been loaded.

```jsx
<PDFViewer onLoad={() => console.log('Document loaded')} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onPageChange?


</td>
<td type class="table-cell-type">


<code>


(event: [PageEvent]({% slug api_pdf-viewer_pageevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the page has changed.

```jsx
<PDFViewer onPageChange={(event) => console.log(event.page)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRenderContent?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: ReactElement&lt;HTMLDivElement&gt;) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the content component is about to be rendered. Use it to override the default appearance of the content.

```jsx
<PDFViewer onRenderContent={(defaultRendering) => <CustomContent />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRenderLoader?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: "null" | ReactElement&lt;HTMLDivElement&gt;) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the loading indication component is about to be rendered. Use it to override the default appearance of the loading.

```jsx
<PDFViewer onRenderLoader={(defaultRendering) => <CustomLoader />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onRenderToolbar?


</td>
<td type class="table-cell-type">


<code>


(defaultRendering: ReactElement&lt;ToolbarProps&gt;) => ReactNode


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the toolbar component is about to be rendered. Use it to override the default appearance of the toolbar.

```jsx
<PDFViewer onRenderToolbar={(defaultRendering) => <CustomToolbar />} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onZoom?


</td>
<td type class="table-cell-type">


<code>


(event: [ZoomEvent]({% slug api_pdf-viewer_zoomevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the zoom has changed.

```jsx
<PDFViewer onZoom={(event) => console.log(event.zoom)} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveFileName?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the file name used to save the file when you click the download tool.

```jsx
<PDFViewer saveFileName="document.pdf" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### saveOptions?


</td>
<td type class="table-cell-type">


<code>


SaveOptions


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the options for saving the file when you click the download tool.

```jsx
<PDFViewer saveOptions={{ forceProxy: true }} />
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


Sets the additional styles for the PDF Viewer component.

```jsx
<PDFViewer style={{ height: '500px' }} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### tools?


</td>
<td type class="table-cell-type">


<code>


[PDFViewerTool]({% slug api_pdf-viewer_pdfviewertool %})[]


</code>


</td>
<td class="table-cell-default">


<code>


- ['pager', 'spacer', 'zoomInOut', 'zoom', 'selection', 'spacer', 'search', 'open', 'download', 'print']


</code>


</td>
<td class="table-cell-comment">


Sets the tools collection that renders in the toolbar.




```jsx
<PDFViewer tools={['pager', 'zoom']} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### typedArray?


</td>
<td type class="table-cell-type">


<code>


TypedArray


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the data of the PDF file in typed array format.

```jsx
<PDFViewer typedArray={new Uint8Array([0x25, 0x50, 0x44, 0x46])} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### url?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the URL of the PDF file.

```jsx
<PDFViewer url="https://example.com/sample.pdf" />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoom?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the zoom value of the document.

```jsx
<PDFViewer zoom={1.5} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomLevels?


</td>
<td type class="table-cell-type">


<code>


{ id: number; locationString?: string; priority: number; text: string; type: string; value: number; }[]


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Sets the zoom levels populated in the ComboBox component.

```jsx
<PDFViewer zoomLevels={[{ id: 1, value: 1, text: '100%' }]} />
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### zoomRate?


</td>
<td type class="table-cell-type">


<code>


number


</code>


</td>
<td class="table-cell-default">


<code>


0.25


</code>


</td>
<td class="table-cell-comment">


Sets the zoom rate value.




```jsx
<PDFViewer zoomRate={0.25} />
```



</td>
</tr>
</tbody>
</table>



