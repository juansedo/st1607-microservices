import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const CustomMap = ({ style = { width: "100%", height: "100vh" }}: { style: React.CSSProperties }) => {
  const items = [
    { name: 'Bicycle 1', location: { lat: 6.177279, lng: -75.595208 }},
    { name: 'Bicycle 2', location: { lat: 6.187279, lng: -75.595208 }},
    { name: 'Bicycle 3', location: { lat: 6.197279, lng: -75.595208 }},
  ];
  const position = items[0].location;
  
  const markers = items.map((item, key) => {
    return (
      <React.Fragment key={key}>
        <Marker position={item.location}>
          <Popup>{item.name}</Popup>
        </Marker>
      </React.Fragment>
    );
  });

  return (
    <MapContainer style={style} center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};

export default CustomMap;
