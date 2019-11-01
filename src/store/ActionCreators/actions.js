import axios from 'axios';
import {
    LOADING_END,
    LOADING_START,
    SAVE_AIRPORT_TO_STORE
} from './actionTypes';


export const fetchData = (url) => async (dispatch) => {

    dispatch({
        type: LOADING_START
    });

    try {

        const res = await axios.get(url);

        dispatch({
            type: SAVE_AIRPORT_TO_STORE,
            data: res.data
        });

    } catch ( err ) {
        console.log(err)

    }

    dispatch({
        type: LOADING_END
    });

};

