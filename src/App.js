import React, { Component } from 'react';
import './components/main.scss';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './components/pages/home'
import Metodologia from './components/pages/Metodologia'
import Magnet from './components/parts/Magnet'
import Logo from './components/parts/LogoLayer'
import MetodologiaInternas from './components/pages/MetodologiaInternas'
import Fazemos from './components/pages/Fazemos'
import ALayer from './components/pages/ALayer'
import Jornada from './components/pages/Jornada'
import Parceiros from './components/pages/Parceiros'
import Clientes from './components/pages/Clientes'
import Blog from './components/pages/Blog'
import Header from './components/header'
import NavSocial from './components/nav-social'
import Footer from './components/footer'
import PageNav from './components/PageNav'

// devOnly
import inboundRd from './assets/images/parceiros/inbound-rd.jpg'
import platinumRd from './assets/images/parceiros/platinum-rd.jpg'
import googlePartner from './assets/images/parceiros/google-partner.jpg'
import clint from './assets/images/parceiros/clint.jpg'
import clientPlaceholder from './assets/images/clientes/placeholder.png'

class App extends Component {
  state = {
    overlay: false,
    loading: true,
    sectionIndex: 0,
    firstSection: true,
    lastSection: false,
    pageName: 'Home',
    magnetWrapper: 'magnet__wrapper--null'
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
    if(section.anchor === 'metodologia'){
      this.setState({
        magnetWrapper: `magnet__wrapper--${destination.anchor}`
      })
    }
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

  isWhite(index){
    if(index === 0 || index === 2){
      return true
    }
    return false
  }
  render() {
    return (
        <ReactFullpage
          menu='.menu'
          fixedElements='.fixedElements'
          normalScrollElements='.verticalSliderAlt__slider, .verticalSliderAlt__slide, .clientes__clients, .clientes__client'
          onLeave={this.onLeave.bind(this)}
          onSlideLeave={this.onSlideLeave.bind(this)}
          afterRender={this.pageLoaded.bind(this)}
          anchors={['home', 'metodologia', 'quem-somos', 'o-que-fazemos']}
          loopHorizontal={false}
          render={({ state, fullpageApi }) => {
            return (
              <React.Fragment>
                  {/* elementos fixos */}
                  <div className={`fixedElements ${this.isWhite(this.state.sectionIndex) ? 'fixedElements--isHome' : ''}`}>
                    <Header 
                      overlay={this.menuOverlay} 
                      navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                    />
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
                    <div className={`magnet__wrapper ${this.state.magnetWrapper}`}>
                      <Magnet />
                    </div>
                    <div className="slide" >
                      <Metodologia
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="inbound">
                      <MetodologiaInternas
                        pageTitle="Inbound"
                        pageTitleSpotlight="Marketing"
                        introText="Você deseja que as oportunidades de negócio procurem por sua empresa? Este método já existe no mercado e, se você não conhece, suas ações certamente estão desatualizadas."
                        secClass="inbound"
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="outbound">
                      <MetodologiaInternas
                        pageTitle="Outbound"
                        pageTitleSpotlight="Marketing 2.0"
                        introText="Se o outbound marketing é uma estratégia muito antiga, inclusive considerada ultrapassada por alguns, por que ainda usamos? Simples: porque gera resultados!"
                        secClass="outbound"
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                      
                    </div>
                    <div className="slide" data-anchor="pontes">
                      <MetodologiaInternas
                        pageTitle="Pontes"
                        pageTitleSpotlight="Funil em Y"
                        introText="Esse processo é chamado de ponte, isto é, quando leads vão de um lado para o outro do Y de acordo com sua qualificação."
                        secClass="pontes"
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="processos-comerciais">
                      <MetodologiaInternas
                        pageTitle="Processo"
                        pageTitleSpotlight="Comercial"
                        introText="Um processo comercial sólido garante uma maior previsibilidade do negócio e organiza melhor os processos de venda. Com ele você terá mapeado os dados das ações desde o momento em que um visitante vira lead até, enfim, virar um cliente do seu negócio. É uma forma de controlar tudo que acontece no seu funil de vendas em Y e não deixar nenhum lead esfriar, ou seja, perder o interesse."
                        secClass="processo"
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                  </div>
                  <div className="section quem-somos" data-name="quem-somos">
                    <div className="quem-somos__bg-overlay"></div>
                    <div className="quem-somos__logo-wrapper">
                      <Logo />
                      <p className="quem-somos__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="slide" data-anchor="porque-a-layer">
                      <ALayer
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="jornada">
                      <Jornada
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="parceiros">
                       <Parceiros
                        index={this.state.sectionIndex}
                        clients={[
                          {src: inboundRd, alt: 'Certificado em Inbound Marketing, ResultadosDigitais'},
                          {src: platinumRd, alt: 'Platinum Partner, Rd Station'},
                          {src: googlePartner, alt: 'Google Partner'},
                          {src: clint, alt: 'We are Clint'}
                        ]}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                    <div className="slide" data-anchor="clientes">
                      <Clientes
                        index={this.state.sectionIndex}
                        clients={[
                          {src: clientPlaceholder, alt: 'Certificado em Inbound Marketing, ResultadosDigitais'},
                          {src: clientPlaceholder, alt: 'Platinum Partner, Rd Station'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'Google Partner'},
                          {src: clientPlaceholder, alt: 'We are Clint'}
                        ]}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>                    
                    <div className="slide" data-anchor="blog">
                      <Blog 
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                      />
                    </div>
                  </div>
                  <div className="section" data-name="o-que-fazemos">
                    <Fazemos 
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                    />
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
