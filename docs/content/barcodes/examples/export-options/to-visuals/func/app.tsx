import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Group, exportImage, geometry } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '200px'
};

const rotateVisual = (visual: Group, rotationAngle: number): void => {
    const center = visual.bbox().center();
    visual.transform(geometry.transform().rotate(rotationAngle, center));
};

const scaleVisual = (visual: Group, scale: number): void => {
    const center = visual.bbox().center();
    visual.transform(geometry.transform().scale(scale, scale, center));
};

const App = () => {
    const barcode = React.createRef<Barcode>();
    const qrcode = React.createRef<QRCode>();

    const exportBarcode = () => {
        if (!barcode.current) {
            return;
        }
        const visual = barcode.current.exportVisual();
        if (!visual) {
            return;
        }

        rotateVisual(visual, 90);
        exportImage(visual).then((dataURI) => {
            saveAs(dataURI, 'barcode-rotated.png');
        });
    };

    const exportQRCode = () => {
        if (!qrcode.current) {
            return;
        }
        const visual = qrcode.current.exportVisual();
        if (!visual) {
            return;
        }

        scaleVisual(visual, 4);

        exportImage(visual).then((dataURI) => {
            saveAs(dataURI, 'qrcode-rotated.png');
        });
    };

    return (
        <div className="k-card-deck">
            <div className="k-card k-text-center" style={cardStyles}>
                <div className="k-card-header">
                    <div className="k-card-title">Rotated on export</div>
                </div>
                <div className="k-card-body">
                    <Barcode ref={barcode} type="Code128" value="Mascarpone" />
                </div>
                <div className="k-card-actions k-card-actions-stretched">
                    <span className="k-card-action">
                        <Button fillMode={'flat'} themeColor={'primary'} onClick={exportBarcode}>
                            Process & export
                        </Button>
                    </span>
                </div>
            </div>

            <div className="k-card k-text-center" style={cardStyles}>
                <div className="k-card-header">
                    <div className="k-card-title">Scaled on export</div>
                </div>
                <div className="k-card-body">
                    <QRCode ref={qrcode} value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
                </div>
                <div className="k-card-actions k-card-actions-stretched">
                    <span className="k-card-action">
                        <Button fillMode={'flat'} themeColor={'primary'} onClick={exportQRCode}>
                            Process & export
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default App;
