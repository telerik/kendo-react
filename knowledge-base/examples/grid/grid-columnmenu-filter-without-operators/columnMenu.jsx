import * as React from 'react';
import { GridColumnMenuFilter } from '@progress/kendo-react-grid';

export const ColumnMenuWithoutOperators = (props) => {
  return (
    <div className={'noDropDownFilter'}>
      <GridColumnMenuFilter
        {...props}
        hideSecondFilter={true}
        expanded={true}
      />
    </div>
  );
};
