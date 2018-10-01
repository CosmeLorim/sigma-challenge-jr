import React, { Component } from 'react'

import './AbstractCandidate.css'

export default class AbstractCandidate extends Component {
  render () {
    const office = typeof this.props.office === 'undefined' ? '' : this.props.office.nome
    const politicalParty = typeof this.props.politicalParty === 'undefined' ? '' : this.props.politicalParty.nome

    const secondaryCandidates = typeof this.props.vices === 'undefined' ? '' : this.props.vices.map((cand, key) => {
      return <span className='item' key={key}><img className='img-secondary' src={cand.urlFoto} alt='Foto vice, suplente ou titular'></img></span>
    })

    return (
      <div className='container grid grid-col-3'>
        <div className='item'>
          <img src={this.props.urlImage} alt='Imagem do Candidato'></img>
        </div>
        <div className='item'>
          <p>
            {this.props.name}
          </p>
          <p>
            {`${office} - ${this.props.state} - ${politicalParty}`}
          </p>
          <p>
            {`${this.props.occupation} - ${this.props.num}`}
          </p>
        </div>
        <div className='item'>
          <div className='grid grid-col-2'>
            <h3>{this.props.topCandidate ? 'Titular' : 'Vices/Suplentes'}</h3>
            {secondaryCandidates}
          </div>
        </div>
      </div>
    )
  }
}
