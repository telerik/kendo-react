---
title: Creating a Custom Icon in Rich Text Editor
description: Learn how to create a custom icon for a tool in the Rich Text Editor and the recommended size for the image.
type: how-to
page_title: How to Create a Custom Icon in Rich Text Editor
slug: creating-custom-icon-rich-text-editor
tags: customization, icon, image, tool, Rich Text Editor, React
res_type: kb
---

## Environment

| Property | Value |
|----------|-------|
| Product  | Editor for React |

## Description

To create a custom icon for a tool in the Rich Text Editor, you can customize the built-in tools and use your own SVG icon or image. Here are the steps to follow:

1. Refer to the [customizing built-in tools](https://www.telerik.com/kendo-react-ui/components/editor/tools/#toc-customizing-built-in-tools) documentation for examples and instructions on how to customize the tools.

2. To use a built-in SVG icon, you can add it to the `svgIcon` property of the Button component that is used for the custom tool. For example:

```jsx
<Button svgIcon={borderColorIcon} />
```

3. Alternatively, you can add a custom SVG icon. Here is an example using a custom bold tool:

```jsx
import MyBold from './myBold';

// ...

<Editor tools={[ MyBold ]} />
```

4. If you want to add an image instead of an SVG icon, you can use the Button component's `imageURL` property. The size of the image does not matter, and you can add it like you would add any image to a button element. Here is an example:

```jsx
<Button imageURL="/path/to/image.png" />
```

If you encounter any issues or need further assistance with adding images or customizing other editor tools, please let us know.

## See Also

- [Customizing Built-In Tools in Rich Text Editor](https://www.telerik.com/kendo-react-ui/components/editor/tools/#toc-customizing-built-in-tools)
