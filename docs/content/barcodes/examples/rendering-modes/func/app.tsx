import * as React from 'react';
import { Barcode } from '@progress/kendo-react-barcodes';

const App = () => (
    <div className="k-card-deck">
        <div className="k-card k-text-center">
            <div className="k-card-header">
                <div className="k-card-title">SVG Rendering</div>
            </div>
            <div className="k-card-body">
                <Barcode type="Code128" value="Mascarpone" width={200} height={100} renderAs="svg" />
            </div>
        </div>

        <div className="k-card k-text-center">
            <div className="k-card-header">
                <div className="k-card-title">Canvas Rendering</div>
            </div>
            <div className="k-card-body">
                <Barcode type="Code128" value="Mascarpone" width={200} height={100} renderAs="canvas" />
            </div>
        </div>
    </div>
);

export default App;
