---
title: Accessibility Compliance
page_title: React Accessibility & Accessibility Compliance - KendoReact
description: 'A list of the KendoReact components in terms of the accessibility and keyboard navigation support they provide.'
components: ["general"]
slug: compliance_accessibilty
position: 20
---

# Accessibility Standards Compliance

This article lists the accessibility compliance of the KendoReact components.

## Accessibility Conformance Report

The [Accessibility Conformance Report (ACR)](https://www.section508.gov/sell/acr/) is a document that explains how information and communication technology products such as software, hardware, electronic content, and support documentation conform to leading global accessibility standards. KendoReact provides an ACR through the <a href="https://www.itic.org/policy/accessibility/vpat" target="_blank">Voluntary Product Accessibility Template (VPAT®)</a>.

> tip Download the latest version of the [KendoReact Accessibility Conformance Report](<https://demos.telerik.com/kendo-react-ui/assets/accessibility/ReactVPAT2.4RevINT(June2023).pdf>)

## Compliance Table

The table below specifies the level of WCAG 2.2 compliance of each KendoReact component.

-   The _Keyboard Navigation_ column links to component-specific online demos or keyboard shortcut lists. For general information on how the keyboard support works, see the [Keyboard Navigation]({%slug overview_accessibilty%}#keyboard-navigation) section.
-   The _Accessibility Documentation_ column links to component-specific details and information about WAI-ARIA attributes.
-   For information about **Section 508** of the US Rehabilitation Act, the **European Accessibility Act** in the EU, or any other national accessibility legislation, see section [Legal and Technical Compliance]({%slug overview_accessibilty%}#legal-and-technical-compliance).

Also check the [notes below the table](#accessibility-compliance-notes).

<div style="font-size: 22px">

| Component               | WCAG 2.2 | Keyboard Navigation                                             | Accessibility Documentation                                    |
| :---------------------- | :------- | :-------------------------------------------------------------- | :------------------------------------------------------------- |
| `AIPrompt`              | `AA`     | [Enhanced]({% slug keyboard_navigation_ai-prompt %})            | [Documentation]({% slug accessibility_ai-prompt %})            |
| `ActionSheet`           | `AA`     | [Enhanced]({% slug keyboard_navigation_actionsheet %})          | [Documentation]({% slug accessibility_actionsheet %})          |
| `Appbar`                | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `ArcGauge`              | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `AutoComplete`          | `AA`     | [Enhanced]({% slug keyboard_navigation_autocomplete %})         | [Documentation]({% slug accessibility_autocomplete %})         |
| `Avatar`                | `AA`     | `N/A`                                                           | [Documentation]({% slug accessibility_avatar %})               |
| `Badge`                 | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Barcode`               | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `BottomNavigation`      | `AA`     | [Enhanced](slug:keyboard_navigation_bottomnavigation)           | [Documentation]({% slug accessibility_bottomnavigation %})     |
| `Breadcrumb`            | `AAA`    | [Enhanced](slug:keyboard_navigation_breadcrumb)                 | [Documentation]({% slug accessibility_breadcrumb %})           |
| `Button`                | `AAA`    | [Standard](slug:keyboard_navigation_button)                     | [Documentation]({% slug accessibility_button %})               |
| `ButtonGroup`           | `AAA`    | [Standard](slug:keyboard_navigation_buttongroup)                | [Documentation]({% slug accessibility_buttongroup %})          |
| `Calendar`              | `AAA`    | [Enhanced]({% slug keyboard_navigation_calendar %})             | [Documentation]({% slug accessibility_calendar %})             |
| `Card`                  | `AA`     | [Enhanced]({% slug keyboard_navigation_card %})                 | [Documentation]({% slug accessibility_card %})                 |
| `Chart`                 | `AA`     | [Enhanced]({% slug keyboard_navigation_charts %})               | [Documentation]({% slug keyboard_navigation_charts %})         |
| `CheckBox`              | `AA`     | [Standard]({% slug keyboard_navigation_checkbox %})             | [Documentation]({% slug accessibility_checkbox %})             |
| `Chip`                  | `AA`     | [Enhanced]({% slug keyboard_navigation_chip %})                 | [Documentation]({% slug accessibility_chip %})                 |
| `Chiplist`              | `AA`     | [Enhanced]({% slug keyboard_navigation_chiplist %})             | [Documentation]({% slug accessibility_chiplist %})             |
| `ChunkProgressBar`      | `AA`     | `N/A`                                                           | [Documentation]({% slug accessibility_chunkprogressbar %})     |
| `CircularGauge`         | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `ColorGradient`         | `AA`     | [Enhanced]({% slug keyboard_navigation_colorgradient %})        | [Documentation]({% slug accessibility_colorgradient %})        |
| `ColorPalette`          | `AA`     | [Enhanced]({% slug keyboard_navigation_colorpalette %})         | [Documentation]({% slug accessibility_colorpalette %})         |
| `ColorPicker`           | `AA`     | [Enhanced]({% slug keyboard_navigation_colorpicker %})          | [Documentation]({% slug accessibility_colorpicker %})          |
| `ComboBox`              | `AA`     | [Enhanced]({% slug keyboard_navigation_combobox %})             | [Documentation]({% slug accessibility_combobox %})             |
| `Conversational UI`     | `AA`     | [Enhanced]({% slug keyboard_navigation_chat %})                 | [Documentation]({% slug accessibility_chat %})                 |
| `DateInput`             | `AA`     | [Enhanced]({% slug keyboard_navigation_dateinput %})            | [Documentation]({% slug accessibility_dateinput %})            |
| `DatePicker`            | `AA`     | [Enhanced]({% slug keyboard_navigation_datepicker %})           | [Documentation]({% slug accessibility_datepicker %})           |
| `DateRangePicker`       | `AA`     | [Enhanced]({% slug keyboard_navigation_daterangepicker %})      | [Documentation]({% slug accessibility_daterangepicker %})      |
| `DateTimePicker`        | `AA`     | [Enhanced]({% slug keyboard_navigation_datetimepicker %})       | [Documentation]({% slug accessibility_datetimepicker %})       |
| `Dialog`                | `AA`     | [Enhanced]({% slug keyboard_navigation_dialog %})               | [Documentation]({% slug accessibility_dialog %})               |
| `Drawer`                | `AA`     | [Enhanced]({% slug keyboard_navigation_drawer %})               | [Documentation]({% slug accessibility_drawer %})               |
| `DropDownButton`        | `AA`     | [Enhanced]({% slug keyboard_navigation_dropdownbutton %})       | [Documentation]({% slug accessibility_dropdownbutton %})       |
| `DropDownList`          | `AA`     | [Enhanced]({% slug keyboard_navigation_dropdownlist %})         | [Documentation]({% slug accessibility_dropdownlist %})         |
| `DropDownTree`          | `AA`     | [Enhanced]({% slug keyboard_navigation_dropdowntree %})         | [Documentation]({% slug accessibility_dropdowntree %})         |
| `Editor`                | `AA`     | [Enhanced]({% slug keyboard_navigation_editor %})               | [Documentation]({% slug accessibility_editor %})               |
| `ExpansionPanel`        | `AA`     | [Enhanced]({% slug keyboard_navigation_expansionpanel %})       | [Documentation]({% slug accessibility_expansionpanel %})       |
| `Filter`                | `AA`     | [Enhanced]({% slug keyboard_navigation_filter %})               | [Documentation]({% slug accessibility_filter %})               |
| `FlatColorPicker`       | `AA`     | [Enhanced]({% slug keyboard_navigation_flatcolorpicker %})      | [Documentation]({% slug accessibility_flatcolorpicker %})      |
| `FloatingActionButton ` | `AA`     | [Enhanced]({% slug keyboard_navigation_floatingactionbutton %}) | [Documentation]({% slug accessibility_floatingactionbutton %}) |
| `FloatingLabel`         | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Form`                  | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Gantt`                 | `AA`     | [Enhanced]({% slug keyboard_navigation_gantt %})                | [Documentation]({% slug accessibility_gantt %})                |
| `Grid`                  | `AA`     | [Enhanced]({% slug keyboard_navigation_grid %})                 | [Documentation]({% slug accessibility_grid %})                 |
| `GridLayout`            | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Input`                 | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Label`                 | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `LinearGauge`           | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `ListBox`               | `AA`     | [Enhanced]({% slug keyboard_navigation_listbox %})              | [Documentation]({% slug accessibility_listbox %})              |
| `Listview`              | `AAA`    | [Enhanced]({% slug keyboard_navigation_listview %})             | [Documentation]({% slug accessibility_listview %})             |
| `Loader`                | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Map`                   | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `MaskedTextBox`         | `AA`     | [Standard]({% slug keyboard_navigation_maskedtextbox %})        | [Documentation]({% slug accessibility_maskedtextbox %})        |
| `Menu`                  | `AA`     | [Enhanced]({% slug keyboard_navigation_menu %})                 | [Documentation]({% slug accessibility_menu %})                 |
| `MultiColumnComboBox`   | `AA`     | [Enhanced]({% slug keyboard_navigation_multicolumncombobox %})  | [Documentation]({% slug accessibility_multicolumncombobox %})  |
| `MultiSelect`           | `AA`     | [Enhanced]({% slug keyboard_navigation_multiselect %})          | [Documentation]({% slug accessibility_multiselect %})          |
| `MultiSelectTree`       | `AA`     | [Enhanced]({% slug keyboard_navigation_multiselecttree %})      | [Documentation]({% slug accessibility_multiselecttree %})      |
| `MultiViewCalendar`     | `AA`     | [Enhanced]({% slug keyboard_navigation_multiviewcalendar %})    | [Documentation]({% slug accessibility_multiviewcalendar %})    |
| `Notification`          | `AA`     | `N/A`                                                           | [Documentation]({% slug accessibility_notification %})         |
| `NumericTextBox`        | `AA`     | [Standard]({% slug keyboard_navigation_numerictextbox %})       | [Documentation]({% slug accessibility_numerictextbox %})       |
| `Pager `                | `AA`     | [Enhanced]({% slug keyboard_navigation_pager %})                | [Documentation]({% slug accessibility_pager %})                |
| `PanelBar`              | `AA`     | [Enhanced]({% slug keyboard_navigation_panelbar %})             | [Documentation]({% slug accessibility_panelbar %})             |
| `PDFViewer`             | `AA`     | [Enhanced]({% slug keyboard_navigation_pdfviewer %})            | [Documentation]({% slug accessibility_pdfviewer %})            |
| `PivotGrid`             | `AA`     | [Enhanced]({% slug keyboard_navigation_pivotgrid %})            | [Documentation]({% slug accessibility_pivotgrid %})            |
| `Popover`               | `AA`     | [Enhanced]({% slug keyboard_navigation_popover %})              | [Documentation]({% slug accessibility_popover %})              |
| `Popup`                 | `AA`     | `N/A`                                                           | `N/A`                                                          |
| `ProgressBar`           | `AA`     | `N/A`                                                           | [Documentation]({% slug accessibility_progressbar %})          |
| `QR Code`               | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `RadialGauge`           | `AA`     | `N/A`                                                           | `N/A`                                                          |
| `RadioButton`           | `AA`     | [Standard]({% slug keyboard_navigation_radiobutton %})          | [Documentation]({% slug accessibility_radiobutton %})          |
| `RadioGroup`            | `AA`     | [Standard]({% slug keyboard_navigation_radiogroup %})           | [Documentation]({% slug accessibility_radiogroup %})           |
| `RangeSlider`           | `AA`     | [Enhanced]({% slug keyboard_navigation_rangeslider %})          | [Documentation]({% slug accessibility_rangeslider %})          |
| `Rating`                | `AA`     | [Enhanced]({% slug keyboard_navigation_rating %})               | [Documentation]({% slug accessibility_rating %})               |
| `Sankey`                | `AA`     | [Enhanced]({% slug keyboard_navigation_sankey %})               | [Documentation]({% slug accessibility_sankey %})               |
| `Scheduler`             | `AA`     | [Enhanced]({% slug keyboard_navigation_scheduler %})            | [Documentation]({% slug accessibility_scheduler %})            |
| `ScrollView`            | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Signature`             | `AA`     | [Enhanced]({% slug keyboard_navigation_signature %})            | [Documentation]({% slug accessibility_signature %})            |
| `Skeleton`              | `AAA`    | `N/A`                                                           | [Documentation]({% slug accessibility_skeleton %})             |
| `Slider`                | `AA`     | [Enhanced]({% slug keyboard_navigation_slider %})               | [Documentation]({% slug accessibility_slider %})               |
| `Sortable`              | `AA`     | [Enhanced]({% slug keyboard_navigation_sortable %})             | [Documentation]({% slug accessibility_sortable %})             |
| `SplitButton`           | `AA`     | [Enhanced]({% slug keyboard_navigation_splitbutton %})          | [Documentation]({% slug accessibility_splitbutton %})          |
| `Splitter`              | `AA`     | [Enhanced]({% slug keyboard_navigation_splitter %})             | [Documentation]({% slug accessibility_splitter %})             |
| `StackLayout`           | `N/A`    | `N/A`                                                           | `N/A`                                                          |
| `Stepper`               | `AA`     | [Enhanced]({% slug keyboard_navigation_stepper %})              | [Documentation]({% slug accessibility_stepper %})              |
| `Stockchart`            | `N/A`    | [Enhanced]({% slug keyboard_navigation_charts %})               | [Documentation]({% slug keyboard_navigation_charts %})         |
| `Switch`                | `AA`     | [Enhanced]({% slug keyboard_navigation_switch %})               | [Documentation]({% slug accessibility_switch %})               |
| `Tabstrip`              | `AA`     | [Enhanced]({% slug keyboard_navigation_tabstrip %})             | [Documentation]({% slug accessibility_tabstrip %})             |
| `TaskBoard`             | `AA`     | `N/A`                                                           | `N/A`                                                          |
| `TextArea`              | `AAA`    | `N/A`                                                           | [Documentation]({% slug accessibility_textarea %})             |
| `TextBox`               | `AA`     | [Standard]({% slug keyboard_navigation_tilelayout %})           | [Documentation]({% slug accessibility_textbox %})              |
| `TileLayout`            | `AAA`    | [Enhanced]({% slug keyboard_navigation_panelbar %})             | [Documentation]({% slug accessibility_tilelayout %})           |
| `TimePicker`            | `AA`     | [Enhanced]({% slug keyboard_navigation_timepicker %})           | [Documentation]({% slug accessibility_timepicker %})           |
| `Toolbar`               | `AA`     | [Enhanced]({% slug keyboard_navigation_toolbar %})              | [Documentation]({% slug accessibility_toolbar %})              |
| `Tooltip`               | `AA`     | [Enhanced]({% slug keyboard_navigation_tooltip %})              | [Documentation]({% slug accessibility_tooltip %})              |
| `Treelist`              | `AA`     | [Enhanced]({% slug keyboard_navigation_treelist %})             | [Documentation]({% slug accessibility_treelist %})             |
| `TreeView`              | `AA`     | [Enhanced]({% slug keyboard_navigation_treeview %})             | [Documentation]({% slug accessibility_treeview %})             |
| `Upload`                | `AAA`    | [Enhanced]({% slug keyboard_navigation_upload %})               | [Documentation]({% slug accessibility_upload %})               |
| `Window`                | `AA`     | [Enhanced]({% slug keyboard_navigation_window %})               | [Documentation]({% slug accessibility_window %})               |

</div>

## Accessibility Compliance Notes

The information in the compliance table above is subject to the following considerations:

-   All components implement the required WAI-ARIA attributes without the need for any extra configuration. Some components may provide parameters that render additional optional WAI-ARIA attributes, for example, `aria-label` or `aria-describedby`.
-   The compliance levels are achievable with the [_Default Ocean Blue A11y_ theme swatch](slug:overview_accessibilty#color-contrast) or any other [custom theme swatch]({%slug customizingthemes%}) that provides the minimum required color contrast.
-   The accessibility and compliance of some components may depend on the enabled features. In such cases, the compliance table information is based on the default component configuration.
-   Component templates introduce custom markup that may not be accessible. Test any modifications to ensure the web content still meets the desired level of accessibility compliance. Be mindful of components that work with user input such as images, text, or HTML content.
-   Due to the complexity of some components, there are scenarios that are not covered by the WAI-ARIA specification.

## Suggested Links

-   [Overview of Accessibility](slug:overview_accessibilty)
-   [Telerik Blogs: Accessibility Guidebook for Web Development](https://www.telerik.com/blogs/web-accessibility-guidebook-for-developers?fbclid=IwAR2L0K0iOGfagkvLQQUBM5hxkO2s7P_ZM7gT3dqdj1_LO328eHN9NkVjk0o)
