---
title: Available Codemods
description: 'Check how to migrate your KendoReact packages from v10 to the latest.'
components: ['general']
slug: available_codemods
position: 3
tag: new
release_tag: Q3 2026
---

# Available Codemods

This page outlines the available codemods for migrating from KendoReact v10.0.0 to each version up until the latest.

<Row>
  <Column count={[24,24,8]} style={{marginBottom: "1rem"}}>
    <Component className="tile" href="#kendoreact-v15-0-0-to-v16-0-0">
      <ComponentTitle>From v15 to v16</ComponentTitle>
    </Component>
  </Column>
  <Column count={[24,24,8]} style={{marginBottom: "1rem"}}>
    <Component className="tile" href="#kendoreact-v14-0-0-to-v15-0-0">
      <ComponentTitle>From v14 to v15</ComponentTitle>
    </Component>
  </Column>
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

## KendoReact v15.0.0 to v16.0.0

### Quick Guide

To migrate a specific KendoReact package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-<package-name> --from=15 --to=16
```

> If not already installed, you will be prompted to install the Kendo CLI when running this command for the first time.

### Data Grid

To migrate the Data Grid package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-grid --from=15 --to=16
```

The following table outlines the specific Data Grid codemod transformations:

| Codemod                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Grid grouping row rendering detection` | Detects usage of the `GridGroupCell` grouping-row CSS classes affected by the v16.0.0 rendering change and surfaces AI migration instructions. This codemod does not modify source code. The grouping row text content format also changed — group rows now display the column title as a prefix before the field value (e.g., `"Product Name: Alice Mutton"` instead of `"Alice Mutton"`). Update any test assertions or code that reads grouping row text to account for the `"[Field Title]: [Value]"` format. |

### Barcodes

To migrate the Barcodes package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-barcodes --from=15 --to=16
```

The following table outlines the specific Barcodes codemod transformations:

| Codemod                   | Description                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Barcode ref type rename` | Renames `Barcode` and `QRCode` ref/type references to `BarcodeHandle` and `QRCodeHandle` respectively, preserving the value imports and JSX usage. |

### Buttons

To migrate the Buttons package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-buttons --from=15 --to=16
```

The following table outlines the specific Buttons codemod transformations:

| Codemod                                          | Description                                                                                                                                                                                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Buttons ARIA role rendering detection`          | Detects usage of `role="menu"` and `role="menuitem"` attributes affected by the v16.0.0 DropDownButton/SplitButton rendering change and surfaces AI migration instructions. This codemod does not modify source code.                                |
| `SegmentedControl text span rendering detection` | Detects usage of the `k-segmented-control-button-text` CSS class affected by the v16.0.0 change where the span is no longer rendered when the `text` prop is falsy and surfaces AI migration instructions. This codemod does not modify source code. |

### DateInputs

To migrate the DateInputs package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-dateinputs --from=15 --to=16
```

The following table outlines the specific DateInputs codemod transformations:

| Codemod                                  | Description                                                                                                                                                                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Calendar ARIA role rendering detection` | Detects usage of `role="grid"`, `role="table"`, `role="gridcell"`, and `role="none"` attributes affected by the v16.0.0 Calendar rendering change and surfaces AI migration instructions. This codemod does not modify source code. |

### Editor

To migrate the Editor package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-editor --from=15 --to=16
```

The following table outlines the specific Editor codemod transformations:

| Codemod                  | Description                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| `Editor ref type rename` | Renames `Editor` and `EditorClassComponent` ref/type references to `EditorHandle`, preserving the `Editor` value import and JSX usage. |

### Inputs

To migrate the Inputs package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-inputs --from=15 --to=16
```

The following table outlines the specific Inputs codemod transformations:

| Codemod                           | Description                                                                                                                                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FlatColorPicker prop rename`     | Renames the `FlatColorPicker` props `_gradientSettings` and `_paletteSettings` to `gradientSettings` and `paletteSettings`.                                                                                                             |
| `ColorPicker rendering detection` | Detects usage of the `k-text-success` and `k-text-error` CSS classes on ColorPicker/FlatColorPicker elements affected by the v16.0.0 rendering change and surfaces AI migration instructions. This codemod does not modify source code. |

