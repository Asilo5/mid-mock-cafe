import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../../apiCalls';

import Form from '../Form/Form';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
       totalReservations: [],
       guestInfo : {},
       error: ''
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(reservations => this.setState({ totalReservations: reservations }))
      .catch(err => this.setState({ error: err.message }))
  }


  addGuestInfo = (guestInfo) => {
    this.setState({
      guestInfo
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addGuestInfo={this.addGuestInfo} />
        </div>
        <div className='resy-container'>
          <ReservationsContainer />
        </div>
      </div>
    )
  }
}

export default App;
