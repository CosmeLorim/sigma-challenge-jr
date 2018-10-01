import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import ListCandidates from './views/ListCandidates'
import DataCandidate from './views/DataCondidate'


class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={ListCandidates} />
            <Route path="/candidate/:state/:id" component={DataCandidate} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
