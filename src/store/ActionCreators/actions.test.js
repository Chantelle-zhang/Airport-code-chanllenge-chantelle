import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import { fetchData } from "./actions";
import { SAVE_AIRPORT_TO_STORE } from "./actionTypes";

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

describe('Test getData()', () => {

    beforeEach(function () {
        moxios.install();
        jest.restoreAllMocks();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    describe('when online', () => {

        it('Test dispatch SAVE_AIRPORT_TO_STORE after get response from api  ', () => {

            jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(true);

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: airportsMock,
                });
            });

            const expectedActions = [
                { type: "LOADING_START" },
                { type: SAVE_AIRPORT_TO_STORE, data: airportsMock },
                { type: "LOADING_END" }
            ];

            localStorage.clear();
            const KEY = 'airports';
            const VALUE = JSON.stringify(airportsMock);

            return store.dispatch(fetchData()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
                localStorage.setItem(KEY, VALUE);
            });

        });
    });

    describe('when offline', () => {

        it(' if (localstorage[key]),get value from localstorage and dispatch  ', () => {

            jest.spyOn(navigator, 'onLine', 'get').mockReturnValueOnce(false);

            localStorage.clear();
            const KEY = 'airports';
            const VALUE = JSON.stringify(airportsMock);

            localStorage.setItem(KEY, VALUE);

            return store.dispatch(fetchData()).then(() => {
                expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
            });


        });
    })

});
