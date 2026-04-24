import * as React from 'react';

import { AutoComplete, AutoCompleteChangeEvent } from '@progress/kendo-react-dropdowns';
import { InputPrefix, InputSeparator, InputSuffix } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { mapMarkerIcon, warningCircleIcon } from '@progress/kendo-svg-icons';
import { Tooltip } from '@progress/kendo-react-tooltip';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const travelDestinations: string[] = [
        'Paris',
        'Tokyo',
        'New York',
        'London',
        'Rome',
        'Sydney',
        'Barcelona',
        'Dubai',
        'Singapore',
        'Istanbul',
        'Bangkok',
        'Rio de Janeiro',
        'Los Angeles',
        'Amsterdam',
        'Bali'
    ];

    const [value, setValue] = React.useState<string>('');

    const onChange = (event: AutoCompleteChangeEvent) => {
        setValue(event.value);
    };

    return (
        <>
            <Label editorId="destination">Select destination</Label>
            <br />
            <AutoComplete
                id="destination"
                data={travelDestinations}
                value={value}
                onChange={onChange}
                placeholder="e.g. New York"
                style={{ width: '300px' }}
                prefix={() => (
                    <>
                        <InputPrefix>
                            <SvgIcon icon={mapMarkerIcon} />
                        </InputPrefix>
                        <InputSeparator orientation="vertical" />
                    </>
                )}
                suffix={() => (
                    <>
                        <InputSeparator orientation="vertical" />
                        <InputSuffix>
                            <Tooltip anchorElement="parent" position="right" parentTitle={true}>
                                <div className="d-flex justify-content-center k-m-2" title="More Information">
                                    <SvgIcon icon={warningCircleIcon} />
                                </div>
                            </Tooltip>
                        </InputSuffix>
                    </>
                )}
            />
        </>
    );
};

export default App;
