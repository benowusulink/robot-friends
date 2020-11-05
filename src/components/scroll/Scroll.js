import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflowY:"scroll", border:"solid black 1px", height: "500px"}}>
		{props.children}
		</div>)
}

export default Scroll;