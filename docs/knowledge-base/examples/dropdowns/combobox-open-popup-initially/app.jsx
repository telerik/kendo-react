import * as React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
const allData = [
  {
    id: 1,
    text: 'Small',
  },
  {
    id: 2,
    text: 'Medium',
  },
  {
    id: 3,
    text: 'Large',
  },
];

const App = () => {
  const ddlRef = React.useRef();

  React.useEffect(() => {
    ddlRef.current.toggleBtnClick();
  }, []);
  return (
    <>
      <ComboBox label="Size" data={allData} ref={ddlRef} textField="text" />
    </>
  );
};

export default App; 