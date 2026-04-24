import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';


interface CheckboxStyleConfiguratorProps {
    size?: 'small' | 'medium' | 'large';
    sizeOptions?: Array<'small' | 'medium' | 'large'>;
    onSizeChange?: (size: 'small' | 'medium' | 'large') => void;

    rounded?: 'small'| 'medium' | 'large';
    roundedOptions?: Array<'small' | 'medium' | 'large'>;
    onRoundedChange?: (rounded: 'small' | 'medium' | 'large') => void;
};

export const CheckboxStyleConfigurator = (props: CheckboxStyleConfiguratorProps) => {
    const {
        sizeOptions,
        onSizeChange,

        roundedOptions,
        onRoundedChange
    } = { ...CheckboxStyleConfigurator.defaultProps, ...props };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        onSizeChange(event.value);
    }

    const handleRoundedChange = (event: DropDownListChangeEvent) => {
        onRoundedChange(event.value);
    }

    return (
      <div
        style={{margin: '-30px -30px 30px -30px'}}
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <span className="k-color-primary" style={{textTransform: 'uppercase', padding: '4px 0'}}>Configurator</span>
        </div>
        <div className="example-config" style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
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
              Rounded Mode
              <div className="k-form-field-wrap">
                <DropDownList data={roundedOptions} value={props.rounded} onChange={handleRoundedChange} style={{minWidth: 120}}/>
              </div>
            </Label>
          </span>
        </div>
      </div>
    )
}

CheckboxStyleConfigurator.defaultProps = {
    sizeOptions: ['small', 'medium', 'large'],
    onSizeChange: () => {/* noop */ },

    roundedOptions: ['small', 'medium', 'large'],
    onRoundedChange: () => {/* noop */ }
}
