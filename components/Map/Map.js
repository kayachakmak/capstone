import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useRef, useEffect } from "react";
import LocateButton from "../LocateButton/LocateButton";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

export default function Map() {
  const position = [52.52, 13.405];

  /*   const [currentPosition, setCurrentPosition] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (currentPosition && mapRef.current) {
      mapRef.current.flyTo(currentPosition, 13, { duration: 1 });
    }
  }, [currentPosition]);

  const locateUser = () => {
    if (mapRef.current) {
      mapRef.current.locate();
      console.log(mapRef.current);
    }
  };

  const handleLocationFound = (e) => {
    setCurrentPosition(e.latlng);
  };
  const handleLocationError = (e) => {
    alert("Error retrieving your location: " + e.message);
  }; */
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "500px", width: "100%", borderRadius: "10px" }}
      /*  ref={mapRef}
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
        mapInstance.on("locationfound", handleLocationFound);
        mapInstance.on("locationerror", handleLocationError);
      }} */
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/*    {currentPosition && (
        <Marker position={currentPosition}>
          <Popup>You are here</Popup>
        </Marker>
      )} */}
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