### Scheduler

To migrate the Scheduler package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-scheduler --from=15 --to=16
```

The following table outlines the specific Scheduler codemod transformations:

| Codemod                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SchedulerFormEditor removed props`         | Removes the `SchedulerFormEditorProps` properties that were removed in v16 (`descriptionError`, `descriptionLabel`, `endError`, `endTimezoneCheckedEditor`, `endTimezoneCheckedLabel`, `endTimezoneError`, `endTimezoneLabel`, `resourceLabel`, `resourcesError`, `startError`, `startTimezoneCheckedEditor`, `startTimezoneCheckedLabel`, `startTimezoneError`, `titleError`, `titleLabel`) from `SchedulerFormEditor` JSX usages and adds a TODO comment. |
| `SchedulerFormEditor type change review`    | Flags custom `allDayEditor`, `startTimezoneEditor`, and `endTimezoneEditor` overrides on `SchedulerFormEditor` whose expected component contract changed (`Checkbox` → `Switch`, `ComboBox` → `DropDownList`) and adds a TODO comment for manual review. Does not modify the attributes. This codemod does not modify source code beyond adding comments.                                                                                                   |
| `SchedulerItem onRemoveClick review`        | Flags `onRemoveClick` usages on `SchedulerItem`/`SchedulerTask`, which is no longer invoked internally in v16, and adds a TODO comment recommending migration to `SchedulerForm.onDelete`. Does not modify the attribute. This codemod does not modify source code beyond adding comments.                                                                                                                                                                  |
| `Scheduler date header rendering detection` | Detects usage of the `k-scheduler-date-day` and `k-nav-day` CSS classes affected by the v16.0.0 DateHeaderCell rendering change and surfaces AI migration instructions. This codemod does not modify source code.                                                                                                                                                                                                                                           |
| `Scheduler events rendering detection`      | Detects usage of `k-event-actions`, `k-event-delete`, and `k-event-time` CSS classes affected by the v16.0.0 event restructuring (actions wrapper and delete button removed; event title and time are now separate elements) and surfaces AI migration instructions. This codemod does not modify source code.                                                                                                                                              |
| `Scheduler edit form rendering detection`   | Detects usage of `k-scheduler-edit-dialog` and `k-is-allday-checkbox` CSS classes/IDs affected by the v16.0.0 edit form changes (dialog class removed; all-day editor changed from Checkbox to Switch) and surfaces AI migration instructions. This codemod does not modify source code.                                                                                                                                                                    |
| `Scheduler toolbar rendering detection`     | Detects usage of `k-scheduler-navigation`, `k-scheduler-tools`, and `k-views-dropdown` CSS classes affected by the v16.0.0 toolbar restructuring and surfaces AI migration instructions. This codemod does not modify source code.                                                                                                                                                                                                                          |

### Chat

To migrate the Chat package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui --from=15 --to=16
```

The following table outlines the specific Chat codemod transformations:

| Codemod                            | Description                                                                                                                                                                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Chat FileBox rendering detection` | Detects usage of `k-files-scroll` and `k-file-box` CSS classes affected by the v16.0.0 FileBox rendering change (role additions on the file list, scroll wrapper, and file items) and surfaces AI migration instructions. This codemod does not modify source code. |

### Dropdowns

To migrate the Dropdowns package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-dropdowns --from=15 --to=16
```

The following table outlines the specific Dropdowns codemod transformations:

| Codemod                           | Description                                                                                                                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MultiSelect rendering detection` | Detects usage of the `k-custom-item` CSS class affected by the v16.0.0 MultiSelect custom-value rendering change (`k-list-item k-custom-item` replaced by `k-list-custom-value`) and surfaces AI migration instructions. This codemod does not modify source code. |

### Layout

