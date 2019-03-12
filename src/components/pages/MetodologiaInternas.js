import React, { Component } from 'react';
import NavButton from '../parts/NavButton'
import TextSlider from '../parts/TextSlider'
// import SliderControler from '../parts/SliderControler'

class MetodologiaInterna extends Component {
  constructor(){
    super()
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }
  state = {
    toggler: false
  }
  handleToggler = () => {
    this.setState(previous => ({
      toggler: !previous.toggler
    }))
  }
  componentDidUpdate(prevProps){
    if(this.props.context !== prevProps.context){
      this.setState({
        slides: [...this.props.context.slider]
      })
    }
  }
  state = {
    slides: [
    ]
  }
  navigate = () => {
    this.props.navigation('metodologia', 1)
  }
  render() {
    const leftItems = this.state.slides.filter(item => item.id <= 3)
    const rightItems = this.state.slides.filter(item => item.id > 3)
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
        <div className={`${this.props.secClass}__intro-wrapper`}>
          <h2 className={`${this.props.secClass}__intro-title`}>
              {this.props.pageTitle} 
              <strong className={`${this.props.secClass}__intro-title-bold`}>
                {this.props.pageTitleSpotlight}
              </strong>
              <span 
                onClick={this.handleToggler}
                className={`${this.props.secClass}__intro-toggler`}>
                {this.state.toggler === true ? `-` : `+`}
              </span>
            </h2>
          <p className={`${this.props.secClass}__intro-text ${this.state.toggler === true ? `${this.props.secClass}__intro-text--active` : `${this.props.secClass}__intro-text--inactive`}`}>
            {this.props.context ? this.props.context.desc : ''}
          </p>
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
      </div>
    )
  }
}

export default MetodologiaInterna;
