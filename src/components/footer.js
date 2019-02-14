import React from 'react';

const Footer = (props) =>{
	return (
		<div className="footer">
			<div className="footer__infoContainer">
				<div className="footer__pagination">
					Página: {props.index + 1}
					{props.slide ? 'slide: 1' : ''}
				</div>
				<div className="footer__by">
					{props.pageName} | Powered by <a href="#a" className="footer__by--layer">Layer Up</a>
				</div>
			</div>
			<span  className="footer__phone"></span>
		</div>
	)
}

export default Footer