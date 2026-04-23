---
title: Available Codemods
description: 'Check how to migrate your KendoReact packages from v10 to the latest.'
components: ['general']
slug: available_codemods
position: 3
tag: new
---

# Available Codemods

This page outlines the available codemods for migrating from KendoReact v10.0.0 to each version up until the latest.

<Row>
  <Column count={[24,24,8]} style={{marginBottom: "1rem"}}>
    <Component className="tile" href="#kendoreact-v10-0-0-to-v11-0-0">
      <ComponentTitle>From v10 to v11</ComponentTitle>
    </Component>
  </Column>
  <Column count={[24,24,8]} style={{marginBottom: "1rem"}}>
    <Component className="tile" href="#kendoreact-v11-0-0-to-v12-0-0">
      <ComponentTitle>From v11 to v12</ComponentTitle>
    </Component>
  </Column>
  <Column count={[24,24,8]} style={{marginBottom: "1rem"}}>
    <Component className="tile" href="#kendoreact-v13-0-0-to-v14-0-0">
      <ComponentTitle>From v13 to v14</ComponentTitle>
    </Component>
  </Column>
</Row>

## KendoReact v10.0.0 to v11.0.0

### Quick Guide

To migrate a specific KendoReact package from v10.0.0 to v11.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-<package-name> --from=10 --to=11
```

> If not already installed, you will be prompted to install the Kendo CLI when running this command for the first time.

This command will check for available updates for the specified package and its peer dependencies that are already present in the project, prompt you to install them, and apply all relevant codemods.

### Best Practices

For a more manageable migration process, consider the following recommended practices:

-   Migrate between consecutive major versions. For example, migrate from v10 to v11. This lets you review and adjust your code version by version, avoiding possible conflicts between breaking changes.
-   Migrate one package at a time. This provides finer control over the migration process.

### Data Grid

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-grid

# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-grid --from=10 --to=11
```

All Data Grid codemods perform the following:

-   Find all KendoReact Grid components in your code. The transformations recognize custom import names as well.
-   Handle both class and functional components.
-   Preserve your existing code.
-   Add missing imports.

The following table outlines the specific Data Grid codemod transformations:

