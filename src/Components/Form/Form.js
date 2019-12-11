 import React, { Component } from 'react';

 class Form extends Component {
     constructor() {
         super();
         this.state = {

         }
     }

     render() {
         return (
             <form>
                 <input placeholder='Name' 
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange} />
                 <input placeholder='Date (mm/yy)' 
                        type='text'
                        name='date'
                        value={this.state.date}
                        onChange={this.handleChange} />
                 <input placeholder='Time' 
                        type='text'
                        name='time'
                        value={this.state.time}
                        onChange={this.handleChange} />
                 <input placeholder='Number of Guests' 
                        type='text'
                        name='guests'
                        value={this.state.guests}
                        onChange={this.handleChange} />
                 <button>Make Reservation</button>
             </form>
         )
     }
 }

 export default Form;