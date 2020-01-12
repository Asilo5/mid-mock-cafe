import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { getReservations, postReservation, deleteReservation } from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {
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
    getReservations.mockImplementation(() => {
      return Promise.resolve(mockResponse)
    })
  })

  it('should match snapshot with all information passing in correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should call getReservations after component is mounted', () => {
    shallow(<App />);

    expect(getReservations).toHaveBeenCalled();
  })

  it.skip('should update state with a reservation when addReservations is called', async () => {
    const wrapper = shallow(<App />);
    
    postReservation.mockImplementation(() => {
      return Promise.resolve(mockReser )
    });

    const mockReser = { name: 'bob', date: '12/22', time: '7:30', number: 2, id: Date.now() };

    expect(wrapper.state('totalReservations')).toEqual([]);

    await wrapper.instance().addReservations(mockReser);

    expect(wrapper.state('totalReservations')).toEqual([{ name: 'bobby', date: '12/23', time: '8:30', number: 2, id: 1 }, mockReser ]);
  
  })

  it('should remove reservation from state when removeReservations is called', async () => {
    const wrapper = shallow(<App />)

    const mockReservation = [
      { name: 'bob', date: '12/22', time: '7:30', number: 2, id: 1 },
      { name: 'bobby', date: '12/12', time: '8:30', number: 3, id: 2 }
    ];

    const expected = [
      { name: 'bob', date: '12/22', time: '7:30', number: 2, id: 1 }
    ];
 
    deleteReservation.mockImplementation(() => {
      return Promise.resolve(expected)
    });

    wrapper.instance().setState({ totalReservations: mockReservation});

    await wrapper.instance().removeReservations(2);

    expect(wrapper.state('totalReservations')).toEqual(expected);

  })

})


