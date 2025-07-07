import React from "react";
function LocationSearchPanel({ suggestions = [], onSelect }) {
  if (!Array.isArray(suggestions)) {
    console.error("Suggestions prop is not an array:", suggestions);
    return null;
  }
  return (
    <div className="p-2 w-full mt-7  bg-white">
      {suggestions.length > 0 &&
        suggestions.map((location, index) => (
          <div
            className="border-2 p-3 rounded-xl border-gray-300 active:border-black flex gap-4 items-center justify-start mb-2 cursor-pointer hover:bg-gray-100 transition"
            key={index}
            onClick={() => onSelect(location)}
          >
            <h2 className="h-10 w-10 flex items-center justify-center rounded-full ">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location.description}</h4>
          </div>
        ))}
    </div>
  );
}
export default LocationSearchPanel;
