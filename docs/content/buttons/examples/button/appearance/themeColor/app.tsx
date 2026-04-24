import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
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
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <div>
        <Label>
          Disabled&nbsp;&nbsp;
          <Switch checked={isDisabled} onChange={handleSwitchChange} />
        </Label>
        <br />
        <br />
        <Button type="button" themeColor={'base'} disabled={isDisabled}>
          Base
        </Button>
        <Button type="button" themeColor={'primary'} disabled={isDisabled}>
          Primary
        </Button>
        <Button type="button" themeColor={'secondary'} disabled={isDisabled}>
          Secondary
        </Button>
        <Button type="button" themeColor={'tertiary'} disabled={isDisabled}>
          Tertiary
        </Button>
        <Button type="button" themeColor={'info'} disabled={isDisabled}>
          Info
        </Button>
        <Button type="button" themeColor={'success'} disabled={isDisabled}>
          Success
        </Button>
        <Button type="button" themeColor={'warning'} disabled={isDisabled}>
          Warning
        </Button>
        <Button type="button" themeColor={'error'} disabled={isDisabled}>
          Error
        </Button>
        <Button type="button" themeColor={'dark'} disabled={isDisabled}>
          Dark
        </Button>
        <Button type="button" themeColor={'light'} disabled={isDisabled}>
          Light
        </Button>
        <Button type="button" themeColor={'inverse'} disabled={isDisabled}>
          Inverse
        </Button>
      </div>
      <br />
    </div>
  );
};

export default App;
