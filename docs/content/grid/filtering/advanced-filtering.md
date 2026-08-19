---
title: Advanced Filtering
description: 'Learn how to apply advanced filtering techniques in the KendoReact Grid, including column menu filtering, external filters, custom filter operations, and multi-column filtering.'
components: ['grid']
slug: advanced_filtering_grid
position: 20
tier: premium
subject: Advanced Filtering feature of the Grid
---

# Advanced Filtering

The KendoReact Grid provides multiple advanced filtering patterns for different user flows, including column menu filtering, external filters, custom filter operations, and multi-column filtering.

Use these approaches when the default filter row is not enough for your scenario. For example, you can keep the Grid header compact with a column menu, move filter editing into a dedicated dialog, or replace the default filter cells with editors that match your domain data.

<CtaPanelOverview></CtaPanelOverview>

## Filtering Through a Column Menu

The [`columnMenu`](slug:api_grid_gridcolumnprops#columnmenu) allows using the [GridColumnMenuFilter](slug:api_grid_gridcolumnmenufilterprops) or the [GridColumnMenuCheckboxFilter](slug:api_grid_gridcolumnmenucheckboxfilterprops) to filter the Grid through a popup menu.

The following example demonstrates how to enable column menu filtering, where clicking the header menu icon opens a popup with filter and sort options for that column.

{% meta height:720 %}
{% embed_file filtering/column-menu/func/app.tsx preview %}
{% embed_file filtering/column-menu/func/main.tsx %}
{% embed_file filtering/column-menu/func/columnMenu.tsx %}
{% endmeta %}

Use the following steps to implement filtering through a column menu:

1. Set the [`columnMenu`](slug:api_grid_gridcolumnprops#columnmenu) prop of each column to a custom menu component.

    ```tsx
    <Column field="ProductID" title="ID" filter={'numeric'} columnMenu={ColumnMenu} width={80} />
    <Column field="ProductName" title="Product Name" columnMenu={ColumnMenuCheckboxFilter} />
    ```

1. Render either `GridColumnMenuFilter` or `GridColumnMenuCheckboxFilter` inside that component, depending on whether the column needs operator-based filtering or a checkbox list.

    ```tsx
    export const ColumnMenu = (props: GridColumnMenuProps) => {
        return (
            <div>
                <GridColumnMenuFilter {...props} expanded={true} />
            </div>
        );
    };

    export const ColumnMenuCheckboxFilter = (props: GridColumnMenuProps) => {
        return (
            <div>
                <GridColumnMenuCheckboxFilter {...props} data={products} expanded={true} />
            </div>
        );
    };
    ```

1. Pass the full data collection to `GridColumnMenuCheckboxFilter` so it can generate its distinct value list.
1. Keep the Grid in built-in processing mode with `autoProcessData={true}` when local data is enough for the scenario. Pass a custom `columnMenuIcon` to use an icon from `@progress/kendo-svg-icons` instead of the default hamburger indicator.

    ```tsx
    import { filterIcon } from '@progress/kendo-svg-icons';

    <Grid data={products} autoProcessData={true} sortable={true} pageable={true} columnMenuIcon={filterIcon} />;
    ```

## Filtering with an External Filter Component

You can use the [KendoReact Filter component](slug:overview_filter) to build complex filter expressions and filter the data inside the Grid.

In controlled mode, the Filter component produces a composite descriptor that you can store in state and pass to the Grid through its [`filter`](slug:api_grid_gridprops#filter) prop.

The following example demonstrates how to filter Grid data using an external KendoReact Filter component that generates composite filter expressions.

{% meta height:620 %}
{% embed_file filtering/external/func/app.tsx preview %}
{% embed_file filtering/external/func/main.tsx %}
{% endmeta %}

Use the following steps to implement filtering through an external Filter component:

1. Define a [`CompositeFilterDescriptor`](slug:api_kendo-data-query_compositefilterdescriptor) that represents the current filter expression.

    ```tsx
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>();
    const [newFilter, setNewFilter] = React.useState<CompositeFilterDescriptor>(initialFilter);
    ```

1. Configure the Filter `fields` collection with the field name, label, editor component, and operator set for each filterable field.

    ```tsx
    <Filter
        value={initialFilter}
        onChange={onFilterChange}
        fields={[
            { name: 'ProductName', label: 'Name', filter: TextFilter, operators: Operators.text },
            { name: 'UnitPrice', label: 'Price', filter: NumericFilter, operators: Operators.numeric },
            { name: 'Discontinued', label: 'Discontinued', filter: BooleanFilter, operators: Operators.boolean }
        ]}
    />
    ```

1. Handle the Filter `onChange` event and store the updated descriptor in state.

    ```tsx
    const onFilterChange = (event: FilterChangeEvent) => {
        setNewFilter(event.filter);
    };
    ```

1. Pass the applied descriptor to the Grid through the [`filter`](slug:api_grid_gridprops#filter) prop.

    ```tsx
    <Grid data={products} autoProcessData={true} filter={filter} />
    ```

The demo also separates the edited descriptor from the applied one. This lets the dialog stay open while the user changes conditions and applies them only after clicking the action button.

## Filtering with Custom Filter Cells

The [`filterCell`](slug:api_grid_gridcellssettings#filterCell) property of the GridColumn enables full customization of the filter cells.

The following example demonstrates filtering by category and price range using a DropDownList.

{% meta height:470 %}
{% embed_file filtering/custom/func/app.tsx preview %}
{% embed_file filtering/custom/func/main.tsx %}
{% embed_file filtering/custom/func/dropdownFilterCell.tsx %}
{% embed_file filtering/custom/func/rangeFilterCell.tsx %}
{% endmeta %}

Use the following steps to implement filtering through custom filter cells:

1. Enable filtering through `filterable={true}` and keep the current filter descriptor in component state.

    ```tsx
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({ logic: 'and', filters: [] });
    ```

1. Handle [`onFilterChange`]({% slug api_grid_gridprops %}#toc-onfilterchange) and update the stored descriptor.

    ```tsx
    const filterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };
    ```

1. Create custom filter cell components that receive `GridCustomFilterCellProps` and render the editor your scenario needs.

    ```tsx
    const CategoryFilterCell = (props: GridCustomFilterCellProps) => (
        <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
            <DropdownFilterCell {...props} data={categories} defaultItem={'Select category'} />
        </HeaderTdElement>
    );

    const UnitPriceFilterCell = (props: GridCustomFilterCellProps) => (
        <HeaderTdElement columnId={props.thProps?.columnId || ''} {...props.thProps}>
            <RangeFilterCell {...props} />
        </HeaderTdElement>
    );
    ```

1. Assign those components through the column `cells={{ filterCell: ... }}` configuration.

    In the demo, one custom cell renders a DropDownList for categories and another renders a range editor for prices. Both update the same composite filter descriptor that is passed back to the Grid.

    ```tsx
    <Grid data={sampleProducts} autoProcessData={true} filterable={true} filter={filter} onFilterChange={filterChange}>
        <Column field="Category.CategoryName" title="Category Name" cells={{ filterCell: CategoryFilterCell }} />
        <Column field="UnitPrice" title="Unit Price" cells={{ filterCell: UnitPriceFilterCell }} />
    </Grid>
    ```

## Filtering with an External TextBox

Place an [Input](slug:overview_inputs) or [TextBox](slug:overview_textbox) outside the Grid, for example in a `GridToolbar`, and build a [`CompositeFilterDescriptor`](slug:api_kendo-data-query_compositefilterdescriptor) in its change handler. Combine multiple fields with `logic: 'or'` so typing a keyword matches any of them, then call [`filterBy`](slug:api_kendo-data-query_filterby) on the full dataset and pass the result to the Grid.

The following example demonstrates how to wire an external TextBox to the Grid's filter state for quick keyword-based row filtering.

{% meta height:470 %}
{% embed_file filtering/external-input/func/app.tsx preview %}
{% embed_file filtering/external-input/func/main.tsx %}
{% endmeta %}

## Filtering with the `filterBy` Method

Use [`filterBy`](slug:api_kendo-data-query_filterby) when filtering is the only data operation you need to manage. Keep the current [`CompositeFilterDescriptor`](slug:api_kendo-data-query_compositefilterdescriptor) in state, update it in the Grid [`onFilterChange`](slug:api_grid_gridprops#toc-onfilterchange) handler, and pass `filterBy(data, filter)` to the Grid's `data` prop. This keeps the implementation focused on filtering alone while still using the built-in filter row UI.

The following example demonstrates how to filter Grid rows by calling `filterBy` with the current filter descriptor from the `onFilterChange` event.

{% meta height:450 %}
{% embed_file filtering/filterby/func/app.tsx preview %}
{% embed_file filtering/filterby/func/main.tsx %}
{% endmeta %}

## Filtering with the `process` Method

When multiple data operations (filtering, sorting, paging, and so on) are enabled together, use [`process`](slug:api_kendo-data-query_process) with a single [`State`](slug:api_kendo-data-query_state) object instead of coordinating separate handlers for each feature. Store the state, update it in [`onDataStateChange`](slug:api_grid_gridprops#ondatastatechange), spread it back onto the Grid with `{...dataState}`, and pass `process(data, dataState)` as the `data` prop. This is the recommended setup whenever the Grid needs a combined controlled pipeline.

The following example demonstrates how to use the `process` method with `onDataStateChange` to handle filtering, sorting, and paging in a single event.

{% meta height:420 %}
{% embed_file filtering/process-method/func/app.tsx preview %}
{% embed_file filtering/process-method/func/main.tsx %}
{% endmeta %}

## Defining Custom Filter Operators

Restrict the available filter operators per data type using the [`filterOperators`](slug:api_grid_gridfilteroperators) prop. This is useful when certain operator combinations do not make sense for your data or when you want a simpler filter row. Boolean filter types always use the `equal` operator regardless of configuration. Pass a [`GridFilterOperators`](slug:api_grid_gridfilteroperators) object keyed by type, where each value is an array of `{ text, operator }` entries:

```tsx
const filterOperators: GridFilterOperators = {
    text: [{ text: 'grid.filterContainsOperator', operator: 'contains' }],
    numeric: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
    date: [{ text: 'grid.filterEqOperator', operator: 'eq' }],
    boolean: [{ text: 'grid.filterEqOperator', operator: 'eq' }]
};
```

Set the matching `filter` type on each column so it draws from the correct operator list.

The following example demonstrates custom filter operators for each column data type, restricting text fields to `contains` and all others to `eq`.

{% meta height:480 %}
{% embed_file filtering/operators/func/app.tsx preview %}
{% embed_file filtering/operators/func/main.tsx %}
{% endmeta %}

## Suggested Links

-   [FilterDescriptors](slug:api_kendo-data-query_filterdescriptor)
-   [onDataStateChange](slug:api_grid_gridprops#ondatastatechange)
-   [API Reference of the Grid](slug:api_grid_gridprops)
