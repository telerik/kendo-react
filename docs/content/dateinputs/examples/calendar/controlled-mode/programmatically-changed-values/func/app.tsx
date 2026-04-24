import * as React from 'react';

import { Calendar } from '@progress/kendo-react-dateinputs';
import { Button } from '@progress/kendo-react-buttons';

const App = () => {
    const [date, setDate] = React.useState<Date>(new Date());
    function setNextPayroll() {
        const daysUntilFriday = (5 - date.getDay() + 7) % 7 || 7;
        const nextPayroll = new Date(date.getFullYear(), date.getMonth(), date.getDate() + daysUntilFriday);
        setDate(nextPayroll);
    }

    function setPreviousPayroll() {
        const daysSinceFriday = (date.getDay() - 5 + 7) % 7 || 7;
        const previousPayroll = new Date(date.getFullYear(), date.getMonth(), date.getDate() - daysSinceFriday);
        setDate(previousPayroll);
    }

    return (
        <div style={{ display: 'inline-block' }}>
            <div
                style={{
                    display: 'flex',
                    marginBottom: '1rem',
                    gap: '1rem'
                }}
            >
                <Button onClick={setPreviousPayroll} style={{ flex: 1 }}>
                    Previous Friday
                </Button>
                <Button onClick={setNextPayroll} style={{ flex: 1 }}>
                    Next Friday
                </Button>
            </div>
            <div style={{ display: 'inline-block' }}>
                <Calendar value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
        </div>
    );
};

export default App;
