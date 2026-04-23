import * as React from 'react';
import { InputPrefix, NumericTextBox } from '@progress/kendo-react-inputs';
import { SvgIcon } from '@progress/kendo-react-common';
import { mapMarkerTargetIcon } from '@progress/kendo-svg-icons';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div style={{ display: 'grid', gap: '16px', maxWidth: 'fit-content' }}>
            <div style={{ display: 'grid', gap: '4px' }}>
                <Label>Numeric Input Mode</Label>
                <NumericTextBox
                    format="n0"
                    defaultValue={42}
                    inputAttributes={{ inputMode: 'numeric' }}
                    style={{ width: 300 }}
                    prefix={() => (
                        <InputPrefix>
                            <SvgIcon icon={mapMarkerTargetIcon} />
                        </InputPrefix>
                    )}
                />
            </div>

            <div style={{ display: 'grid', gap: '4px' }}>
                <Label>Decimal Input Mode</Label>
                <NumericTextBox
                    format="n4"
                    defaultValue={42.6977}
                    inputAttributes={{ inputMode: 'decimal' }}
                    style={{ width: 300 }}
                    prefix={() => (
                        <InputPrefix>
                            <SvgIcon icon={mapMarkerTargetIcon} />
                        </InputPrefix>
                    )}
                />
            </div>
        </div>
    );
};

export default App;
