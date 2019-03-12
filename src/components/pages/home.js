import React, { Component } from 'react';
import NavButton from '../parts/NavButton'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__content">
        	<h2 className="home__title">
        		Funil de <strong className="home__title--bold">vendas em Y</strong>
        	</h2>
        	<p 
            className="home__desc" 
            dangerouslySetInnerHTML={{__html: Object.entries(this.props.text).length !== 0 ? this.props.text : '<p className="blog__loader">Carregando <span className="blog__loader--dots"> </span></p>'}}
          ></p>
          
          </div>
          <div className="home__btnArea">
            <NavButton 
              pageName='Metodologia'
              navTo={this.props.nextPage}
              navigation={this.props.navigation}
            />
        </div>
      </div>
      // <Tag />
    )
  }
}

export default Home;
