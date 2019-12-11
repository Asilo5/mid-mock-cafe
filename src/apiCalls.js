export const getReservations = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
    .then(resp => {
        if(!resp.ok) {
            throw Error('Could not find reservations');
        }
        return resp.json();
    })
}