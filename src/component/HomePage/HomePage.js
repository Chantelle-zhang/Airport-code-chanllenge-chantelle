import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { getAirportsDataWithLoadingState } from "../../store/ActionCreators/actions";
import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_AIRPORT_DETAIl,
} from "../../store/ActionCreators/actionTypes";
import Airports from "../Airports/Airports";
import Detail from "../Detail/Detail";

export class HomePage extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
    }


    componentDidMount() {
        const url = 'flight/refData/airport';
        this.props.getAirportsDataWithLoadingState(url);
    }

    openModal(airport) {
        const { dispatch } = this.props;

        dispatch({
            type: OPEN_MODAL
        });

        dispatch({
            type: SEND_AIRPORT_DETAIl,
            airport

        });

    }

    handleClose() {
        const { dispatch } = this.props;
        dispatch({
            type: CLOSE_MODAL
        })

    }


    render() {
        const { isLoading, airports, airport, showModal } = this.props;


        return (
            isLoading === 'error' ? <p data-test='api-failure-handling'>'Network Error, please refresh again'</p> :
                isLoading === 'true' ? <img data-test='loading-gif' src='/spinner.gif' alt='loading'/> :
                    <div>
                        <header>
                            <h1>Airports Data</h1>
                        </header>
                        <Airports airports={ airports } onClick={ this.openModal }/>
                        <Modal show={ showModal }>
                            <Modal.Body><Detail airport={ airport }/></Modal.Body>
                            <div className='text-center pb-5'>
                                <button className='btn btn-secondary px-5' data-test='close'
                                        onClick={ () => this.handleClose() }>
                                    Close
                                </button>
                            </div>
                        </Modal>
                    </div>

        );
    }
}


const mapStateToProps = state => ( {
    isLoading: state.isLoading,
    airports: state.airports,
    airport: state.airport,
    showModal: state.showModal
} );

const mapDispatchToProps = dispatch => ( {
    dispatch: dispatch,
    getAirportsDataWithLoadingState: (url) =>
        dispatch(getAirportsDataWithLoadingState(url))
} );

Airports.propTypes = {

    isLoading: PropTypes.bool,
    airports: PropTypes.array,
    onClick: PropTypes.func,
    showModal: PropTypes.bool

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


