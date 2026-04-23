import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';

interface Action {
  text: string;
  value: string;
  icon?: any;
  size: 'small' | 'medium' | 'large';
}

const actions: Action[] = [
  {
    text: 'Home',
    value: 'home',
    size: 'small',
  },
  {
    text: 'Settings',
    value: 'settings',
    size: 'medium',
  },
  {
    text: 'Profile',
    value: 'profile',
    size: 'large',
  },
];

const App = () => {
  return (
    <div>
      <ChipList
        data={actions}
        selection={'multiple'}
        chip={(props: ChipProps) => (
          <Chip removable={true} {...props} size={props.dataItem.size} />
        )}
      />
    </div>
  );
};

export default App;
