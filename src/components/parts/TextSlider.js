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
				<div key={`activeSlide_${this.state.slideActive}`} className={`textSlider ${this.state.animated === true ? 'textSlider--animated' : ''}`}>
					<strong className="textSlider__title">{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive].title)}</strong>
					<p className="textSlider__text">
						{this.props.slides.length !== 0 && (this.props.slides[this.state.slideActive].text)}
					</p>
					<div className="textSlider__nav">
						<span 
							className={`textSlider__navArrow textSlider__navArrow--left ${this.state.slideActive === 0 ? ('textSlider__navArrow--inactive') : ''}`}
							onClick={this.setBefore}
							> 
							
						 </span>
						<span 
							className={`textSlider__navArrow textSlider__navArrow--right ${this.state.slideActive === this.state.slidesLength -1 ? ('textSlider__navArrow--inactive') : ''}`}
							onClick={this.setNext}
							>
						</span>
					</div>
				</div>
				<div className="textSlider__slider-controlers-wrapper">
		          <div className="textSlider__slider-controlers textSlider__slider-controlers--left">
		            <ul className="textSlider__slider-controler-list">
		              <div className="textSlider__slider-controler-inside textSlider__slider-controler-inside--left">
		               {this.props.leftItems.map(item => 
		                  <li
		                     className={`textSlider__slider-controler ${item.key === this.state.slideActive && ('textSlider__slider-controler--active')}`}
		                    onClick={() => this.setCurrentSlide(item.key)}
		                    key={item.key}
		                    >
		                    {item.title}
		                  </li>
		                )}
		              </div>
		              <div className="textSlider__slider-controler-inside textSlider__slider-controler-inside--right">
		                {this.props.rightItems.map(item => 
		                  <li 
		                    className={`textSlider__slider-controler ${item.key === this.state.slideActive && ('textSlider__slider-controler--active')}`}
		                    key={item.key}
		                    onClick={() => this.setCurrentSlide(item.key)}
		                    >
		                    {item.title}
		                  </li>
		                )}
		              </div>
		            </ul>
		          </div>
		          <div className="textSlider__slider-controlers textSlider__slider-controlers--right"></div>
		        </div>
			</React.Fragment>
		)
	}
}

export default TextSlider