import React from 'react'
import stl from './Feed.module.css'
import InputForm from './InputForm/InputForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feed = (props) => {
	return (
		<div>
			<InputForm userInfo = {props.info} />
			<div className={'block_style ' + stl.block + stl.post}>
				<div className={stl.post__header}>
					<img className = {stl.userImage} src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" alt=""/>
					<div className={stl.userName}>Its Me <FontAwesomeIcon icon={props.userInfo.device} className={stl.icon}/></div>
				</div>
				<div className={stl.post__content} >
					
				</div>
				<div className={stl.post__footer}>
					
				</div>
			</div>
		</div>
	)
}

export default Feed