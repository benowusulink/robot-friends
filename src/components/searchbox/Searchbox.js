import React from 'react';

const Searchbox = ({searchfield, onChange})=>{
	return(
		<div>
		<input 
			type={`search`} 
			placeholder={`search robots`}
			className={`pa3 ba b--green bg-lightest-blue`}
			onChange={onChange}
			/>
		</div>)
}

export default Searchbox;