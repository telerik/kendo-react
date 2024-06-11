---
title: Applying Color Selection Instantly with FlatColorPicker in React
description: Learn how to update the color selection in real-time with the FlatColorPicker component without having to click outside the component or press the Apply button.
type: how-to
page_title: How to Apply Color Changes Instantly in FlatColorPicker for React Applications
slug: flatcolorpicker-react-apply-color-instantly
tags: flatcolorpicker, react, color picker, onchange, blur, event handling
res_type: kb
ticketid: 1621672
---

## Environment

| Product | Version |
| --- | --- |
| FlatColorPicker for React | Current |

## Description

When using the FlatColorPicker component, the `onChange` method is triggered only on blur or when the "Apply" button is clicked if the `showButtons` option is enabled. This behavior can be problematic, especially in scenarios where the color picker is part of a larger form, and instant feedback or state update is required upon color selection. This KB article also answers the following questions:
- How can I make the FlatColorPicker in React apply color changes instantly?
- Is there a way to trigger the `onChange` event on color selection without blurring the FlatColorPicker?
- How can I improve user experience by having the color applied directly upon clicking?

## Solution

To achieve immediate application of the selected color without requiring the user to blur the [FlatColorPicker](https://www.telerik.com/kendo-react-ui/components/inputs/flatcolorpicker/) component or click an "Apply" button, follow these steps:

1. Wrap the FlatColorPicker component with a `div` element.

2. Utilize the `ref` attribute of the FlatColorPicker to programmatically invoke the blur event when a color is selected.

3. Implement a click event handler on the wrapping `div` that blurs the FlatColorPicker component, ensuring the `onChange` event is triggered immediately after a color is selected.

Here is an example implementation:

```jsx
import React, { useRef } from 'react';
import { FlatColorPicker } from '@progress/kendo-react-inputs';

const ColorPickerWrapper = () => {
    const colorPickerRef = useRef(null);

    const handleClick = () => {
        setTimeout(() => {
            if(colorPickerRef.current) {
                colorPickerRef.current.blur();
            }
        }, 100); // Short timeout to ensure the blur occurs after color selection
    };

    return (
        <div onClick={handleClick}>
            <FlatColorPicker ref={colorPickerRef} />
        </div>
    );
};
```
This approach ensures that the `onChange` method is invoked immediately after the user selects a color, improving the responsiveness of the application.

Additionally, consider using the [ColorGradient](https://www.telerik.com/kendo-react-ui/components/inputs/colorgradient/) component if direct application of the color value upon clicking matches your requirements.

## See Also

- [FlatColorPicker Component Documentation](https://www.telerik.com/kendo-react-ui/components/inputs/flatcolorpicker/)
- [ColorGradient Component Documentation](https://www.telerik.com/kendo-react-ui/components/inputs/colorgradient/)
