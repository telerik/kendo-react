import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { saveAs } from '@progress/kendo-file-saver';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '200px'
};

const App = () => {
    const barcode = React.createRef<Barcode>();
    const qrcode = React.createRef<QRCode>();

    const exportBarcode = () => {
        if (!barcode.current) {
            return;
        }
        barcode.current.exportSVG().then((dataURI) => {
            saveAs(dataURI, 'barcode.svg');
        });
    };

    const exportQRCode = () => {
        if (!qrcode.current) {
            return;
        }
        qrcode.current.exportSVG().then((dataURI) => {
            saveAs(dataURI, 'qrcode.svg');
        });
    };

    return (
        <div className="k-card-deck">
            <div className="k-card k-text-center" style={cardStyles}>
                <div className="k-card-body">
                    <Barcode ref={barcode} type="Code128" value="Mascarpone" />
                </div>
                <div className="k-card-actions k-card-actions-stretched">
                    <span className="k-card-action">
                        <Button fillMode={'flat'} themeColor={'primary'} onClick={exportBarcode}>
                            Export as SVG
                        </Button>
                    </span>
                </div>
            </div>

            <div className="k-card k-text-center" style={cardStyles}>
                <div className="k-card-body">
                    <QRCode ref={qrcode} value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
                </div>
                <div className="k-card-actions k-card-actions-stretched">
                    <span className="k-card-action">
                        <Button fillMode={'flat'} themeColor={'primary'} onClick={exportQRCode}>
                            Export as SVG
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default App;
