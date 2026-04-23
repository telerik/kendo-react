import * as React from "react";;

import {
    Map,
    TileUrlTemplateArgs,
    MapLayers,
    MapTileLayer,
    MapMarkerLayer
} from '@progress/kendo-react-map';

const center = [30.2686, -97.7494];

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

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
    >
      <MapLayers>
        <MapTileLayer
          urlTemplate={tileUrl}
          subdomains={tileSubdomains}
          attribution={attribution}
          />
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
