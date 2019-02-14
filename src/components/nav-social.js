import React from 'react';

const NavSocial = (props) =>{
	return (
		<nav className="nav-social">
			<ul className="nav-social__links">
				<li className="nav-social__link">
					<a href="https://www.instagram.com/layerupbr/" className="nav-social__link-anchor" target="_blank" rel="noopener noreferrer">Instagram</a>
				</li>
				<li className="nav-social__link">
					<a href="https://www.linkedin.com/company/layer-up/" target="_blank" rel="noopener noreferrer" className="nav-social__link-anchor">
						Linkedin
					</a>
				</li>
				<li className="nav-social__link">
					<a href="https://www.facebook.com/layerup/" target="_blank" rel="noopener noreferrer" className="nav-social__link-anchor">
						Facebook
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default NavSocial