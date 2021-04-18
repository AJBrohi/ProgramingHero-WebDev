import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const location = {
    lat: 23.7985053,
    lng: 90.3754991
};

const onLoad = marker => {
    console.log('marker: ', marker)
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDe7z1-Oavyp_u90un1fXwvNUCuWhjKw0c"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={15}
            >
                <Marker
                    onLoad={onLoad}
                    position={location}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)