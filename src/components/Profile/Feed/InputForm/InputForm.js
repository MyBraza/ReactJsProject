import React from 'react'
import stl from './InputForm.module.css'

const InputForm = (props) => {
	return (
		<div className={'block_style ' + stl.block}>
			<h2 className = {stl.header} >Share post</h2>
			<textarea placeholder = 'Enter text' className = {stl.input} ></textarea>				
			<button className={'button_darkgray ' + stl.button_submit}>Share</button>
		</div>
	)
}

export default InputForm