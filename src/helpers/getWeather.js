import axios from "axios";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=18.4719&longitude=-69.8923&hourly=temperature_2m&timezone=auto";

export const getWeather = async () => {
  const reponse = await axios.get(API_URL);
  const nuevaTemperatura = reponse.data.hourly.temperature_2m[0];

  return nuevaTemperatura;
};
