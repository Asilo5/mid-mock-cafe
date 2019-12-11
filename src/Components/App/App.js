import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation, deleteReservation } from '../../apiCalls';

import Form from '../Form/Form';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
       totalReservations: [],
      //  guestInfo : {},
       error: ''
    }
  }

  componentDidMount = () => {
    getReservations()
      .then(reservations => this.setState({ totalReservations: reservations }))
      .catch(err => this.setState({ error: err.message }))
  }

  addReservations = (guest) => {
    const { totalReservations } = this.state;
    postReservation(guest)
      .then(reservation => this.setState({ totalReservations: [...totalReservations, reservation] }))
      .catch(err => this.setState({ error: err.message }))
  }

  removeReservations = (id) => {
    deleteReservation(id)
    .then(reservation => this.setState({ totalReservations: reservation }))
    .catch(err => this.setState({ error: err.message }))
  }

  render() {
    const { totalReservations } = this.state;
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addGuestInfo={this.addGuestInfo} addReservations={this.addReservations} />
        </div>
        <div className='resy-container'>
          <ReservationsContainer totalReservations={totalReservations} removeReservations={this.removeReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
