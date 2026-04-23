import * as React from 'react';
import { useInternationalization } from '@progress/kendo-react-intl';

interface NumberFormatterProps {
    decimal: number;
}

const NumberFormatter: React.FC<NumberFormatterProps> = ({ decimal }) => {
    const intl = useInternationalization();

    return (
        <div>
            <h6>
                Format {decimal} using 'n2' format with
                <strong> formatNumber </strong> function.
            </h6>
            <h5>Result: {intl.formatNumber(decimal, 'n2')}</h5>
        </div>
    );
};

const App: React.FC = () => {
    const decimal: number = 42.12365;

    return <NumberFormatter decimal={decimal} />;
};

export default App;
