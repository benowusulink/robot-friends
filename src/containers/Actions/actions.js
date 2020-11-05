import {CHANGE_SEARCHFIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED} from '../Constants/constants.js';


const setSetSearchfield = (text) =>{
	return(
		{type: CHANGE_SEARCHFIELD,
	     payload: text})}

const requestRobots = (dispatch)=>{
	dispatch({
		type:REQUEST_ROBOTS_PENDING 
	})
	fetch("https://jsonplaceholder.typicode.com/users")
	.then((res)=>{return(res.json())})
	.then((robots)=>{return(
		dispatch({
		type: REQUEST_ROBOTS_SUCCESS,
		payload: robots
	}))})
	.catch((err)=>{return(dispatch({
		type: REQUEST_ROBOTS_FAILED,
		payload: err
	}))})
}

export {setSetSearchfield, requestRobots};