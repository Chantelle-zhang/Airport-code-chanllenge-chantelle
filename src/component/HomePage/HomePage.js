import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from "../../store/ActionCreators/actions";
import {
    OPEN_MODAL,
    SEND_AIRPORT_DETAIl,
} from "../../store/ActionCreators/actionTypes";
import Airports from "../Airports/Airports";
import ModalView from "../ModalView/ModalView";

export const HomePage = ({ airports, fetchData, dispatch, isLoading }) => {

    useEffect(() => {
        const url = 'https://api.qantas.com/flight/refData/airport';
        fetchData(url);
    }, []);

    const openModal = (airport) => {
        dispatch({
            type: OPEN_MODAL
        });

        dispatch({
            type: SEND_AIRPORT_DETAIl,
            airport

        });

    }


    return (
        isLoading ? <img data-test='loading-gif' src='/spinner.gif' alt='loading'/> :
            <div>
                <header>
                    <h1>Airports Data</h1>
                </header>
                <Airports airports={ airports } onClick={ openModal }/>
                <ModalView/>
            </div>

    );

}


const mapStateToProps = state => ( {
    isLoading: state.isLoading,
    airports: state.airports,

} );

const mapDispatchToProps = dispatch => ( {
    dispatch,
    fetchData: (url) =>
        fetchData(url)
} );

Airports.propTypes = {

    isLoading: PropTypes.bool,
    airports: PropTypes.array,
    onClick: PropTypes.func,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


