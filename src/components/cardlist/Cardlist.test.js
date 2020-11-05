import React from 'react';
import {shallow} from 'enzyme';
import Cardlist from './Cardlist.js';

it("react test", ()=>{

	const robots = [{

		id: 1,
		name: 'Jogn',
		username: "blaajd",
		email: "dwjndjc"
	}]

	expect(shallow(<Cardlist robots ={robots}/>)).toMatchSnapshot();
});

