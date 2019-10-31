import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getAirportsDataWithLoadingState} from "../store/ActionCreators/actions";
import {
    OPEN_MODAL,
    CLOSE_MODAL,
    SEND_AIRPORT_DETAIl,
} from "../store/ActionCreators/actionTypes";
import Airports from "./Airports";
import Detail from "./Detail";

class HomePage extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
    }


    componentDidMount() {
        const url = 'flight/refData/airport';
        this.props.getAirportsDataWithLoadingState(url);
    }

    openModal(airport) {
        const {dispatch} = this.props;

        dispatch({
            type: OPEN_MODAL
        });

        dispatch({
            type: SEND_AIRPORT_DETAIl,
            airport

        });

    }

    handleClose() {
        const {dispatch} = this.props;
        dispatch({
            type: CLOSE_MODAL
        })

    }


    render() {
        const {isLoading, airports, airport, showModal} = this.props;


        return (
            isLoading==='error'?'Network Error, please refresh again':
            isLoading==='true'? <img src='/spinner.gif' alt='loading'/> :
                <div>
                    <header>
                        <h1>Airports Data</h1>
                    </header>
                    <Airports airports={airports} onClick={this.openModal}/>
                    <Modal show={showModal} onHide={()=>this.handleClose()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Airport Detail</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><Detail airport={airport}/></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>this.handleClose()}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>

        );
    }
}


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    airports: state.airports,
    airport: state.airport,
    showModal: state.showModal
});

const mapDispatchToProps = dispatch => ({
    dispatch: dispatch,
    getAirportsDataWithLoadingState: (url) =>
        dispatch(getAirportsDataWithLoadingState(url))
});

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


