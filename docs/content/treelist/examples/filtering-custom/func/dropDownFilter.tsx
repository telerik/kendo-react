import * as React from 'react'
import { DropDownList } from '@progress/kendo-react-dropdowns';

const DropDownFilter = (props) => {
    const { field, data, defaultItem, onFilterChange } = props;

    const onChange = React.useCallback((event) => {
        const value: string = event.target.value;
        const filter: any[] = [...props.filter];
        const currentFilterIndex: number = filter.findIndex(f => f.field === field);

        if (currentFilterIndex !== -1) {
            filter.splice(currentFilterIndex, 1);
        }

        if (value !== defaultItem) {
            filter.push({ value, field, operator: 'contains' });
        }

        onFilterChange({ filter, field, syntheticEvent: event.syntheticEvent });
    },
                                       [props.filter, field, defaultItem, onFilterChange]
    );

    return (
      <DropDownList
        data={data}
        defaultItem={defaultItem}
        onChange={onChange}
        />
    )
}

export default DropDownFilter;
