import * as React from 'react';
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons';
import { mapMarkerIcon, pinIcon, unpinIcon } from '@progress/kendo-svg-icons';

interface Action {
  text: string;
  value: string;
  icon?: any;
}

const actions: Action[] = [
  {
    text: 'Clear format',
    value: 'clear format',
    icon: mapMarkerIcon,
  },
  {
    text: 'Clipboard',
    value: 'clipboard',
    icon: pinIcon,
  },
  {
    text: 'Copy',
    value: 'copy',
    icon: unpinIcon,
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
