import React from 'react';
import PropTypes from 'prop-types';
import Airports from "../Airports/Airports";

const Detail = ({ airport }) => {

    return (
        <div>
            <h2 className='text-center'>{ airport.airportName }</h2>
            <p data-test='airportCode'>airportCode:{ airport.airportCode }</p>
            <p data-test='city'>City: { airport.city.cityName }</p>
            <p data-test='latitude'>Latitude: { airport.location.latitude }</p>
            <p data-test='longitude'>Longitude: { airport.location.longitude }</p>
            <p data-test='timeZone'>Time Zone:{ airport.city.timeZoneName }</p>
        </div>
    )
}

Airports.propTypes = {
    airport: PropTypes.object,

};
export default Detail;