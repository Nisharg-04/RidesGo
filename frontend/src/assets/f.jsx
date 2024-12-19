const newIntervalId = setInterval(updatePos, 20000);
const updatePos = () => {
    console.log("Updating position");
  setCurrentPosition({
    lat: 37.7749,
    lng: -122.4194,
  });
};