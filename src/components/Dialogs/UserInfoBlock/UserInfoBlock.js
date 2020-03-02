import React from 'react'
import stl from './UserInfoBlock.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserInfoBlock = (props) => {
	return (
		<div className={stl.userInfoBlock}>
			<img className = {stl.userImage} src={props.userImage} alt=""/>
			<div className={stl.userName}>{props.userName}<FontAwesomeIcon icon={props.userStatus} className={stl.icon}/></div>
		</div>
	)
}

export default UserInfoBlock