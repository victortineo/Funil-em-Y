// import {Router, Link} from 'react-router-dom';
import Menu from './menu'
import React, { Component } from 'react';


class header extends Component{
	state = {
		menu: false
	}

	toggleMenu =() => {
		this.setState({
			menu: !(this.state.menu)
		}, this.props.overlay())
	}
	componentDidMount = () =>{
		document.body.addEventListener('scroll', (e) => console.log(e.target))
	}

	render(){
		return (
			<header className="header">
				<div className="header__widgets">
					<span className="header__title">
						Funil de vendas <strong className="header__title--strong">em Y</strong>
					</span>
					<i className="header__icon header__search-icon">Pesquisa</i>
					<i 
						className="header__icon header__menu-icon"
						onClick={this.toggleMenu}
						>
						Menu
					</i>
				</div>
				<Menu 
					isOpen={this.state.menu}
					toggleMenu={this.toggleMenu}
					navigation={this.props.navigation}
				/>
			</header>
		)
	}
}

export default header