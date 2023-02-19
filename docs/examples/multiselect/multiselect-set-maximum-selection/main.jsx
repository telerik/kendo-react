import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

const sizes = ['X-Small', 'Small', 'Medium', 'Large', 'X-Large', '2X-Large'];

const App = () => {
  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value.slice(0, 2));
  };

  return (
    <div>
      <div>T-shirt sizes:</div>
      <MultiSelect data={sizes} value={value} onChange={handleChange} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
