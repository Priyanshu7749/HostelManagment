import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
  apiKey: 'AIzaSyCtNYEtOKA6Rg0iVtpsOAxiNyIWLeoaT48' // Replace with your API key
})(GoogleMap);
