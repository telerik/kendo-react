import * as React from 'react';

import { GridWithFiltering } from './grid-with-filtering';
import { CalendarProps, CalendarPropsContext } from '@progress/kendo-react-dateinputs';

const App = () => {
    const calendarProps = React.useCallback(
        (calendarProps: CalendarProps) => ({
            ...calendarProps,
            navigation: false,
            weekNumber: true
        }),
        []
    );

    return (
        <CalendarPropsContext.Provider value={calendarProps}>
            <GridWithFiltering />
        </CalendarPropsContext.Provider>
    );
};

export default App;
