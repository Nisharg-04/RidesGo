import React from "react";

function LocationSearchPanel({ setPanelOpen, setVehiclePanel }) {
  const locations = [
    "64/A, Nandanvan Township, Dethli Road, Siddhpur",
    "64/A, sunnagar, Dethli Road, Siddhpur",
    "ngjlbnojng"
  ];
  return (
    <div>
      {/* Smaple data */}
      {locations.map((location, index) => (
        <div
          className=" border-2 p-3 rounded-xl border-[#eeeeee] active:border-black  flex gap-4 items-center justify-start mb-2"
          key={index}
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
        >
          <h2 className=" h-10 w-10 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel;
