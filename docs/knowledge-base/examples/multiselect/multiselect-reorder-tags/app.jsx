import * as React from 'react';
import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { Sortable } from '@progress/kendo-react-sortable';
import './styles.css';
const sizes = [
  { text: 'X-Small', id: 1 },
  { text: 'Small', id: 2 },
  { text: 'Medium', id: 3 },
  { text: 'Large', id: 4 },
];

//Custom tags that will be displayed over the MultiSelect input
const SortableItemUI = (props) => {
  const { isDisabled, isActive, style, attributes, dataItem, forwardRef } =
    props;

  return (
    <li ref={forwardRef} {...attributes} className={'k-button'} {...attributes} style={style}>
      <span>{dataItem.text}</span>
    </li> 
  );
};

const App = () => {
  const [value, setValue] = React.useState([
    { text: 'X-Small', id: 1 },
    { text: 'Small', id: 2 },
    { text: 'Medium', id: 3 },
  ]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onDragOver = (event) => {
    setValue(event.newState);
  };

  const onNavigate = (event) => {
    setValue(event.newState); 
  };

  return ( 
    <div>
      <div>Selected values: {value.map(i=>i.text).join(",")}</div>
      <div className="k-multiselect">
        <ul className="k-reset sortableDiv .k-multiselect-wrap">
          {' '}
          <Sortable
            idField={'id'}
            disabledField={'disabled'}
            data={value}
            itemUI={SortableItemUI}
            onDragOver={onDragOver}
            onNavigate={onNavigate}
          />
        </ul>
      </div>
      <MultiSelect 
        data={sizes}
        dataItemKey={'id'}
        textField={'text'}
        value={value}
        onChange={handleChange}
        tags={<span></span>} //removeing original tags 
      />
    </div>
  );
};

export default App;
