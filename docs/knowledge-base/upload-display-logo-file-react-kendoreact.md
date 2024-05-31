---
title: Uploading and Displaying a Logo File in React
description: Learn how to upload a logo file and display it in the UI using React.
type: how-to
page_title: Upload and Display Logo File in React | KendoReact Knowledge Base
slug: upload-display-logo-file-react-kendoreact
tags: react, upload, display, logo, file, UI
res_type: kb
---

## Environment

| Property | Value |
|----------|-------|
| Product  | KendoReact |

## Description

To upload a logo file and display it in the UI using React, follow these steps:

1. Use the `onAdd` method to get the raw file and set it to a state variable.
2. Pass the state variable to the `src` attribute of the `img` element.
3. Convert the file object into a string using the `createObjectURL` method.

## Solution

```jsx
import * as React from "react";
import { Upload } from "@progress/kendo-react-upload";
import "@progress/kendo-theme-default/dist/all.css";

const saveUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/save";
const removeUrl = "https://demos.telerik.com/kendo-ui/service-v4/upload/remove";

function App() {
  const [files, setFiles] = React.useState([]);
  const [image, setImage] = React.useState();

  const onAdd = (event) => {
    const file = event.affectedFiles[0].getRawFile();
    setImage(file);
    setFiles(event.newState);
  };

  return (
    <>
      {image && <img src={URL.createObjectURL(image)} alt="alt" />}
      <Upload
        defaultFiles={[]}
        withCredentials={false}
        saveUrl={saveUrl}
        removeUrl={removeUrl}
        files={files}
        onAdd={onAdd}
      />
    </>
  );
}

export default App;
```

For more information on handling the `Upload` component in controlled mode using `onAdd`, `onRemove`, and other methods, refer to the [Controlled Mode](https://www.telerik.com/kendo-react-ui/components/upload/modes/#toc-controlled-mode) article.
