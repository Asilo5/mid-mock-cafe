import React from 'react';
import Reservation from '../Reservation/Reservation';

const ReservationsContainer = ({ totalReservations }) => {
  const theReservations = totalReservations.map((reserv) => {
    return <Reservation {...reserv} />
  })
  return (
    <section className='reservations-container'>
      {theReservations}
    </section>
  )
}

export default ReservationsContainer;