| Codemod                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `New custom cell`                   | Migrates from the deprecated `cellRender` prop to the new `cells` prop:<ul><li>Removes the `cellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomCell` or similar if that name is taken).</li><li>Imports `GridCustomCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `New custom column cell`            | Migrates from the deprecated `cell` prop to the new `cells` prop:<ul><li>Removes the `cell` attribute from the column.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomColumnCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `cell` prop value.</li><li>Imports `GridCustomCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                                                            |
| `New custom column filter cell`     | Migrates from the deprecated `filterCell` prop to the new `cells` prop:<ul><li>Removes the `filterCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `filterCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnFilterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `filterCell` prop value.</li><li>Imports `GridCustomFilterCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                      |
| `New custom column footer cell`     | Migrates from the deprecated `footerCell` prop to the new `cells` prop:<ul><li>Removes the `footerCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `footerCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnFooterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `footerCell` prop value.</li><li>Imports `GridCustomFooterCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                      |
| `New custom column header cell`     | Migrates from the deprecated `headerCell` prop to the new `cells` prop:<ul><li>Removes the `headerCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `headerCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnHeaderCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `headerCell` prop value.</li><li>Imports `GridCustomHeaderCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                      |
| `New detail expand state mechanism` | Migrates from the deprecated `onExpandChange` event handler to the new controlled component pattern using the `detailExpand` state and the `onDetailExpandChange` event handler:<ul><li>Removes the `onExpandChange` attribute and preserves the original value as a comment in the new handler.</li><li>For class components, adds `detailExpand` to the component state and creates a class method to handle the detail expansion changes.</li><li>For functional components, adds a `React.useState` hook for the `detailExpand` state and creates an arrow function to handle the detail expansion changes.</li><li>Adds `detailExpand` or `onDetailExpandChange` to the Grid.</li><li>Imports `GridDetailExpandChangeEvent` and `DetailExpandDescriptor`.</li></ul>                                                         |
| `New edit state mechanism`          | Migrates from the deprecated `editField` prop to the new controlled component pattern using the `edit` state and event handlers:<ul><li>Removes the `editField` attribute and saves its value as a comment.</li><li>Sets the `editable={true}` prop if not set.</li><li>Adds `dataItemKey`, if missing.</li><li>For class components, adds `edit` to the component state and creates a class method to handle the edit changes.</li><li>For functional components, adds a `React.useState` hook for the `edit` state and creates an arrow function to handle the edit changes.</li><li>Imports `GridItemChangeEvent`, `GridEditChangeEvent`, and `EditDescriptor`.                                                                                                                                                               |
| `New custom filter cell`            | Migrates from the deprecated `filterCellRender` prop to the new `cells` prop:<ul><li>Removes the `filterCellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomFilterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `filterCellRender` prop value.</li><li>Imports `GridCustomFilterCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                                  |
| `New group expand state mechanism`  | Migrates from the deprecated `onExpandChange` event handler to the new controlled component pattern using `groupExpand` state and `onGroupExpandChange` event handlers.<ul><li>Removes the deprecated `onExpandChange` attribute.</li><li>Adds new `groupExpand` state to track group expansion.</li><li>Adds new `onGroupExpandChange` handler that updates the state.</li><li>For class components, adds `groupExpand` to the component state and creates a class method to handle the group expansion changes.</li><li>For functional components, adds a `React.useState` hook for the `groupExpand` state and creates an arrow function to handle the group expansion changes.</li><li>Adds `groupExpand` and `handleGroupExpand` props.</li><li>Imports `GroupExpandDescriptor` and `GridGroupExpandChangeEvent`.</li></ul> |
| `New custom header cell`            | Migrates from the deprecated `headerCellRender` prop to the new `cells` prop:<ul><li>Removes the deprecated `headerCellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomHeaderCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `headerCellRender` prop value.</li><li>Imports `GridCustomHeaderCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                       |
| `New custom row`                    | Migrates from the deprecated `rowRender` prop to the new `rows` prop:<ul><li>Removes the deprecated `rowRender` attribute.</li><li>Adds a new `rows` attribute pointing to a custom row renderer method.</li><li>Creates a new custom row renderer method (named `CustomRow` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `rowRender` prop value.</li><li>Imports `GridCustomRowProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                                            |
| `New selection state mechanism`     | Migrates from the deprecated `selectedField` prop to the new controlled component pattern using `select` state and `onSelectionChange` event handlers.<ul><li>Removes the deprecated `selectedField` attribute.</li><li>Sets the `selectable={true}` prop if not set.</li><li>Adds `dataItemKey`, if missing.</li><li>For class components, adds `select` to the component state and creates a class method to handle the selection changes.</li><li>For functional components, adds a `React.useState` hook for the `select` state and creates an arrow function to handle the selection changes.</li><li>Adds `select` and `onSelectionChange` props.</li><li>Imports `SelectDescriptor` and `GridSelectionChangeEvent`.</li></ul>                                                                                             |

### Date Inputs

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dateinputs

# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-dateinputs --from=10 --to=11
```

The following table outlines the specific Date Inputs codemod transformations:

| Codemod                     | Description                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `New DateInputHandle type`  | (TypeScript-only) Migrates type annotations from the deprecated `DateInput` type to the new `DateInputHandle` type.   |
| `New DatePickerHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `DatePicker` type to the new `DatePickerHandle` type. |

### Dialogs

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dialogs

# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-dialogs --from=10 --to=11
```

The following table outlines the specific Dialogs codemod transformations:

| Codemod                 | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `New DialogHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `Dialog` type to the new `DialogHandle` type. |
| `New WindowHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `Window` type to the new `WindowHandle` type. |

### TreeList

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-treelist

# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-treelist --from=10 --to=11
```

The following table outlines the specific TreeList codemod transformations:

