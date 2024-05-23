import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Element, Surface, ShapeOptions, Text } from '@progress/kendo-drawing';
import {
    Map,
    MapLayers,
    MapShapeLayer,
    MapTileLayer,
    ShapeCreatedEvent,
    TileUrlTemplateArgs
} from '@progress/kendo-react-map';

import shapes from './shapes.json';

const center = [47.4599, -100.5908];
const zoom = 6;

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const shapeStyle: ShapeOptions = {
    fill: {
        opacity: 0.75
    }
};

const shapeCreated = (e: ShapeCreatedEvent) => {
    const title = e.dataItem.properties.abbrev;
    drawTitle(e.shape, title, e.layer.surface);
}

const drawTitle = (shape: Element, title: string, surface: Surface) => {
    // Calculate the shape bounding box.
    const bbox = shape.bbox();
    const center = bbox.center();

    // Create the label.
    const label = new Text(title, [0, 0]);
    const labelCenter = label.bbox().center();

    // Position the label.
    label.position([
        center.x - labelCenter.x,
        center.y - labelCenter.y
    ]);

    // Render the label on the layer surface.
    surface.draw(label);
}

const App = () => (
    <Map
        center={center}
        zoom={zoom}
        onShapeCreated={shapeCreated}
    >
        <MapLayers>
            <MapTileLayer
                urlTemplate={tileUrl}
                subdomains={tileSubdomains}
                attribution={attribution}
            />
            <MapShapeLayer data={shapes} style={shapeStyle} />
        </MapLayers>
    </Map>
);

ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    document.querySelector('my-app')
  );
