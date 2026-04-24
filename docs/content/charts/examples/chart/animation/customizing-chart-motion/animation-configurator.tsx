import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

export type MotionPreset = 'default' | 'standard' | 'rapid' | 'stretchy' | 'linear';

interface AnimationConfiguratorProps {
    preset?: MotionPreset;
    presets?: MotionPreset[];
    onPresetChange?: (preset: MotionPreset) => void;
}

export const AnimationConfigurator: React.FC<AnimationConfiguratorProps> = ({
    preset = 'default',
    presets = ['default', 'standard', 'rapid', 'stretchy', 'linear'],
    onPresetChange = () => {}
}) => {
    const editorId = React.useId();

    const handlePresetChange = (event: DropDownListChangeEvent) => {
        onPresetChange(event.value);
    };

    return (
        <div style={{ margin: '-30px -30px 30px -30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <span className="k-color-primary" style={{ textTransform: 'uppercase', padding: '4px 0' }}>
                    Chart Animation Configurator
                </span>
            </div>
            <div
                className="example-config"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}
            >
                <span
                    className="k-form-field"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        minWidth: '180px'
                    }}
                >
                    <Label editorId={editorId}>Motion preset</Label>
                    <div className="k-form-field-wrap" style={{ marginTop: '8px' }}>
                        <DropDownList
                            id={editorId}
                            data={presets}
                            value={preset}
                            onChange={handlePresetChange}
                            style={{ minWidth: 180 }}
                        />
                    </div>
                </span>
            </div>
        </div>
    );
};
