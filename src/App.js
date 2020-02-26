import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'

function App(props) {
	
	return (
		<BrowserRouter className='app-wrapper'>
			<Header />
			<div className='content-container'>				
				<div className='content-wrapper'>
					<Nav />
					<Route render = { () => <Profile state = { props.state.profile }/>} path='/profile'/>
					<Route render = { () => <Messages state = { props.state.messagesPage } />} path='/messages'/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;