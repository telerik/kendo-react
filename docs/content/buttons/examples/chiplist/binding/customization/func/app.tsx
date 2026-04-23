import React, { useState } from 'react';
import {
  ChipList,
  Chip,
  ChipListChangeEvent,
  ChipProps,
} from '@progress/kendo-react-buttons';

interface Task {
  text: string;
  value: string;
}

const taskData: Task[] = [
  { text: 'Critical', value: '1' },
  { text: 'High', value: '2' },
  { text: 'Medium', value: '3' },
  { text: 'Low', value: '4' },
];

const priorityColorMap = {
  '1': '#FF6B6B',
  '2': '#FF9E6B',
  '3': '#FFD93D',
  '4': '#A0E7E5',
};

const PriorityChip = (props: ChipProps) => {
  const { dataItem } = props;

  return (
    <Chip
      {...props}
      style={{
        backgroundColor: priorityColorMap[dataItem.value] || '#ddd',
        color: '#fff',
        fontWeight: 'bold',
      }}
    />
  );
};

const App = () => {
  const [selectedValue, setSelectedValue] = useState<string>('1');

  const handleValueChange = (event: ChipListChangeEvent) => {
    setSelectedValue(event.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h4>Select Tasks Based on Priority</h4>
      <ChipList
        data={taskData}
        selection="single"
        value={selectedValue}
        onChange={handleValueChange}
        chip={PriorityChip}
        style={{
          maxWidth: '400px',
          marginBottom: '20px',
          padding: '10px',
        }}
      />
      <div
        style={{
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: selectedValue
            ? priorityColorMap[selectedValue]
            : '#f4f4f4',
          color:
            selectedValue && priorityColorMap[selectedValue] !== '#f4f4f4'
              ? '#fff'
              : '#333',
          transition: 'background-color 0.3s ease',
        }}
      >
        <h5>Selected Priority:</h5>
        {selectedValue ? (
          <div
            style={{
              padding: '8px 12px',
              backgroundColor: priorityColorMap[selectedValue],
              color: '#fff',
              borderRadius: '5px',
              fontWeight: 'bold',
            }}
          >
            {taskData.find((task) => task.value === selectedValue)?.text}
          </div>
        ) : (
          <p style={{ color: '#999' }}>No priority selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
