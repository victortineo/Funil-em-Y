import React, { Component } from 'react';
import NavButton from '../parts/NavButton';
import VerticalSliderAlt from '../parts/VerticalSliderAlt';
import placeholder from '../../assets/images/quem-somos/placeholder.png'

class Jornada extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  } 
  handleScroll = (e) => {
    console.log(e.wheelDelta)
  }
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
            style="lateral"
            slides={[
                {src: placeholder, title: "2001", alt: "uma image", key: 'image_1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,.'}, 
                {src: placeholder, title: "2002", alt: "uma image", key: 'image_2', text: 'Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, .'}, 
                {src: placeholder, title: "2003", alt: "uma image", key: 'image_3', text: 'Imaginum coloris, labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}, 
                {src: placeholder, title: "2004", alt: "uma image", key: 'image_4', text: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .'},
                {src: placeholder, title: "2005", alt: "uma image", key: 'image_5', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .'},
                {src: placeholder, title: "2001", alt: "uma image", key: 'image_6', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,.'}, 
                {src: placeholder, title: "2002", alt: "uma image", key: 'image_7', text: 'Excepteur sint occaecat cupidatat non proident. Lorem ipsum dolor sit amet, .'}, 
                {src: placeholder, title: "2003", alt: "uma image", key: 'image_8', text: 'Imaginum coloris, labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'}, 
                {src: placeholder, title: "2004", alt: "uma image", key: 'image_9', text: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .'},
                {src: placeholder, title: "2005", alt: "uma image", key: 'image_10', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .'}
              ]}
          />
        </div>
      </div>
    )
  }
}

export default Jornada;
