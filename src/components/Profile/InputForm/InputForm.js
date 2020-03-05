import React from 'react'
import stl from './InputForm.module.css'
import {changeInputFormValue} from "../../../redux/state";

const InputForm = (props) => {
	
	let inputFormTextarea = React.createRef();

	const changeTextareaValue = () => {
		let text = inputFormTextarea.current.value
		props.changeInputFormValue(text)
	}
	return (
		<div className={'block_style ' + stl.block}>
			<h2 className = {stl.header} >Share your post</h2>
			<textarea ref={inputFormTextarea} onChange = {changeTextareaValue} placeholder = 'Enter text' value={props.inputFormValue} className = {stl.input} ></textarea>
			<button onClick = {props.pushPost} className={'button_darkgray ' + stl.button_submit}>Share</button>
		</div>
	)
}

export default InputForm