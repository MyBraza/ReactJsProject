import React from 'react';
import stl from './Messages.module.css'

const Messages = (props) => {
	
	let message = props.state.messages
		.map (text =><div>{text}</div>);
	
	return (
		<div>
		{message}
		</div>
	)
}

export default Messages