import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { formatDate } from '@progress/kendo-intl';
import { Button } from '@progress/kendo-react-buttons';
import { Label } from '@progress/kendo-react-labels';

const TODAY = new Date();
const App = () => {
    const [date, setDate] = React.useState<Date>(TODAY);
    const dateInputRef = React.useRef<any>(null);
    return (
        <div>
            <div className="example-config">Selected date: {formatDate(date, 'd MMMM y')}</div>
            <Label editorId="date">Select date</Label>
            <div>
                <DateInput
                    id="date"
                    ref={dateInputRef}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    width="300px"
                />
                <Button
                    style={{
                        marginLeft: '0.5rem'
                    }}
                    onClick={() => {
                        setDate(TODAY);
                        //if (dateInputRef.current) dateInputRef.current?.focus();
                    }}
                >
                    Today
                </Button>
            </div>
        </div>
    );
};

export default App;
