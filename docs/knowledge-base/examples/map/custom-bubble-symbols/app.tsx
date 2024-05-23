import * as React from 'react';
import { Path } from '@progress/kendo-drawing';
import {
    Map,
    MapLayers,
    MapBubbleLayer,
    MapTileLayer,
    BubbleLayerSymbolArgs,
    TileUrlTemplateArgs
} from '@progress/kendo-react-map';

import urbanAreas from './urban-areas.json';

const center = [40, 40];
const zoom = 4;

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const drawLine = (map: Map) => (args: BubbleLayerSymbolArgs) => {
    // Bubble location
    const location = args.location;

    // Find locations 100km west and east of center.
    // Actual distance can be bound to args.dataItem fields
    const l1 = location.destination(100000, 270);
    const l2 = location.destination(100000, 90);

    // Get the view (screen) coordinates for the locations.
    const p1 = map.locationToView(l1);
    const p2 = map.locationToView(l2);

    // Draw the lines.
    const path = new Path({
        stroke: {
            width: 2,
            color: 'red'
        }
    });

    path.moveTo(p1).lineTo(p2);

    return path;
};

const App = () => {
    const map = React.useRef(null);
    const lineSymbol = (args: BubbleLayerSymbolArgs) => {
        return drawLine(map.current)(args);
    };

    return (
        <Map
            center={center}
            zoom={zoom}
            ref={map}
        >
            <MapLayers>
                <MapTileLayer
                    urlTemplate={tileUrl}
                    subdomains={tileSubdomains}
                    attribution={attribution}
                />
                <MapBubbleLayer
                    data={urbanAreas}
                    locationField="Location"
                    valueField="Pop2010"
                    attribution="Population data from Nordpil and UN Population Division."
                    symbol={lineSymbol}
                />
            </MapLayers>
        </Map>
    );
};

export default App;
