import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AbstractCandidate from '../components/AbstractCandidate'

import { getDataCandidate } from '../services/getCandidates'

class ViewDataCondidate extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    getDataCandidate({ state: this.props.match.params.state, id: this.props.match.params.id }).then(data => this.setState(data))
  }

  render() {
    const dataAbstractCandidate = {
      name: this.state.nomeCompleto,
      urlImage: this.state.fotoUrl,
      office: this.state.cargo,
      state: this.props.match.params.state,
      politicalParty: this.state.partido,
      occupation: this.state.ocupacao,
      degreeOfEducation: this.state.grauInstrucao,
      num: this.state.numero,
      topCandidate: this.state.idCandidatoSuperior,
      vices: this.state.vices
    }
    return (
      <div>
        <AbstractCandidate {...dataAbstractCandidate} />
        <Link to='/'>Voltar</Link>
      </div>
    )
  }
}

const DataCondidate = ({ match }) => {
  return(
    <ViewDataCondidate match={match} />
  )
}

export default DataCondidate
