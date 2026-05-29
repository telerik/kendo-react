---
title: Supported Components
page_title: KendoReact WebMCP Supported Components
description: Explore all KendoReact components that support WebMCP tools, their available tool commands, and the conditions under which each tool is registered.
slug: web_mcp_supported_components
tags: webmcp, mcp
published: True
position: 5
---

# WebMCP Supported Components

This article lists all KendoReact components that expose WebMCP tools, their default tool names, and the conditions under which each tool is registered.

For general information about the WebMCP API and how to configure tool overrides, see the [WebMCP Tools Overview](slug:web_mcp_overview).

All tool names use the pattern `{dataName}_{component}_{action}` where `{dataName}` is the value you set in the `webMcp={{ dataName: '...' }}` prop.

> tip In the tables below, a condition "Always" indicates a tool that is enabled by default, regardless of component configuration. You can disable such tools by setting `enabled: false` in the `tools` override of the `webMcp` prop. For opt-in tools, the condition column notes this explicitly — you must set `enabled: true` to register them.

## AutoComplete

| Tool     | Default Name                     | Condition |
| -------- | -------------------------------- | --------- |
| `type`   | `{dataName}_autocomplete_type`   | Always    |
| `select` | `{dataName}_autocomplete_select` | Always    |
| `clear`  | `{dataName}_autocomplete_clear`  | Always    |

## Calendar

| Tool         | Default Name                      | Condition |
| ------------ | --------------------------------- | --------- |
| `navigate`   | `{dataName}_calendar_navigate`    | Always    |
| `selectDate` | `{dataName}_calendar_select_date` | Always    |

## CheckBox

| Tool       | Default Name                    | Condition |
| ---------- | ------------------------------- | --------- |
| `toggle`   | `{dataName}_checkbox_toggle`    | Always    |
| `setValue` | `{dataName}_checkbox_set_value` | Always    |

## ColorPicker

| Tool       | Default Name                       | Condition |
| ---------- | ---------------------------------- | --------- |
| `setValue` | `{dataName}_colorpicker_set_value` | Always    |
| `clear`    | `{dataName}_colorpicker_clear`     | Always    |

## ComboBox

| Tool     | Default Name                 | Condition |
| -------- | ---------------------------- | --------- |
| `open`   | `{dataName}_combobox_open`   | Always    |
| `type`   | `{dataName}_combobox_type`   | Always    |
| `select` | `{dataName}_combobox_select` | Always    |
| `clear`  | `{dataName}_combobox_clear`  | Always    |
| `close`  | `{dataName}_combobox_close`  | Always    |

## DatePicker

| Tool       | Default Name                      | Condition |
| ---------- | --------------------------------- | --------- |
| `setValue` | `{dataName}_datepicker_set_value` | Always    |
| `clear`    | `{dataName}_datepicker_clear`     | Always    |

## DateRangePicker

| Tool       | Default Name                           | Condition |
| ---------- | -------------------------------------- | --------- |
| `setValue` | `{dataName}_daterangepicker_set_value` | Always    |
| `clear`    | `{dataName}_daterangepicker_clear`     | Always    |

## DateTimePicker

| Tool       | Default Name                          | Condition |
| ---------- | ------------------------------------- | --------- |
| `setValue` | `{dataName}_datetimepicker_set_value` | Always    |
| `clear`    | `{dataName}_datetimepicker_clear`     | Always    |

## Dialog

| Tool      | Default Name                | Condition |
| --------- | --------------------------- | --------- |
| `confirm` | `{dataName}_dialog_confirm` | Always    |
| `cancel`  | `{dataName}_dialog_cancel`  | Always    |

## Drawer

| Tool    | Default Name              | Condition |
| ------- | ------------------------- | --------- |
| `open`  | `{dataName}_drawer_open`  | Always    |
| `close` | `{dataName}_drawer_close` | Always    |

## DropDownList

| Tool     | Default Name                     | Condition |
| -------- | -------------------------------- | --------- |
| `open`   | `{dataName}_dropdownlist_open`   | Always    |
| `select` | `{dataName}_dropdownlist_select` | Always    |
| `close`  | `{dataName}_dropdownlist_close`  | Always    |

