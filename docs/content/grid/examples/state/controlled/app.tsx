import React from 'react';

import {
    Grid,
    GridColumn as Column,
    GridFilterChangeEvent,
    GridSelectionChangeEvent,
    GridSortChangeEvent,
    GridPageChangeEvent,
    GridGroupChangeEvent,
    GridGroupExpandChangeEvent,
    GridDetailExpandChangeEvent,
    GridHeaderSelectionChangeEvent,
    GridEditChangeEvent,
    GridItemChangeEvent
} from '@progress/kendo-react-grid';
import {
    DetailExpandDescriptor,
    EditDescriptor,
    GroupExpandDescriptor,
    SelectDescriptor
} from '@progress/kendo-react-data-tools';
import { sampleProducts } from './gd-sample-products';
import { process, CompositeFilterDescriptor, GroupDescriptor, SortDescriptor } from '@progress/kendo-data-query';
import { DetailComponent } from './detail';

export default function App() {
    const [data, setData] = React.useState(sampleProducts);
    const [sort, setSort] = React.useState<SortDescriptor[]>([{ field: 'ProductName', dir: 'asc' }]);
    const [filter, setFilter] = React.useState<CompositeFilterDescriptor>({
        logic: 'and',
        filters: [
            {
                field: 'ProductName',
                operator: 'contains',
                value: 'C'
            }
        ]
    });
    const [page, setPage] = React.useState({ skip: 0, take: 5 });
    const [group, setGroup] = React.useState<GroupDescriptor[]>([{ field: 'Discontinued' }]);
    const [select, setSelect] = React.useState<SelectDescriptor>();
    const [groupExpand, setGroupExpand] = React.useState<GroupExpandDescriptor[]>([]);
    const [detailExpand, setDetailExpand] = React.useState<DetailExpandDescriptor>({});
    const [edit, setEdit] = React.useState<EditDescriptor>({});

    const handleItemChange = (event: GridItemChangeEvent) => {
        const newData = data.map((item) =>
            item.ProductID === event.dataItem.ProductID ? { ...item, [event.field!]: event.value } : item
        );
        setData(newData);
    };

    const handleFilterChange = (event: GridFilterChangeEvent) => {
        setFilter(event.filter);
    };

    const handleSortChange = (event: GridSortChangeEvent) => {
        setSort(event.sort);
    };

    const handlePageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const handleGroupChange = (event: GridGroupChangeEvent) => {
        setGroup(event.group);
    };

    const handleSelectChange = (event: GridSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const handleHeaderSelectionChange = (event: GridHeaderSelectionChangeEvent) => {
        setSelect(event.select);
    };

    const handleGroupExpandChange = (event: GridGroupExpandChangeEvent) => {
        setGroupExpand(event.groupExpand);
    };

    const handleDetailExpandChange = (event: GridDetailExpandChangeEvent) => {
        setDetailExpand(event.detailExpand);
    };

    const handleEditChange = (event: GridEditChangeEvent) => {
        setEdit(event.edit);
    };

    return (
        <Grid
            dataItemKey="ProductID"
            data={process(data, { sort, filter, ...page, group })}
            onItemChange={handleItemChange}
            // Navigatable
            navigatable={true}
            // Sort
            sort={sort}
            sortable={true}
            onSortChange={handleSortChange}
            // Filter
            filter={filter}
            filterable={true}
            onFilterChange={handleFilterChange}
            // Page
            pageable={true}
            {...page}
            onPageChange={handlePageChange}
            // Group
            groupable={true}
            group={group}
            onGroupChange={handleGroupChange}
            // Group Expand
            groupExpand={groupExpand}
            onGroupExpandChange={handleGroupExpandChange}
            // Detail Expand
            detail={DetailComponent}
            detailExpand={detailExpand}
            onDetailExpandChange={handleDetailExpandChange}
            // Select
            select={select}
            selectable={true}
            onSelectionChange={handleSelectChange}
            onHeaderSelectionChange={handleHeaderSelectionChange}
            // Edit
            edit={edit}
            editable={true}
            onEditChange={handleEditChange}
        >
            <Column columnType="checkbox" filterable={false} editable={false} sortable={false} groupable={false} />
            <Column field="ProductID" title="ID" filterable={false} editable={false} width="60px" />
            <Column field="ProductName" title="Product Name" />
            <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
            <Column field="UnitPrice" editable={true} width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" width="190px" filter="boolean" editor="boolean" />
        </Grid>
    );
}
