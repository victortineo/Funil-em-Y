import React, { Component } from 'react';
import NavButton from '../parts/NavButton';

class Clientes extends Component {
  render() { 
    return (
      <div className="clientes">
        <div className="clientes__navWrapper">
          <div className={`clientes__nav clientes__nav--a-layer ${this.props.index === 2 && (`clientes__nav--a-layer--animated`)}`}>
            <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Por que a Layer Up'
                navigation={() => this.props.navigation('quem-somos', 0)}
              />
          </div>
          <div className={`clientes__nav clientes__nav--jornada ${this.props.index === 2 && (`clientes__nav--jornada--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Jornada'
                navigation={() => this.props.navigation('quem-somos', 1)}
              />
          </div>
          <div className={`clientes__nav clientes__nav--parceiros ${this.props.index === 2 && (`clientes__nav--parceiros--animated`)}`}>              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Parceiros'
                navigation={() => this.props.navigation('quem-somos', 2)}
              />
          </div>
          <div className={`clientes__nav clientes__nav--clientes ${this.props.index === 2 && (`clientes__nav--clientes--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={true}
                borderless={true}
                pageName='Clientes'
                navigation={() => this.props.navigation('quem-somos', 3)}
              />
          </div>
          <div className={`clientes__nav clientes__nav--blog ${this.props.index === 2 && (`clientes__nav--blog--animated`)}`}>
              <NavButton 
                horizontal={true}
                selected={false}
                borderless={true}
                pageName='Blog'
                navigation={() => this.props.navigation('quem-somos', 4)}
              />
          </div>
        </div>
        <div className="clientes__clients-wrapper">
          <div className="clientes__clients">
            {this.props.clients.map((client, i) => (
              <img className="clientes__client" key={`client_${i}`} src={client.imagem} alt={client.nome} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Clientes;
