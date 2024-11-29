import * as React from 'react';
import {
    DropDownList,
} from '@progress/kendo-react-dropdowns';

// This data can also be passed from the Context if it is available in the main component.
const categoryData = [
    {
        categoryID: 1,
        categoryName: 'Beverages'
    },
    {
        categoryID: 2,
        categoryName: 'Condiments'
    },
    {
        categoryID: 6,
        categoryName: 'Meat/Poultry'
    },
    {
        categoryID: 7,
        categoryName: 'Produce'
    },
    {
        categoryID: 8,
        categoryName: 'Seafood'
    },
];

const DropDownCell = (props) => {

    /**
    * Return null if this is a group header cell.
    */
    if (props.rowType === 'groupHeader') return null;

    /**
    * Get both keys for a complex field like Category.CategoryName.
    */
    let fieldComplex = props.field.split('.');

    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange({
                dataIndex: 0,
                dataItem: props.dataItem,
                field: fieldComplex[0],
                syntheticEvent: e.syntheticEvent,
                value: e.value,
            });
        }
    };

    const { dataItem } = props;
    const dataValue =
        dataItem[fieldComplex[0]] === null || dataItem[fieldComplex[0]][fieldComplex[1]] === null
            ? ''
            : dataItem[fieldComplex[0]][fieldComplex[1]];

    return (
        <td>
            {dataItem.inEdit ? (
                <DropDownList
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    value={dataItem[fieldComplex[0]]}
                    data={categoryData}
                    textField={fieldComplex[1]}
                    defaultItem={{ categoryID: 0, categoryName: 'Choose Category' }}
                />
            ) : (
                dataValue.toString()
            )}
        </td>
    );
};

export default DropDownCell;