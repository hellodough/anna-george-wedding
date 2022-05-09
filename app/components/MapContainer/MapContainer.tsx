import GoogleMapReact from "google-map-react";
import { Component } from "react";

export default function MapContainer(){
  const defaultProps = {
    center: {
      lat: 41.89065654471191,
      lng: -87.68289074400514
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '25vh', width: '100vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCDeQo5jgRY7TgPc_8VjPYe03-NRXgCwvE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <div>test</div>
      </GoogleMapReact>
    </div>
  );
}
