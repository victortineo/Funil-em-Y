import React, { Component } from 'react';
import NavButton from '../parts/NavButton';
import VerticalSliderAlt from '../parts/VerticalSliderAlt';
import placeholder from '../../assets/images/quem-somos/placeholder.png'

class ALayer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  } 
  handleScroll = (e) => {
    console.log(e.wheelDelta)
  }
  render() { 
    return (
      <div className="a-layer">
        <div className="a-layer__navWrapper">
          <div className={`a-layer__nav a-layer__nav--a-layer ${this.props.index === 2 && (`a-layer__nav--a-layer--animated`)}`}>
            <NavButton 
                horizontal={true}
                selected={true}
                borderless={true}
                pageName='Por que a Layer Up'
                navigation={() => this.props.navigation('quem-somos', 0)}
              />
          </div>
          <div className={`a-layer__nav a-layer__nav--jornada ${this.props.index === 2 && (`a-layer__nav--jornada--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Jornada'
                navigation={() => this.props.navigation('quem-somos', 1)}
              />
          </div>
          <div className={`a-layer__nav a-layer__nav--parceiros ${this.props.index === 2 && (`a-layer__nav--parceiros--animated`)}`}>              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Parceiros'
                navigation={() => this.props.navigation('quem-somos', 2)}
              />
          </div>
          <div className={`a-layer__nav a-layer__nav--clientes ${this.props.index === 2 && (`a-layer__nav--clientes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Clientes'
                navigation={() => this.props.navigation('quem-somos', 3)}
              />
          </div>
          <div className={`a-layer__nav a-layer__nav--blog ${this.props.index === 2 && (`a-layer__nav--blog--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Blog'
                navigation={() => this.props.navigation('quem-somos', 4)}
              />
          </div>
        </div>
        <div className="a-layer__sliderWrapper">
          <VerticalSliderAlt 
            sliderId="a_layer_slider"
            slides={this.props.context ? this.props.context['a-layer-slider'] : []}
          />
        </div>
      </div>
    )
  }
}

export default ALayer;
