import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });
class GoogleMap extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{width:"50%",height:"68%"}}
        zoom={10}
        initialCenter={{
          lat: 40.7128,
          lng: -74.0060
        }}
      >
        <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.NODE_ENV_API_KEY
})(GoogleMap);
