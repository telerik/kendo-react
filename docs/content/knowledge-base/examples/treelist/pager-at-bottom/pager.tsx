import React from 'react';
import { Pager } from '@progress/kendo-react-data-tools';

export const TreeListPager = (props: any) => {
    return <Pager {...props} previousNext={true} buttonCount={8} />;
};
