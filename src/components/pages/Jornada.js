import React, { Component } from 'react';
import NavButton from '../parts/NavButton';
import VerticalSliderAlt from '../parts/VerticalSliderAlt';

class Jornada extends Component {
  render() { 
    return (
      <div className="jornada">
        <div className="jornada__navWrapper">
          <div className={`blog__nav blog__nav--a-layer ${this.props.index === 2 && (`blog__nav--a-layer--animated`)}`}>
            <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Por que a Layer Up'
                navigation={() => this.props.navigation('quem-somos', 0)}
              />
          </div>
          <div className={`blog__nav blog__nav--jornada ${this.props.index === 2 && (`blog__nav--jornada--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={true}
                borderless={true}
                pageName='Jornada'
                navigation={() => this.props.navigation('quem-somos', 1)}
              />
          </div>
          <div className={`blog__nav blog__nav--parceiros ${this.props.index === 2 && (`blog__nav--parceiros--animated`)}`}>              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Parceiros'
                navigation={() => this.props.navigation('quem-somos', 2)}
              />
          </div>
          <div className={`blog__nav blog__nav--clientes ${this.props.index === 2 && (`blog__nav--clientes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Clientes'
                navigation={() => this.props.navigation('quem-somos', 3)}
              />
          </div>
          <div className={`blog__nav blog__nav--blog ${this.props.index === 2 && (`blog__nav--blog--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Blog'
                navigation={() => this.props.navigation('quem-somos', 4)}
              />
          </div>
        </div>
        <div className="jornada__sliderWrapper">
          <VerticalSliderAlt
            sliderId="jornada_slider"
            type="lateral"
            slides={this.props.context ? this.props.context['jornada-slider'] : []}
          />
        </div>
      </div>
    )
  }
}

export default Jornada;
