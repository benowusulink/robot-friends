import React, {Component} from 'react';
import {connect} from 'react-redux';
import './app.css';
import Header from '../../components/header/header.js';
import Cardlist from '../../components/cardlist/Cardlist.js';
import Searchbox from '../../components/searchbox/Searchbox.js';
import Scroll from '../../components/scroll/Scroll.js';
import ErrorBoundries from '../../components/errorBoundries/ErrorBoundries.js';
import {setSetSearchfield, requestRobots} from '../Actions/actions.js';

const mapStateToProps = (state) => {
	return({
		searchfield: state.searchRobots.searchfield,
		error: state.requestRobots.error,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
	})
};

const mapDispatchToProps = (dispatch) =>{
	return({
		onSearchChange: (e) => {dispatch(setSetSearchfield(e.target.value))},
		displayRobots: () => {requestRobots(dispatch)}
	})
};

class App extends Component {

	componentDidMount(){
		this.props.displayRobots();
	}	
    
    /* THIS IS AN EXAMPLE OF AN ACTION */
    /*onSearchChange =(e)=> {
    	this.setState({searchfield:e.target.value});
    	}*/
    
	render(props){
	const {onSearchChange, searchfield, robots, error} = this.props;
	const filtRobo = robots.filter((robots)=>{
    return(robots.name.toLowerCase().includes(searchfield.toLowerCase()))})
		
	if(!robots){
		return(<h1>{`loading`}</h1>)}
	else{
		return(
    <div className={`tc`}>
	<Header />
	<Searchbox searchfield={searchfield} 
	onChange={onSearchChange}/> 
	<Scroll>
	<ErrorBoundries error={error}>
	<Cardlist robots={filtRobo}/>
	</ErrorBoundries>
	</Scroll>
	</div>)}}}

export default connect(mapStateToProps, mapDispatchToProps)(App);