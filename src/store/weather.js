import axios from "axios";

// Action Type
// const GET_WEATHER_DATA = "weather/GET_WEATHER_DATA";
// const GET_CITY = "weather/GET_CITY";
const GET_CITY = "GET_CITY";

// Action
// export const getWeatherData = () => {
//   return async (dispatch, getState) => {
//     const response = await axios.get(
//       "https://api.openweathermap.org/data/2.5/weather?q=pilani&appid=dc7e71017d3bcb4adaba91c144d3ec98&units=metric"
//     );

//     console.log(response);

//     if (response) {
//       dispatch({
//         type: GET_WEATHER_DATA,
//         payload: response,
//       });
//     }
//   };
// };

export function getCity(city) {
  // console.log("hereeeeeeeee");
  // console.log("City is: " + city);
  return {
    type: GET_CITY,
    payload: city,
  };
}

// export const getCity = (city) => {
//   // console.log("hereeeeeeeee");
//   // console.log("City is: " + city);
//   return {
//     type: GET_CITY,
//     payload: city,
//   };
// };

// Reducer
const initialState = {
  city: "LA",
};

export default function reducer(state = initialState, action) {
  console.log("Action is: " + action);

  switch (action.type) {
    // Do something here based on the different types of actions
    case GET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      console.log("Okayyyyy");
      return state;
  }
}
