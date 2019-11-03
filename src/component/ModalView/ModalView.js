import Modal from "react-bootstrap/Modal";
import Detail from "../Detail/Detail";
import React from "react";
import { CLOSE_MODAL } from "../../store/ActionCreators/actionTypes";
import Airports from "../Airports/Airports";
import PropTypes from "prop-types";
import { connect } from "react-redux";


export const ModalView = ({ showModal, dispatch }) => {

    const handleClose = () => {
        dispatch({
            type: CLOSE_MODAL
        })
    };

    return ( <Modal show={ showModal }>
        <Modal.Body>
            <Detail/>
        </Modal.Body>
        <div className='text-center pb-5'>
            <button className='btn btn-secondary px-5' data-test='close'
                    onClick={ () => handleClose() }>
                Close
            </button>
        </div>
    </Modal> )
};
const mapStateToProps = state => ( {
    showModal: state.showModal,
} );

const mapDispatchToProps = dispatch => ( {
    dispatch: dispatch,
} );

Airports.propTypes = {
    showModal: PropTypes.bool,

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalView);

