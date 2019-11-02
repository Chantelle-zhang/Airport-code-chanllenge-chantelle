import React from 'react';
import { shallow } from 'enzyme/build';
import { Detail } from './Detail'


describe('Check Airports component', () => {
    it('rendering  product list ', () => {
        const airport =
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
            };
        const wrapper = shallow(<Detail airport={ airport }/>);
        const airportCode = wrapper.find("[data-test='airportCode']");
        const city = wrapper.find("[data-test='city']");
        const latitude = wrapper.find("[data-test='latitude']");
        const longitude = wrapper.find("[data-test='longitude']");
        const timeZone = wrapper.find("[data-test='timeZone']");
        expect(city.length).toBe(1);
        expect(airportCode.length).toBe(1);
        expect(latitude.length).toBe(1);
        expect(longitude.length).toBe(1);
        expect(timeZone.length).toBe(1);
    });

});
