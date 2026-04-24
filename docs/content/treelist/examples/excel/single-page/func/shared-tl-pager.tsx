import * as React from 'react';
import { Pager, PagerProps } from '@progress/kendo-react-data-tools';

export const TreeListPager = (props: PagerProps) => {
    return (
      <Pager
        {...props}
        previousNext={true}
        buttonCount={8}
            // Configure the Pager props here.
            // See example: https://www.telerik.com/kendo-react-ui/components/datatools/pager/
        />
    );
}
