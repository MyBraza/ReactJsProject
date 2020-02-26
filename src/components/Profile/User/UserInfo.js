import React from 'react'
import stl from './UserInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserInfo = (props) => {
	
	let info = Object.entries(props.state.userInfo)
		.map((arr) => 
			 <tr key={arr[0]}>
				<td className = {stl.label} >{arr[0]}:</td><td className = {stl.value}>{arr[1]}</td>
			</tr>)
	
	return (
		<div className={'block_style ' + stl.block}>
				<div className={stl.head}>
					<div className={stl.userName}>{props.state.userName}</div>
					<div className={stl.status}>
						<FontAwesomeIcon icon={props.state.device} className={stl.icon}/>
						{props.state.status}
					</div>
				</div>
				<div className={stl.profileInfo + ' ' + stl.head}>
					<table>
						<tbody>
							{info}
						</tbody>
					</table>
				</div>
		</div>
	)
}

export default UserInfo