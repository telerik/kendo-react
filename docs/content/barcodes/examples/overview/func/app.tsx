import * as React from 'react';
import { Barcode, QRCode, QRCodeOverlay } from '@progress/kendo-react-barcodes';
import './styles.css';

const foodImageUrl = (import.meta.env.VITE_REACT_DEMOS_BASE_URL || '') + 'assets/barcodes/foods/72.jpg';

const qrOverlay: QRCodeOverlay = {
    type: 'image',
    imageUrl: 'https://demos.telerik.com/kendo-ui/content/shared/images/site/kendoka-cta.svg',
    width: 40,
    height: 40
};

const App = () => (
    <div className="showcase">
        <div className="showcase-card">
            <div className="card-image">
                <img src={foodImageUrl} alt="Mozzarella di Bufala" />
            </div>
            <div className="card-content">
                <span className="card-badge">Barcode</span>
                <span className="card-name">Mozzarella di Bufala</span>
                <span className="card-meta">Fresh Italian Cheese &bull; 125g</span>
                <Barcode
                    type="EAN13"
                    value="590123412345"
                    padding={{ top: 2, bottom: 0, left: 2, right: 2 }}
                    className="card-barcode"
                />
            </div>
        </div>

        <div className="showcase-card qr-card">
            <div className="qr-header">
                <span className="card-badge">QR Code</span>
                <span className="qr-title">Scan for product details</span>
            </div>
            <div className="qr-body">
                <QRCode
                    value="https://www.telerik.com/kendo-react-ui/components/barcodes/"
                    errorCorrection="M"
                    overlay={qrOverlay}
                    size="150px"
                />
            </div>
            <span className="qr-url">telerik.com/kendo-react-ui</span>
        </div>
    </div>
);

export default App;
