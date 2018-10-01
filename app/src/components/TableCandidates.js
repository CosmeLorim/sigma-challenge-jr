import React, { Component } from 'react'

import './TableCandidates.css'

import { getPresident,
  getVicePresident,
  getGovernor,
  getViceGovernor,
  getSenator,
  getCongressman,
  getStateDeputy,
  getFirstAlternat,
  getSecondAlternat } from '../services/getCandidates'

import Offices from '../services/getOffices'

export default class TableCandidates extends Component {
  constructor (props) {
    super(props)

    this.state = {
        state: '',
        codOffice: 0,
        unidadeEleitoral: {},
        cargo: {},
        candidatos: []
    }
  }

  componentDidUpdate() {
    if(this.props.state !== this.state.state || this.props.codOffice !== this.state.codOffice) {
      const office = Offices.find(({ cod }) => cod === this.props.codOffice)
      this.loadData(office.office, this.props.state)
    }
  }

  componentDidMount() {
    const office = Offices.find(({ cod }) => cod === this.props.codOffice)
    this.loadData(office.office, this.props.state)
  }

  saveState(data) {
    this.setState(
      {
        state: this.props.state,
        codOffice: this.props.codOffice,
        unidadeEleitoral: data.unidadeEleitoral,
        cargo: data.cargo,
        candidatos: data.candidatos
      }
    )
  }

  loadData = (office, state) => {
    switch(office) {
    case 'president':
      getPresident().then(data => this.saveState(data))
      break

      case 'vicePresident':
      getVicePresident().then(data => this.saveState(data))
      break

      case 'governor':
      getGovernor({ state }).then(data => this.saveState(data))
      break

      case 'viceGovernor':
      getViceGovernor({ state }).then(data => this.saveState(data))
      break

      case 'senator':
      getSenator({ state }).then(data => this.saveState(data))
      break

      case 'congressman':
      getCongressman({ state }).then(data => this.saveState(data))
      break

      case 'stateDeputy':
      getStateDeputy({ state }).then(data => this.saveState(data))
      break

      case 'firstAlternat':
      getFirstAlternat({ state }).then(data => this.saveState(data))
      break

      case 'secondAlternat':
      getSecondAlternat({ state }).then(data => this.saveState(data))
      break

    default:
      getPresident().then(data => this.saveState(data))
    }
  }
  
  render () {
    const tableRows = this.state.candidatos.map((candidato, key) =>
        (
          <tr key={key}>
            <td>{candidato.nomeUrna}</td>
            <td>{candidato.nomeCompleto}</td>
            <td>{candidato.descricaoSituacao}</td>
            <td>{candidato.nomeColigacao}</td>
            <td>{candidato.partido.sigla}</td>
            <td>{candidato.numero}</td>
          </tr>
        ))
    return (
      <div  className="container">
        <table>
          <thead>
            <tr>
              <th>Nome em urna</th>
              <th>Nome Completo</th>
              <th>Situação</th>
              <th>Partido/coligação</th>
              <th>Partido</th>
              <th>Nº</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    )
  }
}
