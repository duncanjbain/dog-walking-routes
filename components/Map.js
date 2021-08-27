import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



const Map = ({location, containerStyle}) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLEMAP}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: location.lat, lng: location.lon}}
        zoom={13}
      >
        <Marker position={{lat: location.lat, lng: location.lon}} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)