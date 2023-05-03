import React, { useEffect, useState } from "react"
import axios from "axios";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const CustomMap = ({ style = { width: "100%", height: "100vh" }}: { style: React.CSSProperties }) => {
  const [items, setItems] = useState<{ id: string, location: [number, number] }[]>([]);
  const position = items.length > 0 ? items[0].location: [ 6.177279,  -75.595208 ] as [number, number];
  
  useEffect(() => {
    async function fetchData() {
      const { data: { data } } = await axios.get("/map");
      setItems(data);
    }
    fetchData();
  }, []);
  
  const markers = items.map((item, key) => {
    return (
      <React.Fragment key={key}>
        <Marker position={item.location} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
          <Popup>{item.id}</Popup>
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
