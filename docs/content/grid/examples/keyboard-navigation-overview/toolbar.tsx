import * as React from 'react';
import { Toolbar } from '@progress/kendo-react-buttons';

const GridToolbar = (props) => {
    return <Toolbar {...props} className="k-grid-toolbar" />;
};

GridToolbar.displayName = 'KendoReactGridToolbar';

export { GridToolbar };
