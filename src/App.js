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
import Contato from './components/pages/Contato'
import Header from './components/header'
import NavSocial from './components/nav-social'
import Footer from './components/footer'
import PageNav from './components/PageNav'
import * as API from './api'

class App extends Component {
  state = {
    overlay: false,
    loading: true,
    sectionIndex: 0,
    firstSection: true,
    lastSection: false,
    pageName: 'Home',
    magnetWrapper: 'magnet__wrapper--null',
    o_que_fazemos: {},
    home: {},
    metodologia: {},
    quem_somos: {}
  }

  componentDidMount = () => {
    API.getPosts('home')
    .then(resp => this.setState({home: resp[0].content.rendered}))
    API.getPosts('metodologia')
    .then(resp => this.setState({metodologia: resp[0]}))
    API.getPosts('quem-somos')
    .then(resp => this.setState({quem_somos: resp[0]}))
    API.getPosts('o-que-fazemos')
    .then(resp => this.setState({o_que_fazemos: resp[0]}))
    // API.getPosts('contato')
    // .then(resp => this.setState({contato: resp[0]}))
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
    if(index % 2 === 0){
      return true
    }
    return false
  }

  render() {
    return (
        <ReactFullpage
          menu='.menu'
          fixedElements='.fixedElements'
          normalScrollElements='.verticalSliderAlt__slider, .verticalSliderAlt__slide, .clientes__clients, .clientes__client, .blog__posts'
          onLeave={this.onLeave.bind(this)}
          onSlideLeave={this.onSlideLeave.bind(this)}
          afterRender={this.pageLoaded.bind(this)}
          anchors={['home', 'metodologia', 'quem-somos', 'o-que-fazemos', 'contato']}
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
                      text={this.state.home}
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
                        context={this.state.metodologia.acf ? this.state.metodologia.acf.paginas[0] : this.state.metodologia}
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
                        context={this.state.metodologia.acf ? this.state.metodologia.acf.paginas[1] : this.state.metodologia}
                      />
                    </div>
                    <div className="slide" data-anchor="outbound">
                      <MetodologiaInternas
                        pageTitle="Outbound"
                        pageTitleSpotlight="Marketing 2.0"
                        secClass="outbound"
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                        context={this.state.metodologia.acf ? this.state.metodologia.acf.paginas[2] : this.state.metodologia}
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
                        context={this.state.metodologia.acf ? this.state.metodologia.acf.paginas[3] : this.state.metodologia}

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
                        context={this.state.metodologia.acf ? this.state.metodologia.acf.paginas[4] : this.state.metodologia}
                      />
                    </div>
                  </div>
                  <div className="section quem-somos" data-name="quem-somos">
                    <div className="quem-somos__bg-overlay"></div>
                    <div className="quem-somos__logo-wrapper">
                      <Logo />
                      <p className="quem-somos__text"
                        dangerouslySetInnerHTML={{__html: this.state.quem_somos.content && this.state.quem_somos.content.rendered}}
                      >
                      </p>
                    </div>
                    <div className="slide" data-anchor="porque-a-layer">
                      <ALayer
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                        context={this.state.quem_somos.acf}
                      />
                    </div>
                    <div className="slide" data-anchor="jornada">
                      <Jornada
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                        context={this.state.quem_somos.acf}
                      />
                    </div>
                    <div className="slide" data-anchor="parceiros">
                       <Parceiros
                        index={this.state.sectionIndex}
                        navigation={(section, slide=0) => fullpageApi.moveTo(section, slide)}
                        clients={this.state.quem_somos.acf ? this.state.quem_somos.acf.parceiros : []}
                      />
                    </div>
                    <div className="slide" data-anchor="clientes">
                      <Clientes
                        index={this.state.sectionIndex}
                        clients={this.state.quem_somos.acf ? this.state.quem_somos.acf.clientes : []}
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
                        slides={this.state.o_que_fazemos}
                    />
                  </div>
                  <div className="section" data-name="contato">
                    <Contato />
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
