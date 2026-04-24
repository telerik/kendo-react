import * as React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

import { Button } from '@progress/kendo-react-buttons';
import { filterClearIcon } from '@progress/kendo-svg-icons';
import { FilterCellProps } from '@progress/kendo-react-data-tools';

interface MultiSelectFilterProps extends FilterCellProps {
    data: string[];
}

const MultiSelectFilter = (props: MultiSelectFilterProps) => {
    const { field, data, filter, onFilterChange } = props;

    // Get current filter value for this field
    const currentFilter = filter?.find((f) => f.field === field);
    const currentValue = currentFilter?.value || [];

    const handleChange = React.useCallback(
        (event) => {
            if (!onFilterChange) return;

            const selectedValues: string[] = event.target.value;
            const newFilter = filter?.filter((f) => f.field !== field) || [];

            if (selectedValues.length > 0) {
                // Custom operator that checks if item's value is in the selected values array
                const multiSelectOperator = (itemValue: string) => {
                    return selectedValues.includes(itemValue);
                };

                newFilter.push({
                    field,
                    value: selectedValues,
                    operator: multiSelectOperator
                });
            }

            onFilterChange({
                filter: newFilter,
                field: field || '',
                syntheticEvent: event.syntheticEvent
            });
        },
        [filter, field, onFilterChange]
    );

    const handleClear = React.useCallback(
        (event) => {
            if (!onFilterChange) return;

            event.preventDefault();
            const newFilter = filter?.filter((f) => f.field !== field) || [];

            onFilterChange({
                filter: newFilter,
                field: field || '',
                syntheticEvent: event
            });
        },
        [filter, field, onFilterChange]
    );

    return (
        <div className="k-filtercell" style={{ display: 'flex', gap: '4px' }}>
            <MultiSelect
                data={data}
                value={currentValue}
                onChange={handleChange}
                autoClose={false}
                style={{ flex: 1 }}
            />
            <Button
                title="Clear"
                disabled={currentValue.length === 0}
                onClick={handleClear}
                svgIcon={filterClearIcon}
            ></Button>
        </div>
    );
};

export default MultiSelectFilter;
