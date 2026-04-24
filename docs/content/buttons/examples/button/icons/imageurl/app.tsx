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
    <div className="container">
      <div
        className="switch-container"
        style={{ marginBottom: '20px'}}
      >
        <Label>
          Disabled&nbsp;&nbsp;
          <Switch checked={isDisabled} onChange={handleSwitchChange} />
        </Label>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 example-col">
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png'
            }
            imageAlt={'Snowboarding'}
            disabled={isDisabled}
          >
            Snowboarding
          </Button>
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png'
            }
            imageAlt={'Snowboarding'}
            title={'Snowboarding'}
            disabled={isDisabled}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 example-col">
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png'
            }
            imageAlt={'Golf'}
            disabled={isDisabled}
          >
            Golf
          </Button>
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/golf.png'
            }
            imageAlt={'Golf'}
            title={'Golf'}
            disabled={isDisabled}
          />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 example-col">
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png'
            }
            imageAlt={'Swimming'}
            disabled={isDisabled}
          >
            Swimming
          </Button>
          <Button
            imageUrl={
              'https://demos.telerik.com/kendo-ui/content/shared/icons/sports/swimming.png'
            }
            imageAlt={'Swimming'}
            title={'Swimming'}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
