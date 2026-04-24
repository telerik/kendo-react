import React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';

const App: React.FC = () => {
    const intl = useInternationalization();

    const floatNumber: number | null = intl.parseNumber('12.22');
    const currency: number | null = intl.parseNumber('1.212,22 €', 'de');
    const percentage: number | null = intl.parseNumber('10.26 %');
    const exponential: number | null = intl.parseNumber('1,0000123e+4', 'bg');

    return (
        <div>
            <div style={{ marginBottom: '1em' }}>
                <h5>String "12.22" to parse</h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>
                            {floatNumber !== null ? floatNumber.toString() : 'Invalid number'}
                        </em>
                    </strong>
                </div>
            </div>

            <div style={{ marginBottom: '1em' }}>
                <h5>String "1.212,22 €" to parse </h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>
                            {currency !== null ? currency.toString() : 'Invalid number'}
                        </em>
                    </strong>
                </div>
            </div>

            <div style={{ marginBottom: '1em' }}>
                <h5>String "10.26 %" to parse</h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>
                            {percentage !== null ? percentage.toString() : 'Invalid number'}
                        </em>
                    </strong>
                </div>
            </div>

            <div>
                <h5>String "1,0000123e+4" to parse</h5>
                <div style={{ fontSize: '1.2em' }}>
                    Result:
                    <strong>
                        <em>
                            {exponential !== null ? exponential.toString() : 'Invalid number'}
                        </em>
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default App;
