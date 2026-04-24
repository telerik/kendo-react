import * as React from 'react';
import {
    ColumnMenuTextColumn, ColumnMenuOperators,
    ColumnMenuTextFilter, ColumnMenuFilterLogic, 
    ColumnMenuFilterProps, ColumnMenuProps
} from '@progress/kendo-react-data-tools';
import {
    DropDownListProps
} from '@progress/kendo-react-dropdowns'
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

const ColumnMenuTextFilterCustom = (props: ColumnMenuFilterProps & { children?: React.ReactNode; }) => {
    const textOperators = React.useRef(ColumnMenuOperators.text.slice(0, 6));
    return (
      <ColumnMenuTextFilter
        {...props}
        operators={textOperators.current}
        />
    );
};

const ColumnMenuFilterLogicCustom = (props: DropDownListProps & { children?: React.ReactNode; }) => {
    return (
      <ColumnMenuFilterLogic
        {...props}
        disabled={true}
        />
    );
};

export const ColumnMenuCustomTextColumn = (props: ColumnMenuProps & { children?: React.ReactNode; }) => {
    const initialFilter: (field: string) => CompositeFilterDescriptor = React.useCallback(
        field =>
            ({ logic: 'and', filters: [{ operator: 'startswith', field }, { operator: 'endswith', field }] }),
        []
    );

    return (
      <ColumnMenuTextColumn
        {...props}
        filterContent={[
                ColumnMenuTextFilterCustom,
                ColumnMenuFilterLogicCustom,
                ColumnMenuTextFilterCustom
            ]}
        initialFilter={initialFilter}
        />
    )
};
