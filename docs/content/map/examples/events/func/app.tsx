import * as React from "react";;

import { ShapeOptions } from '@progress/kendo-drawing';
import {
    Map,
    TileUrlTemplateArgs,
    MapLayers,
    MapShapeLayer,
    MapTileLayer,
    MapMarkerLayer
} from '@progress/kendo-react-map';

const logger = (eventName) => (args) => {
    console.log(eventName, args);
};

const center = [30.2686, -97.7494];

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

const geoShapes = [{
    type: 'Polygon',
    coordinates: [
        // Note that GeoJSON coordinates are listed as Longitude, Latitude (X, Y).
        // Map locations are typically listed as Latitude, Longitude as in the other Map properties.
        [[-97.7409, 30.2675], [-97.7409, 30.2705], [-97.7490, 30.2707], [-97.7494, 30.2686], [-97.7409, 30.2675]]
    ]
}];
const shapeStyle: ShapeOptions = {
    fill: {
        color: '#cf0',
        opacity: 0.5
    },
    stroke: {
        width: 4,
        color: 'orange'
    }
};

const markers = [
    { latlng: [30.2675, -97.7409], name: 'Zevo Toys' },
    { latlng: [30.2707, -97.7490], name: 'Foo Bars' },
    { latlng: [30.2705, -97.7409], name: 'Mainway Toys' },
    { latlng: [30.2686, -97.7494], name: 'Acme Toys' }
];

const MapContainer = () => (
  <div>
    <Map
      center={center}
      zoom={15}
      onBeforeReset={logger('onBeforeReset')}
      onMapClick={logger('mapClick')}
      onMarkerActivate={logger('markerActivate')}
      onMarkerCreated={logger('markerCreated')}
      onMarkerClick={logger('markerClick')}
      onPan={logger('pan')}
      onPanEnd={logger('panEnd')}
      onReset={logger('reset')}
      onShapeClick={logger('shapeClick')}
      onShapeFeatureCreated={logger('shapeFeatureCreated')}
      onShapeMouseEnter={logger('shapeMouseEnter')}
      onShapeMouseLeave={logger('shapeMouseLeave')}
      onZoomStart={logger('zoomStart')}
      onZoomEnd={logger('zoomEnd')}
    >
      <MapLayers>
        <MapTileLayer
          urlTemplate={tileUrl}
          subdomains={tileSubdomains}
          attribution={attribution}
          />
        <MapShapeLayer
          data={geoShapes}
          style={shapeStyle} />
        <MapMarkerLayer
          data={markers}
          locationField="latlng"
          titleField="name"
        />
      </MapLayers>
    </Map>
  </div >
);

export default MapContainer;
