import { useWeatherStore } from "@/stores/weatherStore";
import {getWeather} from "@/helpers/getWeather"



export const useWeather = async () => {
  const temperatura = await getWeather();
  const weatherStore = useWeatherStore();
  weatherStore.temperatura = temperatura;


}
