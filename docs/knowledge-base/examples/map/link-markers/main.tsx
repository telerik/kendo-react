import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Path } from '@progress/kendo-drawing';
import {
    Map,
    MapLayers,
    MapShapeLayer,
    MapTileLayer,
    MapMarker,
    MapMarkerLayer,
    ResetEvent,
    TileUrlTemplateArgs
} from '@progress/kendo-react-map';

const center = [20.69, -70.96];
const zoom = 7;

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const markers = [{
    location: [20.69, -70.96],
    title: "Foo",
    pointTo: [18.89, -72.19]
}];

const linkMarker = (map: Map, marker: MapMarker) => {
    const data = marker.dataItem;
    if (data.pointTo) {
        // Convert the latitude and longitude locations to coordinates on the screen.
        const from = map.locationToView(marker.location());
        const to = map.locationToView(data.pointTo);

        // Draw a path on the shape layer.
        const layer = map.layers[1];
        const line = new Path({
            stroke: {
                color: "#fcc",
                width: 6,
                lineCap: 'round'
            }
        });
        line.moveTo(from).lineTo(to);

        layer.surface.draw(line);
    }
}

const reset = (args: ResetEvent) => {
    const map = args.target;
    const layer = map.layers[2];

    for (let marker of layer.items) {
        linkMarker(map, marker);
    }
};

const App = () => (
    <Map
        center={center}
        zoom={zoom}
        onReset={reset}
    >
        <MapLayers>
            <MapTileLayer
                urlTemplate={tileUrl}
                subdomains={tileSubdomains}
                attribution={attribution}
            />
            <MapShapeLayer />
            <MapMarkerLayer
                data={markers}
                locationField="location"
                titleField="title"
            />
        </MapLayers>
    </Map>
);

ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.querySelector('my-app')
  );
