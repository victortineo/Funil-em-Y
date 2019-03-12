import React, { Component } from 'react';
import NavButton from '../parts/NavButton'
import TextSlider from '../parts/TextSlider'
import TextSliderMobile from '../parts/TextSliderMobile'
// import SliderControler from '../parts/SliderControler'
import funilEmY from '../../assets/images/metodologia/funil-em-y.png'

class Metodologia extends Component {
  constructor(){
    super()
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
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
          {/*<TextSlider 
            slides={this.state.slides}
            leftItems={this.state.slides.filter(item => item.id <= 3)}
            rightItems={this.state.slides.filter(item => item.id > 3)}
            setCurrentSlide={(key) => this.setCurrentSlide(key)}
            controlerClass='textSlider'
          /> */}
          <TextSliderMobile
            slides={this.state.slides}
            setCurrentSlide={(key) => this.setCurrentSlide(key)}
            controlerClass='textSlider'
          />
        </div>
        
      </div>
    )
  }
}

export default Metodologia;
