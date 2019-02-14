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
        	<p className="home__desc"> 
            Perder oportunidades de vendas é uma dor de cabeça
            que nenhum gestor deseja. E se eu falar que você
            pode ser um dos que deixam oportunidades passarem?
            Por isso precisamos conversar sobre o funil de vendas em Y
            e aproveitar estratégias como <strong className="home__desc--bold">inbound</strong> e <strong className="home__desc--bold">outbound marketing</strong>.
          </p>
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
