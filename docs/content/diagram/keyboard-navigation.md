---
title: Keyboard Navigation
description: 'Use keyboard shortcuts and navigation in the KendoReact Diagram to enhance accessibility.'
slug: keyboard_navigation_diagram
position: 80
components: ['diagram']
---

# Keyboard Navigation

The [KendoReact Diagram](slug:overview_diagram) provides keyboard navigation support to enhance accessibility and improve user experience. Keyboard navigation is enabled by default, allowing users to perform diagram operations using keyboard shortcuts.

To disable keyboard navigation, set the [`navigable`](slug:api_diagram_diagramprops#navigable) prop to `false`.

## Keyboard Shortcuts

The following shortcuts are available for Diagram operations.

### Focus and Navigation

Use these shortcuts to move focus between Diagram elements and navigate the page.

| SHORTCUT (WINDOWS / MAC) | DESCRIPTION                                                |
| :----------------------- | :--------------------------------------------------------- |
| `Tab`                    | Focuses the Diagram and the first shape.                   |
| `Shift`+`Tab`            | Moves focus to the previous focusable element on the page. |
| `Right Arrow`            | Moves focus to the next shape or connection.               |
| `Left Arrow`             | Moves focus to the previous shape or connection.           |
| `Home`                   | Moves focus to the first item in the traversal order.      |
| `End`                    | Moves focus to the last item in the traversal order.       |

### Movement

Use these shortcuts to reposition selected shapes on the canvas.

| SHORTCUT (WINDOWS / MAC)                                   | DESCRIPTION                                            |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| `Ctrl`+`Up Arrow` / `Cmd`+`Up Arrow`                       | Moves the selected shape upward by a small step.       |
| `Ctrl`+`Down Arrow` / `Cmd`+`Down Arrow`                   | Moves the selected shape downward by a small step.     |
| `Ctrl`+`Left Arrow` / `Cmd`+`Left Arrow`                   | Moves the selected shape to the left by a small step.  |
| `Ctrl`+`Right Arrow` / `Cmd`+`Right Arrow`                 | Moves the selected shape to the right by a small step. |
| `Shift`+`Ctrl`+`Up Arrow` / `Shift`+`Cmd`+`Up Arrow`       | Moves the selected shape upward by a large step.       |
| `Shift`+`Ctrl`+`Down Arrow` / `Shift`+`Cmd`+`Down Arrow`   | Moves the selected shape downward by a large step.     |
| `Shift`+`Ctrl`+`Left Arrow` / `Shift`+`Cmd`+`Left Arrow`   | Moves the selected shape to the left by a large step.  |
| `Shift`+`Ctrl`+`Right Arrow` / `Shift`+`Cmd`+`Right Arrow` | Moves the selected shape to the right by a large step. |

The step values can be customized by passing a [`DiagramNavigationOptions`](slug:api_diagram_diagramnavigationoptions) object to the [`navigable`](slug:api_diagram_diagramprops#navigable) prop. The [`smallStep`](slug:api_diagram_diagramnavigationoptions#smallstep) property controls the movement distance for `Ctrl`+`Arrow Keys` / `Cmd`+`Arrow Keys`, and the [`largeStep`](slug:api_diagram_diagramnavigationoptions#largestep) property controls the movement distance for `Shift`+`Ctrl`+`Arrow Keys` / `Shift`+`Cmd`+`Arrow Keys`.

### Selection

Use these shortcuts to select or deselect Diagram elements.

| SHORTCUT (WINDOWS / MAC) | DESCRIPTION                                        |
| :----------------------- | :------------------------------------------------- |
| `Ctrl`+`A` / `Cmd`+`A`   | Selects all shapes and connections in the Diagram. |
| `Escape`                 | Deselects all shapes and connections.              |

### Editing

Use these shortcuts to copy, cut, paste, duplicate, and delete Diagram elements.

| SHORTCUT (WINDOWS / MAC) | DESCRIPTION                                      |
| :----------------------- | :----------------------------------------------- |
| `Ctrl`+`C` / `Cmd`+`C`   | Copies the selected shapes and connections.      |
| `Ctrl`+`X` / `Cmd`+`X`   | Cuts the selected shapes and connections.        |
| `Ctrl`+`V` / `Cmd`+`V`   | Pastes the copied or cut shapes and connections. |
| `Ctrl`+`D` / `Cmd`+`D`   | Duplicates the selected shapes and connections.  |
| `Delete` / `Backspace`   | Deletes the selected shapes and connections.     |

### Actions

Use these shortcuts to undo, redo, and apply layout changes.

| SHORTCUT (WINDOWS / MAC) | DESCRIPTION                                   |
| :----------------------- | :-------------------------------------------- |
| `Ctrl`+`Z` / `Cmd`+`Z`   | Undoes the last action.                       |
| `Ctrl`+`Y` / `Cmd`+`Y`   | Redoes the previously undone action.          |
| `Ctrl`+`L` / `Cmd`+`L`   | Applies the configured layout to the Diagram. |

The following example demonstrates keyboard navigation in the Diagram. Use `Tab` to focus the first shape, arrow keys to move between shapes, and `Ctrl`/`Cmd` + arrow keys to reposition selected shapes.

<demo metaUrl="diagram/keyboard-navigation/basic/" height="500"></demo>

## Suggested Links

-   [API Reference of the Diagram](slug:api_diagram)
-   [Accessibility](slug:accessibility_diagram)
