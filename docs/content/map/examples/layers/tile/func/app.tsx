import * as React from "react";;

import {
    Map,
    TileUrlTemplateArgs,
    MapLayers,
    MapTileLayer
} from '@progress/kendo-react-map';

const center = [30.2686, -97.7494];

const tileSubdomains = ['a', 'b', 'c'];
const tileUrl = (e: TileUrlTemplateArgs) => `https://${e.subdomain}.tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '&copy; <a href="https://osm.org/copyright">OpenStreetMap contributors</a>';

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
      </MapLayers>
    </Map>
  </div >
);

export default MapContainer;
