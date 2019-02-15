import React, { Component } from 'react';
import './components/main.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/pages/home'
import Metodologia from './components/pages/Metodologia'
import Header from './components/header'
import NavSocial from './components/nav-social'
import Footer from './components/footer'
import PageNav from './components/PageNav'


class App extends Component {
  state = {
    overlay: false,
    loading: true,
    sectionIndex: 0,
    firstSection: true,
    lastSection: false,
    pageName: 'Home'
  }

  menuOverlay = () => {
    this.setState(currentState => ({
      overlay: !currentState.overlay
    }))
  }
  onLeave(origin, destination, direction){
    this.setSlideState(destination)
  }  
  onSlideLeave (section, origin, destination, direction){
    // this.setSlideState(destination)
    console.log(destination)
  }
  // componentDidMount = (api) => {
  // }
  setSlideState = (state) => {
    this.setState({
      sectionIndex: state.index,
      firstSection: state.isFirst,
      lastSection: state.isLast,
      pageName: state.item.dataset.name
    })
  }
  pageLoaded = (state) =>{
    this.setSlideState(state)
  }
  render() {
    return (
        <ReactFullpage
          menu='.menu'
          fixedElements='.fixedElements'
          onLeave={this.onLeave.bind(this)}
          onSlideLeave={this.onSlideLeave.bind(this)}
          afterRender={this.pageLoaded.bind(this)}
          anchors={['home', 'metodologia']}
          loopHorizontal={false}
          render={({ state, fullpageApi }) => {
            return (
              <React.Fragment>
                  {/* elementos fixos */}
                  <div className={`fixedElements ${this.state.firstSection ? 'fixedElements--isHome' : ''}`}>
                    <Header overlay={this.menuOverlay} />
                    <NavSocial />
                    <PageNav 
                      moveDown={() => fullpageApi.moveSectionDown()}
                      moveUp={() => fullpageApi.moveSectionUp()}
                      sectionActive={fullpageApi ? fullpageApi.getActiveSection() : false}
                      isFirst={this.state.firstSection}
                      isLast={this.state.lastSection}
                    />
                    <Footer 
                      index={this.state.sectionIndex}
                      pageName={this.state.pageName}
                    />
                  </div>
                {/* fim elementos fixos */}
                <ReactFullpage.Wrapper>
                  <div className="section" data-name="home">
                    <Home 
                      index={this.state.sectionIndex}
                      navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      nextPage='metodologia'
                    />
                  </div>
                  <div className="section metodologia_sec" data-name="metodologia">
                    <div className="slide">
                      <Metodologia
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" style={{backgroundColor: '#350', textAlign: 'center'}}> slide 2</div>
                    <div className="slide" style={{backgroundColor: '#acf', textAlign: 'center'}}>slide 3</div>
                    <div className="slide" style={{backgroundColor: '#fc2', textAlign: 'center'}}>slide 4</div>
                    <div className="slide" style={{backgroundColor: '#fc2', textAlign: 'center'}}>slide 5</div>
                  </div>
                </ReactFullpage.Wrapper>
              </React.Fragment>
            );
          }
        }
      />
    );
  }
}

export default App;
