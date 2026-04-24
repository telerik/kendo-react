import * as React from 'react';
import { useState } from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import './styles.css';

interface Fruit {
  text: string;
  value: string;
}

const fruits: Fruit[] = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Cherry', value: 'cherry' },
];

const App = () => {
  const [chipMessage, setChipMessage] = useState('');

  const handleChipClick = (fruit: Fruit) => {
    setChipMessage(
      `You clicked "${fruit.text}" at ${new Date().toLocaleTimeString()}.`
    );
  };

  const handleChipRemove = (fruit: Fruit) => {
    setChipMessage(`"${fruit.text}" has been removed.`);
  };

  return (
    <div>
      <h3>Fruits</h3>
      <ChipList
        selection="single"
        defaultData={fruits}
        chip={(props: ChipProps) => {
          const { dataItem } = props;
          return (
            <Chip
              removable={true}
              {...props}
              onClick={() => handleChipClick(dataItem as Fruit)}
              onRemove={() => handleChipRemove(dataItem as Fruit)}
            />
          );
        }}
      />
      <p>{chipMessage}</p>
    </div>
  );
};

export default App;
