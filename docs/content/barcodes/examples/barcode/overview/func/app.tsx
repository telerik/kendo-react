import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';
// Styles
const cardStyles = {
    width: '30%'
};

const barcodeStyles = {
    width: '100%'
};

const imageStyles = {
    width: '70%',
    height: 'auto',
    display: 'block',
    margin: 'auto'
};

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center" style={cardStyles}>
            <img
                className="k-card-image"
                src="https://demos.telerik.com/kendo-ui/content/shared/images/foods/200/12.jpg"
                alt="KendoReact Barcode Manchego Cheese image"
                style={imageStyles}
            />
            <div className="k-card-body">
                <Barcode style={barcodeStyles} type="EAN8" value="2346722" />
            </div>
        </div>
        <div className="k-card k-text-center" style={cardStyles}>
            <img
                className="k-card-image"
                src="https://demos.telerik.com/kendo-ui/content/shared/images/foods/200/32.jpg"
                alt="KendoReact Barcode Mascarpone image"
                style={imageStyles}
            />
            <div className="k-card-body">
                <Barcode style={barcodeStyles} type="Code128" value="Mascarpone" />
            </div>
        </div>
        <div className="k-card k-text-center" style={cardStyles}>
            <img
                className="k-card-image"
                src="https://demos.telerik.com/kendo-ui/content/shared/images/foods/200/72.jpg"
                alt="KendoReact Barcode Mozzarella image"
                style={imageStyles}
            />
            <div className="k-card-body">
                <Barcode style={barcodeStyles} type="Code39" value="BRUNOST" />
            </div>
        </div>
    </div>
);

export default App;
