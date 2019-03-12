import React, { Component } from 'react';
import NavButton from '../parts/NavButton';

class Parceiros extends Component {
  render() { 
    return (
      <div className="parceiros">
        <div className="parceiros__navWrapper">
          <div className={`parceiros__nav parceiros__nav--a-layer ${this.props.index === 2 && (`parceiros__nav--a-layer--animated`)}`}>
            <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Por que a Layer Up'
                navigation={() => this.props.navigation('quem-somos', 0)}
              />
          </div>
          <div className={`parceiros__nav parceiros__nav--jornada ${this.props.index === 2 && (`parceiros__nav--jornada--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Jornada'
                navigation={() => this.props.navigation('quem-somos', 1)}
              />
          </div>
          <div className={`parceiros__nav parceiros__nav--parceiros ${this.props.index === 2 && (`parceiros__nav--parceiros--animated`)}`}>              <NavButton 
                horizontal={true}
                selected={true}
                borderless={true}
                pageName='Parceiros'
                navigation={() => this.props.navigation('quem-somos', 2)}
              />
          </div>
          <div className={`parceiros__nav parceiros__nav--clientes ${this.props.index === 2 && (`parceiros__nav--clientes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Clientes'
                navigation={() => this.props.navigation('quem-somos', 3)}
              />
          </div>
          <div className={`parceiros__nav parceiros__nav--blog ${this.props.index === 2 && (`parceiros__nav--blog--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Blog'
                navigation={() => this.props.navigation('quem-somos', 4)}
              />
          </div>
        </div>
        <div className="parceiros__partners">
          {this.props.clients.map((client, i) => (
            <img className="parceiros__partner" key={`partner_${i}`} src={client.imagem} alt={client.parceiro} />
          ))}
        </div>
      </div>
    )
  }
}

export default Parceiros;
