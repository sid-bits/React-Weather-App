import axios from "axios";

// Action Type
// const GET_WEATHER_DATA = "weather/GET_WEATHER_DATA";
const GET_CITY = "weather/GET_CITY";

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

export const getCity = (city) => {
  console.log("City is: " + city);
  return {
    type: GET_CITY,
    payload: city,
  };
};

// Reducer
export default function reducer(
  state = {
    city: "Paris",
    // weatherData: {},
  },
  action
) {
  switch (action.type) {
    // case GET_WEATHER_DATA: {
    //   return {
    //     ...state,
    //     weatherData: action.payload,
    //   };
    // }

    case GET_CITY: {
      return {
        ...state,
        city: action.payload,
      };
    }

    default:
      return state;
  }
}
