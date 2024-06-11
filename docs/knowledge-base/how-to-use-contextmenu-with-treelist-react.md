---
title: Implementing ContextMenu in TreeList for React
description: This article demonstrates how to use the KendoReact ContextMenu component with the TreeList for React to display context menus on row right-click and manage dialog visibility.
type: how-to
page_title: How to Use ContextMenu with TreeList in React
slug: how-to-use-contextmenu-with-treelist-react
tags: treelist, react, contextmenu, dialog, component, onrowcontextmenu, onselect
res_type: kb
ticketid: 1620137
---

## Environment

| Product | KendoReact TreeList / |
| --- | --- |
| Version | Current |

## Description

When right-clicking on a row in the TreeList, a context menu appears. Selecting an item from this menu should trigger a state change in the parent component, causing a Dialog to be displayed. This article provides a solution for implementing a context menu using the [ContextMenu](https://www.telerik.com/kendo-react-ui/components/layout/contextmenu/) component in a React application that includes a TreeList and a Dialog within a parent component. It addresses the need for a consistent and responsive interaction for showing a modal dialog through a context menu option.

This KB article also answers the following questions:
- How can I add a context menu to a TreeList row in React?
- What is the method to display a Dialog from a TreeList row context menu?
- How do I manage state between a TreeList and a Dialog in React?

## Solution

To implement a context menu that interacts with a Dialog component within a TreeList, follow these steps:

1. Utilize the `onRowContextMenu` event of the TreeList to handle right-click actions on rows. This event calls a method that determines the position of the context menu and sets its visibility.

2. Render the ContextMenu component beneath the TreeList in your component structure. Configure the `onSelect` event of the ContextMenu to execute a function based on the selected option.

3. Pass a method as props to the Dialog component. This method updates the visibility state in the parent component when the Dialog is closed or when specific actions within the Dialog are taken.

The following example demonstrates the implementation details:

1. **Handling the TreeList's context menu event**:

```jsx
<TreeList onRowContextMenu={handleContextMenu}>
```
In `handleContextMenu`, calculate the positioning of the context menu and set its visibility.

2. **Defining the ContextMenu and its options**:

```jsx
<ContextMenu show={show} offset={offset.current} onSelect={changeVisible}>
```
Here, `changeVisible` is a method that updates the state in the parent component, influencing the visibility of the Dialog.

3. **Integrating the Dialog**:

Pass the `changeVisible` method to the Dialog component, allowing it to update the visibility state based on user interaction:

```jsx
<MyDialog changeVisible={changeVisible} visible={visible} />
```

4. **Code example overview**:

The full implementation can be reviewed in the provided example:

[ContextMenu with TreeList and Dialog in React](https://stackblitz.com/edit/react-jxsy3b-l1l18y?file=app%2FMyDialog.jsx,app%2Fmain.jsx)

This setup enables the display of a context menu when right-clicking on a TreeList row and the subsequent showing of a Dialog based on the menu selection.

## Notes

If you encounter any issues with component interactions, such as the application becoming unresponsive, consider checking component export names and their usage across the application. For instance, renaming a component or switching from default to named exports might resolve such conflicts.

## See Also

- [TreeList onRowContextMenu Event](https://www.telerik.com/kendo-react-ui/components/treelist/api/TreeListProps/#toc-onrowcontextmenu)
- [ContextMenu onSelect Event](https://www.telerik.com/kendo-react-ui/components/layout/api/ContextMenuProps/#toc-onselect)
- [KendoReact TreeList Overview](https://www.telerik.com/kendo-react-ui/components/treelist/)
- [KendoReact ContextMenu Overview](https://www.telerik.com/kendo-react-ui/components/layout/contextmenu/)
