import React, { useState } from "react";
import "../styles/navbar.css";
import getCity from "../store/weather";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();

  const [searchCity, setSearchCity] = useState(null);
  const search = (e) => {
    if (e.code === "Enter" && searchCity != null) {
      console.log(searchCity);
      // dispatch(getCity(searchCity));
      dispatch(getCity(true));
    }
  };

  return (
    <div className="navbar">
      <h2>VetheR</h2>
      <div>
        <input
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
          onKeyPress={search}
          className="search"
          placeholder="search your city..."
          type="text"
        ></input>
      </div>
    </div>
  );
}
