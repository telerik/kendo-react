import * as React from 'react';

import { ShapeOptions } from '@progress/kendo-drawing';
import usersPerCountry from './shared-mp-countries-users-geo';

import { Map, MapLayers, MapShapeLayer, MapShapeLayerTooltip, ShapeTooltipContext } from '@progress/kendo-react-map';

const center = [40, 0];

const shapeStyle: ShapeOptions = { fill: { color: 'green' } };

const renderShapeTooltip = (props: ShapeTooltipContext) => <span>{props.dataItem.properties.name}</span>;

const MapContainer = () => (
    <div>
        <Map center={center}>
            <MapLayers>
                <MapShapeLayer data={usersPerCountry} style={shapeStyle}>
                    <MapShapeLayerTooltip render={renderShapeTooltip} />
                </MapShapeLayer>
            </MapLayers>
        </Map>
    </div>
);

export default MapContainer;
