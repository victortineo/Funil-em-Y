import React, { Component } from 'react';


class PageNav extends Component{
	render(){
		return (
			<div className="pageNav">
				<div 
					className={`
						${this.props.isFirst === true ? 'pageNav__arrow--inactive' : ''} 
						pageNav__arrow pageNav__arrow--white pageNav__arrow--up
					`}
					onClick={this.props.moveUp}
				></div>
				<div 
					className={`
						${this.props.isLast === true ? 'pageNav__arrow--inactive' : ''}
						pageNav__arrow pageNav__arrow--white pageNav__arrow--down
					`}
					onClick={this.props.moveDown}
				></div>
			</div>
		)
	}
}

export default PageNav