import * as React from 'react';

import { StackLayout } from '@progress/kendo-react-layout';
import { NumericTextBox, NumericTextBoxChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [gap, setGap] = React.useState<number>(0);

    const handleChange = React.useCallback(
        (e: NumericTextBoxChangeEvent) => {
            if (e.target.value !== null) { 
                setGap(e.target.value);
            }
        },
        [setGap]
    );

    return (
      <div>
        <NumericTextBox
          value={gap}
          onChange={handleChange}
        />
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <StackLayout orientation="vertical" gap={gap}>
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
