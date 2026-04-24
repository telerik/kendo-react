import * as React from 'react';
import { QRCode } from '@progress/kendo-react-barcodes';

const cardStyles = {
    width: '200px'
};

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">URL</div>
            </div>
            <div className="k-card-body">
                <QRCode value="https://www.telerik.com/kendo-react-ui" errorCorrection="M" />
            </div>
        </div>
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">Location</div>
            </div>
            <div className="k-card-body">
                <QRCode value="geo:42.65956,23.3782001;crs=wgs84;u=40" errorCorrection="H" color="#166a83" />
            </div>
        </div>
        <div className="k-card k-text-center" style={cardStyles}>
            <div className="k-card-header">
                <div className="k-card-title">E-mail</div>
            </div>
            <div className="k-card-body">
                <QRCode value="mailto:clientservice@telerik.com" color="#e15613" />
            </div>
        </div>
    </div>
);

export default App;
