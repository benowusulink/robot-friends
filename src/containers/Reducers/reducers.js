import {CHANGE_SEARCHFIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCESS,
		REQUEST_ROBOTS_FAILED} from '../Constants/constants.js';

const initialState = {
	searchfield: "",
	isPending: false,
	robots: [],
	error: ""
}

const searchRobots = (state = initialState, action = {}) => {

	switch (action.type){
		case CHANGE_SEARCHFIELD:
		return(
			Object.assign({}, state, {searchfield: action.payload})
			)
		default:
		return(state)
	}}

const requestRobots = (state = initialState, action = {}) =>{
	switch(action.type){
		case REQUEST_ROBOTS_PENDING:
		return(
			Object.assign({}, state, {isPending: true})
			)
		case REQUEST_ROBOTS_SUCCESS:
		return(
			Object.assign({}, state, {isPending: false, robots: action.payload})
			)
		case REQUEST_ROBOTS_FAILED: 
		return(
			Object.assign({}, state, {isPending: true, error: action.payload})
			)
		default:
		return(state)
	}
}

export {searchRobots, requestRobots};