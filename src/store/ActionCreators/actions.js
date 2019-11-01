import axios from 'axios';
import {
    LOADING_END,
    LOADING_START,
    LOADING_ERROR,
    SAVE_AIRPORT_TO_STORE
} from './actionTypes';


export const fetchData = (url) => async (dispatch) => {


    try {

        dispatch({
            type: LOADING_START
        });

        const res = await axios.get(url);

        dispatch({
            type: SAVE_AIRPORT_TO_STORE,
            data: res.data
        });

        dispatch({
            type: LOADING_END
        });
    } catch ( err ) {

        dispatch({
            type: LOADING_ERROR
        });
    }
};

