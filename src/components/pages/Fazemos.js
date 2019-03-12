import React, { Component } from 'react';

class Fazemos extends Component {
  constructor(){
    super()
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }
  state = {
    slides: [],
    active: {}
  }
  handleSlideClick = (item) => {
    this.setState({
      active: {...item}
    })
  }
  navigate = () => {
    this.props.navigation('o-que-fazemos', 1)
  }
  componentDidUpdate(prevProps){
    if(this.props.slides !== prevProps.slides){
      this.setState({
        slides: [...this.props.slides.acf.sanfona]
      })
    }
  }
  render() {
    return (
      <div className="fazemos">
        <h2 className={`fazemos__title ${Object.entries(this.state.active).length !== 0 ? 'fazemos__title--open' : ''}`}>O que <strong className="fazemos__title-spotlight">fazemos</strong></h2>
        <div className={`fazemos__listWrapper ${Object.entries(this.state.active).length !== 0 ? 'fazemos__listWrapper--open' : ''}`}>
          <ul className={`fazemos__list`}>
            { this.state.slides.map((item) => 
              <li 
                className={`fazemos__list-item ${item.key === this.state.active.key ? 'fazemos__list-item--active' : ''}`} 
                key={item.key}
                onClick={() => this.handleSlideClick(item)}
                >
                {item.title}
              </li>
              )
            }
          </ul>
        </div>
        <div className={`fazemos__content ${Object.entries(this.state.active).length !== 0 ? 'fazemos__content--open' : ''}`}>
          <p 
            className="fazemos__content-text" 
            key={this.state.active ? this.state.active.key : '' }
            dangerouslySetInnerHTML={{__html: this.state.active ? this.state.active.text : ''}}
            >
          </p>
        </div>
        <div className={`fazemos__notebook ${Object.entries(this.state.active).length !== 0  ? 'fazemos__notebook--open' : ''}`}></div>
        <div className={`fazemos__cup ${Object.entries(this.state.active).length !== 0  ? 'fazemos__cup--open' : ''}`}></div>
        <div className={`fazemos__phone ${Object.entries(this.state.active).length !== 0  ? 'fazemos__phone--open' : ''}`}></div>
        <div className={`fazemos__cactus ${Object.entries(this.state.active).length !== 0  ? 'fazemos__cactus--open' : ''}`}></div>
      </div>
    )
  }
}

export default Fazemos;
