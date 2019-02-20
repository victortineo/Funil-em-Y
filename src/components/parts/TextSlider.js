// import {Router, Link} from 'react-router-dom';
import React, { Component } from 'react';


class TextSlider extends Component{
	state = {
		slideActive: 0,
		animated: false,
		slidesLength: 0

	}

 	setCurrentSlide = (next) => {
	    this.setState(({
	      slideActive: next,
	      animated: true
	    }))
	}
	setNext = () => {
		this.state.slideActive < this.state.slidesLength -1 && (
			this.setCurrentSlide(this.state.slideActive + 1)
		)
	}
	setBefore = () => {
		this.state.slideActive > 0 && (
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
					<strong className={`${this.props.controlerClass}__title`}>{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive].title)}</strong>
					<p className={`${this.props.controlerClass}__text`}>
						{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive].text)}
					</p>
					<div className={`${this.props.controlerClass}__nav`}>
						<span 
							className={`${this.props.controlerClass}__navArrow ${this.props.controlerClass}__navArrow--left ${this.state.slideActive === 0 ? (`${this.props.controlerClass}__navArrow--inactive`) : ''}`}
							onClick={this.setBefore}
							> 
							
						 </span>
						<span 
							className={`${this.props.controlerClass}__navArrow ${this.props.controlerClass}__navArrow--right ${this.state.slideActive === this.state.slidesLength -1 ? (`${this.props.controlerClass}__navArrow--inactive`) : ''}`}
							onClick={this.setNext}
							>
						</span>
					</div>
				</div>
				<div className={`${this.props.controlerClass}__slider-controlers-wrapper`}>
		          <div className={`${this.props.controlerClass}__slider-controlers ${this.props.controlerClass}__slider-controlers--left`}>
		            <ul className={`${this.props.controlerClass}__slider-controler-list`}>
		              <div className={`${this.props.controlerClass}__slider-controler-inside ${this.props.controlerClass}__slider-controler-inside--left`}>
		               {this.props.leftItems.map(item => 
		                  <li
		                     className={`${this.props.controlerClass}__slider-controler 
		                     			${item.key === this.state.slideActive && (
		                     				`${this.props.controlerClass}__slider-controler--active`
		                     			)}
		                     			`}
		                    onClick={() => this.setCurrentSlide(item.key)}
		                    key={item.key}
		                    >
		                    {item.title}
		                  </li>
		                )}
		              </div>
		              <div className={`${this.props.controlerClass}__slider-controler-inside ${this.props.controlerClass}__slider-controler-inside--right`}>
		                {this.props.rightItems.map(item => 
		                  <li 
		                    className={`${this.props.controlerClass}__slider-controler ${item.key === this.state.slideActive && (`${this.props.controlerClass}__slider-controler--active`)}`}
		                    key={item.key}
		                    onClick={() => this.setCurrentSlide(item.key)}
		                    >
		                    {item.title}
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