## DropDownTree

| Tool     | Default Name                     | Condition |
| -------- | -------------------------------- | --------- |
| `open`   | `{dataName}_dropdowntree_open`   | Always    |
| `expand` | `{dataName}_dropdowntree_expand` | Always    |
| `select` | `{dataName}_dropdowntree_select` | Always    |
| `clear`  | `{dataName}_dropdowntree_clear`  | Always    |
| `close`  | `{dataName}_dropdowntree_close`  | Always    |

## Editor

| Tool           | Default Name                      | Condition           |
| -------------- | --------------------------------- | ------------------- |
| `getContent`   | `{dataName}_editor_get_content`   | Disabled by default. Enable via `webMcp.tools` callback. |
| `setContent`   | `{dataName}_editor_set_content`   | `readOnly !== true` |
| `insertHtml`   | `{dataName}_editor_insert_html`   | `readOnly !== true` |
| `clearContent` | `{dataName}_editor_clear_content` | `readOnly !== true` |

## Gantt

| Tool            | Default Name                      | Condition                                                                           |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------------- |
| `filter`        | `{dataName}_gantt_filter`         | `filter` prop enabled                                                               |
| `clearFilters`  | `{dataName}_gantt_clear_filters`  | `filter` prop enabled                                                               |
| `sort`          | `{dataName}_gantt_sort`           | `sortable={true}`                                                                   |
| `clearSort`     | `{dataName}_gantt_clear_sort`     | `sortable={true}`                                                                   |
| `reorderColumn` | `{dataName}_gantt_reorder_column` | `reorderable={true}`                                                                |
| `resizeColumn`  | `{dataName}_gantt_resize_column`  | `resizable={true}`                                                                  |
| `changeView`    | `{dataName}_gantt_set_view`       | More than one view defined                                                          |
| `addTask`       | `{dataName}_gantt_add_task`       | `onAdd` callback present                                                            |
| `updateTask`    | `{dataName}_gantt_update_task`    | `onDataStateChange` callback present                                                |
| `deleteTask`    | `{dataName}_gantt_delete_task`    | `onRemove` callback present                                                         |
| `select`        | `{dataName}_gantt_select`         | `selectable` prop enabled                                                           |
| `showColumn`    | `{dataName}_gantt_show_column`    | Always                                                                              |
| `hideColumn`    | `{dataName}_gantt_hide_column`    | Always                                                                              |
| `expand`        | `{dataName}_gantt_expand`         | Always                                                                              |
| `collapse`      | `{dataName}_gantt_collapse`       | Always                                                                              |
| `expandAll`     | `{dataName}_gantt_expand_all`     | Always                                                                              |
| `collapseAll`   | `{dataName}_gantt_collapse_all`   | Always                                                                              |
| `getData`       | `{dataName}_gantt_get_data`       | Disabled by default. Enable explicitly via `tools: { getData: { enabled: true } }`. |

## Grid

