import * as React from 'react';
import { QRCode, QRCodeOverlay } from '@progress/kendo-react-barcodes';

const overlay: QRCodeOverlay = {
    type: 'image',
    imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/images/site/kendoka-cta.svg',
    width: 60,
    height: 60
};

const App = () => (
    <div className="k-card k-text-center">
        <div className="k-card-header">
            <div className="k-card-title">QR Code with Image overlay</div>
        </div>
        <div className="k-card-body">
            <QRCode
                value="The quick brown fox jumps over the lazy dog."
                overlay={overlay}
                errorCorrection="Q"
                size="200px"
            />
        </div>
    </div>
);

export default App;
