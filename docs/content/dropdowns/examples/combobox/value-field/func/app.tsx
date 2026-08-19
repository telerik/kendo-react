import React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';
import { useValueField } from './useValueField';
import { DataBinding } from '@docs-shared/DataBinding';

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
    <DataBinding fields={[{ label: 'Selected Value', value }]}>
      <div style={{ width: 300 }}>
        <ComboBox
          data={sports}
          textField="text"
          value={valueToItem}
          onChange={handleChange(setValue)}
        />
      </div>
    </DataBinding>
  );
};

export default App;
