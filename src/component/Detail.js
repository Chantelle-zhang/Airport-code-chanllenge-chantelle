import React from 'react';
import PropTypes from 'prop-types';
import Airports from "./Airports";

const Detail = ({airport}) => {

    return (
        <div>
            <h1>{airport.airportName}</h1>
            <p>Currency: {}</p>
            <p>Location: {}</p>
            <p>Time Zone:{airport.timeZoneName}</p>
        </div>
    )
}

Airports.propTypes = {
    airport: PropTypes.object,

};
export default Detail;
