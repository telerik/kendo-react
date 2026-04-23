import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface Action {
  value: string;
  icon?: string;
  removable?: boolean;
}

const actions: Action[] = [
  {
    value: 'play',
    icon: 'play',
    removable: false,
  },
  {
    value: 'stop',
    icon: 'stop',
    removable: false,
  },
  {
    value: 'rewind',
    icon: 'rewind',
    removable: false,
  },
];

const App = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
      />
      <ChipList
        data={actions}
        chip={(props: ChipProps) => (
          <Chip
            removable={props.dataItem.removable}
            {...props}
            icon={props.dataItem.icon}
          />
        )}
      />
    </div>
  );
};

export default App;
