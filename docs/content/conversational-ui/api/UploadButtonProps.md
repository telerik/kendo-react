---
title: UploadButtonProps
description: "Learn how to build custom functionality when working with the React Conversational UI by Kendo UI with the help of the UploadButtonProps."
api_reference: true
type: inner_api
slug: api_conversational-ui_uploadbuttonprops
---

# UploadButtonProps
Represents the configuration options for the Upload button.
Combines button styling props, upload behavior props, and event callbacks.


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


Specifies if the Button is disabled ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/disabled-state)).





</td>
</tr>
<tr>
<td class="table-cell-name">


#### fillMode?


</td>
<td type class="table-cell-type">


<code>


"link" | "flat" | "solid" | "outline" | "clear"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `fillMode` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button fillMode="outline">Outline Button</Button>
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


Defines the name for an existing icon in a KendoReact theme ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/icons)). The icon renders inside the Button by a `span.k-icon` element.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### iconClass?


</td>
<td type class="table-cell-type">


<code>


string


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Defines a CSS class — or multiple classes separated by spaces — which apply to a `span` element inside the Button ([see example](https://www.telerik.com/kendo-react-ui/components/buttons/button/icons)). Allows you to use custom icons.


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


#### onRemoveAttachment?


</td>
<td type class="table-cell-type">


<code>


(fileName: string) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user removes an attachment by clicking the remove button.
In controlled mode (when `attachments` prop is provided), use this to update your state.

```tsx
<PromptBox
  attachments={attachments}
  uploadButtonConfig={{
    onRemoveAttachment: (fileName) => {
      setAttachments(prev => prev.filter(file => file.name !== fileName));
    }
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### onSelectAttachments?


</td>
<td type class="table-cell-type">


<code>


(event: [PromptBoxSelectAttachmentsEvent]({% slug api_conversational-ui_promptboxselectattachmentsevent %})) => void


</code>


</td>
<td class="table-cell-default">




</td>
<td class="table-cell-comment">


Fires when the user selects files via the upload button.
Provides both the newly selected files and the complete file state.

```tsx
<PromptBox
  uploadButtonConfig={{
    onSelectAttachments: (e) => {
      console.log('Selected:', e.selectedFiles);
      console.log('All files:', e.allFiles);
    }
  }}
/>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### restrictions?


</td>
<td type class="table-cell-type">


<code>


UploadFileRestrictions


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


#### rounded?


</td>
<td type class="table-cell-type">


<code>


"small" | "none" | "medium" | "large" | "full"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `roundness` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).

The available options are:
- `small`
- `medium`
- `large`
- `full`
- `none`




```tsx
<Button rounded="full">Rounded Button</Button>
```



</td>
</tr>
<tr>
<td class="table-cell-name">


#### size?


</td>
<td type class="table-cell-type">


<code>


"small" | "medium" | "large"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `size` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button size="large">Large Button</Button>
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


Defines the SVG icon that renders inside the Button component.


</td>
</tr>
<tr>
<td class="table-cell-name">


#### themeColor?


</td>
<td type class="table-cell-type">


<code>


"base" | "error" | "primary" | "secondary" | "tertiary" | "info" | "success" | "warning" | "dark" | "light" | "inverse"


</code>


</td>
<td class="table-cell-default">


<code>


undefined (theme-controlled)


</code>


</td>
<td class="table-cell-comment">


Configures the `themeColor` of the Button. See [Button Appearance](https://www.telerik.com/kendo-react-ui/components/buttons/button/appearance).




```tsx
<Button themeColor="primary">Primary Button</Button>
```



</td>
</tr>
</tbody>
</table>



