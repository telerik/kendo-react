import * as React from 'react';
import { QRCode, QRCodeErrorCorrection } from '@progress/kendo-react-barcodes';

const value = 'https://en.wikipedia.org/wiki/QR_code#Error_correction';
const levels: QRCodeErrorCorrection[] = ['L', 'M', 'Q', 'H'];

const App = () => (
    <div className="k-card-deck">
        {levels.map((level, i) => (
            <div key={i} className="k-card k-text-center">
                <div className="k-card-header">
                    <div className="k-card-title">
                        Level {'"'}
                        {level}
                        {'"'}
                    </div>
                </div>
                <div className="k-card-body">
                    <QRCode value={value} errorCorrection={level} size="150px" />
                </div>
            </div>
        ))}
    </div>
);

export default App;
