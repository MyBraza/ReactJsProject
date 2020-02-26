import React from 'react'
import {Route, BrowserRouter} from "react-router-dom"
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Messages from './components/Messages/Messages'

function App() {
	return (
		<BrowserRouter className='app-wrapper'>
			<Header />
			<div className='content-container'>				
				<div className='content-wrapper'>
					<Nav />
					<Route component={Profile} path='/profile'/>
					<Route component={Messages} path='/messages'/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;