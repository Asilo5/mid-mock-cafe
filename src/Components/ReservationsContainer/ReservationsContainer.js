import React from 'react';
import Reservation from '../Reservation/Reservation';
import './ReservationsContainer.css';

const ReservationsContainer = ({ totalReservations }) => {
  const theReservations = totalReservations.map((reserv) => {
    return <Reservation key={reserv.id} {...reserv} />
  })
  return (
    <section className='reservations-container'>
      {theReservations}
    </section>
  )
}

export default ReservationsContainer;