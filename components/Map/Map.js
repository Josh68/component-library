import React, { PropTypes } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.505, -0.09];
const LeafletMap = () => (
  <Map center={position} zoom={13}>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={position}>
      <Popup>
        <span>A pretty CSS3 popup.<br />Easily customizable.</span>
      </Popup>
    </Marker>
  </Map>
);

LeafletMap.displayName = 'Map';
LeafletMap.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  attribution: PropTypes.string,
  position: PropTypes.object,
};

export default LeafletMap;
