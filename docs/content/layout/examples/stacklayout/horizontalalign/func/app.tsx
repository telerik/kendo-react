import * as React from 'react';

import { StackLayout, StackLayoutOrientation } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import './styles.css';

const App = () => {
    const [orientation, setOrientation] = React.useState<StackLayoutOrientation>('horizontal');
    const [hAlign, setHAlign] = React.useState<'start'|'center'|'end'|'stretch'>('stretch');
    
    const orientations = ['horizontal', 'vertical'];
    const hAligns = ['start', 'center', 'end', 'stretch'];

    const handleOrientationChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setOrientation(e.value);
        },
        [setOrientation]
    );

    const handleAlignChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setHAlign(e.value);
        },
        [setHAlign]
    );

    return (
      <div>
        <DropDownList
          data={orientations}
          value={orientation}
          onChange={handleOrientationChange}
        />
        <DropDownList
          data={hAligns}
          value={hAlign}
          onChange={handleAlignChange}
        />
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <StackLayout orientation={orientation} align={{horizontal: hAlign}}>
                <div className="box first">Box</div>
                <div className="box second">Box</div>
                <div className="box third">Box</div>
                <div className="box fourth">Box</div>
              </StackLayout>
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
