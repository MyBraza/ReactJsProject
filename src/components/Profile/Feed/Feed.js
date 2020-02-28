import React from 'react'
import stl from './Feed.module.css'
import InputForm from './InputForm/InputForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feed = (props) => {
	
	let posts = props.state
		.map(post => (
				<div key={post.id} className={'block_style ' + stl.block}>
					<div className={stl.post__header}>
						<img className = {stl.userImage} src={post.userImage} alt=""/>
						<div className={stl.userName}>{post.userName}<FontAwesomeIcon icon={post.userStatus} className={stl.icon}/></div>
					</div>
					<div className={stl.post__content} >
						<div className={stl.content_text} >{post.contentText}</div>
						<div className={stl.content_imageBox}>
							<img className = {stl.content_image} src={post.contentImage} alt=""/>
						</div>
					</div>
					<div className={stl.post__footer}>
						<FontAwesomeIcon icon={['far', 'heart']} className={stl.postIcon}/>
						<div className={stl.counter}>{post.likeCounter}</div>
						<FontAwesomeIcon icon={['far', 'comment-alt']} className={stl.postIcon}/>
						<div className={stl.counter}>{post.commentCounter}</div>
						<FontAwesomeIcon icon={'share'} className={stl.postIcon}/>
						<div className={stl.counter}>{post.shareCounter}</div>
					</div>
				</div>
			));
	
	return (
		<div>
			<InputForm userInfo = {props.info} />
			{posts}
		</div>
	)
}

export default Feed