import * as React from "react";;

import {
    Map,
    MapLayers,
    MapBubbleLayer,
    MapShapeLayer
} from '@progress/kendo-react-map';

const center = [45, -60];

const bubbles = [
    { location: [30, -90], value: 1 },
    { location: [60, -60], value: 3 },
    { location: [30, -30], value: 1 }
];
const bubbleStyle = { fill: { color: 'red' } };

const shapes = [{
    type: 'Polygon',
    coordinates: [[[-90, 30], [-60, 60], [-30, 30], [-90, 30]]]
}];
const shapeStyle = { fill: { color: 'green' } };

const MapContainer = () => (
  <Map
    center={center}
  >
    <MapLayers>
      <MapBubbleLayer
        data={bubbles}
        locationField="location"
        valueField="value"
        style={bubbleStyle}
        zIndex={1}
      />
      <MapShapeLayer
        data={shapes}
        style={shapeStyle}
        zIndex={2}
      />
    </MapLayers>
  </Map>
);

export default MapContainer;
