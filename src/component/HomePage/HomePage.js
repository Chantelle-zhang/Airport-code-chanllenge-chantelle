import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from "../../store/ActionCreators/actions";
import Airports from "../Airports/Airports";
import ModalView from "../ModalView/ModalView";

export const HomePage = ({ fetchData, isLoading }) => {

    useEffect(() => fetchData
        , []);


    return (
        isLoading ? <img data-test='loading-gif' src='/spinner.gif' alt='loading'/> :
            <div>
                <header>
                    <h1>Airports Data</h1>
                </header>
                <Airports/>
                <ModalView/>
            </div>

    );

}


const mapStateToProps = state => ( {
    isLoading: state.isLoading,

} );

const mapDispatchToProps = dispatch => ( {
    fetchData: dispatch(fetchData())
} );

Airports.propTypes = {
    isLoading: PropTypes.bool,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


