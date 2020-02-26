import React from 'react'
import stl from './UserImage.module.css'

const UserImage = () => {
	return (
		<div className={'block_style ' + stl.block}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" alt="" className={stl.user__img} />
			<button className={'button_darkgray ' + stl.button_edit}>Edit</button>
		</div>
	)
}

export default UserImage