import React from 'react';
import { shallow } from 'enzyme';
import ReservationsContaner from './ReservationsContainer';

describe('ReservationsContaner', () => {
    it('should match wrapper with all information passing through correctly', () => {
        let mockReserv= [
            {
                id: 1,
                name: 'bob',
                date: '11/20',
                time: '11;30',
                number: 1
            }
        ]
        let wrapper = shallow(<ReservationsContaner totalReservations={mockReserv}
                                          removeReservations={jest.fn()} />);
     expect(wrapper).toMatchSnapshot();   
    })
})