| Tool               | Default Name                          | Condition                                                                           |
| ------------------ | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `filter`           | `{dataName}_grid_filter`              | `filterable={true}`                                                                 |
| `clearFilters`     | `{dataName}_grid_clear_filters`       | `filterable={true}`                                                                 |
| `sort`             | `{dataName}_grid_sort`                | `sortable={true}`                                                                   |
| `clearSort`        | `{dataName}_grid_clear_sort`          | `sortable={true}`                                                                   |
| `group`            | `{dataName}_grid_group`               | `groupable={true}`                                                                  |
| `clearGroup`       | `{dataName}_grid_clear_group`         | `groupable={true}`                                                                  |
| `page`             | `{dataName}_grid_page`                | `pageable={true}`                                                                   |
| `setPageSize`      | `{dataName}_grid_set_page_size`       | `pageable={true}` and `pageSizes` has values                                        |
| `highlight`        | `{dataName}_grid_highlight`           | `onHighlightChange` callback present                                                |
| `clearHighlight`   | `{dataName}_grid_clear_highlight`     | `onHighlightChange` callback present                                                |
| `select`           | `{dataName}_grid_select`              | `selectable` prop enabled                                                           |
| `clearSelect`      | `{dataName}_grid_clear_select`        | `selectable` prop enabled                                                           |
| `selectAll`        | `{dataName}_grid_select_all`          | `selectable` prop enabled with `onHeaderSelectionChange` or `dataItemKey`            |
| `detailExpand`     | `{dataName}_grid_detail_expand`       | `detail` and `onDetailExpandChange` present                                         |
| `detailCollapse`   | `{dataName}_grid_detail_collapse`     | `detail` and `onDetailExpandChange` present                                         |
| `detailExpandAll`  | `{dataName}_grid_detail_expand_all`   | `detail` and `onDetailExpandChange` present                                         |
| `detailCollapseAll`| `{dataName}_grid_detail_collapse_all` | `detail` and `onDetailExpandChange` present                                         |
| `groupExpand`      | `{dataName}_grid_group_expand`        | `groupable={true}` and `onGroupExpandChange` present                                |
| `groupCollapse`    | `{dataName}_grid_group_collapse`      | `groupable={true}` and `onGroupExpandChange` present                                |
| `groupExpandAll`   | `{dataName}_grid_group_expand_all`    | `groupable={true}` and `onGroupExpandChange` present                                |
| `groupCollapseAll` | `{dataName}_grid_group_collapse_all`  | `groupable={true}` and `onGroupExpandChange` present                                |
| `setAggregates`    | `{dataName}_grid_set_aggregates`      | `groupable={true}` and `onGroupExpandChange` present                                |
| `exportPdf`        | `{dataName}_grid_export_pdf`          | `pdf` prop set                                                                      |
| `exportCsv`        | `{dataName}_grid_export_csv`          | `csv` prop set                                                                      |
| `exportExcel`      | `{dataName}_grid_export_excel`        | Custom tool (C). Use `ExcelExport` wrapper with `webMcp.tools` callback.            |
| `reorderColumn`    | `{dataName}_grid_reorder_column`      | `reorderable={true}`                                                                |
| `resizeColumn`     | `{dataName}_grid_resize_column`       | `resizable={true}`                                                                  |
| `showColumn`       | `{dataName}_grid_show_column`         | `onColumnsStateChange` present                                                      |
| `hideColumn`       | `{dataName}_grid_hide_column`         | `onColumnsStateChange` present                                                      |
| `lockColumn`       | `{dataName}_grid_lock_column`         | `onColumnsStateChange` present                                                      |
| `unlockColumn`     | `{dataName}_grid_unlock_column`       | `onColumnsStateChange` present                                                      |
| `add`              | `{dataName}_grid_add`                 | `onItemChange` or `editable` prop set                                               |
| `update`           | `{dataName}_grid_update`              | `onItemChange` or `editable` prop set                                               |
| `delete`           | `{dataName}_grid_delete`              | `onItemChange` or `editable` prop set                                               |
| `getData`          | `{dataName}_grid_get_data`            | Disabled by default. Enable via `webMcp.tools` callback.                            |

## ListBox

| Tool       | Default Name                  | Condition                    |
| ---------- | ----------------------------- | ---------------------------- |
| `transfer` | `{dataName}_listbox_transfer` | `connectWith` prop set       |
| `reorder`  | `{dataName}_listbox_reorder`  | `onReorder` callback present |

## ListView

| Tool     | Default Name                 | Condition         |
| -------- | ---------------------------- | ----------------- |
| `page`   | `{dataName}_listview_page`   | `pageable={true}` |
| `select` | `{dataName}_listview_select` | Always            |

## Map

| Tool           | Default Name                   | Condition |
| -------------- | ------------------------------ | --------- |
| `setCenter`    | `{dataName}_map_set_center`    | Always    |
| `setZoom`      | `{dataName}_map_set_zoom`      | Always    |
| `addMarker`    | `{dataName}_map_add_marker`    | Always    |
| `clearMarkers` | `{dataName}_map_clear_markers` | Always    |

## MaskedTextBox

