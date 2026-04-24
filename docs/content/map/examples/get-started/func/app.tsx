import * as React from "react";;

import {
    Map,
    MapLayers,
    MapTileLayer
} from '@progress/kendo-react-map';

const tileUrl = (e) => `https://tile.openstreetmap.org/${e.zoom}/${e.x}/${e.y}.png`;
const attribution = '© OpenStreetMap contributors';

const MapContainer = () => (
  <Map>
    <MapLayers>
      <MapTileLayer
        urlTemplate={tileUrl}
        attribution={attribution}
        />
    </MapLayers>
  </Map>
);

export default MapContainer;
