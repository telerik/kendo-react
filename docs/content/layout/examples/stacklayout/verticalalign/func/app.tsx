import * as React from 'react';

import { StackLayout, StackLayoutOrientation } from '@progress/kendo-react-layout';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';

import './styles.css';

const App = () => {
    const [orientation, setOrientation] = React.useState<StackLayoutOrientation>('horizontal');
    const [vAlign, setVAlign] = React.useState<'top'|'middle'|'bottom'|'stretch'>('stretch');

    const orientations = ['horizontal', 'vertical'];
    const vAligns = ['top', 'middle', 'bottom', 'stretch'];

    const handleOrientationChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setOrientation(e.value);
        },
        [setOrientation]
    );

    const handleAlignChange = React.useCallback(
        (e: DropDownListChangeEvent) => {
            setVAlign(e.value);
        },
        [setVAlign]
    );

    return (
      <div>
        <DropDownList
          data={orientations}
          value={orientation}
          onChange={handleOrientationChange}
        />
        <DropDownList
          data={vAligns}
          value={vAlign}
          onChange={handleAlignChange}
        />
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <StackLayout orientation={orientation} align={{vertical: vAlign}} style={{height: '100%'}}>
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
