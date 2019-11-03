import axios from 'axios';
import {
    LOADING_END,
    LOADING_START,
    SAVE_AIRPORT_TO_STORE
} from './actionTypes';


export const fetchData = () => async (dispatch) => {

    dispatch({
        type: LOADING_START
    });

    try {
        const key = 'airports';
        if ( !navigator.onLine ) {
            if ( localStorage[key] ) {
                const airports = JSON.parse(localStorage.getItem(key));
                console.log('localstorage');
                dispatch({
                    type: SAVE_AIRPORT_TO_STORE,
                    data: airports
                });
            }
        } else {
            const url = 'https://api.qantas.com/flight/refData/airport';
            const res = await axios.get(url);
            dispatch({
                type: SAVE_AIRPORT_TO_STORE,
                data: res.data
            });
            if ( !localStorage[key] ) {
                localStorage.setItem(key, JSON.stringify(res.data));
            }
        }

    } catch ( err ) {
        console.log(err)

    }

    dispatch({
        type: LOADING_END
    });

};

