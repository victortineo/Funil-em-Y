// import {Router, Link} from 'react-router-dom';
import React, { Component } from 'react';


class VerticalSlider extends Component{
	state = {
		slideActive: 0,
		animated: false,
		slidesLength: 0,
		active: 1,
		slides: [],
		animDirection: ''
	}

 	setCurrentSlide = (next) => {
	    this.setState(({
	      slideActive: next,
	      animated: true
	    }))
	}

	componentDidMount = () => {
		this.setState({
			slides: [...this.props.slides]
		})
	}

	componentWillUnmount = () =>{
		this.setState(({
	      animated: false
	    }))
	}

	setActiveSlide = (index, e) => {
		index > this.state.active ?
		this.setState(({
			animDirection: 'top'
		}), this.setState({
			active: index,
			animDirection: 'none'
		}))
		: this.setState(({
			animDirection: 'bottom'
		}), this.setState({
			active: index,
			animDirection: 'none',
		}))
	}

	renderSlide(images, active) {
		if (active === 0) {
			return (
				<React.Fragment >
					<div className="verticalSlider__imageActive verticalSlider__imageActive--first">
						<img 
							className="verticalSlider__image" 
							src={images[active].src}
							key={images[active].key}
							onClick={(e) => this.setActiveSlide(active, e)}

						/>
					</div>
					<div className="verticalSlider__imageAfter verticalSlider__imageAfter--first">
						<img 
							className="verticalSlider__image" 
							src={images[active + 1].src}
							key={images[active + 1].key}
							onClick={(e) => this.setActiveSlide(active + 1, e)}

							/>
					</div>
				</React.Fragment>
			)
		} else if (active === images.length -1){
			return (
				<React.Fragment >
					<div className="verticalSlider__imageBefore verticalSlider__imageBefore--last">
						<img 
							className="verticalSlider__image" 
							src={images[active - 1].src}
							key={images[active - 1].key}
							onClick={(e) => this.setActiveSlide(active - 1, e)}
							/>
					</div>
					<div className="verticalSlider__imageActive verticalSlider__imageActive--last">
						<img 
							className="verticalSlider__image" 
							src={images[active].src}
							key={images[active].key}
							onClick={(e) => this.setActiveSlide(active, e)}
						/>
					</div>
				</React.Fragment>
			)
		} else {
			return (
				<React.Fragment >
					<div className="verticalSlider__imageBefore">
						<img 
							className="verticalSlider__image" 
							src={images[active - 1].src}
							key={images[active - 1].key}
							onClick={(e) => this.setActiveSlide(active - 1, e)}
							/>
					</div>
					<div className="verticalSlider__imageActive">
						<img 
							className="verticalSlider__image" 
							src={images[active].src}
							key={images[active].key}
							onClick={(e) => this.setActiveSlide(active, e)}
						/>
					</div>
					<div className="verticalSlider__imageAfter">
						<img 
							className="verticalSlider__image" 
							src={images[active + 1].src}
							key={images[active + 1].key}
							onClick={(e) => this.setActiveSlide(active + 1, e)}
							/>
					</div>
				</React.Fragment>
			)
		}
	}

	render(){
		return (
			<div className="verticalSlider">
				<div className="verticalSlider__controler">
					<p className="verticalSlider__controler-text" key={`verticalSliderText_${this.state.active}`}>
						{this.state.slides.length !== 0 ? this.state.slides[this.state.active].text : ''}
					</p>
					<div className="verticalSlider__dots">
						{this.state.slides.map( (a, i) => (
							<span 
								className={`verticalSlider__dot ${this.state.active === i ? 'verticalSlider__dot--active' : ''}`}
								onClick={(e) => this.setActiveSlide(i, e)}
								key={`verticalSliderDots_${i}`}
							></span>
						))}
					</div>
				</div>
				<div className={`verticalSlider__slider verticalSlider__slider--${this.state.animDirection}`}>
					{this.state.slides.length !== 0 ? this.renderSlide(this.state.slides, this.state.active) : ''}
				</div>
			</div>
		)
	}
}

export default VerticalSlider