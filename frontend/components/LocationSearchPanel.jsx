import React from "react";

function LocationSearchPanel() {
  return (
    <div>
      {/* Smaple data */}
      <div className=" flex gap-4 items-center justify-start mb-5">
        <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
          <i class="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          64/A, Nandanvan Township, Dethli Road, Siddhpur
        </h4>
      </div>
      <div className=" flex gap-4 items-center justify-start mb-5">
        <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
          <i class="ri-map-pin-fill"></i>
        </h2>
        <h4 className="font-medium">
          64/A, Nandanvan Township, Dethli Road, Siddhpur
        </h4>
      </div>
    </div>
  );
}

export default LocationSearchPanel;
