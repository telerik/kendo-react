import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { homeIcon, calendarIcon, cartIcon, userIcon, searchIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';
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
        <div>
          <Button
            svgIcon={homeIcon}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          >
            Home
          </Button>

          <Button
            svgIcon={calendarIcon}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          >
            Schedule
          </Button>

          <Button
            svgIcon={cartIcon}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          >
            Cart
          </Button>

          <Button
            svgIcon={userIcon}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          >
            Profile
          </Button>

          <Button
            svgIcon={searchIcon}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
