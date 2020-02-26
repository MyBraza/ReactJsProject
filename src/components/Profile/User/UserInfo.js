import React from 'react'
import stl from './UserInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const UserInfo = (props) => {
	return (
		<div className={'block_style ' + stl.block}>
				<div className={stl.head}>
					<div className={stl.userName}>User Name</div>
					<div className={stl.status}>
						<FontAwesomeIcon icon={props.device} className={stl.icon}/>
						{props.status}
					</div>
				</div>
				<div className={stl.profileInfo + ' ' + stl.head}>
					<div className={stl.label}>
						Birthday:<br/>
						Addres:<br/>
						Phone:<br/>
						Mail:
					</div>
					<div className={stl.value}>
						{props.birthday + ' '} <br/>
						{props.addres + ' '} <br/>
						{props.phone + ' '} <br/>
						{props.mail + ' '} 
					</div>
				</div>
		</div>
	)
}

export default UserInfo