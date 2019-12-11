import { getReservations, postReservation, deleteReservation } from './apiCalls';

describe('API CALLS', () => {
 
    describe('getResrvations', () => {

        let mockResponse = [
            {
                id: 1,
                name: 'bob',
                date: '11/20',
                time: '11;30',
                number: 1
            }
        ]
 
        beforeEach(() => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve(mockResponse)
                })
            })
        })

        it('should call fetch with the correct url', () => {
          getReservations();
          expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations');
        })

        it('should return an array of reservations', () => {
            expect(getReservations()).resolves.toEqual(mockResponse);
        })

        it('should return an error for response that is not ok', () => {
            window.fetch = jest.fn().mockImplementation(() => {
                return Promise.resolve({
                    ok: false
                })
            });
            expect(getReservations()).rejects.toEqual(Error('Could not find reservations'))
        })
    })

    describe('postReservation', () => {
      let reservation;
      let mockOption;

        beforeEach(() => {
           reservation =  {
            id: 1,
            name: 'bob',
            date: '11/20',
            time: '11;30',
            number: 1
           };

           mockOption = {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type' : 'application/json'
            }
           }

           window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(reservation)
            })
        })
        })

        it('should call fetch with the correct url', () => {
            postReservation(reservation);
            expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations', mockOption);
          })
    })

})