import React, { Component } from 'react';

class Contato extends Component {

  state = {
    formMobile: false
  }

  toggleForm = () => {
    this.setState(currentState => ({
          formMobile: !currentState.formMobile
        }))
  }

  render() { 
    return (
      <div className="contato">
      	<div className="contato__main-info">
      		<h2 className="contato__title">Contato</h2>
      		<p className="contato__desc">Criamos soluções de marketing e vendas para acelerar acelerar o crescimentos de empresas B2B e B2C. Desenhamos um planejamento personalizado, traçamos estratégias totalmente customizadas com foco no seu objetivo. Você está pronto para UP?</p>
      	</div>
      <button className="contato__form_toggler" type="button" onClick={this.toggleForm} >Entre em contato</button>
  		<form className={`contato__form ${this.state.formMobile === true ? 'contato__form--mobile' : ''}`}>
        <button className="contato__form_toggler-inside" type="button" onClick={this.toggleForm} >x</button>
  			<div className="contato__input-wrapper">
  				<input className="contato__form-input" type="text" name="nome" placeholder="nome"/>
  				<input className="contato__form-input" type="text" name="email" placeholder="email"/>
  			</div>
			<div className="contato__input-wrapper">
  				<input className="contato__form-input" type="text" name="telefone" placeholder="telefone"/>
  				<input className="contato__form-input" type="text" name="empresa" placeholder="empresa"/>
  			</div>
  			<div className="contato__input-wrapper">
  				<input className="contato__form-input contato__form-input--full" type="text" name="assunto" placeholder="assunto"/>
  			</div>
  			<div className="contato__text-wrapper">
  				<textarea rows="15" className="contato__textarea" placeholder="Mensagem"></textarea>
  			</div>
  			<input className="contato__submit" type="submit" />
  		</form>
      <address className="contato__address">
        <strong>ENDEREÇO</strong><br/>
        Rua Cerro Corá, 585<br/>
        Torre 1 - Salas 101, 103, 105, 106 e 109<br/>
        Alto de Pinheiros - São Paulo | SP - Brasil<br/>
        <br/>
        <strong>CONTATO</strong><br/>
        (11)3021.1300<br/>
        (11)3881.0900<br/>
        contato@layerup.com.br
      </address>
      </div>
    )
  }
}

export default Contato;
