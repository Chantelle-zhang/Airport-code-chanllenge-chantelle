import React from 'react';
import { shallow } from 'enzyme/build';
import { Airports } from './Airports'

const airports = [
    {
        airportCode: 'AAA',
        internationalAirport: false,
        domesticAirport: false,
        regionalAirport: false,
        onlineIndicator: false,
        eticketableAirport: false,
        location: {
            aboveSeaLevel: -99999,
            latitude: 17.25,
            latitudeRadius: -0.304,
            longitude: 145.3,
            longitudeRadius: -2.5395,
            latitudeDirection: 'S',
            longitudeDirection: 'W',
        },
        airportName: 'Anaa',
        city: {
            cityCode: 'AAA',
            cityName: 'Anaa',
            timeZoneName: 'Pacific/Tahiti',
        },
        country: {
            countryCode: 'PF',
            countryName: 'French Polynesia',
        },
        region: {
            regionCode: 'SP',
            regionName: 'South Pacific',
        },
    },
    {
        airportCode: 'AAB',
        internationalAirport: false,
        domesticAirport: false,
        regionalAirport: false,
        onlineIndicator: false,
        eticketableAirport: false,
        location: {
            aboveSeaLevel: -99999,
            latitude: 26.45,
            latitudeRadius: -0.4669,
            longitude: 141,
            longitudeRadius: 2.4609,
            latitudeDirection: 'S',
            longitudeDirection: 'E',
        },
        airportName: 'Arrabury',
        city: {
            cityCode: 'AAB',
            cityName: 'Arrabury',
            timeZoneName: 'Australia/Brisbane',
        },
        country: {
            countryCode: 'AU',
            countryName: 'Australia',
        },
        region: {
            regionCode: 'AU',
            regionName: 'Australia',
        },
    },
];
const mockDispatch = jest.fn();
const wrapper = shallow(<Airports airports={ airports } dispatch={ mockDispatch }/>);
describe('Check Airports component', () => {

    it('rendering  Airports list ', () => {
        const countries = wrapper.find("[data-test='country']");
        const names = wrapper.find("[data-test='airport-name']");
        expect(countries.length).toBe(airports.length);
        expect(names.length).toBe(airports.length);
    });

    it('Test click event', () => {
        wrapper.find("[data-test='click']").at(1).simulate('click');
        expect(mockDispatch).toHaveBeenCalledTimes(2);

    });

});
