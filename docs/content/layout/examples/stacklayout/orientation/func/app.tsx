import * as React from 'react';

import { StackLayout, StackLayoutOrientation } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import './styles.css';

const App = () => {
    const [orientation, setOrientation] = React.useState<StackLayoutOrientation>('horizontal');
    const orientations = ['horizontal', 'vertical'];

    const handleChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setOrientation(e.value);
        },
        [setOrientation]
    );

    return (
      <div>
        <DropDownList
          data={orientations}
          value={orientation}
          onChange={handleChange}
        />
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <StackLayout orientation={orientation} gap={15}>
                <div className="box first k-flex-40" />
                <div className="box second k-flex-20" />
                <div className="box third k-flex-10" />
                <div className="box fourth k-flex-30" />
              </StackLayout>
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
