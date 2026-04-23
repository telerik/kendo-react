import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { PDFExport } from '@progress/kendo-react-pdf';
import { Barcode, QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '200px'
};

const App = () => {
    const pdf = React.createRef<PDFExport>();

    const saveAsPDF = () => {
        if (!pdf.current) {
            return;
        }
        pdf.current.save();
    };

    return (
        <React.Fragment>
            <div className="example-config">
                <Button onClick={saveAsPDF}>Save As PDF...</Button>
            </div>

            <PDFExport fileName="barcodes.pdf" paperSize="A4" margin="2cm" ref={pdf}>
                <div className="k-card-deck">
                    <div className="k-card k-text-center" style={cardStyles}>
                        <div className="k-card-header">
                            <div className="k-card-title">Barcode</div>
                        </div>
                        <div className="k-card-body">
                            <Barcode type="Code128" value="Mascarpone" />
                        </div>
                    </div>

                    <div className="k-card k-text-center" style={cardStyles}>
                        <div className="k-card-header">
                            <div className="k-card-title">QR Code</div>
                        </div>
                        <div className="k-card-body">
                            <QRCode value="https://www.telerik.com/kendo-react-ui/components/barcodes/" />
                        </div>
                    </div>
                </div>
            </PDFExport>
        </React.Fragment>
    );
};

export default App;
