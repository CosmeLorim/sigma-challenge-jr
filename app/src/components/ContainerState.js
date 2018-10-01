import React, { Component } from 'react'

import './ContainerState.css'

export default class ContainerState extends Component {
  render () {
    return (
      <div className='container grid grid-col-2 bg-green'>
        <div className='item'>
          <h2>{this.props.state}</h2>
          <h3>{this.props.republic}</h3>
          <h3>Candidato à {this.props.office}</h3>
        </div>
        <div className='item'>
          <img src={this.props.urlImage} alt='Bandeira do Estado' />
        </div>
      </div>
    )
  }
}
