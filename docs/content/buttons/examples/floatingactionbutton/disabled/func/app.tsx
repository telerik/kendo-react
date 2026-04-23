import * as React from 'react';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import './styles.css';
import { Label } from '@progress/kendo-react-labels';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';

import { plusIcon } from '@progress/kendo-svg-icons';

const App = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const handleSwitchChange = (event: SwitchChangeEvent) => {
    setIsDisabled(event.value);
  };
  return (
    <div>
      <Label>
        Disabled&nbsp;&nbsp;
        <Switch checked={isDisabled} onChange={handleSwitchChange} />
      </Label>
      <br />
      <br />
      <span>
        <FloatingActionButton
          svgIcon={plusIcon}
          className="static-fab"
          disabled={isDisabled}
        />
        <FloatingActionButton
          svgIcon={plusIcon}
          className="static-fab"
          disabled={isDisabled}
        />
      </span>
    </div>
  );
};

export default App;
