import * as React from 'react';

import { GridWithFiltering } from './grid-with-filtering';
import {
  NumericTextBoxPropsContext,
  InputPropsContext,
} from '@progress/kendo-react-inputs';
import { DatePickerPropsContext } from '@progress/kendo-react-dateinputs';
const App = () => {
  const numericTextBoxPropsCallback = React.useCallback((props) => {
    if (props.ariaLabel == 'Filter') {
      return {
        ...props,
        placeholder: 'Search...',
      };
    } else {
      return { ...props };
    }
  }, []);

  const datePickerPropsCallback = React.useCallback((props) => {
    if (props.ariaLabel == 'Filter') {
      return {
        ...props,
        placeholder: 'Search...',
      };
    } else {
      return { ...props };
    }
  }, []);

  React.useEffect(() => {
    let filterInputs = document.querySelectorAll(
      '.k-filtercell-wrapper .k-textbox .k-input-inner'
    );
    if (filterInputs.length > 0) {
      filterInputs.forEach((el) => {
        el.setAttribute('placeholder', 'Search...');
      });
    }
  }, []);
  return (
    <DatePickerPropsContext.Provider value={datePickerPropsCallback}>
      <NumericTextBoxPropsContext.Provider value={numericTextBoxPropsCallback}>
        <GridWithFiltering />
      </NumericTextBoxPropsContext.Provider>
    </DatePickerPropsContext.Provider>
  );
};
export default App;
