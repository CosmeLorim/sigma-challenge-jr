import React, { Component } from 'react'

import ContainerState from '../components/ContainerState'
import SearchBar from '../components/SearchBar'
import TableCandidates from '../components/TableCandidates'

import Offices from '../services/getOffices'
import States from '../services/getStates'
import { getImageState } from '../services/getImages'

export default class ListCandidates extends Component {
  constructor () {
    super()
    this.state = {
      dataContainerState: {
        state: 'Mato Grosso - MT',
        republic: 'Brasil',
        office: 'Governador',
        urlImage: getImageState('MT')
      },
      dataSearchBar: {
        offices: Offices, states: States, stateChange: this.stateChange.bind(this), officeChance: this.officeChance.bind(this)
      },
      dataTableCandidates: { state: 'MT', codOffice: 3 }
    }
  }
  stateChange (codState) {
    const newState = States.find(state => state.cod === codState)
    this.setState(
      {
        dataContainerState: {
          state: `${newState.description} - ${newState.cod}`,
          republic: 'Brasil',
          office: this.state.dataContainerState.office,
          urlImage: getImageState(newState.cod)
        },
        dataTableCandidates: { state: newState.cod, codOffice: this.state.dataTableCandidates.codOffice }
      })
  }
  officeChance (codOffice) {
    const newOffice = Offices.find(office => office.cod === codOffice)
    this.setState(
      {
        dataContainerState: {
          state: this.state.dataContainerState.state,
          republic: 'Brasil',
          office: newOffice.description,
          urlImage: this.state.dataContainerState.urlImage
        },
        dataTableCandidates: { state: this.state.dataTableCandidates.state, codOffice: newOffice.cod }
      })
  }
  render () {
    return (
      <div>
        <ContainerState { ...this.state.dataContainerState }/>
        <hr></hr>
        <SearchBar { ...this.state.dataSearchBar } />
        <hr></hr>
        <TableCandidates { ...this.state.dataTableCandidates } />
      </div>
    )
  }
}
