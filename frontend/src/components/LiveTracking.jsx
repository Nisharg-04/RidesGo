import { useEffect, useState, useMemo } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const LiveTracking = ({ zoom }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const defaultLocation = useMemo(() => ({ lat: 28.6139, lng: 77.209 }), []); // New Delhi, India

  useEffect(() => {
    const updatePosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
              lat: latitude,
              lng: longitude,
            });
            console.log(latitude, longitude);
            setIsLoading(false);
            setError(null);
          },
          (error) => {
            console.error("Error getting geolocation: ", error);
            setError("Unable to get your location. Using default location.");
            setCurrentPosition(defaultLocation);
            setIsLoading(false);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000,
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setCurrentPosition(defaultLocation);
        setIsLoading(false);
      }
    };

    updatePosition();

    const intervalId = setInterval(updatePosition, 10000);

    return () => clearInterval(intervalId);
  }, [zoom, defaultLocation]);

  const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    console.log(
      "Google Maps API Key:",
      googleMapsApiKey ? "✓ Found" : "✗ Missing"
    );
    console.log("Current Position:", currentPosition);
    console.log("Loading State:", isLoading);
  }, [googleMapsApiKey, currentPosition, isLoading]);

  if (!googleMapsApiKey) {
    return (
      <div className="flex items-center justify-center h-full bg-red-100">
        <div className="text-center p-4">
          <p className="text-red-600 font-semibold">
            Google Maps API Key Missing
          </p>
          <p className="text-red-500 text-sm">
            Please check your environment variables
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Getting your location...</p>
        </div>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
      loadingElement={
        <div className="flex items-center justify-center h-full bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-gray-600">Loading Google Maps...</p>
          </div>
        </div>
      }
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition || defaultLocation}
        zoom={15}
        options={{
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {currentPosition && (
          <Marker
            position={currentPosition}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              scaledSize: { width: 40, height: 40 },
            }}
          />
        )}
      </GoogleMap>
      {error && (
        <div className="absolute top-4 left-4 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-10">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </LoadScript>
  );
};

export default LiveTracking;
