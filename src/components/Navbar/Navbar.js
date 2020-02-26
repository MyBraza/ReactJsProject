import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faNewspaper, faMusic, faCog } from '@fortawesome/free-solid-svg-icons'
import stl from './Navbar.module.css';

const Nav = () => {
	return (
		<nav className={stl.nav}>
			<NavLink className={stl.item} to='/profile' activeClassName={stl.active}>
				<FontAwesomeIcon icon={faUser} className={stl.icon}/>
				<div className={stl.text}>Profile</div>
			</NavLink>
			<NavLink className={stl.item} to='/messages' activeClassName={stl.active}>
				<FontAwesomeIcon icon={faEnvelope} className={stl.icon}/>
				<div className={stl.text}>Messages</div>
			</NavLink>
			<NavLink className={stl.item} to='/news' activeClassName={stl.active}>
				<FontAwesomeIcon icon={faNewspaper} className={stl.icon}/>
				<div className={stl.text}>News</div>
			</NavLink>
			<NavLink className={stl.item} to='/music' activeClassName={stl.active}>
				<FontAwesomeIcon icon={faMusic} className={stl.icon}/>
				<div className={stl.text}>Music</div>
			</NavLink>
			<NavLink className={stl.item} to='/settings' activeClassName={stl.active}>
				<FontAwesomeIcon icon={faCog} className={stl.icon}/>
				<div className={stl.text}>Settings</div>
			</NavLink>
		</nav>
	)
}

export default Nav