import * as React from 'react'

import { NumericTextBox } from '@progress/kendo-react-inputs';
import { NumberFormatOptions } from '@progress/kendo-react-intl';

const App = () => {
    const value = 5;
    const percentage = 0.7;
    const formatOptions: NumberFormatOptions = {
        style: 'currency',
        currency: 'EUR',
        currencyDisplay: 'name'
    };

    return (
      <div>
        <div>Decimal</div>
        <NumericTextBox
          width={300}
          format="n2"
          defaultValue={value}
        />
        <br />
        <br />
        <div>Percentage</div>
        <NumericTextBox
          width={300}
          format="p"
          defaultValue={percentage}
          min={0}
          max={1}
          step={0.1}
        />
        <br />
        <br />
        <div>Currency</div>
        <NumericTextBox
          width={300}
          defaultValue={value}
          format="c2"
          min={0}
        />
        <br />
        <br />
        <div>Currency with format options</div>
        <NumericTextBox
          width={300}
          defaultValue={value}
          min={0}
          format={formatOptions}
        />
      </div>
    );
}
export default App;
