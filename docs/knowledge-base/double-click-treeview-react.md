---
title: Implementing Double Click in TreeView for React
description: How to enable and handle double-click events on nodes in the TreeView for React to enhance navigation or actions like opening files in an IDE.
type: how-to
page_title: Enabling Double-Click on TreeView Nodes in React Applications
slug: double-click-treeview-react
tags: treeview, react, double-click, event handling, ide, file navigation
res_type: kb
ticketid: 1629554
---

## Environment

| Product | Version |
| --- | --- |
| TreeView for React | 8.0.0 |

## Description

I'm trying to implement double-click functionality on the TreeView component to open files in an editor, similar to IDEs like Visual Studio or PyCharm. It's essential for improving the user experience by allowing files to be opened directly from the folder structure with a double-click, rather than requiring an additional button click after selection.

This KB article also answers the following questions:
- How can I add double-click support to the TreeView in React?
- What is the best way to handle double-click events on TreeView nodes for file navigation?
- How to mimic IDE-like file opening actions in a React application using the TreeView?

## Solution

To enable double-click functionality in the [TreeView for React](https://www.telerik.com/kendo-react-ui/components/treeview/), follow these steps:

1. Attach a `ref` to your TreeView component.
2. Add a double-click event listener to the TreeView using the `ref`.
3. In the event handler, implement your logic for opening a file or any other action you need to perform on double-click.

Here is an example of how you can achieve this:

```jsx
import React, { useRef, useEffect } from 'react';
import { TreeView } from '@progress/kendo-react-treeview';

const App = () => {
    const treeViewRef = useRef(null);

    useEffect(() => {
        const handleDoubleClick = (event) => {
            // Your double-click logic here
            console.log('Node double-clicked', event);
        };

        const treeView = treeViewRef.current;
        if (treeView) {
            treeView.addEventListener('dblclick', handleDoubleClick);
        }

        return () => {
            if (treeView) {
                treeView.removeEventListener('dblclick', handleDoubleClick);
            }
        };
    }, []);

    return <TreeView ref={treeViewRef} />;
};
```

For a full example, check [this StackBlitz example](https://stackblitz.com/edit/react-unn5hy?file=app%2Fmain.jsx).

For more information on handling double-click events, refer to the MDN documentation on the [dblclick event](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event).

## See Also

- [TreeView Component Documentation](https://www.telerik.com/kendo-react-ui/components/treeview/)
- [MDN Documentation on dblclick Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event)
