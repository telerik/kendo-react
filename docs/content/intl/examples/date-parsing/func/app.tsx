import React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';

const App: React.FC = () => {
    const intl = useInternationalization();

    const enDate: Date | null = intl.parseDate('11/6/2000', 'M/d/yyyy');
    const utcDate: Date | null = intl.parseDate('2000-11-06T10:30Z');

    return (
        <div>
            <div style={{ marginBottom: '1em' }}>
                <h5>String "11/6/2000" to parse</h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>{enDate ? enDate.toString() : 'Invalid date'}</em>
                    </strong>
                </div>
            </div>

            <div>
                <h5>String "2000-11-06T10:30Z" to parse</h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>{utcDate ? utcDate.toString() : 'Invalid date'}</em>
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default App;
