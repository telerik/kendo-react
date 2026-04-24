import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { SvgIcon } from '@progress/kendo-react-common';

import './styles.css';
import { heartIcon } from '@progress/kendo-svg-icons';

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
      <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
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
          svgIcon={heartIcon}
          type="button"
          disabled={isDisabled}
          />

          <Button
            icon={'heart-outline'}
            type="button"
            fillMode={'outline'}
            disabled={isDisabled}
          />

          <Button
            iconClass={'fa fa-heart'}
            type="button"
            fillMode={'flat'}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
