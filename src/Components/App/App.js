import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
       guestInfo : {}
    }
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
          
        </div>
      </div>
    )
  }
}

export default App;