| Tool       | Default Name                         | Condition |
| ---------- | ------------------------------------ | --------- |
| `setValue` | `{dataName}_maskedtextbox_set_value` | Always    |
| `clear`    | `{dataName}_maskedtextbox_clear`     | Always    |

## Menu

| Tool         | Default Name                  | Condition |
| ------------ | ----------------------------- | --------- |
| `selectItem` | `{dataName}_menu_select_item` | Always    |

## MultiColumnComboBox

| Tool       | Default Name                               | Condition |
| ---------- | ------------------------------------------ | --------- |
| `setValue` | `{dataName}_multicolumncombobox_set_value` | Always    |
| `clear`    | `{dataName}_multicolumncombobox_clear`     | Always    |
| `open`     | `{dataName}_multicolumncombobox_open`      | Always    |
| `close`    | `{dataName}_multicolumncombobox_close`     | Always    |

## MultiSelect

| Tool     | Default Name                    | Condition |
| -------- | ------------------------------- | --------- |
| `add`    | `{dataName}_multiselect_add`    | Always    |
| `remove` | `{dataName}_multiselect_remove` | Always    |
| `clear`  | `{dataName}_multiselect_clear`  | Always    |
| `open`   | `{dataName}_multiselect_open`   | Always    |
| `close`  | `{dataName}_multiselect_close`  | Always    |

## NumericTextBox

| Tool        | Default Name                          | Condition |
| ----------- | ------------------------------------- | --------- |
| `setValue`  | `{dataName}_numerictextbox_set_value` | Always    |
| `increment` | `{dataName}_numerictextbox_increment` | Always    |
| `decrement` | `{dataName}_numerictextbox_decrement` | Always    |
| `clear`     | `{dataName}_numerictextbox_clear`     | Always    |

## PanelBar

| Tool       | Default Name                   | Condition |
| ---------- | ------------------------------ | --------- |
| `expand`   | `{dataName}_panelbar_expand`   | Always    |
| `collapse` | `{dataName}_panelbar_collapse` | Always    |

## RangeSlider

| Tool       | Default Name                       | Condition |
| ---------- | ---------------------------------- | --------- |
| `setValue` | `{dataName}_rangeslider_set_value` | Always    |

## Rating

| Tool       | Default Name                  | Condition |
| ---------- | ----------------------------- | --------- |
| `setValue` | `{dataName}_rating_set_value` | Always    |
| `clear`    | `{dataName}_rating_clear`     | Always    |

## Scheduler

| Tool          | Default Name                        | Condition                          |
| ------------- | ----------------------------------- | ---------------------------------- |
| `createEvent` | `{dataName}_scheduler_create_event` | `onAdd` callback present           |
| `updateEvent` | `{dataName}_scheduler_update_event` | `onDataStateChange` present        |
| `deleteEvent` | `{dataName}_scheduler_delete_event` | `onRemove` callback present        |
| `setView`     | `{dataName}_scheduler_set_view`     | More than one view defined         |
| `navigate`    | `{dataName}_scheduler_navigate`     | Always                             |

## ScrollView

| Tool       | Default Name                     | Condition |
| ---------- | -------------------------------- | --------- |
| `next`     | `{dataName}_scrollview_next`     | Always    |
| `previous` | `{dataName}_scrollview_previous` | Always    |
| `navigate` | `{dataName}_scrollview_navigate` | Always    |

## Slider

| Tool       | Default Name                  | Condition |
| ---------- | ----------------------------- | --------- |
| `setValue` | `{dataName}_slider_set_value` | Always    |

## Spreadsheet

