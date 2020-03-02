import React from 'react';
import stl from './Dialogs.module.css'
import UserInfoBlock from './UserInfoBlock/UserInfoBlock'
import Messages from './Messages/Messages'

const Dialogs = (props) => {
	
	let dialogs = props.state.dialogs
	.map ( item => (
			<div key={item.id} className={'block_style ' + stl.navBlock}>
				<UserInfoBlock userImage = {item.userImage} userName = {item.userName} userStatus = {item.userStatus} />
			</div>
		));
	
	return (
		<div className={stl.dialogs}>
			<div className={stl.column_left}>
				{dialogs}
			</div>
			<div className={stl.column_right}>
				<Messages messages = {props.state.dialogs[0].messages} />
			</div>
		</div>
	)
}

export default Dialogs