import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/index'


const Airports = ({ airports, onClick }) =>

    <div>
        <Row>
            { airports.map((airport) =>
                <Col className="airportsGrid"
                     md={ 6 }
                     key={ `${ airport.airportName }${ airport.airportCode }` }
                     data-test='click'
                     onClick={ () => onClick(airport) }
                >

                    <div className="shadow d-flex ">
                        <div className="flex-grow-1 ">
                            <p data-test='airport-name'>Airport Name: { airport.airportName }</p>
                            <p data-test='country'>Country: { airport.country.countryName }</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={ faAngleRight }/>
                        </div>
                    </div>
                </Col>
            )
            }
        </Row>
    </div>

Airports.propTypes = {
    airports: PropTypes.array,
    onClick: PropTypes.func

};

export default Airports



