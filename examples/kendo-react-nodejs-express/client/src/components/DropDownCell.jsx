import * as React from 'react';
import {
  DropDownList,
} from '@progress/kendo-react-dropdowns';

const categoryData = [
    {
      CategoryID: 1,
      CategoryName: 'Beverages',
      Description: 'Soft drinks, coffees, teas, beers, and ales',
    },
    {
      CategoryID: 2,
      CategoryName: 'Condiments',
      Description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
    },
    {
      CategoryID: 6,
      CategoryName: 'Meat/Poultry',
      Description: 'Prepared meats',
    },
    {
      CategoryID: 7,
      CategoryName: 'Produce',
      Description: 'Dried fruit and bean curd',
    },
    {
      CategoryID: 8,
      CategoryName: 'Seafood',
      Description: 'Seaweed and fish',
    },
  ];

const DropDownCell = (props) => {

  /**
  * Return null if this is a group header cell.
  */
  if(props.rowType === 'groupHeader') return null;

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
          defaultItem={{CategoryID: 0, CategoryName: 'Choose Category'}}
        />
      ) : (
        dataValue.toString()
      )}
    </td>
  );
};

export default DropDownCell;
