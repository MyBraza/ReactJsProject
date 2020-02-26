import React from 'react';
import stl from './Header.module.css'

const Header = () => {
	return (
		<header className={stl.header}>
			<div className={stl.header__bar}>
				<img src="https://pngriver.com/wp-content/uploads/2018/03/Download-Circle-PNG-Free-Download-For-Designing-Use.png" alt="" className={stl.header__logo} />
			</div>
		</header>
	)
}

export default Header