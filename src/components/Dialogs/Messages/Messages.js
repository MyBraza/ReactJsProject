import React from 'react'
import stl from './Messages.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Messages = (props) => {
	
	let messages = props.messages
	.map ( item => (
		<div key = {item.id} >{item.text}</div>
	))
	
	return (
		<div className={'block_style ' + stl.block}>
			{messages}
		</div>
	)
}

export default Messages