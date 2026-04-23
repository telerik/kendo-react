import * as React from 'react';
import { QRCode } from '@progress/kendo-react-barcodes';

const receipt = `SPC
0200
1
CH4431999123000889012
S
Robert Schneider AG
Rue du Lac
1268
2501
Biel
CH







1949.75
CHF
S
Pia-Maria Rutschmann-Schnyder
Grosse Marktgasse
28
9400
Rorschach
CH
QRR
210000000003139471430009017
Instruction of 03.04.2019
EPD
//S1/10/10201409/11/190512/20/1400.000-53/30/106017086/31/180508/32/7.7/40/2:10;0:30
Name AV1: UV;UltraPay005;12345
Name AV2: XY;XYService;54321`;

const App = () => (
    <div className="k-card k-text-center">
        <div className="k-card-header">
            <div className="k-card-title">Swiss QR Code</div>
        </div>
        <div className="k-card-body">
            <QRCode value={receipt} overlay={{ type: 'swiss' }} errorCorrection="Q" size="400px" />
        </div>
    </div>
);

export default App;
