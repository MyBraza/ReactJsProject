import React from 'react'
import stl from './Feed.module.css'
import UserInfoBlock from '../Dialogs/UserInfoBlock/UserInfoBlock'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Feed = (props) => {
	
	let posts = props.state
	.map(post => (
		<div key={post.id} className={'block_style ' + stl.block}>
			<UserInfoBlock userImage = {post.userImage} userName = {post.userName} userStatus = {post.userStatus} />
			<div className={stl.post__content} >
				<div className={stl.content_text} >{post.contentText}</div>
				<div className={stl.content_imageBox}>
					<img className = {stl.content_image} src={post.contentImage} alt=""/>
				</div>
			</div>
			<div className={stl.post__footer}>
				<FontAwesomeIcon icon={['far', 'heart']} className={stl.postIcon}/>
				<div className={stl.icon}>{post.likeCounter}</div>
				<FontAwesomeIcon icon={['far', 'comment-alt']} className={stl.postIcon}/>
				<div className={stl.icon}>{post.commentCounter}</div>
				<FontAwesomeIcon icon={'share'} className={stl.postIcon}/>
				<div className={stl.icon}>{post.shareCounter}</div>
			</div>
		</div>
	));

	return (
		<div>
			{posts}
		</div>
	)
}

export default Feed