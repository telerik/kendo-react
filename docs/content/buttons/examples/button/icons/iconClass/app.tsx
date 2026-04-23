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
      <link
        rel="stylesheet"
        href="https://unpkg.com/@progress/kendo-font-icons/dist/index.css"
      />
      <div>
        <div>
          <Label>
            Disabled&nbsp;&nbsp;
            <Switch checked={isDisabled} onChange={handleSwitchChange} />
          </Label>
          <br />
          <br />
          <Button
            iconClass={'fa fa-paperclip'}
            fillMode={'outline'}
            disabled={isDisabled}
            type="button"
          />
          <Button
            iconClass={'fa fa-pencil'}
            fillMode={'flat'}
            disabled={isDisabled}
            type="button"
          />
          <Button
            iconClass={'fa fa-share-square'}
            fillMode={'link'}
            disabled={isDisabled}
          />
          <Button
            iconClass={'fa fa-save'}
            fillMode={'clear'}
            disabled={isDisabled}
            type="button"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
