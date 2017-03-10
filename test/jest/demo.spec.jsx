import React from 'react';
import { mount } from 'enzyme';

import User from '../../app/resources/react/demo/User';

describe('User', () => {
	it('has user data', () => {
		let data = { name: 'Testuser', city: 'Springfield' };
		const testable = mount(
			<User user={data}/>
		);

		expect(testable.props().user.name).toBe(data.name);
	});
});