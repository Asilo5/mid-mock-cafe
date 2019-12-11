import React from 'react';

const Reservation = ({id, name, date, time, number}) => {
  return (
      <section>
        <h2>{name}</h2>
        <p>{date}</p> 
        <p>{time}</p>
        <p>Number of guests: {number} </p>
        <button>Cancel</button>
      </section>
  )
}

export default Reservation;