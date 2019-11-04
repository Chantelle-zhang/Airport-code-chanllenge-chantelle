import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from "../../store/ActionCreators/actions";
import Airports from "../Airports/Airports";
import ModalView from "../ModalView/ModalView";

export class HomePage extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            this.props.isLoading ?
                <div className="text-center"><img data-test='loading-gif' src='/spinner.gif' alt='loading'/></div> :
                <div>
                    <header>
                        <h1>Airports Data</h1>
                    </header>
                    <Airports/>
                    <ModalView/>
                </div>
        );
    }
}


const mapStateToProps = state => ( {
    isLoading: state.isLoading,

} );

const mapDispatchToProps = dispatch => ( {
    fetchData: () => dispatch(fetchData()),


} );

Airports.propTypes = {
    isLoading: PropTypes.bool,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);


