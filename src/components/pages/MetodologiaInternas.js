import React, { Component } from 'react';
import NavButton from '../parts/NavButton'
import TextSlider from '../parts/TextSlider'
import Magnet from '../parts/Magnet'
// import SliderControler from '../parts/SliderControler'
import funilEmY from '../../assets/images/metodologia/funil-em-y.png'

class MetodologiaInterna extends Component {
  state = {
    slideItems: [
      {title: 'Atrair', key: 0},
      {title: 'Converter', key: 1},
      {title: 'Nutrir', key: 2}
    ],
    slides: [
      {title: '', text: 'A conversão no inbound acontece por meio de landing pages e formulários. Você oferece um material rico ao usuário, que pode ser um vídeo, infográfico ou até um áudio, em troca de informações básicas para iniciar o fluxo de cadência.', id: 0},
      {title: '', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 1},
      {title: '', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 2}
    ]
  }
  navigate = () => {
    this.props.navigation('metodologia', 1)
  }
  render() {
    const leftItems = this.state.slideItems.filter(item => item.key < 3)
    const rightItems = this.state.slideItems.filter(item => item.key >= 3)
    return (
      <div className={`${this.props.secClass}`}>
        <div className={`${this.props.secClass}__buttons-wrapper`}>
            <div className={`${this.props.secClass}__navWrapper ${this.props.secClass}__navWrapper--inbound ${this.props.index === 1 && (`${this.props.secClass}__navWrapper--inbound--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={this.props.secClass === 'inbound' ? true : false}
                pageName='Inbound Marketing'
                navigation={() => this.props.navigation('metodologia', 1)}
              />
            </div>
            <div className={`${this.props.secClass}__navWrapper inbound__navWrapper--outbound ${this.props.index === 1 && (`${this.props.secClass}__navWrapper--outbound--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={this.props.secClass === 'outbound' ? true : false}
                pageName='Outbound 2.0'
                navigation={() => this.props.navigation('metodologia', 2)}
              />
            </div>
            <div className={`${this.props.secClass}__navWrapper inbound__navWrapper--pontes ${this.props.index === 1 && (`${this.props.secClass}__navWrapper--pontes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={this.props.secClass === 'pontes' ? true : false}
                pageName='Pontes'
                navigation={() => this.props.navigation('metodologia', 3)}
              />
            </div>
            <div className={`${this.props.secClass}__navWrapper inbound__navWrapper--processo ${this.props.index === 1 && (`${this.props.secClass}__navWrapper--processo--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={this.props.secClass === 'processo' ? true : false}
                pageName='Processo comercial'
                navigation={() => this.props.navigation('metodologia', 4)}
              />
            </div>
        </div>
        <div className={`${this.props.secClass}__slider-wrapper`}>
          <TextSlider 
            slides={this.state.slides}
            leftItems={leftItems}
            rightItems={rightItems}
            setCurrentSlide={(key) => this.setCurrentSlide(key)}
            controlerClass={`${this.props.secClass}__slider`}
          />
        </div>
        <div className={`${this.props.secClass}__intro-wrapper`}>
          <h2 className={`${this.props.secClass}__intro-title`}>{this.props.pageTitle} <strong className={`${this.props.secClass}__intro-title-bold`}>{this.props.pageTitleSpotlight}</strong></h2>
          <p className={`${this.props.secClass}__intro-text`}>
            {this.props.introText}
          </p>
        </div>        
      </div>
    )
  }
}

export default MetodologiaInterna;
