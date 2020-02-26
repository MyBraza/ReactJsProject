import React from 'react'
import stl from './Feed.module.css'

const Feed = () => {
	return (
		<div className={'block_style ' + stl.block}>
			<div className={stl.feed__header}>
				My post <br/>
				New post
			</div>
			<div className={stl.feed__content}>
				<div className={stl.item}>Lorem ipsum dolor sit amet.</div>
				<div className={stl.item}>Lorem ipsum dolor sit amet.</div>
				<div className={stl.item}>Lorem ipsum dolor sit amet.</div>
				<div className={stl.item}>Lorem ipsum dolor sit amet.</div>
			</div>
		</div>
	)
}

export default Feed