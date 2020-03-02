import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faKeyboard, faQuestionCircle, faShare, faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt, faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faCommentAlt, farFaHeart,  faMobileAlt, faKeyboard, faQuestionCircle, faShare, fasFaHeart)

function App(props) {
	
	return (
		<BrowserRouter className='app-wrapper'>
			<Header />
			<div className='content-container'>				
				<div className='content-wrapper'>
					<Nav />
					<Route render = { () => <Profile state = { props.state.profile }/>} path='/profile'/>
					<Route render = { () => <Dialogs state = { props.state.messagesPage } />} path='/dialogs'/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;