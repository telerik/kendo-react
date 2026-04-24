import * as React from 'react';
import { ListBox, ListBoxProps } from '@progress/kendo-react-listbox';
import products from './shared-lb-products';
import { Product, MyCustomItemProps } from './shared-lb-interfaces';

const App = () => {
  const [state, setState] = React.useState({
    notDiscontinued: products.filter((product: Product) => !product.Discontinued),
    discontinued: products.filter((product: Product) => product.Discontinued),
  });

  const handleDoubleClick = (
    dataItem: Product,
    sourceList: string,
    targetList: string
  ) => {
    const sourceData = state[sourceList as keyof typeof state].filter(
      (item) => item.ProductID !== dataItem.ProductID
    );
    const targetData = [
      ...state[targetList as keyof typeof state],
      dataItem,
    ];

    setState({
      ...state,
      [sourceList]: sourceData,
      [targetList]: targetData,
    });
  };

  const MyCustomItem = (props: MyCustomItemProps) => {

    const { dataItem, listBoxType, ...others } = props;

    if (!dataItem) {
      return null;
    }

    return (
      <li
        {...others}
        onDoubleClick={() =>
          handleDoubleClick(
            dataItem,
            listBoxType,
            listBoxType === 'notDiscontinued'
              ? 'discontinued'
              : 'notDiscontinued'
          )
        }
      >
        <div>
          <span style={{ fontWeight: 'bold' }}>{dataItem.ProductName}</span>
        </div>
      </li>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h6>Not Discontinued</h6>
          <ListBox
            data={state.notDiscontinued}
            textField="ProductName"
            item={(props: ListBoxProps) => (
              <MyCustomItem {...props} listBoxType="notDiscontinued" />
            )}
            style={{ height: 200 }}
          />
        </div>
        <div className="col">
          <h6>Discontinued</h6>
          <ListBox
            data={state.discontinued}
            textField="ProductName"
            item={(props: ListBoxProps) => (
              <MyCustomItem {...props} listBoxType="discontinued" />
            )}
            style={{ height: 200 }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
