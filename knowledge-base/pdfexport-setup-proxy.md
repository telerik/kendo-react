---
title: How can I implement a server proxy in the KendoReact PDFExport with Express.js
description: An example of how to configure a proxy in the KendoReact PDFExport.
type: how-to
page_title: implement a server proxy - KendoReact DropDownList
slug: pdfexport-server-proxy
tags: pdfexport, proxy, proxyurl, forceproxy, server proxy
ticketid: 1618904
res_type: kb
category: knowledge-base
---

## Environment

<table>
    <tbody>
	    <tr>
	    	<td>Product Version</td>
	    	<td>7.3.0</td>
	    </tr>
	    <tr>
	    	<td>Product</td>
	    	<td>Progress® KendoReact</td>
	    </tr>
    </tbody>
</table>

## Description

I need to configure a server proxy using [Express.js](https://expressjs.com/)(Node.js) in the PDFExport component to download PDFs in browsers like Internet Explorer 9 and Safari. This is because these browsers do not support saving the exported PDF file.

## Solution

### Client-side application

In your React application, render the PDFExport component settings its [forceProxy]({% slug api_pdfexport_pdfexportprops %}#toc-forceproxy) prop to true and [proxyURL]({% slug api_pdfexport_pdfexportprops %}#toc-proxyurl) to `http://localhost:4000/export`. Port 4000 is the where we will be running our Express.js project while `export` is the API route that will handle this proxy.

```jsx
import * as React from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import products from "./products.json";

const App = () => {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <div>
      <div className="example-config">
        <Button onClick={exportPDFWithComponent}>Export with component</Button>
      </div>
      <div className="border rounded p-2">
        <PDFExport
          ref={pdfExportComponent}
          forceProxy={true}
          proxyURL="http://localhost:4000/export"
          paperSize="auto"
          margin={40}
          fileName={`Report for ${new Date().getFullYear()}`}
          author="KendoReact Team"
        >
          <div ref={container}>
            <h3 className="text-center">Monthly report</h3>
            <hr className="k-hr" />
            <Grid
              style={{
                maxHeight: "400px",
              }}
              data={products.slice(0, 5)}
            >
              <Column field="ProductID" title="ID" width="40px" />
              <Column field="ProductName" title="Name" width="250px" />
              <Column field="Category.CategoryName" title="CategoryName" />
              <Column field="UnitPrice" title="Price" width="80px" />
              <Column field="UnitsInStock" title="In stock" width="80px" />
            </Grid>
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default App;
```

### Express.js application

1. Setup an Express.js project by following their [getting started](https://expressjs.com/en/starter/installing.html) article.
2. Add the following code to "app.js" or "index.js" depending on the entry point of your Node.js project.

```jsx
const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
var XLSX = require("xlsx");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// allow cross-origin requests
app.use(cors());

app.post("/export", (request, response) => {
  let file = XLSX.read(request.body.base64, { type: "base64" });
  XLSX.writeFile(file, "my.xlsx");
});

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
```

In `app.post`, we are returning `request.body.base64` that is received after exporting the PDFExport component. You now have access to the content of the PDF file on the server. After this, you can use the `XLSX` library to download the file. You can also use the Kendo [File Saver]({% slug file_saver %}) package.
