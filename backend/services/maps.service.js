const axios = require("axios");
module.exports.getAddressCoordinates = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log(response.data);
    if (response.data.status == "OK") {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
};

module.exports.getDistanceTime = async (origin, destination) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status == "OK") {
      const { distance, duration } = response.data.rows[0].elements[0];
      return { distance, duration };
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
  try {
    const response = await axios.get(url);
    if (response.data.status == "OK") {
      return response.data.predictions;
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching data");
  }
};
