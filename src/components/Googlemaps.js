import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Axios from "axios";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 59.27244434728968,
  lng: 15.225339485022218,
};
class Googlemaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressItem: [],
      address: "Trumpetaregatan 2c, Örebro",
    };
  }

  About() {
    Axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        this.state.address +
        "&key=AIzaSyDIqjJ4hjsiTnkqPjttvvLVzkhCQhsfP98"
    )
      .then((locations) => {
        this.setState({ addressItem: locations.data });
        console.log(locations.data);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <LoadScript googleMapsApiKey="AIzaSyDIqjJ4hjsiTnkqPjttvvLVzkhCQhsfP98">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}
export default Googlemaps;
