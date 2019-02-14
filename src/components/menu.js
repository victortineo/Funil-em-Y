import React from 'react';
// import {Router, Link} from 'react-router-dom';

const menu = (props) =>{
	return (
		<nav className={"menu " + (props.isOpen ? 'menu--active' : '')}>
			<div className="menu__background">
				<ul className="menu__links container">
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">Home</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">Metodologia</li>
						<li className="menu__item menu__item--destacado">Inbound Marketing</li>
						<li className="menu__item menu__item--destacado">Outbound 2.0</li>
						<li className="menu__item menu__item--destacado">Pontes Funil em Y</li>
						<li className="menu__item menu__item--destacado">Processo comercial</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">Quem somos</li>
						<li className="menu__item menu__item--comum">Porque a Layer Up</li>
						<li className="menu__item menu__item--comum">Jornada</li>
						<li className="menu__item menu__item--comum">Parceiros</li>
						<li className="menu__item menu__item--comum">Clientes</li>
						<li className="menu__item menu__item--comum">Blog</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">O que fazemos</li>
						<li className="menu__item menu__item--comum">Dignóstico</li>
						<li className="menu__item menu__item--comum">Planejamento</li>
						<li className="menu__item menu__item--comum">Operação</li>
						<li className="menu__item menu__item--comum">Consumo</li>
						<li className="menu__item menu__item--comum">Treinamente</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">O que fazemos</li>
					</div>
				</ul>
				<i 
					onClick={props.handleClick}
					className="menu__close">
					X
				</i>
			</div>
		</nav>
	)
}

export default menu