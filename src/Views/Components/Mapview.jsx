import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// Fixing the default icon paths
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

function Mapview() {
  return (
    <div style={{ height: '40vh', width: '100%',backgroundColor:'red' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>A Popup</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Mapview;
