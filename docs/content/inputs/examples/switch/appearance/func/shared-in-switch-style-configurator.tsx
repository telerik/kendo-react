import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';


interface SwitchStyleConfiguratorProps {
    size?: 'small' | 'medium' | 'large';
    sizeOptions?: Array<'small' | 'medium' | 'large'>;
    onSizeChange?: (size: 'small' | 'medium' | 'large') => void;

    trackRounded?: 'small'| 'medium' | 'large'| 'full';
    trackRoundedOptions?: Array<'small' | 'medium' | 'large' | 'full'>;
    onTrackRoundedChange?: (trackRounded: 'small' | 'medium' | 'large' | 'full') => void;

    thumbRounded?: 'small' | 'medium' | 'large'| 'full';
    thumbRoundedOptions?: Array<'small' | 'medium' | 'large'| 'full'>;
    onThumbRoundedChange?: (thumbRounded: 'small' | 'medium' | 'large'| 'full') => void;
};

export const SwitchStyleConfigurator = (props: SwitchStyleConfiguratorProps) => {
    const {
        sizeOptions,
        onSizeChange,

        trackRoundedOptions,
        onTrackRoundedChange,

        thumbRoundedOptions,
        onThumbRoundedChange
    } = { ...SwitchStyleConfigurator.defaultProps, ...props };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        onSizeChange(event.value);
    }

    const handleFillModeChange = (event: DropDownListChangeEvent) => {
        onTrackRoundedChange(event.value);
    }

    const handleRoundedChange = (event: DropDownListChangeEvent) => {
        onThumbRoundedChange(event.value);
    }

    return (
      <div
        style={{margin: '-30px -30px 30px -30px'}}
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <span className="k-color-primary" style={{textTransform: 'uppercase', padding: '4px 0'}}>Configurator</span>
        </div>
        <div className="example-config" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <span className="k-form-field" style={{ flex: "1 1 0px"}}>
            <Label>
              Size
              <div className="k-form-field-wrap">
                <DropDownList data={sizeOptions} value={props.size} onChange={handleSizeChange} style={{minWidth: 120}}/>
              </div>
            </Label>
          </span>
          <span className="k-form-field" style={{ flex: "1 1 0px"}}>
            <Label>
              Track Rounded Mode
              <div className="k-form-field-wrap">
                <DropDownList data={trackRoundedOptions} value={props.trackRounded} onChange={handleFillModeChange} style={{minWidth: 120}}/>
              </div>
            </Label>
          </span>
          <span className="k-form-field" style={{ flex: "1 1 0px"}}>
            <Label>
              Thumb Rounded Radius
              <div className="k-form-field-wrap">
                <DropDownList data={thumbRoundedOptions} value={props.thumbRounded} onChange={handleRoundedChange} style={{minWidth: 120}}/>
              </div>
            </Label>
          </span>
        </div>
      </div>
    )
}

SwitchStyleConfigurator.defaultProps = {
    sizeOptions: ['small', 'medium', 'large'],
    onSizeChange: () => {/* noop */ },

    trackRoundedOptions: ['small', 'medium', 'large', 'full'],
    onTrackRoundedChange: () => {/* noop */ },

    thumbRoundedOptions: ['small', 'medium', 'large', 'full'],
    onThumbRoundedChange: () => {/* noop */ }
}
