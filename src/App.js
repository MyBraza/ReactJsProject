import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

function App(props) {
	
	return (
		<BrowserRouter className='app-wrapper'>
			<Header />
			<div className='content-container'>				
				<div className='content-wrapper'>
					<Nav />
					<Route render = { () => <Profile state = { props.state.profile } dispatch={props.dispatch}/>} path='/profile'/>
					<Route render = { () => <Dialogs state = { props.state.dialogPage } />} path='/dialogs'/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;