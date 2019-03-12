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
	        leftSlider: [...this.props.leftItems],
	        rightSlider: [...this.props.rightItems],
	        slidesLength: this.props.slides.length
	      })
	    }
  	}
	state = {
		slideActive: 1,
		animated: false,
		slidesLength: 1,
		leftSlider: [],
		rightSlider: [],

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
				<div key={`activeSlide_${this.state.slideActive}`} className={`${this.props.controlerClass} ${this.state.animated === true ? `${this.props.controlerClass}--animated` : ''}`}>
					<strong className={`${this.props.controlerClass}__title`}>{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive - 1].titulo)}</strong>
					<p className={`${this.props.controlerClass}__text`}>
						{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive - 1].desc)}
					</p>
					<div className={`${this.props.controlerClass}__nav`}>
						<span 
							className={`${this.props.controlerClass}__navArrow ${this.props.controlerClass}__navArrow--left ${this.state.slideActive - 1 === 0 ? (`${this.props.controlerClass}__navArrow--inactive`) : ''}`}
							onClick={this.setBefore}
							> 
							
						 </span>
						<span 
							className={`${this.props.controlerClass}__navArrow ${this.props.controlerClass}__navArrow--right ${this.state.slideActive === this.state.slidesLength ? (`${this.props.controlerClass}__navArrow--inactive`) : ''}`}
							onClick={this.setNext}
							>
						</span>
					</div>
				</div>

				<div className={`${this.props.controlerClass}__slider-controlers-wrapper`}>
		          <div className={`${this.props.controlerClass}__slider-controlers ${this.props.controlerClass}__slider-controlers--left`}>
		            <ul className={`${this.props.controlerClass}__slider-controler-list`}>
		              <div className={`${this.props.controlerClass}__slider-controler-inside ${this.props.controlerClass}__slider-controler-inside--left`}>
		               {this.state.leftSlider.map(item => 
		                  <li
		                     className={`${this.props.controlerClass}__slider-controler 
		                     			${parseInt(item.id) === this.state.slideActive && (
		                     				`${this.props.controlerClass}__slider-controler--active`
		                     			)}
		                     			`}
		                    onClick={() => this.setCurrentSlide(item.id)}
		                    key={item.id}
		                    >		
		                    {item.titulo}
		                  </li>
		                )}
		              </div>
		              <div className={`${this.props.controlerClass}__slider-controler-inside ${this.props.controlerClass}__slider-controler-inside--right`}>
		                {this.state.rightSlider.map(item => 
		                  <li 
		                    className={`${this.props.controlerClass}__slider-controler ${parseInt(item.id) === this.state.slideActive && (`${this.props.controlerClass}__slider-controler--active`)}`}
		                    key={item.id}
		                    onClick={() => this.setCurrentSlide(item.id)}
		                    >
		                    {item.titulo}
		                  </li>
		                )}
		              </div>
		            </ul>
		          </div>
		          <div className={`${this.props.controlerClass}__slider-controlers ${this.props.controlerClass}__slider-controlers--right`}></div>
		        </div>
			</React.Fragment>
		)
	}
}

export default TextSlider