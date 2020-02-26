import React from 'react'
import stl from './Profile.module.css'
import UserImage from './User/UserImage'
import UserInfo from './User/UserInfo'
import Feed from './Feed/Feed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
	return (
		<div className={stl.profile}>
			<div className={stl.column_left}>
				<UserImage />
			</div>
			<div className={stl.column_right}>
				<UserInfo state = {props.state.info}/>
				<Feed state = {props.state.feed}/>
			</div>
		</div>
	)
}

export default Profile