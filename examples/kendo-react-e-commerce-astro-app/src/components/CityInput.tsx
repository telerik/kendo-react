import * as React from 'react';

import {
    DropDownList,
    DropDownListChangeEvent,
  } from '@progress/kendo-react-dropdowns';
  
  const CityInput: React.FC = () => {
    const cities = [
      { text: 'London', id: 1 },
      { text: 'Liverpool', id: 2 },
      { text: 'Canterbury', id: 3 },
      { text: 'Lancaster', id: 4 },
    ];
  
    const [state, setState] = React.useState({
      value: { text: 'Liverpool', id: 2 },
    });
  
    const handleChange = (event: DropDownListChangeEvent) => {
      setState({
        value: event.target.value,
      });
    };
  
    return (
      <DropDownList
        data={cities}
        textField="text"
        dataItemKey="id"
        value={state.value}
        onChange={handleChange}
      />
    );
  };
  
  export default CityInput;