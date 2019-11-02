import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from "../../store/ActionCreators/actions";
import {
    OPEN_MODAL,
    SEND_AIRPORT_DETAIl,
} from "../../store/ActionCreators/actionTypes";
import Airports from "../Airports/Airports";
import ModalView from "../ModalView/ModalView";

export class HomePage extends Component {
    constructor() {
        super();
        this.openModal = this.openModal.bind(this);
    }


    componentDidMount() {
        const url = 'https://api.qantas.com/flight/refData/airport';
        this.props.fetchData (url);
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

    render() {
        const { isLoading, airports} = this.props;


        return (
                isLoading ? <img data-test='loading-gif' src='/spinner.gif' alt='loading'/> :
                    <div>
                        <header>
                            <h1>Airports Data</h1>
                        </header>
                        <Airports airports={ airports } onClick={ this.openModal } />
                        <ModalView/>
                    </div>

        );
    }
}


const mapStateToProps = state => ( {
    isLoading: state.isLoading,
    airports: state.airports,

} );

const mapDispatchToProps = dispatch => ( {
    dispatch: dispatch,
    fetchData : (url) =>
        dispatch(fetchData (url))
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


