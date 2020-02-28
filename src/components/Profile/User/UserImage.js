import React from 'react'
import stl from './UserImage.module.css'

const UserImage = (props) => {
	return (
		<div className={'block_style ' + stl.block}>
			<img src = {props.state.userImage} alt = "" className = {stl.user__img} />
			<button className = {'button_darkgray ' + stl.button_edit}>Edit</button>
		</div>
	)
}

export default UserImage