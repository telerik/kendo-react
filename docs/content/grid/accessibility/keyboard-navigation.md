---
title: Keyboard Navigation
description: 'Use the KendoKendoReact Data Grid keyboard navigation in React projects.'
components: ["datagrid"]
slug: keyboard_navigation_grid
position: 20
---

# Keyboard Navigation

You can enable the keyboard navigation of the Grid with the [navigatable]({% slug api_grid_gridprops %}#toc-navigatable) prop of the Grid. The `navigatable` property is set to `false` by default.

To activate the Grid's keyboard navigation, based on your scenario, pass one of the following options to the `navigatable` prop:

-   `true` for all scenarios in which the Grid is not editable or when editing the component's data using an external form.
-   `incell` when the Grid is configured to work in **in-cell** editing mode.
-   `inline` when the Grid is configured to work in **inline** editing mode.

## Keyboard Navigation Without Editing

In order to enable the keyboard navigation over the toolbar of the Grid, you need to use the [KendoReact Toolbar]({% slug overview_toolbar %}) that comes with a built-in keyboard support.

{% meta height:670 %}
{% embed_file keyboard-navigation-overview/app.tsx preview %}
{% embed_file keyboard-navigation-overview/main.tsx %}
{% embed_file keyboard-navigation-overview/toolbar.tsx %}
{% endmeta %}

The Grid supports the following keyboard shortcuts:

| SHORTCUT                  | DESCRIPTION                                                                                                                                    |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `Right Arrow`             | Moves the focus one cell to the right. If the focus is on the right-most cell in the row, the focus does not move.                             |
| `Left Arrow`              | Moves the focus one cell to the left. If the focus is on the left-most cell in the row, the focus does not move.                               |
| `Down Arrow`              | Moves the focus one cell down. If the focus is on the bottom-most cell in the column, the focus does not move.                                 |
| `Up Arrow`                | Moves the focus one cell up. If the focus is on the top-most cell in the column, the focus does not move.                                      |
| `Page Down`               | Scrolls to the next page of data. If paging is configured, loads the next page of data, if any.                                                |
| `Page Up`                 | Scrolls to the previous page of data. If paging is configured, loads the previous page of data, if any.                                        |
| `Home`                    | Moves the focus to the first focusable cell in the row.                                                                                        |
| `End`                     | Moves the focus to the last focusable cell in the row.                                                                                         |
| `Space`                   | Selects the row holding the currently focused cell.                                                                                            |
| `Ctrl/Cmd(Mac)` & `Home`  | Moves the focus to the first cell in the first row.                                                                                            |
| `Ctrl/Cmd(Mac)` & `End`   | Moves the focus to the last cell in the last row.                                                                                              |
| `Ctrl/Cmd(Mac)` & `Space` | Selects or deselects the current row, while persisting previously selected rows (only for selection mode "multiple").                          |
| `Shift` & `Space`         | Performs range selection, selects all the rows between the last selected one (with SPACE or mouse click) and the one holding the focused cell. |
| `Shift` & `Up Arrow`      | Selects the row above. When multiple selection is enabled, extends the selection to that row.                                                  |
| `Shift` & `Down Arrow`    | Selects the row below. When multiple selection is enabled, extends the selection to that row.                                                  |

The Grid column header cells support the following keyboard shortcuts:

| SHORTCUT                                  | DESCRIPTION                                                                                                                                                                                                                       |
| :---------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Enter`                                   | If the column is sortable, triggers the action associated with clicking the header cell - either sorts the data by the respective field, changes the sorting direction, or unsorts, depending on current state and configuration. |
| `Alt` & `Down Arrow`                      | Opens the Filter or Column Menu when the respective header cell is focused. Traps the focus within the opened menu container.                                                                                                     |
| `Ctrl` & `Space` / `Cmd` & `Enter`(MacOS) | If the column is groupable, groups/ungroups the data by the column field.                                                                                                                                                         |
| `Ctrl`/`Cmd`(MacOS) & `RightArrow`        | Reorders the column with the next one (if such is available).                                                                                                                                                                     |
| `Ctrl`/`Cmd`(MacOS) & `LeftArrow`         | Reorders the column with the previous one (if such is available).                                                                                                                                                                 |

The Grid Filter Menu supports the following keyboard shortcuts<sup>\*</sup>:

| SHORTCUT             | DESCRIPTION                                                                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| `Alt` & `Down Arrow` | Opens the Filter Menu when the respective header cell is focused. Traps the focus within the opened menu container.               |
| `Escape`             | Closes the Filter Menu and returns the focus to its parent header cell.                                                           |
| `Tab`                | Moves the focus to the next focusable menu element. When tabbing out of the last element, the first element is focused.           |
| `Shift` & `Tab`      | Moves the focus to the previous focusable menu element. When shift-tabbing out of the first element, the last element is focused. |
| `Enter`              | Triggers filtering by the current criteria and closes the menu when the filter is not empty.                                      |

<sup>\*</sup>All inner Filter Menu components follow their own keyboard navigation behavior when focused.

Here is a demo of the Filter Menu with an active keyboard navigation:

{% meta height:490 %}
{% embed_file keyboard-filtering/app.tsx preview %}
{% embed_file keyboard-filtering/main.tsx %}
{% embed_file keyboard-filtering/gd-sample-products.ts %}
{% endmeta %}

The Grid Column Menu supports the following keyboard shortcuts<sup>\*</sup>:

| SHORTCUT             | DESCRIPTION                                                                                                                                                                |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Alt` & `Down Arrow` | Opens the Column Menu when the respective header cell is focused. Traps the focus within the opened menu container.                                                        |
| `Escape`             | Closes the Column Menu and returns the focus to its parent header cell.                                                                                                    |
| `Tab`                | Moves the focus to the next focusable menu element. When tabbing out of the last element, the first element is focused.                                                    |
| `Shift` & `Tab`      | Moves the focus to the previous focusable menu element. When shift-tabbing out of the first element, the last element is focused.                                          |
| `Enter`              | Triggers the default action, associated with the focused menu item or expands/collapses an expandable item like the Filter, Column Chooser, and Set Column Position items. |

<sup>\* All inner components within the column menu Filter item follow their own keyboard navigation behavior when focused.</sup>

The Grid Pager supports the following keyboard shortcuts<sup>\*</sup>:

| SHORTCUT                     | DESCRIPTION                                                                                                                                                                                                                                 |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Enter`                      | When the Pager wrapper is focused, moves the focus to the first focusable pager element. When an inner Pager element is focused, triggers the default action, associated with this element.                                                 |
| `Escape`                     | When an inner Pager element is focused, brings the focus to the Pager wrapper. If the focused inner component has an open popup, `Escape` will close the popup. Pressing `Escape` again will focus the Pager wrapper.                       |
| `Tab`                        | When an inner Pager element is focused, moves the focus between the focusable Pager elements sequentially. The focus is trapped and tabbing out of the last focusable element, focuses the first focusable element.                         |
| `Shift` & `Tab`              | When an inner Pager element is focused, moves the focus between the focusable Pager elements sequentially in reversed order. The focus is trapped and shift-tabbing out of the first focusable element, focuses the last focusable element. |
| `Left Arrow` or `Page Up`    | When the Pager wrapper is focused, loads the previous page of data, if any.                                                                                                                                                                 |
| `Right Arrow` or `Page Down` | When the Pager wrapper is focused, loads the next page of data, if any.                                                                                                                                                                     |
| `Home`                       | When the Pager wrapper is focused, loads the first page of data (if the current page is not the first one).                                                                                                                                 |
| `End`                        | When the Pager wrapper is focused, loads the last page of data (if the current page is not the last one).                                                                                                                                   |

<sup>\* All inner components within the Pager follow their own keyboard navigation behavior when focused.</sup>

The Grid toolbars support the following keyboard shortcuts<sup>\*</sup>:

| SHORTCUT           | DESCRIPTION                                                                                                                                                                                |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Left/Right Arrow` | Focuses the previous/next focusable element in the toolbar. Focus is wrapped, meaning it will go from the last to first focusable element and vice-versa depending on the end user action. |
| `Tab`              | Focuses the next navigable Grid section, or the next focusable element on the page.                                                                                                        |
| `Shift + Tab`      | Focuses the previous navigable Grid section, or the previous focusable element on the page.                                                                                                |

<sup>\* All inner components within the toolbars follow their own keyboard navigation behavior when focused.</sup>

When a Grid cell contains focusable components, the Grid supports the following shortcuts:

| SHORTCUT          | DESCRIPTION                                                                                                                |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------- |
| `Enter` or `F2`   | Disables the keyboard navigation of the Grid and places the focus on the first widget.                                     |
| `Escape`          | Restores the keyboard navigation of the Grid. If the content was in the process of editing, the unsaved edits are removed. |
| `Tab`             | Moves the focus to the next focusable component in the current row.                                                        |
| `Shift` & `Tab`   | Moves the focus to the previous focusable component in the current row.                                                    |
| Alphanumeric keys | If the cell contains editable content, places the focus in an input field&mdash;for example, a textbox.                    |

## Keyboard Navigation With Editing

To configure the keyboard navigation of a Grid with enabled data editing, you need to explicitly set the editing type in its `navigatable` property.

Below you can see keyboard navigation examples of the Grid in the following editing modes:

-   [Inline Editing - Keyboard Navigation](#inline-editing-keyboard-navigation)
-   [In-Cell Editing - Keyboard Navigation](#in-cell-editing-keyboard-navigation)
-   [Popup Editing - Keyboard Navigation](#popup-editing-keyboard-navigation)

### Inline Editing - Keyboard Navigation

To properly set the keyboard navigation in this editing mode, you need to define the Grid as follows:

```jsx-no-run
    <Grid
        navigatable={{mode: 'inline' as NavigatableMode }}
        .............
```

{% meta height:600 %}
{% embed_file keyboard-navigation-inline/app.tsx preview %}
{% embed_file keyboard-navigation-inline/main.tsx %}
{% embed_file keyboard-navigation-inline/myDropDownCell.tsx %}
{% endmeta %}

With the above configuration, the following shortcuts become available when the component enters editing mode:

| SHORTCUT | DESCRIPTION                                     |
| :------- | :---------------------------------------------- |
| `Tab`    | Moves the cursor to the next editor in the row. |
| `Escape` | Cancels the row edit.                           |

### In-Cell Editing - Keyboard Navigation

To properly set the keyboard navigation in this editing mode, you need to define the Grid as follows:

```jsx-no-run
    <Grid
        navigatable={{mode: 'incell' as NavigatableMode }}
        .............
```

{% meta height:490 %}
{% embed_file keyboard-navigation-incell/app.tsx preview %}
{% embed_file keyboard-navigation-incell/main.tsx %}
{% embed_file keyboard-navigation-incell/renderers.tsx %}
{% embed_file keyboard-navigation-incell/gd-sample-products.ts %}
{% endmeta %}

With this configuration, the following shortcuts become available when the component enters editing mode:

| SHORTCUT      | DESCRIPTION                                                                                                  |
| :------------ | :----------------------------------------------------------------------------------------------------------- |
| `Tab`         | Moves to the next editor in the row (closing the current editor).                                            |
| `Shift + Tab` | Moves to the previous editor in the row (closing the current editor).                                        |
| `Enter`       | Commits changes for the edited item, and moves focus to the same cell on the row below, opening it for edit. |
| `Escape`      | Cancels the edit. The focus goes to the current cell.                                                        |

### Popup Editing - Keyboard Navigation

To properly set the keyboard navigation in this editing mode, you need to define the Grid as follows:

```jsx-no-run
    <Grid
        navigatable={true}
        .............
```

{% meta height:480 %}
{% embed_file keyboard-navigation-popup/app.tsx preview %}
{% embed_file keyboard-navigation-popup/main.tsx %}
{% embed_file keyboard-navigation-popup/editForm.tsx %}
{% endmeta %}

With this configuration, once the external editing form is visible, the first editor in it is focused and the following shortcuts become available:

| SHORTCUT      | DESCRIPTION                                                                            |
| :------------ | :------------------------------------------------------------------------------------- |
| `Tab`         | Moves to the next editor in the form.                                                  |
| `Shift + Tab` | Moves to the previous editor in the form.                                              |
| `Enter`       | Triggers a submit action for the editor, including validation.                         |
| `Escape`      | Closes the editor. The focus goes to the command cell from where the popup was opened. |

## Suggested Links

-   [API Reference of the Grid]({% slug api_grid_grid %})
-   [API Index of the Grid]({% slug api_grid %})
-   [The navigatable Property]({% slug api_grid_gridprops %}#toc-navigatable)
