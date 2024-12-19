import React, { useEffect, useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%", // Full height to ensure it's not obstructed
  position: "relative", // Ensure proper positioning
    zIndex: 1, // Ensure it is above other elements
};

const LiveTracking = ({ zoom }) => {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (zoom) {
      containerStyle.zIndex = 0;
      console.log(containerStyle.zIndex);
    } else {
      containerStyle.zIndex = 1;
    }
    const updatePosition = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.error("Error getting geolocation: ", error);
        }
      );
    };

    updatePosition(); // Initial position update

    const intervalId = setInterval(updatePosition, 10000); // Update every 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [zoom]);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition || { lat: 0, lng: 0 }}
        zoom={currentPosition ? 15 : 2}
      >
        {currentPosition && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default LiveTracking;
