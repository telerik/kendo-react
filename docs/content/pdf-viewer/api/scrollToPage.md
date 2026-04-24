---
title: scrollToPage
description: "Learn how to build custom functionality when working with the React PDF Viewer by Kendo UI with the help of the scrollToPage."
api_reference: true
type: inner_api
slug: api_pdf-viewer_scrolltopage
---

# scrollToPage
Scrolls the PDF Viewer document to the passed page number.

```jsx
function App() {
const pdfRef = React.useRef(null);
const handleClick = () => {
  scrollToPage(pdfRef.current.element, 3);
};
return (
  <div>
    <Button onClick={handleClick} >
      Scroll to Page 3
    </Button>
    <PDFViewer
      ref={pdfRef}
    />
  </div>
  )
}
```


#### Parameters
##### rootElement
<code>


HTMLElement


</code>
The root HTML element of the PDF Viewer component.

##### pageNumber
<code>


number


</code>
The page number.

