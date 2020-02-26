import React from 'react'
import stl from './Feed.module.css'
import InputForm from './InputForm/InputForm'

const Feed = (props) => {
	return (
		<div>
			<InputForm />
			<div className={'block_style ' + stl.block}>
				<div className={stl.feed__header}>
					My Feed
				</div>
				<div className={stl.feed__content}>
					<div className={stl.item}>Lorem ipsum dolor sit amet.</div>
				</div>
			</div>
		</div>
	)
}

export default Feed