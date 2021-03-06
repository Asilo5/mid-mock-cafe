import React from 'react';
import './Reservation.css';

const Reservation = ({id, name, date, time, number, removeReservations}) => {
  return (
      <section className='reservation'>
        <h2>{name}</h2>
        <p>{date}</p> 
        <p>{time}</p>
        <p>Number of guests: {number} </p>
        <button onClick={() => removeReservations(id) }>Cancel</button>
      </section>
  )
}

export default Reservation;