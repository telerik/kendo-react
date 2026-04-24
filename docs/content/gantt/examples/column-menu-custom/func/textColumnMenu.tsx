import * as React from 'react';
import {
    ColumnMenuTextColumn,
    ColumnMenuOperators,
    ColumnMenuTextFilter,
    ColumnMenuFilterLogic,
    ColumnMenuProps,
    ColumnMenuFilterProps
} from '@progress/kendo-react-data-tools';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';

const ColumnMenuTextFilterCustom = (props: ColumnMenuFilterProps) => {
    const textOperators = React.useRef(ColumnMenuOperators.text.slice(0, 6));
    return <ColumnMenuTextFilter {...props} operators={textOperators.current} />;
};

const ColumnMenuFilterLogicCustom = (props) => {
    return <ColumnMenuFilterLogic {...props} disabled={true} />;
};

export const ColumnMenuCustomTextColumn = (props: ColumnMenuProps) => {
    const initialFilter = React.useCallback(
        (field: string): CompositeFilterDescriptor => ({
            logic: 'and',
            filters: [
                { operator: 'startswith', field },
                { operator: 'endswith', field }
            ]
        }),
        []
    );

    return (
        <ColumnMenuTextColumn
            {...props}
            filterContent={[ColumnMenuTextFilterCustom, ColumnMenuFilterLogicCustom, ColumnMenuTextFilterCustom]}
            initialFilter={initialFilter}
        />
    );
};
