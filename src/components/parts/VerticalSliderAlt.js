// import {Router, Link} from 'react-router-dom';
import React, { Component } from 'react';


class VerticalSliderAlt extends Component{
	constructor(){
		super()
		this.renderDots = this.renderDots.bind(this)
   		this.componentDidUpdate = this.componentDidUpdate.bind(this)
  	}
	state = {
		animated: false,
		slidesLength: 0,
		active: 0,
		slides: [],
		sliderHeight: 0
	}

	componentDidMount = () => {
		this.setState({
			slides: [...this.props.slides],
			slidesLength: this.props.slides.length
		})
	}

  	componentDidUpdate(prevProps){
	    if(this.props.slides !== prevProps.slides){
			this.setState({
				slides: [...this.props.slides],
				slidesLength: this.props.slides.length
			})
	    }
  	}

	componentWillUnmount = () =>{
		this.setState(({
	      animated: false
	    }))
	}

	setActiveSlide = (index) => {
		this.setState({
			active: index
		})

	}
	setPosition = (i) => {
		const el = document.getElementById(`image_${i + 1}`).offsetTop
		this.props.type === 'lateral' ? 
			document.getElementById(this.props.sliderId).scrollTop = el - 220
			: document.getElementById(this.props.sliderId).scrollTop = el - 120
	}
	handleDotClick = (i) => {
		this.setActiveSlide(i)
		this.setPosition(i)
	}
	handleScroll(e){
		e = document.getElementById(this.props.sliderId)
		if(this.state.sliderHeight === 0){
			const offset = document.getElementById(`image_${this.state.slidesLength}`).offsetTop
			this.setState({
				sliderHeight: offset
			})
		}
		if(e.scrollTop < 100){
			this.setState({
				active: 0
			})	
		} else if(e.scrollTop === this.state.sliderHeight){ 
			this.setState({
				active: this.state.slidesLength - 1
			})
		}
		else {
			const activeElementIndex = Math.floor((e.scrollTop / (this.state.sliderHeight / this.state.slidesLength))) + 1
			this.setState({
				active: activeElementIndex
			})
		}
	}
	renderDots(){
		if(this.props.type === 'lateral') { 
			return(
				this.state.slides.map( (a, i) => (
					<p 
						className={`verticalSliderAlt__controler-title`}
						onClick={() => this.handleDotClick(i)}
						key={`verticalSliderAltText_${i}`}
						id={`verticalSliderAltText_${i}`}
						>
						{a.ano}
						<span 
							className={`verticalSliderAlt__dot ${this.state.active === i ? 'verticalSliderAlt__dot--active' : ''}`}
							key={`verticalSliderAltDots_${i}`}
						></span>
					</p>
				)))
		} else {
			return(
				<React.Fragment>							
					<p 
						className={`verticalSliderAlt__controler-title verticalSliderAlt__controler-title--horizontal`}
						key={`verticalSliderAltText_${this.state.active}`}
						id={`verticalSliderAltText_${this.state.active}`}
						>
						{this.state.slides.length > 0 ? this.state.slides[this.state.active].text : ''}
					</p>
					{this.state.slides.map( (a, i) => (
						<span 
							onClick={() => this.handleDotClick(i)}
							className={`verticalSliderAlt__dot ${this.state.active === i ? 'verticalSliderAlt__dot--active' : ''}`}
							key={`verticalSliderAltDots_${i}`}
						></span>
					))}
				</React.Fragment>
			)
		}
	}

	render(){
		return (
			<div className={`verticalSliderAlt ${this.props.type === 'lateral' ? '' : 'verticalSliderAlt--horizontal'}`}>
				<div className={`verticalSliderAlt__controler ${this.props.type === 'lateral' ? '' : 'verticalSliderAlt__controler--horizontal'}`}>
					<div className={`verticalSliderAlt__dots ${this.props.type === 'lateral' ? '' : 'verticalSliderAlt__dots--horizontal'}`}>
						{this.renderDots()}
					</div>
				</div>
				<div 
					className={`verticalSliderAlt__slider-wrapper ${
						this.state.active === 0 ? 'verticalSliderAlt__slider-wrapper--noTop' : 
						this.state.active === this.state.slidesLength - 1 ? 'verticalSliderAlt__slider-wrapper--noBottom' : ''
					}`}
					>
					<div 
						className={`verticalSliderAlt__slider`}
						onWheel={(e) => this.handleScroll(e)}
						onTouchMove={(e) => this.handleScroll(e)}
						id={this.props.sliderId}
					>
						{this.state.slides.length !== 0 ? 
							this.state.slides.map((slide, i) => (
								<div 
									className={`verticalSliderAlt__slide ${this.props.type === 'lateral' ? '' : 'verticalSliderAlt__slide--horizontal'} ${this.state.active === i ? 'verticalSliderAlt__slide--imageActive' : 
									this.state.active > i ? 'verticalSliderAlt__slide--imageInactiveTop' : 'verticalSliderAlt__slide--imageInactiveBottom' }`}
									id={`image_${slide.id}`}
									key={`image_${slide.id}`}
									>
									<img 
										className="verticalSliderAlt__image" 
										src={slide.imagem}
										alt={slide.desc}
										onClick={(e) => this.setActiveSlide(i, e)}
									/>
									{this.props.type === 'lateral' ? 
									<p className="verticalSliderAlt__controler-text" key={`verticalSliderAltText_${this.state.active}`}>
										{this.state.slides.length !== 0 ? slide.texto : ''}
									</p>
									: '' }
								</div>
							))
						 : ''}
	 					
					</div>
				</div>
			</div>
		)
	}
}

export default VerticalSliderAlt