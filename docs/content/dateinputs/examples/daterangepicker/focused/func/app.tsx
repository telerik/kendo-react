import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const picker: any = React.useRef(undefined);

    React.useEffect(() => {
        if (picker.calendar && picker.calendar.element) {
            picker.calendar.element.focus();
        }
    });

    return <DateRangePicker ref={picker} show={true} focusedDate={new Date(1997, 2, 20)} />;
};
export default App;
