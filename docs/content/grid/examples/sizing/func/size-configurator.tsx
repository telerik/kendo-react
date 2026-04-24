import * as React from 'react';

import { Label } from '@progress/kendo-react-labels';
import {
  DropDownList,
  DropDownListChangeEvent,
} from '@progress/kendo-react-dropdowns';

interface SizeConfiguratorProps {
  size?: 'small' | 'medium';
  sizes?: Array<'small' | 'medium'>;
  onSizeChange?: (size: 'small' | 'medium') => void;
}

export const SizeConfigurator: React.FC<SizeConfiguratorProps> = ({
  size = 'medium',
  sizes = ['small', 'medium'],
  onSizeChange = () => {},
}) => {
  const handleSizeChange = (event: DropDownListChangeEvent) => {
    onSizeChange(event.value);
  };

  return (
    <div style={{ margin: '-30px -30px 30px -30px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span
          className="k-color-primary"
          style={{ textTransform: 'uppercase', padding: '4px 0' }}
        >
          Grid Size Configurator
        </span>
      </div>
      <div
        className="example-config"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span
          className="k-form-field"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '120px',
          }}
        >
          <Label>
            Size
            <div className="k-form-field-wrap" style={{ marginTop: '8px' }}>
              <DropDownList
                data={sizes}
                value={size}
                onChange={handleSizeChange}
                style={{ minWidth: 120 }}
              />
            </div>
          </Label>
        </span>
      </div>
    </div>
  );
};
