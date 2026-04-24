import * as React from 'react';

import { GridWithFiltering } from './grid-with-filtering';
import { DropDownListProps, DropDownListPropsContext } from '@progress/kendo-react-dropdowns';

const App = () => {
    const dropDownListPropsCallback = React.useCallback(
        (dropDownListProps: DropDownListProps) => ({
            ...dropDownListProps,
            iconClassName: 'fa fa-chevron-down'
        }),
        []
    );

    return (
        <React.Fragment>
            <style>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </style>
            <DropDownListPropsContext.Provider value={dropDownListPropsCallback}>
                <GridWithFiltering />
            </DropDownListPropsContext.Provider>
        </React.Fragment>
    );
};

export default App;
