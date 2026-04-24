import * as React from 'react';
import { Chip } from '@progress/kendo-react-buttons';
import { homeIcon, infoCircleIcon, checkCircleIcon, warningTriangleIcon, xCircleIcon } from '@progress/kendo-svg-icons';
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
                <br />
                <br />
                <div>
                    <div className="chip-group">
                        <Chip
                            text={'Base'}
                            value={'base chip'}
                            svgIcon={homeIcon}
                            themeColor={'base'}
                            disabled={isDisabled}
                        />
                        <Chip
                            text={'Info'}
                            value={'info chip'}
                            svgIcon={infoCircleIcon}
                            themeColor={'info'}
                            disabled={isDisabled}
                        />
                        <Chip
                            text={'Success'}
                            value={'success chip'}
                            svgIcon={checkCircleIcon}
                            themeColor={'success'}
                            disabled={isDisabled}
                        />
                        <Chip
                            text={'Warning'}
                            value={'warning chip'}
                            svgIcon={warningTriangleIcon}
                            themeColor={'warning'}
                            disabled={isDisabled}
                        />
                        <Chip
                            text={'Error'}
                            value={'error chip'}
                            svgIcon={xCircleIcon}
                            themeColor={'error'}
                            disabled={isDisabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
