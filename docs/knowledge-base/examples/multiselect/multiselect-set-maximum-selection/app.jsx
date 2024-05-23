import React, { useState, useEffect } from 'react';

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

export default App;
