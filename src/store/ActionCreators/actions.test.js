
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { fetchData, getAirportsDataWithLoadingState} from "./actions";
import { LOADING_START, LOADING_END, SAVE_AIRPORT_TO_STORE } from "./actionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ airports: [] })
const airportsMock = [
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

describe('getPosts actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('Test fetchData action dispatch SAVE_AIRPORT_TO_STORE after get response from api call ', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: airportsMock,
            });
        });

        const expectedActions = [
            { type: SAVE_AIRPORT_TO_STORE, data: airportsMock }
            ];

        return store.dispatch(fetchData('flight/refData/airport')).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
