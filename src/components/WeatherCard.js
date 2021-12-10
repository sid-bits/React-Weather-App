import React from "react";
import { useSelector, useDispatch } from "react-redux";
import getWeatherData from "../store/weather";

export default function WeatherCard() {
  const { city } = useSelector((state) => state.weatherStore);

  return (
    <div>
      <h1>VetheR</h1>
      Weather goes here.
      <h1>{city}</h1>
    </div>
  );
}
