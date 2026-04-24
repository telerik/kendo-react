import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';

interface RangeConfiguratorProps {
    min?: Date;
    onMinChange?: (min: Date) => void;

    max?: Date;
    onMaxChange?: (max: Date) => void;

    today?: Date;
    children?: React.ReactNode;
}

export const RangeConfigurator = (props: RangeConfiguratorProps) => {
    const { min, onMinChange, max, onMaxChange, today } = {
        ...RangeConfigurator.defaultProps,
        ...props
    };

    return (
        <div style={{ margin: '-30px -30px 30px -30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                    Configurator
                </span>
            </div>
            <div
                className="example-config"
                style={{
                    display: 'flex',
                    gap: '5rem'
                }}
            >
                <DatePicker
                    label="Min"
                    max={max}
                    value={min}
                    onChange={(e) => onMinChange(e.value || today)}
                    width="150px"
                />
                <DatePicker
                    label="Max"
                    min={min}
                    value={max}
                    onChange={(e) => onMaxChange(e.value || today)}
                    width="150px"
                />
            </div>
        </div>
    );
};

RangeConfigurator.defaultProps = {
    today: new Date(),
    onMinChange: () => {
        /* noop */
    },
    onMaxChange: () => {
        /* noop */
    }
};
