import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';
import { Switch, SwitchChangeEvent } from '@progress/kendo-react-inputs';
import { heartIcon, hyperlinkOpenIcon, sparklesIcon } from '@progress/kendo-svg-icons';
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
                    <Button svgIcon={sparklesIcon} type="button" disabled={isDisabled} />

                    <Button svgIcon={sparklesIcon} type="button" fillMode={'outline'} disabled={isDisabled} />

                    <Button svgIcon={sparklesIcon} type="button" fillMode={'flat'} disabled={isDisabled} />

                    <Button svgIcon={heartIcon} type="button" fillMode={'clear'} disabled={isDisabled} />

                    <Button svgIcon={hyperlinkOpenIcon} type="button" fillMode={'link'} disabled={isDisabled} />
                </div>
            </div>
        </div>
    );
};

export default App;
