import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '600px',
  height: '500px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 23.7985053,
            lng: 90.3754991
          }
        }
      />
    );
  }
}

const api = "AIzaSyDe7z1-Oavyp_u90un1fXwvNUCuWhjKw0c";

export default GoogleApiWrapper({
  apiKey: api,
})(MapContainer);