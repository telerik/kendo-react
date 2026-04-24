import * as React from 'react';

import { GridWithFiltering } from './grid-with-filtering';
import { NumericTextBoxProps, NumericTextBoxPropsContext } from '@progress/kendo-react-inputs';

const App = () => {
    const numericTextBoxPropsCallback = React.useCallback((numericTextBoxProps: NumericTextBoxProps) => ({
        ...numericTextBoxProps,
        spinners: false
    }), []);

    return (
      <NumericTextBoxPropsContext.Provider value={numericTextBoxPropsCallback}>
        <GridWithFiltering />
      </NumericTextBoxPropsContext.Provider>
    );
};

export default App;
  
