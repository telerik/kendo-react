import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import {
  applyFormatIcon,
  clipboardIcon,
  copyIcon,
} from '@progress/kendo-svg-icons';

interface Action {
  text: string;
  value: string;
  icon?: any;
  rounded: 'small' | 'medium' | 'large';
}

const actions: Action[] = [
  {
    text: 'Clear format',
    value: 'clear format',
    icon: applyFormatIcon,
    rounded: 'small',
  },
  {
    text: 'Clipboard',
    value: 'clipboard',
    icon: clipboardIcon,
    rounded: 'medium',
  },
  {
    text: 'Copy',
    value: 'copy',
    icon: copyIcon,
    rounded: 'large',
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
            rounded={props.dataItem.rounded}
          />
        )}
      />
    </div>
  );
};

export default App;
