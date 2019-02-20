import React, { Component } from 'react';
import NavButton from '../parts/NavButton'
import TextSlider from '../parts/TextSlider'
// import SliderControler from '../parts/SliderControler'
import funilEmY from '../../assets/images/metodologia/funil-em-y.png'

class Fazemos extends Component {
  state = {
    slideItems: [
      {title: 'Diagnóstico', key: 'fazemos_0'},
      {title: 'Planejamento', key: 'fazemos_1'},
      {title: 'Implementação', key: 'fazemos_2'},
      {title: 'Operação', key: 'fazemos_3'},
      {title: 'Consultoria', key: 'fazemos_4'},
      {title: 'Treinamento', key: 'fazemos_5'}
    ],
    slides: {
      fazemos_0: {title: 'Atrair', text: 'Notamos que muitas empresas ainda trabalham com investimentos extremamente desiguais quando o assunto é marketing e vendas. Algumas destinam todos os esforços ao marketing e deixam, Notamos que muitas empresas ainda trabalham com investimentos extremamente desiguais quando o assunto é marketing e vendas. Algumas destinam todos os esforços ao marketing e deixam, Notamos que muitas empresas ainda trabalham com investimentos extremamente desiguais quando o assunto é marketing e vendas. Algumas destinam todos os esforços ao marketing e deixam ,Notamos que muitas empresas ainda trabalham com investimentos extremamente desiguais quando o assunto é marketing e vendas. Algumas destinam todos os esforços ao marketing e deixam', id: 0},
      fazemos_1: {title: 'Converter', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads. Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 1},
      fazemos_2: {title: 'Nutrir', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 2},
      fazemos_3: {title: 'Captar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 3},
      fazemos_4: {title: 'Conectar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 4},
      fazemos_5: {title: 'Qualificar', text: 'Muitos leads irão precisar de mais informações para ficarem mais próximos de uma aquisição. Por isso, deve-se apostar em um fluxo de automação com materiais para nutrição de leads.', id: 5}
    },
    active: ''
  }
  handleSlideClick = (key) => {
    console.log(key)
    this.setState({
      active: key
    })
  }
  navigate = () => {
    this.props.navigation('o-que-fazemos', 1)
  }
  render() {
    return (
      <div className="fazemos">
        <h2 className="fazemos__title">O que <strong className="fazemos__title-spotlight">fazemos</strong></h2>
        <div className="fazemos__listWrapper">
          <ul className="fazemos__list">
            { this.state.slideItems.map((item) => 
              <li 
                className={`fazemos__list-item ${item.key === this.state.active ? 'fazemos__list-item--active' : ''}`} 
                key={item.key}
                onClick={() => this.handleSlideClick(item.key)}
                >
                {item.title}
              </li>
              )
            }
          </ul>
        </div>
        <div className={`fazemos__content ${this.state.active !== '' ? 'fazemos__content--open' : ''}`}>
          <p 
            className="fazemos__content-text" 
            key={this.state.slides[this.state.active] ? this.state.slides[this.state.active].id : '' }
            >
            {this.state.slides[this.state.active] ? this.state.slides[this.state.active].text : '' }
          </p>
        </div>
        <div className={`fazemos__notebook ${this.state.active !== '' ? 'fazemos__notebook--open' : ''}`}></div>
        <div className={`fazemos__cup ${this.state.active !== '' ? 'fazemos__cup--open' : ''}`}></div>
        <div className={`fazemos__phone ${this.state.active !== '' ? 'fazemos__phone--open' : ''}`}></div>
        <div className={`fazemos__cactus ${this.state.active !== '' ? 'fazemos__cactus--open' : ''}`}></div>
      </div>
    )
  }
}

export default Fazemos;
