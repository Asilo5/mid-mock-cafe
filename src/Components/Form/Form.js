 import React, { Component } from 'react';

 class Form extends Component {
     constructor() {
         super();
         this.state = {
           name: '',
           date: '',
           time: '',
           guests: '',
         }
     }

     handleChange = (e) => {
       this.setState({ [e.target.name] : e.target.value })
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
                        type='text'
                        name='guests'
                        value={this.state.guests}
                        onChange={(e) => this.handleChange(e)} />
                 <button>Make Reservation</button>
             </form>
         )
     }
 }

 export default Form;