import {
    LOADING_ERROR,
    LOADING_START,
    LOADING_END,
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_AIRPORT_DETAIl, SAVE_AIRPORT_TO_STORE
} from "./ActionCreators/actionTypes";
import { isLoading, showModal, airports, airport } from "./reducer";

describe('test airports reducer', () => {

    it('should return the initial state', () => {
        expect(airports([{
            airportCode: "AAA",
            internationalAirport: false,
            domesticAirport: false,
            regionalAirport: false,
            onlineIndicator: false,
            eticketableAirport: false
        }], {})).toEqual([{
            airportCode: "AAA",
            internationalAirport: false,
            domesticAirport: false,
            regionalAirport: false,
            onlineIndicator: false,
            eticketableAirport: false

        }])
    });


    it('should return the initial state', () => {
        expect(airports([], {
            type: SAVE_AIRPORT_TO_STORE,
            data: [{
                airportCode: "AAA",
                internationalAirport: false,
                domesticAirport: false,
                regionalAirport: false,
                onlineIndicator: false,
                eticketableAirport: false
            }]

        })).toEqual([{
            airportCode: "AAA",
            internationalAirport: false,
            domesticAirport: false,
            regionalAirport: false,
            onlineIndicator: false,
            eticketableAirport: false

        }])
    });
});

describe('test airport reducer', () => {

    it('should return the initial state', () => {
        expect(airport({
            "airportCode": "AAA",
            "internationalAirport": false,
            "domesticAirport": false,
            "regionalAirport": false,
            "onlineIndicator": false,
            "eticketableAirport": false
        }, {})).toEqual({
            "airportCode": "AAA",
            "internationalAirport": false,
            "domesticAirport": false,
            "regionalAirport": false,
            "onlineIndicator": false,
            "eticketableAirport": false

        })
    });
    it('test SEND_AIRPORT_DETAIl', () => {
        expect(airport({}, {
            type: SEND_AIRPORT_DETAIl,
            airport: {
                "airportCode": "AAA",
                "internationalAirport": false,
                "domesticAirport": false,
                "regionalAirport": false,
                "onlineIndicator": false,
                "eticketableAirport": false
            }
        })).toEqual({
            "airportCode": "AAA",
            "internationalAirport": false,
            "domesticAirport": false,
            "regionalAirport": false,
            "onlineIndicator": false,
            "eticketableAirport": false
        })
    });

});


describe('test loading reducer', () => {

    it('should return the initial state', () => {
        expect(isLoading('false', {})).toEqual('false')
    })

    it('test handle LOADING_START ', () => {
        expect(isLoading('false', {
            type: LOADING_START
        })).toEqual('true')
    })

    it('test handle LOADING_END ', () => {
        expect(isLoading('true', {
            type: LOADING_END
        })).toEqual('false')
    })


    it('test handle LOADING_ERROR ', () => {
        expect(isLoading('true', {
            type: LOADING_ERROR
        })).toEqual('error')
    })

});

describe('test showModal reducer', () => {

    it('should return the initial state', () => {
        expect(showModal(false, {})).toEqual(false)
    })

    it('test handle OPEN_MODAL ', () => {
        expect(showModal(false, {
            type: OPEN_MODAL
        })).toEqual(true)
    })

    it('test handle CLOSE_MODAL ', () => {
        expect(showModal(true, {
            type: CLOSE_MODAL
        })).toEqual(false)
    })

});