| Tool             | Default Name                              | Condition |
| ---------------- | ----------------------------------------- | --------- |
| `setCell`        | `{dataName}_spreadsheet_set_cell`         | Always    |
| `setCells`       | `{dataName}_spreadsheet_set_cells`        | Always    |
| `getCell`        | `{dataName}_spreadsheet_get_cell`         | Disabled by default. Enable via `webMcp.tools` callback. |
| `getData`        | `{dataName}_spreadsheet_get_data`         | Disabled by default. Enable via `webMcp.tools` callback. |
| `setData`        | `{dataName}_spreadsheet_set_data`         | Always    |
| `getSheets`      | `{dataName}_spreadsheet_get_sheets`       | Disabled by default. Enable via `webMcp.tools` callback. |
| `switchSheet`    | `{dataName}_spreadsheet_switch_sheet`     | Always    |
| `navigateSheet`  | `{dataName}_spreadsheet_navigate_sheet`   | Always    |
| `addSheet`       | `{dataName}_spreadsheet_add_sheet`        | Always    |
| `renameSheet`    | `{dataName}_spreadsheet_rename_sheet`     | Always    |
| `export`         | `{dataName}_spreadsheet_export`           | Always    |
| `executeCommand` | `{dataName}_spreadsheet_execute_command`  | Always    |

## Stepper

| Tool   | Default Name              | Condition |
| ------ | ------------------------- | --------- |
| `step` | `{dataName}_stepper_step` | Always    |

## Switch

| Tool       | Default Name                  | Condition |
| ---------- | ----------------------------- | --------- |
| `toggle`   | `{dataName}_switch_toggle`    | Always    |
| `setValue` | `{dataName}_switch_set_value` | Always    |

## TabStrip

| Tool        | Default Name                     | Condition |
| ----------- | -------------------------------- | --------- |
| `selectTab` | `{dataName}_tabstrip_select_tab` | Always    |

## TaskBoard

| Tool         | Default Name                       | Condition |
| ------------ | ---------------------------------- | --------- |
| `addCard`    | `{dataName}_taskboard_add_card`    | Always    |
| `moveCard`   | `{dataName}_taskboard_move_card`   | Always    |
| `editCard`   | `{dataName}_taskboard_edit_card`   | Always    |
| `deleteCard` | `{dataName}_taskboard_delete_card` | Always    |

## TextArea

| Tool       | Default Name                    | Condition |
| ---------- | ------------------------------- | --------- |
| `setValue` | `{dataName}_textarea_set_value` | Always    |
| `clear`    | `{dataName}_textarea_clear`     | Always    |

## TextBox

| Tool       | Default Name                   | Condition |
| ---------- | ------------------------------ | --------- |
| `setValue` | `{dataName}_textbox_set_value` | Always    |
| `clear`    | `{dataName}_textbox_clear`     | Always    |

## TimePicker

| Tool       | Default Name                      | Condition |
| ---------- | --------------------------------- | --------- |
| `setValue` | `{dataName}_timepicker_set_value` | Always    |
| `clear`    | `{dataName}_timepicker_clear`     | Always    |

## TreeList

| Tool            | Default Name                         | Condition                                                                           |
| --------------- | ------------------------------------ | ----------------------------------------------------------------------------------- |
| `filter`        | `{dataName}_treelist_filter`         | `filterable={true}`                                                                 |
| `clearFilters`  | `{dataName}_treelist_clear_filters`  | `filterable={true}`                                                                 |
| `sort`          | `{dataName}_treelist_sort`           | `sortable={true}`                                                                   |
| `clearSort`     | `{dataName}_treelist_clear_sort`     | `sortable={true}`                                                                   |
| `select`        | `{dataName}_treelist_select`         | `selectable` prop enabled                                                           |
| `clearSelect`   | `{dataName}_treelist_clear_select`   | `selectable` prop enabled                                                           |
| `page`          | `{dataName}_treelist_page`           | `pageable={true}`                                                                   |
| `setPageSize`   | `{dataName}_treelist_set_page_size`  | `pageable={true}` and `pageSizes` has values                                        |
| `reorderColumn` | `{dataName}_treelist_reorder_column` | `reorderable={true}`                                                                |
| `resizeColumn`  | `{dataName}_treelist_resize_column`  | `resizable={true}`                                                                  |
| `showColumn`    | `{dataName}_treelist_show_column`    | Always                                                                              |
| `hideColumn`    | `{dataName}_treelist_hide_column`    | Always                                                                              |
| `lockColumn`    | `{dataName}_treelist_lock_column`    | Always                                                                              |
| `unlockColumn`  | `{dataName}_treelist_unlock_column`  | Always                                                                              |
| `expand`        | `{dataName}_treelist_expand`         | Always                                                                              |
| `collapse`      | `{dataName}_treelist_collapse`       | Always                                                                              |
| `expandAll`     | `{dataName}_treelist_expand_all`     | Always                                                                              |
| `collapseAll`   | `{dataName}_treelist_collapse_all`   | Always                                                                              |
| `exportPdf`     | `{dataName}_treelist_export_pdf`     | Custom tool (C). Use PDF export wrapper with `webMcp.tools` callback.               |
| `exportExcel`   | `{dataName}_treelist_export_excel`   | Custom tool (C). Use `ExcelExport` wrapper with `webMcp.tools` callback.            |
| `getData`       | `{dataName}_treelist_get_data`       | Disabled by default. Enable explicitly via `tools: { getData: { enabled: true } }`. |

