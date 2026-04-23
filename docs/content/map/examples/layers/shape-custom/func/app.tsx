import * as React from 'react';

import { ShapeOptions } from '@progress/kendo-drawing';
import usersPerCountry from './shared-mp-countries-users-geo';

import { Map, MapLayers, MapShapeLayer, ShapeCreatedEvent } from '@progress/kendo-react-map';

const center = [40, 0];

const shapeStyle: ShapeOptions = { fill: { color: 'green' } };

const onShapeCreated = (e: ShapeCreatedEvent) => {
    const shape = e.shape;
    const users = e.dataItem.properties.users;
    if (users) {
        const opacity = users / 1000;
        shape.options.set('fill.opacity', opacity);
    }
};

const MapContainer = () => (
    <div>
        <Map center={center} onShapeCreated={onShapeCreated}>
            <MapLayers>
                <MapShapeLayer data={usersPerCountry} style={shapeStyle} />
            </MapLayers>
        </Map>
    </div>
);

export default MapContainer;
