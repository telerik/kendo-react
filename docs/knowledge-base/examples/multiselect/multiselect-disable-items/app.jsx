import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import countries from './countries';
const App = () => {
  const [open, setOpen] = React.useState(true);
  const itemRender = (li, itemProps) => {
    const index = itemProps.index;
    const itemChildren = <span>{li.props.children}</span>;
    return (
      <li
        {...li.props}
        className={
          itemProps.dataItem === 'Albania' ? 'disabled' : 'k-list-item'
        }
      >
        {itemChildren}
      </li>
    );
  };
  const handleClose = (event) => {
    console.log(event.syntheticEvent.target.classList);
    if (!(event.syntheticEvent.target.classList[0] === 'k-list-ul')) {
      setOpen(false);
    }
  };
  const handleBlur = () => {
    console.log('blur');
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="example-wrapper">
      <p>Select European countries:</p>
      <MultiSelect
        itemRender={itemRender}
        data={countries}
        style={{
          width: '300px',
        }}
        placeholder="e.g. Austria"
        opened={open}
        onClose={handleClose}
        onBlur={handleBlur}
        onOpen={handleOpen}
      />
      <style>
        {`
        .disabled {
          pointer-events: none;
          opacity: 0.5;
          padding-block: 4px;
          padding-inline: 8px;
        }
        `}
      </style>
    </div>
  );
};

export default App;
