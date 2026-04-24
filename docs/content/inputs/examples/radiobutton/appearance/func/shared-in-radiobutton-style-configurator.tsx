import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';


interface RadioButtonStyleConfiguratorProps {
    size?: 'small' | 'medium' | 'large';
    sizeOptions?: Array<'small' | 'medium' | 'large'>;
    onSizeChange?: (size: 'small' | 'medium' | 'large') => void;
};

export const RadioButtonStyleConfigurator = (props: RadioButtonStyleConfiguratorProps) => {
    const {
        sizeOptions,
        onSizeChange
    } = { ...RadioButtonStyleConfigurator.defaultProps, ...props };

    const handleSizeChange = (event: DropDownListChangeEvent) => {
        onSizeChange(event.value);
    }

    return (
      <div
        style={{margin: '-30px -30px 30px -30px'}}
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <span className="k-color-primary" style={{textTransform: 'uppercase', padding: '4px 0'}}>Configurator</span>
        </div>
        <div className="example-config" style={{display: 'flex', flexWrap: 'wrap'}}>
          <span className="k-form-field" style={{ flex: "1 1 0px"}}>
            <Label>
              Size
              <div className="k-form-field-wrap">
                <DropDownList data={sizeOptions} value={props.size} onChange={handleSizeChange} style={{minWidth: 120}}/>
              </div>
            </Label>
          </span>
        </div>
      </div>
    )
}

RadioButtonStyleConfigurator.defaultProps = {
    sizeOptions: ['small', 'medium', 'large'],
    onSizeChange: () => {/* noop */ }
}
