import React, {Component} from 'react';

class SliderControler extends Component {

	render = (item) => {
		item === 0 || item === 3 ?
			<div className="slider-controler__left">
				{this.renderItem(item)}
			</div>
		: 
			{this.renderItem(item)}
	}
	renderItem = (item) => {
		<li className="slider-controler__slider-controler" key={`slide_${item.key}`}>{item.title}</li>
	}
	render(){
		return (
			<ul className="slider-controler__slider-controler-list">
			{this.props.items.map((item, index) => (
				
			))}
			</ul>
		)
	}
}

export default SliderControler