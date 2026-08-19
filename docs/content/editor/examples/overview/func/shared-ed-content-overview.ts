const kendokaImage = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/editor/react-kendoka.png';

const blogPostContent = `
    <p style="text-align: center; margin: 0;">
        <img src="${kendokaImage}" alt="KendoReact" width="96" height="96"
            style="border-radius: 4px; margin-bottom: 16px;" />
    </p>
    <h2 style="color: var(--kendo-color-on-app-surface); border-bottom: 2px solid var(--kendo-color-primary); padding-bottom: 8px; margin-top: 0;">Building Enterprise Apps with KendoReact</h2>
    <p>Modern React applications demand more than basic HTML elements. Users expect <strong>polished data grids</strong>, interactive charts, accessible form inputs and seamless navigation — all working together out of the box. KendoReact delivers exactly that: a comprehensive library of 110+ native React components designed for enterprise-grade applications.</p>
    <div style="background-color: var(--kendo-color-info-subtle); border-left: 4px solid var(--kendo-color-primary); padding: 12px 16px; margin: 16px 0; border-radius: 4px;">
        <p style="margin: 0; color: var(--kendo-color-info-on-subtle);"><em>KendoReact follows a single-package-per-feature model — install only what you need, tree-shake the rest, and keep your bundle lean.</em></p>
    </div>

    <h2 style="color: var(--kendo-color-primary);">Data Management Components</h2>
    <p>The <a href="https://www.telerik.com/kendo-react-ui/components/grid/"><strong>Grid</strong></a> is the centerpiece of most enterprise apps. It handles sorting, filtering, grouping, virtual scrolling and inline editing with minimal configuration. Pair it with the <a href="https://www.telerik.com/kendo-react-ui/components/treelist/"><strong>TreeList</strong></a> for hierarchical data, the <a href="https://www.telerik.com/kendo-react-ui/components/pivotgrid/"><strong>PivotGrid</strong></a> for multidimensional analysis, or the <a href="https://www.telerik.com/kendo-react-ui/components/listview/"><strong>ListView</strong></a> for custom card-based layouts.</p>
    <p>For spreadsheet-style workflows, the <a href="https://www.telerik.com/kendo-react-ui/components/spreadsheet/"><strong>Spreadsheet</strong></a> component gives users a familiar Excel-like interface — complete with formulas, cell formatting and import/export capabilities.</p>
    <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
        <thead>
            <tr style="background-color: var(--kendo-color-primary); color: var(--kendo-color-on-primary);">
                <th style="padding: 10px 14px; text-align: left;">Component</th>
                <th style="padding: 10px 14px; text-align: left;">Use Case</th>
                <th style="padding: 10px 14px; text-align: left;">Key Features</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: var(--kendo-color-surface-alt);">
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);"><strong>Grid</strong></td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Tabular data display and editing</td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Sorting, filtering, grouping, virtual scrolling, PDF/Excel export</td>
            </tr>
            <tr>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);"><strong>TreeList</strong></td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Hierarchical data structures</td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Expand/collapse, drag-and-drop reordering, inline editing</td>
            </tr>
            <tr style="background-color: var(--kendo-color-surface-alt);">
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);"><strong>PivotGrid</strong></td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Multidimensional analysis</td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Row/column dimensions, measures, aggregation functions</td>
            </tr>
            <tr>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);"><strong>Spreadsheet</strong></td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Excel-like workflows</td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Formulas, cell formatting, multiple sheets, import/export</td>
            </tr>
            <tr style="background-color: var(--kendo-color-surface-alt);">
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);"><strong>ListView</strong></td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Custom card-based layouts</td>
                <td style="padding: 8px 14px; border-bottom: 1px solid var(--kendo-color-border);">Templated items, paging, selection, scrolling</td>
            </tr>
        </tbody>
    </table>

    <h2 style="color: var(--kendo-color-primary);">Data Visualization</h2>
    <p>KendoReact provides a complete charting and visualization suite. The <a href="https://www.telerik.com/kendo-react-ui/components/charts/"><strong>Charts</strong></a> package includes bar, line, area, pie, donut, scatter, stock and many more chart types. The <a href="https://www.telerik.com/kendo-react-ui/components/gauges/"><strong>Gauges</strong></a> package adds radial, linear and arc gauges for dashboards.</p>
    <div style="background-color: var(--kendo-color-info-subtle); border-left: 4px solid var(--kendo-color-primary); padding: 12px 16px; margin: 16px 0; border-radius: 4px;">
        <p style="margin: 0; color: var(--kendo-color-info-on-subtle);"><em>All chart components support themes, animations, drill-down interactions and export to image or PDF — making them dashboard-ready from day one.</em></p>
    </div>

    <h2 style="color: var(--kendo-color-primary);">Forms and Inputs</h2>
    <p>Building accessible, validated forms is straightforward with KendoReact's input components. From basic <a href="https://www.telerik.com/kendo-react-ui/components/inputs/textbox/"><strong>TextBox</strong></a> and <a href="https://www.telerik.com/kendo-react-ui/components/inputs/numerictextbox/"><strong>NumericTextBox</strong></a> to advanced <a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/datepicker/"><strong>DatePicker</strong></a>, <a href="https://www.telerik.com/kendo-react-ui/components/dateinputs/timepicker/"><strong>TimePicker</strong></a>, <a href="https://www.telerik.com/kendo-react-ui/components/inputs/colorpicker/"><strong>ColorPicker</strong></a> and <a href="https://www.telerik.com/kendo-react-ui/components/inputs/signature/"><strong>Signature</strong></a> components — each one works seamlessly with controlled and uncontrolled React patterns.</p>
    <p>The <a href="https://www.telerik.com/kendo-react-ui/components/dropdowns/"><strong>DropDowns</strong></a> package covers every selection pattern: ComboBox, AutoComplete, MultiSelect, DropDownList and DropDownTree — all with virtualization, filtering and keyboard navigation built in.</p>

    <h2 style="color: var(--kendo-color-primary);">Layout and Navigation</h2>
    <p>Structure your application with the <a href="https://www.telerik.com/kendo-react-ui/components/layout/"><strong>Layout</strong></a> package: Splitter, TabStrip, PanelBar, Stepper, Card, ExpansionPanel, TileLayout and GridLayout. The <a href="https://www.telerik.com/kendo-react-ui/components/menus/"><strong>Menu</strong></a> and <a href="https://www.telerik.com/kendo-react-ui/components/treeview/"><strong>TreeView</strong></a> components handle navigation hierarchies, while the <a href="https://www.telerik.com/kendo-react-ui/components/layout/drawer/"><strong>Drawer</strong></a> and <a href="https://www.telerik.com/kendo-react-ui/components/layout/appbar/"><strong>AppBar</strong></a> provide responsive app shell patterns.</p>
    <div style="background-color: var(--kendo-color-warning-subtle); border: 1px solid var(--kendo-color-warning); border-radius: 6px; padding: 12px 16px; margin: 16px 0;">
        <p style="margin: 0 0 4px; color: var(--kendo-color-warning-on-subtle);"><strong>Did you know?</strong></p>
        <p style="margin: 0; color: var(--kendo-color-on-app-surface);">Every component ships with built-in <strong>keyboard navigation</strong>, <strong>screen reader announcements</strong> and <strong>high-contrast mode</strong> support — accessibility is not an afterthought, it's baked in from the start.</p>
    </div>

    <h2 style="color: var(--kendo-color-primary);">Component Overview</h2>
    <ul>
        <li><strong>Data Management</strong> — Grid, TreeList, PivotGrid: virtual scrolling, PDF/Excel export</li>
        <li><strong>Visualization</strong> — Charts, Gauges, Map: 30+ chart types, drill-down, export</li>
        <li><strong>Editors</strong> — Editor, Spreadsheet, PDFViewer: rich text, formulas, document viewing</li>
        <li><strong>Scheduling</strong> — Scheduler, Gantt: day/week/month views, task dependencies</li>
        <li><strong>Forms</strong> — Inputs, DropDowns, DateInputs: controlled components, validation, a11y</li>
    </ul>

    <h2 style="color: var(--kendo-color-primary);">Theming and Accessibility</h2>
    <p>KendoReact ships with five built-in <a href="https://www.telerik.com/design-system/docs/themes/get-started/introduction/"><strong>themes</strong></a> — <strong>Meridian</strong>, <strong>Default</strong>, <strong>Bootstrap</strong>, <strong>Material</strong> and <strong>Fluent</strong> — each fully customizable through Sass variables or CSS custom properties. Every component follows <a href="https://www.telerik.com/kendo-react-ui/components/accessibility/"><strong>WAI-ARIA</strong></a> patterns and is tested for <strong>WCAG 2.2 Level AA</strong> compliance, including full keyboard navigation and screen reader support.</p>
    <p>With built-in <strong>RTL</strong> support, <strong>localization</strong> via message services, and <strong>globalization</strong> through the Internationalization package, KendoReact is ready for worldwide deployment from day one.</p>

    <p style="background-color: var(--kendo-color-success-subtle); border-radius: 6px; padding: 12px 16px; color: var(--kendo-color-success-on-subtle);"><strong>Get started:</strong> Install any package with <strong>npm install @progress/kendo-react-&lt;package&gt;</strong> and import components from their package — no additional configuration required.</p>
`;

export default blogPostContent;
