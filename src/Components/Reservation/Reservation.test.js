import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
    it('should match wrapper with all information passing through correctly', () => {
        let wrapper = shallow(<Reservation id={1} 
                                          name='bob' 
                                          date='11/22' 
                                          time='7:30'
                                          number={5}
                                          removeReservations={jest.fn()} />);
     expect(wrapper).toMatchSnapshot();   
    })
})