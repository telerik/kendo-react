import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { lockIcon, infoCircleIcon, pencilIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';
import './styles.css';

const App = () => {
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    const handleSwitchChange = (event: SwitchChangeEvent) => {
        setIsDisabled(event.value);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
            <div>
                <Label>
                    Disabled&nbsp;&nbsp;
                    <Switch checked={isDisabled} onChange={handleSwitchChange} />
                </Label>
                <br />
                <br />
                <div>
                    <Button
                        svgIcon={infoCircleIcon}
                        type="button"
                        fillMode={'outline'}
                        disabled={isDisabled}
                        themeColor={'base'}
                    >
                        Review
                    </Button>

                    <Button
                        svgIcon={pencilIcon}
                        type="button"
                        fillMode={'outline'}
                        disabled={isDisabled}
                        themeColor={'primary'}
                    >
                        Edit
                    </Button>

                    <Button
                        svgIcon={lockIcon}
                        type="button"
                        fillMode={'outline'}
                        disabled={isDisabled}
                        themeColor={'secondary'}
                    >
                        Permissions
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default App;