## TreeView

| Tool       | Default Name                   | Condition                 |
| ---------- | ------------------------------ | ------------------------- |
| `select`   | `{dataName}_treeview_select`   | `selectable` prop enabled |
| `check`    | `{dataName}_treeview_check`    | `checkboxes` prop enabled |
| `expand`   | `{dataName}_treeview_expand`   | Always                    |
| `collapse` | `{dataName}_treeview_collapse` | Always                    |
| `filter`   | `{dataName}_treeview_filter`   | Always                    |

## Window

| Tool        | Default Name                   | Condition                  |
| ----------- | ------------------------------ | -------------------------- |
| `minimize`  | `{dataName}_window_minimize`   | `onStageChange` provided   |
| `maximize`  | `{dataName}_window_maximize`   | `onStageChange` provided   |
| `restore`   | `{dataName}_window_restore`    | `onStageChange` provided   |

## AIPrompt

| Tool             | Default Name                          | Condition |
| ---------------- | ------------------------------------- | --------- |
| `sendPrompt`     | `{dataName}_aiprompt_send_prompt`     | Always    |
| `setSuggestions` | `{dataName}_aiprompt_set_suggestions` | Always    |

## Button

| Tool    | Default Name               | Condition |
| ------- | -------------------------- | --------- |
| `click` | `{dataName}_button_click`  | Always    |

## Chat

| Tool          | Default Name                   | Condition |
| ------------- | ------------------------------ | --------- |
| `sendMessage` | `{dataName}_chat_send_message` | Always    |

## Form

| Tool       | Default Name                | Condition |
| ---------- | --------------------------- | --------- |
| `fill`     | `{dataName}_form_fill`      | Always    |
| `validate` | `{dataName}_form_validate`  | Always    |
| `submit`   | `{dataName}_form_submit`    | Always    |
| `reset`    | `{dataName}_form_reset`     | Always    |

## Notification

| Tool      | Default Name                        | Condition |
| --------- | ----------------------------------- | --------- |
| `show`    | `{dataName}_notification_show`      | Always    |
| `dismiss` | `{dataName}_notification_dismiss`   | Always    |

## PivotGrid

| Tool          | Default Name                      | Condition |
| ------------- | --------------------------------- | --------- |
| `setRows`     | `{dataName}_pivot_set_rows`       | Always    |
| `setColumns`  | `{dataName}_pivot_set_columns`    | Always    |
| `setMeasures` | `{dataName}_pivot_set_measures`   | Always    |
| `expand`      | `{dataName}_pivot_expand`         | Always    |
| `collapse`    | `{dataName}_pivot_collapse`       | Always    |
| `exportPdf`   | `{dataName}_pivot_export_pdf`     | Always    |

## Signature

| Tool    | Default Name                   | Condition |
| ------- | ------------------------------ | --------- |
| `clear` | `{dataName}_signature_clear`   | Always    |

## Sortable

| Tool      | Default Name                    | Condition |
| --------- | ------------------------------- | --------- |
| `reorder` | `{dataName}_sortable_reorder`   | Always    |

## Upload

| Tool    | Default Name               | Condition |
| ------- | -------------------------- | --------- |
| `clear` | `{dataName}_upload_clear`  | Always    |

## See Also

-   [WebMCP Tools Overview](slug:web_mcp_overview)
