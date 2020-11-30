/* imported variable constants */

import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../Constants/constants.js";

/* An action function that defines the data 
 of the searchfield */
const setSetSearchfield = (text) => {
  return { type: CHANGE_SEARCHFIELD, payload: text };
};

/* An action function which accepts dispatch from the 
 app component as a parameter and then makes an API 
 request to retrieve json data which will be used as 
 the robot cards data */
const requestRobots = (dispatch) => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING,
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((robots) => {
      return dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: robots,
      });
    })
    .catch((err) => {
      return dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: err,
      });
    });
};

/* exporting functions so it can be used within 
 other files */
export { setSetSearchfield, requestRobots };
