import React from 'react';
import Reservation from '../Reservation/Reservation';
import './ReservationsContainer.css';

const ReservationsContainer = ({ totalReservations, removeReservations} ) => {
  const theReservations = totalReservations.map((reserv) => {
    return <Reservation key={reserv.id} 
                        {...reserv} 
                        removeReservations={removeReservations} />
  })
  return (
    <section className='reservations-container'>
      {theReservations}
    </section>
  )
}

export default ReservationsContainer;