import * as React from 'react';

import {
    DropDownList,
    DropDownListChangeEvent,
  } from '@progress/kendo-react-dropdowns';
  
  const AppointmentInput: React.FC = () => {
    const appointments = [
      { text: 'Customer Service Appointment', id: 1 },
      { text: 'Sales Representative Appointment', id: 2 },
      { text: 'Refund Appointment', id: 3 },
    ];
  
    const [state, setState] = React.useState({
      value: { text: 'Customer Service Appointment', id: 1 },
    });
  
    const handleChange = (event: DropDownListChangeEvent) => {
      setState({
        value: event.target.value,
      });
    };
  
    return (
      <DropDownList
        data={appointments}
        textField="text"
        dataItemKey="id"
        value={state.value}
        onChange={handleChange}
      />
    );
  };
  
  export default AppointmentInput;
  