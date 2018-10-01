import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)

    const { states, offices } = props

    this.state = {
      textSelectState: 'Estado',
      textSelectOffice: 'Cargo',
      textSearch: '',
      states: states,
      stateSelected: 0,
      officeSelectedCod: 0,
      offices: offices
    }

    this.textSearchHandleChange = this.textSearchHandleChange.bind(this)
    this.selectStatesHandleChange = this.selectStatesHandleChange.bind(this)
    this.selectOfficesHandleChange = this.selectOfficesHandleChange.bind(this)
    this.textSearchHandleChange = this.textSearchHandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  selectStatesHandleChange (event) {
    const { description, cod } = this.state.states[event.target.value]
    this.setState({ textSelectState: `${description} - ${cod}`, stateSelected: cod })
    this.props.stateChange(cod)
  }

  selectOfficesHandleChange (event) {
    const { description, cod } = this.state.offices[event.target.value]
    this.setState({ textSelectOffice: description, officeSelectedCod: cod })
    this.props.officeChance(cod)
  }

  textSearchHandleChange (event) {
    this.setState({ textSearch: event.target.value })
  }

  handleSubmit (event) {
    console.log(this.state)
    event.preventDefault()
  }

  render () {
    const listOfficeOption = this.state.offices.map((office, key) => <option value={key} key={key}>
                                                                       {office.description}
                                                                     </option>)

    const listStatesOption = this.state.states.map((state, key) => <option value={key} key={key}>
                                                                     {`${state.description} - ${state.cod}`}
                                                                   </option>
    )

    return (
      <div  className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select name='state' onChange={this.selectStatesHandleChange}>
              <option>
                {this.state.textSelectState}
              </option>
              {listStatesOption}
            </select>
          </label>
          <label>
            <select name='office' onChange={this.selectOfficesHandleChange}>
              <option>
                {this.state.textSelectOffice}
              </option>
              {listOfficeOption}
            </select>
          </label>
          <input
            type='text'
            value={this.state.textSearch}
            placeholder='Pesquisa pelo candidato'
            onChange={this.textSearchHandleChange} />
          <input type='submit' value='Buscar' />
        </form>
      </div>
    )
  }
}
