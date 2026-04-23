import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { formatDate } from '@progress/kendo-intl';

const App = () => {
    const [date, setDate] = React.useState<Date>(new Date());
    return (
        <div>
            <div className="example-config">Selected date: {formatDate(date, 'd MMMM y')}</div>
            <Calendar value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
    );
};

export default App;
