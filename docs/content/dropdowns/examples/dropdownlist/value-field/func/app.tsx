import React from 'react';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { useValueField } from './useValueField';

type Sport = { text: string; id: number };

const sports: Sport[] = [
  { text: 'Basketball', id: 1 },
  { text: 'Football', id: 2 },
  { text: 'Tennis', id: 3 },
  { text: 'Volleyball', id: 4 }
];

const App = () => {
  const [value, setValue] = React.useState<number | null>(2);

  const { valueToItem, handleChange } = useValueField<Sport, number | null>({
    value,
    setValue,
    data: sports,
    valueField: 'id'
  });

  return (
    <div>
      <div className="example-config">Selected Value: {String(value)}</div>
      <div style={{ width: 300 }}>
        <DropDownList
          data={sports}
          textField="text"
          value={valueToItem}
          onChange={handleChange(setValue)}
        />
      </div>
    </div>
  );
};

export default App;
