import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { ActiveView } from '@progress/kendo-react-dateinputs';

import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';

interface ViewConfiguratorProps {
    value?: ActiveView;
    values?: Array<ActiveView>;
    onValueChange?: (event: RadioButtonChangeEvent) => void;

    children?: React.ReactNode;
}

export const ViewConfigurator = (props: ViewConfiguratorProps) => {
    const { value, values, onValueChange } = {
        ...ViewConfigurator.defaultProps,
        ...props
    };

    return (
        <div style={{ margin: '-30px -30px 30px -30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                    Configurator
                </span>
            </div>
            <div className="example-config" style={{ paddingLeft: '30px' }}>
                <p>Select Active View</p>
                {values.map((el) => (
                    <>
                        <RadioButton
                            id={el}
                            name="view"
                            value={el}
                            defaultChecked={value === el}
                            onChange={onValueChange}
                            style={{ marginLeft: '20px' }}
                        />
                        <Label editorId={el} className="k-radio-label">
                            &nbsp;{el}
                        </Label>
                    </>
                ))}
            </div>
        </div>
    );
};

ViewConfigurator.defaultProps = {
    values: ['month', 'year', 'decade', 'century']
};
