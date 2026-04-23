import * as React from 'react';

import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
import { NumericTextBox } from '@progress/kendo-react-inputs';

const App = () => {
    const [views, setViews] = React.useState(2);

    const handleInputChange = (event) => {
        if (!event.target.value || event.target.value < 11) {
            setViews(event.target.value);
        }
    };

    return (
        <div>
            <div className="example-config">
                Number of rendered views: &nbsp;
                <NumericTextBox style={{ width: '65px' }} min={1} max={10} value={views} onChange={handleInputChange} />
            </div>
            <MultiViewCalendar views={views || 1} />
        </div>
    );
};

export default App;
