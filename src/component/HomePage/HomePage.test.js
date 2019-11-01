import React from 'react';
import { mount, shallow } from 'enzyme/build';
import { HomePage } from './HomePage';
import { getAirportsDataWithLoadingState } from "../../store/ActionCreators/actions";
import Airports from "../Airports/Airports";
import Modal from 'react-bootstrap/Modal';

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
const mockGetData = jest.fn();

describe('Check Homepage component', () => {

    it('has one <Airports/> component ,one <Modal/> component when isLoading="false "', () => {
        const isLoading = 'false'
        const wrapper = mount(
            <HomePage
                airports={ airports }
                isLoading={ isLoading }
                getAirportsDataWithLoadingState={ mockGetData }
                dispatch={ mockDispatch }
            />);
        const airportsComponent = wrapper.find(Airports);
        const modal = wrapper.find(Modal);
        expect(airportsComponent.length).toBe(1);
        expect(modal.length).toBe(1);

    });


    it('has api-failure-handling message when isLoading="error "', () => {

        const isLoading = 'error';
        const wrapper = shallow(
            <HomePage
                airports={ airports }
                isLoading={ isLoading }
                getAirportsDataWithLoadingState={ mockGetData }
                dispatch={ mockDispatch }
            />)
        const airportsComponent = wrapper.find(Airports);
        const modal = wrapper.find(Modal);
        const message = wrapper.find("[data-test='api-failure-handling']");
        expect(airportsComponent.length).toBe(0);
        expect(modal.length).toBe(0);
        expect(message.length).toBe(1);

    });

    it('has loading indicator  when isLoading="true"', () => {

        const isLoading = 'true';
        const wrapper = shallow(
            <HomePage
                airports={ airports }
                isLoading={ isLoading }
                getAirportsDataWithLoadingState={ mockGetData }
                dispatch={ mockDispatch }
            />);
        const airportsComponent = wrapper.find(Airports);
        const modal = wrapper.find(Modal);
        const loading = wrapper.find("[data-test='loading-gif']");
        expect(airportsComponent.length).toBe(0);
        expect(modal.length).toBe(0);
        expect(loading.length).toBe(1);

    });

    it('Test modal close ', () => {
        const isLoading = 'false';
        const wrapper = shallow(
            <HomePage
                airports={ airports }
                isLoading={ isLoading }
                getAirportsDataWithLoadingState={ mockGetData }
                dispatch={ mockDispatch }
            />)
        wrapper.find("[data-test='close']").at(0).simulate('click');
        expect(mockDispatch).toHaveBeenCalledTimes(1)

    });

    it('Test componentDidMount ()', () => {
        const isLoading = 'false';
        const wrapper = mount(
            <HomePage
                airports={ airports }
                isLoading={ isLoading }
                getAirportsDataWithLoadingState={ mockGetData }
                dispatch={ mockDispatch }
            />);
        wrapper.find("[data-test='click']").at(1).simulate('click');
        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'openModal');
        instance.openModal();
        expect(spy).toHaveBeenCalled;
    });

});