| Codemod                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `New custom cell`               | Migrates from the deprecated `cellRender` prop to the new `cells` prop:<ul><li>Removes the `cellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomCell` or similar if that name is taken).</li><li>Imports `TreeListCustomCellProps`.</li></ul>                                                                                                                                                                                                                                                                                                                                                                       |
| `New custom column cell`        | Migrates from the deprecated `cell` prop to the new `cells` prop:<ul><li>Removes the `cell` attribute from the column.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomColumnCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `cell` prop value.</li><li>Imports `TreeListCustomCellProps`.</li></ul>                                                                                                                                                                                                                                                                            |
| `New custom column filter cell` | Migrates from the deprecated `filterCell` prop to the new `cells` prop:<ul><li>Removes the `filterCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `filterCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnFilterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `filterCell` prop value.</li><li>Imports `TreeListCustomFilterCellProps`.</li></ul>                                                                                                                                                                                                                      |
| `New custom column footer cell` | Migrates from the deprecated `footerCell` prop to the new `cells` prop:<ul><li>Removes the `footerCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `footerCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnFooterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `footerCell` prop value.</li><li>Imports `TreeListCustomFooterCellProps`.</li></ul>                                                                                                                                                                                                                      |
| `New custom column header cell` | Migrates from the deprecated `headerCell` prop to the new `cells` prop:<ul><li>Removes the `headerCell` attribute from the column.</li><li>Adds a new `cells` attribute with a `headerCell` property pointing to a custom method.</li><li>Creates a new custom cell method (named `CustomColumnHeaderCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `headerCell` prop value.</li><li>Imports `TreeListCustomHeaderCellProps`.</li></ul>                                                                                                                                                                                                                      |
| `New edit state mechanism`      | Migrates from the deprecated `editField` prop to the new controlled component pattern using the `edit` state and event handlers:<ul><li>Removes the `editField` attribute and saves its value as a comment.</li><li>Sets the `editable={true}` prop if not set.</li><li>Adds `dataItemKey`, if missing.</li><li>For class components, adds `edit` to the component state and creates a class method to handle the edit changes.</li><li>For functional components, adds a `React.useState` hook for the `edit` state and creates an arrow function to handle the edit changes.</li><li>Imports `TreeListItemChangeEvent`, `TreeListEditChangeEvent`, and `EditDescriptor`.</li></ul>                                 |
| `New expand state mechanism`    | Migrates from the deprecated `onExpandChange` event handler to the new controlled component pattern using the `expand` state and the `onExpandChange` event handler:<ul><li>Removes the deprecated `onExpandChange` attribute and preserves the original value as a comment in the new handler.</li><li>For class components, adds `expand` to the component state and creates a class method to handle the expansion changes.</li><li>For functional components, adds a `React.useState` hook for the `expand` state and creates an arrow function to handle the expansion changes.</li><li>Adds `expand` and `onExpandChange` props.</li><li>Imports `TreeListExpandChangeEvent` and `ExpandDescriptor`.</li></ul> |
| `New custom filter cell`        | Migrates from the deprecated `filterCellRender` prop to the new `cells` prop:<ul><li>Removes the `filterCellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomFilterCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `filterCellRender` prop value.</li><li>Imports `TreeListCustomFilterCellProps`.</li></ul>                                                                                                                                                                                                                                                  |
| `New custom header cell`        | Migrates from the deprecated `headerCellRender` prop to the new `cells` prop:<ul><li>Removes the deprecated `headerCellRender` attribute.</li><li>Adds a new `cells` attribute pointing to a custom cell method.</li><li>Creates a new custom cell method (named `CustomHeaderCell` or similar if that name is taken).</li><li>Adds a comment in the new method showing the original `headerCellRender` prop value.</li><li>Imports `TreeListCustomHeaderCellProps`.</li></ul>                                                                                                                                                                                                                                       |

## KendoReact v11.0.0 to v12.0.0

### Quick Guide

To migrate a specific KendoReact package from v11.0.0 to v12.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-<package-name> --from=11 --to=12
```

> If not already installed, you will be prompted to install the Kendo CLI when running this command for the first time.

This command will check for available updates for the specified package and its peer dependencies that are already present in the project, prompt you to install them, and apply all relevant codemods.

### Best Practices

For a more manageable migration process, consider the following recommended practices:

-   Migrate between consecutive major versions. For example, migrate from v11 to v12. This lets you review and adjust your code version by version, avoiding possible conflicts between breaking changes.
-   Migrate one package at a time. This provides finer control over the migration process.

### Chat

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui

# Or migrate from v11 to v12.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui --from=11 --to=12
```

All Chat codemods perform the following:

-   Find all KendoReact Chat components in your code. The transformations recognize custom import names as well.
-   Preserve your existing code.

The following table outlines the specific Chat codemod transformations:

| Codemod                         | Description                                                                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `New onSendMessage handler`     | Renames `onMessageSend` to `onSendMessage`.                                                                                                                                           |
| `New authorId attribute`        | Replaces `user` attribute with `authorId`, including lifting inline objects to variables if necessary.                                                                                |
| `New messageTemplate attribute` | Renames `message` attribute to `messageTemplate`.                                                                                                                                     |
| `New ChatSendMessageEvent type` | (TypeScript-only) Replaces type annotations from the deprecated `ChatMessageSendEvent` type to the new `ChatSendMessageEvent` type.                                                   |
| `Deprecated toolbar attributes` | <ul><li>Removes `showToolbar` attribute from the Chat.</li><li>Removes `onToolbarActionExecute` attribute from the Chat.</li><li>Removes `toolbar` attribute from the Chat.</li></ul> |

## KendoReact v13.0.0 to v14.0.0

### Quick Guide

To migrate a specific KendoReact package from v13.0.0 to v14.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-<package-name> --from=13 --to=14
```

> If not already installed, you will be prompted to install the Kendo CLI when running this command for the first time.

This command will check for available updates for the specified package and its peer dependencies that are already present in the project, prompt you to install them, and apply all relevant codemods.

### Best Practices

For a more manageable migration process, consider the following recommended practices:

-   Migrate between consecutive major versions. For example, migrate from v13 to v14. This lets you review and adjust your code version by version, avoiding possible conflicts between breaking changes.
-   Migrate one package at a time. This provides finer control over the migration process.

### Dropdowns

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dropdowns

# Or migrate from v13 to v14.
npx @progress/kendo-cli migrate @progress/kendo-react-dropdowns --from=13 --to=14
```

All Dropdowns codemods perform the following:

-   Find all affected Dropdown components (`ComboBox`, `DropDownList`, `MultiSelect`, `MultiColumnComboBox`, `AutoComplete`) in your code. The transformations recognize custom import names as well.
-   Preserve your existing code.

The following table outlines the specific Dropdowns codemod transformations:

| Codemod                          | Description                                                                                                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Deprecated groupMode attribute` | Removes the deprecated `groupMode` prop from `ComboBox`, `DropDownList`, `MultiSelect`, `MultiColumnComboBox`, and `AutoComplete` components. Modern grouping is now the only available mode. |

### Chat

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui

# Or migrate from v13 to v14.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui --from=13 --to=14
```

All Chat codemods perform the following:

-   Find all KendoReact Chat components in your code. The transformations recognize custom import names as well.
-   Preserve your existing code.

The following table outlines the specific Chat codemod transformations:

| Codemod                                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Deprecated sendButton in messageBoxTemplate` | Removes the `sendButton` property from the `messageBoxTemplate` render function:<ul><li>Removes `sendButton` from destructured parameters (e.g., `({ sendButton, messageInput }) => ...` becomes `({ messageInput }) => ...`).</li><li>Removes `sendButton` from destructuring statements inside the function body.</li><li>Removes JSX usage of `{sendButton}` within the render function.</li></ul>The send button is now automatically rendered as part of the PromptBox component. |
| `Updated uploadConfig type`                   | Updates the `uploadConfig` prop from `UploadProps` to `UploadButtonProps`:<ul><li>Removes unsupported properties from the `uploadConfig` object.</li><li>Only the following properties are now supported: `multiple`, `accept`, and `restrictions`.</li><li>Properties like `saveUrl`, `removeUrl`, `autoUpload`, `batch`, and others are removed.</li></ul>                                                                                                                           |

## Suggested Links

-   [Keeping Up to Date](slug://up_to_date)
-   [Assisted Migration](slug://assisted_migration)
-   [KendoReact Changelog](/changelogs/ui-for-react)
-   [Breaking Changes](slug://versions-with-breaking-changes)
-   [Rendering Changes](slug://versions-with-rendering-changes)
