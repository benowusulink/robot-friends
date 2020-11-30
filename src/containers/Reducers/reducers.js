/* imported variable constants */
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "../Constants/constants.js";

/* initial state of the app */
const initialState = {
  searchfield: "",
  isPending: false,
  robots: [],
  error: "",
};

/* redux reducer responsible for changing the state of the 
 app with the info provided by the actions

 (PLEASE NOTE THERE WOULD USUALLY BE ONE REDUCER IN AN APP,
 THERE ARE TWO HERE FOR DEMOSTRATION PURPOSES TO SHOW UNDERSTANDING 
 OF REDUX) */
const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchfield: action.payload });
    default:
      return state;
  }
};

/* redux reducer responsible for changing the state of the 
 app with the info provided by the actions

 (PLEASE NOTE THERE WOULD USUALLY BE ONE REDUCER IN AN APP,
 THERE ARE TWO HERE FOR DEMOSTRATION PURPOSES TO SHOW UNDERSTANDING 
 OF REDUX) */
const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        robots: action.payload,
      });
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        isPending: true,
        error: action.payload,
      });
    default:
      return state;
  }
};

/* exporting the reducer functions */
export { searchRobots, requestRobots };
