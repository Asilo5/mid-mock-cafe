import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Form addReservations={jest.fn()} />)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call handleChange when input changes for first input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                name: 'name',
                value: 'bob'
            }
        };

        wrapper.find('input').at(0).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should call handleChange when input changes for second input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                name: 'date',
                value: '11/22'
            }
        };

        wrapper.find('input').at(1).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should call handleChange when input changes for third input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                name: 'time',
                value: '11:22'
            }
        };

        wrapper.find('input').at(2).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should call handleChange when input changes for fourth input', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                name: 'number',
                value: 2
            }
        };

        wrapper.find('input').at(3).simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should update state of name when handleChange is called', () => {
        const mockEvent = {
            target: {
                name: 'name',
                value: 'bob'
            }
        };
        const expected = 'bob';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('name')).toEqual(expected);
    })

    it('should update state of date when handleChange is called', () => {
        const mockEvent = {
            target: {
                name: 'date',
                value: '11/22'
            }
        };
        const expected = '11/22';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('date')).toEqual(expected);
    })

    it('should update state of time when handleChange is called', () => {
        const mockEvent = {
            target: {
                name: 'time',
                value: '11:22'
            }
        };
        const expected = '11:22';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('time')).toEqual(expected);
    })

    it('should update state of number when handleChange is called', () => {
        const mockEvent = {
            target: {
                name: 'number',
                value: 2
            }
        };
        const expected = 2;
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('number')).toEqual(expected);
    })

    it('should call addReservations with form state when sendGuest is called', () => {
        const theState = {
            name: 'bob',
            date: '11/20',
            time: '11;30',
            number: 1
        };

        wrapper.instance().setState(theState);
        wrapper.instance().sendGuestInfo({ preventDefault : jest.fn() });

        expect(wrapper.instance().props.addReservations).toHaveBeenCalledWith(theState);
    })

    it('should call on clearInputs when sendGuestInfo is called', () => {
        wrapper.instance().clearInputs = jest.fn();
        wrapper.instance().sendGuestInfo({ preventDefault: jest.fn() });

        expect(wrapper.instance().clearInputs).toHaveBeenCalled();
    })

    it('should reset state when clearInputs is called', () => {
        const expected = {
            name: '',
            date: '',
            time: '',
            number: 0
          };

       const mockFilledState = {
            name: 'bob',
            date: '11/22',
            time: '11:30',
            number: 1
       }

        wrapper.instance().setState(mockFilledState);
        wrapper.instance().clearInputs();

        expect(wrapper.state()).toEqual(expected);
    })

    it('should run sendGuest when submit button is clicked', () => {
        wrapper.instance().sendGuestInfo = jest.fn();
        wrapper.instance().forceUpdate();

        const mockEvent = {
            preventDefault: jest.fn()
        };

        wrapper.find('button').simulate('click', mockEvent);

        expect(wrapper.instance().sendGuestInfo).toHaveBeenCalled();
    })
})