import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { homeIcon, gearIcon, userIcon } from '@progress/kendo-svg-icons';

interface Action {
  text: string;
  value: string;
  icon?: any;
  rounded: 'small' | 'medium' | 'large';
  fillMode: 'solid' | 'outline';
  themeColor: 'base' | 'info' | 'success' | 'error';
}

const actions: Action[] = [
  {
    text: 'Base',
    value: 'base',
    icon: homeIcon,
    rounded: 'small',
    fillMode: 'solid',
    themeColor: 'base',
  },
  {
    text: 'Info',
    value: 'info',
    icon: gearIcon,
    rounded: 'medium',
    fillMode: 'outline',
    themeColor: 'info',
  },
  {
    text: 'Success',
    value: 'success',
    icon: userIcon,
    rounded: 'large',
    fillMode: 'solid',
    themeColor: 'success',
  },
  {
    text: 'Error',
    value: 'error',
    icon: userIcon,
    rounded: 'large',
    fillMode: 'solid',
    themeColor: 'error',
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
            removable={true}
            {...props}
            themeColor={props.dataItem.themeColor}
          />
        )}
      />
    </div>
  );
};

export default App;
