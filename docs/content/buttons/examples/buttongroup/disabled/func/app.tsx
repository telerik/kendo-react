import React from 'react';
import { Button, ButtonGroup } from '@progress/kendo-react-buttons';
import { userIcon, gearIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import './styles.css';

const App = () => {
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const handleSwitchChange = (event: SwitchChangeEvent) => {
    setIsDisabled(event.value);
  };

  return (
    <div>
      <div>
        <Label>
          Disabled&nbsp;&nbsp;
          <Switch checked={isDisabled} onChange={handleSwitchChange} />
        </Label>
      </div>
      <br />

      <ButtonGroup disabled={isDisabled}>
        <Button
          togglable={true}
          svgIcon={userIcon}
          themeColor={'primary'}
          disabled={isDisabled}
        >
          User Mode
        </Button>
        <Button
          togglable={true}
          svgIcon={gearIcon}
          themeColor={'info'}
          disabled={isDisabled}
        >
          Admin Mode
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default App;
