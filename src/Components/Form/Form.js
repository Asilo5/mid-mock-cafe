 import React, { Component } from 'react';

 class Form extends Component {
     constructor() {
         super();
         this.state = {
           name: '',
           date: '',
           time: '',
           number: 0
         }
     }

     handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value })
       this.setState({ number : e.target.value })
     }

     sendGuestInfo = (e) => {
       e.preventDefault();
       const { addGuestInfo, addReservations } = this.props;
      //  addGuestInfo(this.state);

       addReservations(this.state);
       this.clearInputs();
     }

     clearInputs = () => {
         this.setState({
           name: '',
           date: '',
           time: '',
           number: 0
         })
     }

     render() {
         return (
             <form>
                 <input placeholder='Name' 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)} />
                 <input placeholder='Date (mm/yy)' 
                        type='text'
                        name='date'
                        value={this.state.date}
                        onChange={(e) => this.handleChange(e)} />
                 <input placeholder='Time' 
                        type='text'
                        name='time'
                        value={this.state.time}
                        onChange={(e) => this.handleChange(e)} />
                 <input placeholder='Number of Guests' 
                        type='number'
                        name='number'
                        value={this.state.number}
                        onChange={(e) => this.handleChange(e)} />
                 <button onClick={(e) => this.sendGuestInfo(e)}>Make Reservation</button>
             </form>
         )
     }
 }

 export default Form;