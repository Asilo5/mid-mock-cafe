export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(resp => {
        if(!resp.ok) {
            throw Error('Could not find reservations');
        }
        return resp.json();
    })
}

export const postReservation = (guestInfo) => {
  const options = {
      method: 'POST',
      body: JSON.stringify(guestInfo),
      headers: {
          'Content-Type' : 'application/json'
      }
  };

  return fetch('http://localhost:3001/api/v1/reservations', options)
  .then(resp => {
      if(!resp.ok) {
          throw Error('Could not Post reservation');
      }
      return resp.json();
  })
}