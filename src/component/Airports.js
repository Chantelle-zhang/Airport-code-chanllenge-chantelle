import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'


const Airports = ({airports, onClick}) =>
    <div>
        <Row>
            { airports.map((airport) =>
                <Col className="airports-grid"
                     sm={6} key={airport.name}
                     onClick={(airport)=>onClick(airport)}
                >

                    <div className="shadow d-flex ">
                        <div className="flex-grow-1 ">
                        <p>Airport Name: {airport.airportName}</p>
                            <p>City:{airport.city.cityName}</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </div>
                    </div>
                </Col>
            )
            }
        </Row>
    </div>;

Airports.propTypes = {
    airports: PropTypes.object,
    onClick: PropTypes.func

};

export default Airports;


