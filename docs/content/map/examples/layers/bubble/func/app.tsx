import * as React from 'react';

import { Map, TileUrlTemplateArgs, MapLayers, MapBubbleLayer, MapTileLayer } from '@progress/kendo-react-map';
import urbanAreas from './shared-mp-urban-areas';
import { ShapeOptions } from '@progress/kendo-drawing';

const center = [30.2686, -97.7494];

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const bubbles = urbanAreas;
const bubbleStyle: ShapeOptions = {
    fill: {
        color: 'orange',
        opacity: 0.5
    },
    stroke: {
        width: 1,
        color: 'black'
    }
};

const MapContainer = () => (
    <div>
        <Map center={center} zoom={4}>
            <MapLayers>
                <MapTileLayer urlTemplate={tileUrl} subdomains={tileSubdomains} attribution={attribution} />
                <MapBubbleLayer
                    data={bubbles}
                    locationField="Location"
                    valueField="Pop2010"
                    attribution="Population data from Nordpil and UN Population Division."
                    style={bubbleStyle}
                />
            </MapLayers>
        </Map>
    </div>
);

export default MapContainer;