To migrate the Layout package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-layout --from=15 --to=16
```

The following table outlines the specific Layout codemod transformations:

| Codemod                    | Description                                                                                                                                                                                                                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Menu rendering detection` | Detects usage of the `k-menu-group-md` CSS class affected by the v16.0.0 Menu submenu rendering change (size modifier and `k-group`/`k-reset` classes removed from submenu list) and surfaces AI migration instructions. This codemod does not modify source code. |

### TreeList

To migrate the TreeList package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-treelist --from=15 --to=16
```

The following table outlines the specific TreeList codemod transformations:

| Codemod                              | Description                                                                                                                                                                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TreeList ref & event handle rename` | Renames `TreeList`, `TreeListHeaderSelectionCell`, `TreeListDraggableRow`, and `TreeListNoRecords` ref and event generic type references to their respective `TreeListHandle`, `TreeListHeaderSelectionCellHandle`, `TreeListDraggableRowHandle`, and `TreeListNoRecordsHandle` types. |

### TreeView

To migrate the TreeView package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-treeview --from=15 --to=16
```

The following table outlines the specific TreeView codemod transformations:

| Codemod                    | Description                                                                                                                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TreeView ref type rename` | Renames `TreeView` and `TreeViewClassComponent` ref/type references to `TreeViewHandle`, and `TreeViewDragClue` type references to `TreeViewDragClueHandle`, preserving value imports and JSX usage. |

### Upload

To migrate the Upload package from v15.0.0 to v16.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-upload --from=15 --to=16
```

The following table outlines the specific Upload codemod transformations:

| Codemod                            | Description                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Upload ref & event handle rename` | Renames `UploadClassComponent`, `useRef<Upload>()` ref type references, and the `Upload` generic on `BaseUploadEvent`-based events (`UploadOnAddEvent`, `UploadOnBeforeRemoveEvent`, `UploadOnBeforeUploadEvent`, `UploadOnCancelEvent`, `UploadOnProgressEvent`, `UploadOnRemoveEvent`, `UploadOnStatusChangeEvent`) to `UploadHandle`. |

## KendoReact v14.0.0 to v15.0.0

### Quick Guide

To migrate a specific KendoReact package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-<package-name> --from=14 --to=15
```

> If not already installed, you will be prompted to install the Kendo CLI when running this command for the first time.

### Buttons

To migrate the Buttons package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-buttons --from=14 --to=15
```

The following table outlines the specific Buttons codemod transformations:

| Codemod                         | Description                                                                                                                                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `themeColor type narrowing`     | Removes unsupported `themeColor` values (`'dark'`, `'light'`) from `Button`, `DropDownButton`, and `SplitButton`. Adds a TODO comment indicating the removed value.                                      |
| `FAB themeColor type narrowing` | Removes unsupported `themeColor` values (`'info'`, `'success'`, `'warning'`, `'error'`, `'dark'`, `'light'`, `'inverse'`) from `FloatingActionButton`. Adds a TODO comment indicating the removed value. |

### Common (SVG Icons)

To migrate the Common package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-common --from=14 --to=15
```

The following table outlines the specific Common codemod transformations:

| Codemod                          | Description                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Icon rename`                    | <ul><li>Renames removed/deprecated SVG icon imports from `@progress/kendo-svg-icons` v4 to v5 (167 icons).</li><li>Updates import specifiers (e.g., `caretAltDownIcon` → `chevronDownIcon`).</li><li>Updates `icon` string props (e.g., `icon="caret-alt-down"` → `icon="chevron-down"`).</li><li>Adds TODO comments for 6 icons removed without replacement.</li><li>Deduplicates imports after renames.</li></ul> |
| `Icon themeColor type narrowing` | Removes unsupported `themeColor` values (`'dark'`, `'light'`) from `Icon` and `SvgIcon`. Adds a TODO comment indicating the removed value.                                                                                                                                                                                                                                                                          |

### Indicators

