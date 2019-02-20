import React from 'react';

const NavButton = (props) =>{
	return (
		<button 
			onClick={() => props.navigation(props.navTo)}
			className={`navButton ${props.selected === false ? 'navButton--unselected' : ''}`}
			type="button">
			<span className="navButton__text">
				{props.pageName}
			</span>
			<span className={`navButton__line ${props.horizontal === true && (`navButton__line--vertical`)}`}></span>
		</button>
	)
}

export default NavButton