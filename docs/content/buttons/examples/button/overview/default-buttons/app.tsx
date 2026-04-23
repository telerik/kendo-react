// Demo preview deployment test
import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { plusIcon } from '@progress/kendo-svg-icons';
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
                    <Button svgIcon={plusIcon} type="button" disabled={isDisabled}>
                        Default
                    </Button>

                    <Button svgIcon={plusIcon} type="button" fillMode={'outline'} disabled={isDisabled}>
                        Default Outline
                    </Button>

                    <Button svgIcon={plusIcon} type="button" fillMode={'flat'} disabled={isDisabled}>
                        Default Flat
                    </Button>

                    <Button svgIcon={plusIcon} type="button" fillMode={'clear'} disabled={isDisabled}>
                        Default Clear
                    </Button>

                    <Button svgIcon={plusIcon} type="button" fillMode={'link'} disabled={isDisabled}>
                        Default Link
                    </Button>
                </div>
                <br />
                <div>
                    <Button svgIcon={plusIcon} type="button" disabled={isDisabled} themeColor={'primary'}>
                        Default
                    </Button>

                    <Button
                        svgIcon={plusIcon}
                        type="button"
                        fillMode={'outline'}
                        disabled={isDisabled}
                        themeColor={'primary'}
                    >
                        Default Outline
                    </Button>

                    <Button
                        svgIcon={plusIcon}
                        type="button"
                        fillMode={'flat'}
                        disabled={isDisabled}
                        themeColor={'primary'}
                    >
                        Default Flat
                    </Button>

                    <Button
                        svgIcon={plusIcon}
                        type="button"
                        fillMode={'clear'}
                        disabled={isDisabled}
                        themeColor={'primary'}
                    >
                        Default Clear
                    </Button>

                    <Button
                        svgIcon={plusIcon}
                        type="button"
                        fillMode={'link'}
                        disabled={isDisabled}
                        themeColor={'primary'}
                    >
                        Default Link
                    </Button>
                </div>
                <br />
            </div>
        </div>
    );
};

export default App;
