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
	setNext = () => {
		this.state.slideActive < this.state.slidesLength && (
			this.setCurrentSlide(this.state.slideActive + 1)
		)
	}
	setBefore = () => {
		this.state.slideActive - 1 > 0 && (
			this.setCurrentSlide(this.state.slideActive - 1)
		)
	}

	componentDidMount = () => {
		this.setState({
			slidesLength: this.props.slides.length
		})
	}

	componentWillUnmount = () =>{
		this.setState(({
	      animated: false
	    }))
	}

	render(){
		return (
			<React.Fragment>
				<div className={`${this.props.controlerClass}-mobile__slider`}>
					{/*TODO: Adicionar regras de abertura*/}
					{/*TODO: Remover regras não usadas*/}
					{/*TODO: Aplicar os estilos corretos*/}
					{/*TODO: Aplicar no COMPONENTE PAI a validação para qual tem que estar visível*/}
					{this.props.slides.map(slide => 
						<div key={`slideMobile__${slide.id}`} className={`${this.props.controlerClass}-mobile__slider-slide`}>
							<div className={`${this.props.controlerClass}-mobile__slider-title`}>
								{slide.titulo}
							</div>
							<div className={`${this.props.controlerClass}-mobile__slider-title`}>
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