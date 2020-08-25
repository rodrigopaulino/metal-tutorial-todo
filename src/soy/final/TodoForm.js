'use strict';

import templates from './TodoForm.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TodoForm extends Component {
	handleSubmit(event) {
		event.preventDefault();

		if (this.value) {
			this.emit('todoAdd', {
				title: this.value
			});

			this.value = '';
		}
	}

	handleChange(event) {
		const {target} = event;
		let {value} = target;

		this.setState(
			{
				value
			},
			() => {}
		);
	}
}
Soy.register(TodoForm, templates);

TodoForm.STATE = {
	value: {
		value: 'teste'
	}
}

export { TodoForm };
export default TodoForm;
