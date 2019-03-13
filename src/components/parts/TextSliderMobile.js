// import {Router, Link} from 'react-router-dom';
import React, { Component } from 'react';


class TextSlider extends Component{
  	constructor(){
	    super()
	    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  	}
  	componentDidUpdate(prevProps){
	    if(this.props.slides !== prevProps.slides){
	      this.setState({
	        slidesLength: this.props.slides.length
	      })
	    }
  	}
	state = {
		slideActive: 1,
		animated: false,
		slidesLength: 1
	}

 	setCurrentSlide = (next) => {
	    this.setState(({
	      slideActive: parseInt(next),
	      animated: true
	    }))
	}

	componentDidMount = () => {
		this.setState({
			slidesLength: this.props.slides.length
		})
	}

	render(){
		return (
			<React.Fragment>
				<div className={`${this.props.controlerClass}-mobile`}>
					{/*TODO: Adicionar regras de abertura*/}
					{/*TODO: Remover regras não usadas*/}
					{/*TODO: Aplicar os estilos corretos*/}
					{/*TODO: Aplicar no COMPONENTE PAI a validação para qual tem que estar visível*/}
					{this.props.slides.map(slide => 
						<div key={`slideMobile__${slide.id}`} className={`${this.props.controlerClass}-mobile__slide`}>
							<div className={`${this.props.controlerClass}-mobile__title ${this.state.slideActive === parseInt(slide.id) && `${this.props.controlerClass}-mobile__title--open `}`} 
								onClick={() => this.setCurrentSlide(slide.id)}>
								{slide.titulo} 
							</div>
							<div className={`${this.props.controlerClass}-mobile__desc ${this.state.slideActive === parseInt(slide.id) && `${this.props.controlerClass}-mobile__desc--open `}`}>
								{slide.desc}
							</div>
						</div>
					)}	
		        </div>
			</React.Fragment>
		)
	}
}

export default TextSlider