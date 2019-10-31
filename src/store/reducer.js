import {
    LOADING_START,
    LOADING_END,
    SAVE_AIRPORT_TO_STORE,
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_AIRPORT_DETAIl, LOADING_ERROR,
} from './ActionCreators/actionTypes'

export const isLoading = (state = null, action) => {

    const {type} = action;

    switch (type) {

        case LOADING_START:
            return 'true';

        case  LOADING_END:
            return 'false';

        case LOADING_ERROR:
            return 'error';

        default:
            return state;
    }
}

export const airports = (state = [], action) => {

    const {type} = action;

    switch (type) {

        case SAVE_AIRPORT_TO_STORE:
            return action.data;

        default:
            return state;
    }
}

export const airport = (state = {}, action) => {
    const {type, airport} = action;

    switch (type) {

        case SEND_AIRPORT_DETAIl:
            return airport;

        default:
            return state;
    }
}

export const showModal = (state = false, action) => {
    const {type} = action;

    switch (type) {

        case OPEN_MODAL:
            return true;

        case CLOSE_MODAL:
            return false;

        default:
            return state;
    }
}


