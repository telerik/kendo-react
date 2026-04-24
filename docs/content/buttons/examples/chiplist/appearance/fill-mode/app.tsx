import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { homeIcon, gearIcon } from '@progress/kendo-svg-icons';

interface Action {
  text: string;
  value: string;
  icon?: any;
  fillMode: 'solid' | 'outline';
}

const actions: Action[] = [
  {
    text: 'Home',
    value: 'home',
    icon: homeIcon,
    fillMode: 'solid',
  },
  {
    text: 'Settings',
    value: 'settings',
    icon: gearIcon,
    fillMode: 'outline',
  },
];

const App = () => {
  return (
    <div>
      <ChipList
        data={actions}
        selection={'multiple'}
        chip={(props: ChipProps) => (
          <Chip
            {...props}
            svgIcon={props.dataItem.icon}
            fillMode={props.dataItem.fillMode}
          />
        )}
      />
    </div>
  );
};

export default App;
