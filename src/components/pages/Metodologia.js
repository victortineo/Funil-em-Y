import React, { Component } from 'react';
import NavButton from '../parts/NavButton'
import TextSlider from '../parts/TextSlider'
// import SliderControler from '../parts/SliderControler'
import funilEmY from '../../assets/images/metodologia/funil-em-y.png'

class Metodologia extends Component {
  state = {
    slideItems: [
      {title: 'Atrair', key: 0},
      {title: 'Converter', key: 1},
      {title: 'Nutrir', key: 2},
      {title: 'Captar', key: 3},
      {title: 'Conectar', key: 4},
      {title: 'Qualificar', key: 5}
    ],
    slides: [
      {title: 'Atrair', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 0},
      {title: 'Converter', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 1},
      {title: 'Nutrir', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 2},
      {title: 'Captar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 3},
      {title: 'Conectar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 4},
      {title: 'Qualificar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 5}
    ]
  }
  navigate = () => {
    this.props.navigation('metodologia', 1)
  }
  render() {
    const leftItems = this.state.slideItems.filter(item => item.key < 3)
    const rightItems = this.state.slideItems.filter(item => item.key >= 3)
    return (
      <div className="metodologia">
        <div className={`metodologia__y-wrapper`}>
          <img className={`metodologia__y`} src={funilEmY} alt="Funil em Y"/>
            <div className={`metodologia__navWrapper metodologia__navWrapper--inbound ${this.props.index === 1 && (`metodologia__navWrapper--inbound--animated`)}`}>
              <NavButton 
                horizontal={true}
                pageName='Inbound'
                navigation={() => this.props.navigation('metodologia', 1)}
              />
            </div>
            <div className={`metodologia__navWrapper metodologia__navWrapper--outbound ${this.props.index === 1 && (`metodologia__navWrapper--outbound--animated`)}`}>
              <NavButton 
                horizontal={true}
                pageName='Outbound 2.0'
                navigation={() => this.props.navigation('metodologia', 2)}
              />
            </div>
            <div className={`metodologia__navWrapper metodologia__navWrapper--pontes ${this.props.index === 1 && (`metodologia__navWrapper--pontes--animated`)}`}>
              <NavButton 
                horizontal={true}
                pageName='Pontes'
                navigation={() => this.props.navigation('metodologia', 3)}
              />
            </div>
            <div className={`metodologia__navWrapper metodologia__navWrapper--processo ${this.props.index === 1 && (`metodologia__navWrapper--processo--animated`)}`}>
              <NavButton 
                horizontal={true}
                pageName='Processo comercial'
                navigation={() => this.props.navigation('metodologia', 4)}
              />
            </div>
        </div>
        <div className="metodologia__slider-wrapper">
          <TextSlider 
            slides={this.state.slides}
            leftItems={leftItems}
            rightItems={rightItems}
            setCurrentSlide={(key) => this.setCurrentSlide(key)}
            controlerClass='textSlider'
          />
        </div>
        
      </div>
    )
  }
}

export default Metodologia;
