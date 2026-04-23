import * as React from 'react';

import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';

const App = () => {
    const calendar: any = React.useRef(undefined);

    React.useEffect(() => {
        if (calendar && calendar.current.celement) {
            calendar.current.element.focus();
        }
    }, [calendar]);
    return <MultiViewCalendar ref={calendar} />;
};
export default App;
