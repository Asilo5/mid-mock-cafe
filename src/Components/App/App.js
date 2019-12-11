import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../../apiCalls';

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

  addReservations = () => {
    const { guestInfo, totalReservations } = this.state;
    postReservation(guestInfo)
      .then(reservation => this.setState({ totalReservations: [...totalReservations, reservation] }))
      .catch(err => console.log(err.message))
  }

  addGuestInfo = ({name, date, time, number}) => {
    this.setState({
      guestInfo: {
        name,
        date,
        time,
        number: parseInt(number)
      }
    })
    this.addReservations();
  }

  render() {
    const { totalReservations, guestInfo } = this.state;
    console.log(totalReservations)
    console.log(guestInfo)
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addGuestInfo={this.addGuestInfo} />
        </div>
        <div className='resy-container'>
          <ReservationsContainer totalReservations={totalReservations}/>
        </div>
      </div>
    )
  }
}

export default App;