To migrate the Indicators package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-indicators --from=14 --to=15
```

The following table outlines the specific Indicators codemod transformations:

| Codemod                            | Description                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Badge themeColor type narrowing`  | Removes unsupported `themeColor` values (`'dark'`, `'light'`, `'inverse'`, `'inherit'`) from `Badge`. Adds a TODO comment indicating the removed value.                                    |
| `Loader themeColor type narrowing` | Removes unsupported `themeColor` values (`'info'`, `'success'`, `'warning'`, `'error'`, `'dark'`, `'light'`, `'inverse'`) from `Loader`. Adds a TODO comment indicating the removed value. |

### Layout

To migrate the Layout package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-layout --from=14 --to=15
```

The following table outlines the specific Layout codemod transformations:

| Codemod                                      | Description                                                                                                                                                                                |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `AppBar themeColor type narrowing`           | Removes unsupported `themeColor` values (`'info'`, `'success'`, `'warning'`, `'error'`, `'dark'`, `'light'`, `'inherit'`) from `AppBar`. Adds a TODO comment indicating the removed value. |
| `Avatar themeColor type narrowing`           | Removes unsupported `themeColor` values (`'info'`, `'success'`, `'warning'`, `'error'`, `'dark'`, `'light'`, `'inverse'`) from `Avatar`. Adds a TODO comment indicating the removed value. |
| `BottomNavigation themeColor type narrowing` | Removes unsupported `themeColor` values (`'info'`, `'success'`, `'warning'`, `'error'`, `'dark'`, `'light'`) from `BottomNavigation`. Adds a TODO comment indicating the removed value.    |

### Tooltip

To migrate the Tooltip package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-tooltip --from=14 --to=15
```

The following table outlines the specific Tooltip codemod transformations:

| Codemod                       | Description                                                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TooltipHandle method rename` | Renames `handleMouseOver` to `handleMouseEnter` and `handleMouseOut` to `handleMouseLeave` on TooltipHandle member expressions and object properties. |

### Notification

To migrate the Notification package from v14.0.0 to v15.0.0, run the following command in your project root:

```bash
npx @progress/kendo-cli migrate @progress/kendo-react-notification --from=14 --to=15
```

The following table outlines the specific Notification codemod transformations:

| Codemod                                  | Description                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `Notification type.style type narrowing` | Removes unsupported `type.style` values (`'dark'`, `'light'`) from `Notification`. Adds a TODO comment indicating the removed value. |

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

### Grid

To migrate to the Grid latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-grid
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-grid --from=10 --to=11
```

All Grid codemods perform the following:

-   Find all KendoReact Grid components in your code. The transformations recognize custom import names as well.
-   Handle both class and functional components.
-   Preserve your existing code.
-   Add missing imports.

The following table outlines the specific Grid codemod transformations:

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

To migrate to the Date Inputs latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dateinputs
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-dateinputs --from=10 --to=11
```

The following table outlines the specific Date Inputs codemod transformations:

| Codemod                     | Description                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `New DateInputHandle type`  | (TypeScript-only) Migrates type annotations from the deprecated `DateInput` type to the new `DateInputHandle` type.   |
| `New DatePickerHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `DatePicker` type to the new `DatePickerHandle` type. |

### Dialogs

To migrate to the Dialogs latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dialogs
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
# Or migrate from v10 to v11.
npx @progress/kendo-cli migrate @progress/kendo-react-dialogs --from=10 --to=11
```

The following table outlines the specific Dialogs codemod transformations:

| Codemod                 | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `New DialogHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `Dialog` type to the new `DialogHandle` type. |
| `New WindowHandle type` | (TypeScript-only) Migrates type annotations from the deprecated `Window` type to the new `WindowHandle` type. |

### TreeList

To migrate to the TreeList latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-treelist
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
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

To migrate to the Chat latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
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

To migrate to the Dropdowns latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-dropdowns
```

To migrate the TreeList package to a specific version, run the following command in your project root:

```bash
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

To migrate to the Chat latest package version, run the following command in your project root:

```bash
# Migrate to the latest available package version.
npx @progress/kendo-cli migrate @progress/kendo-react-conversational-ui
```

To migrate the Chat package to a specific version, run the following command in your project root:

```bash
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
