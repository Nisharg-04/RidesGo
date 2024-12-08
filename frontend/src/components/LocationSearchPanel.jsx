import React from "react";

function LocationSearchPanel({
  setPanelOpen,
  setVehiclePanel,
  suggestions,
  onSelect,
}) {
  return (
    <div className="">
      {suggestions.suggestions && suggestions.suggestions.length > 0 ? (
        suggestions.suggestions.map((location, index) => (
          <div
            className="border-2 p-3 rounded-xl border-gray-300 active:border-black flex gap-4 items-center justify-start mb-2 cursor-pointer"
            key={index}
            onClick={() => onSelect(location.description)}
          >
            <h2 className="h-10 w-10 flex items-center justify-center rounded-full ">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium"> {location.description}</h4>
          </div>
        ))
      ) : (
        <p className="text-gray-500"></p>
      )}
    </div>
  );
}

//     <div>
//       {/* Smaple data */}
//       {locations.map((location, index) => (
//         <div
//           className=" border-2 p-3 rounded-xl border-[#eeeeee] active:border-black  flex gap-4 items-center justify-start mb-2"
//           key={index}
//           onClick={() => {
//             setVehiclePanel(true);
//             setPanelOpen(false);
//           }}
//         >
//           <h2 className=" h-10 w-10 flex items-center justify-center rounded-full">
//             <i className="ri-map-pin-fill"></i>
//           </h2>
//           <h4 className="font-medium">{location}</h4>
//         </div>
//       ))}
//     </div>
//   );

export default LocationSearchPanel;
