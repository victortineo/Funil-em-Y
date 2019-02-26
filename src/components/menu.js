import React from 'react';
// import {Router, Link} from 'react-router-dom';

const menu = (props) =>{
	return (
		<nav className={"menu " + (props.isOpen ? 'menu--active' : '')}>
			<div className="menu__background">
				<ul className="menu__links container">
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado" onClick={() => {props.navigation('home'); props.toggleMenu()}}>Home</li>
					</div>
					<div className="menu__grupo">
						<li  className="menu__item menu__item--destacado" onClick={() => {props.navigation('metodologia', 0); props.toggleMenu()}}>Metodologia</li>
						<li  className="menu__item menu__item--destacado" onClick={() => {props.navigation('metodologia', 1); props.toggleMenu()}}>Inbound Marketing</li>
						<li  className="menu__item menu__item--destacado" onClick={() => {props.navigation('metodologia', 2); props.toggleMenu()}}>Outbound 2.0</li>
						<li  className="menu__item menu__item--destacado" onClick={() => {props.navigation('metodologia', 3); props.toggleMenu()}}>Pontes Funil em Y</li>
						<li  className="menu__item menu__item--destacado" onClick={() => {props.navigation('metodologia', 4); props.toggleMenu()}}>Processo comercial</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado" onClick={() => {props.navigation('quem-somos', 0); props.toggleMenu()}} > Quem somos</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('quem-somos', 0); props.toggleMenu()}} > Porque a Layer Up</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('quem-somos', 1); props.toggleMenu()}} > Jornada</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('quem-somos', 2); props.toggleMenu()}} > Parceiros</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('quem-somos', 3); props.toggleMenu()}} > Clientes</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('quem-somos', 4); props.toggleMenu()}} > Blog</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >O que fazemos</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >Dignóstico</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >Planejamento</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >Operação</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >Consumo</li>
						<li className="menu__item menu__item--comum" onClick={() => {props.navigation('o-que-fazemos'); props.toggleMenu()}} >Treinamente</li>
					</div>
					<div className="menu__grupo">
						<li className="menu__item menu__item--destacado">Contato</li>
					</div>
				</ul>
				<i 
					onClick={props.toggleMenu}
					className="menu__close">
					X
				</i>
			</div>
		</nav>
	)
}

export default menu