import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';


export default function Map( { isLoaded }) {

    if (!isLoaded) return <></>

  return (
    <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={{lat: 51.59475813624958, lng: -0.11499347388310403}}
        zoom={13}
    >
        <Marker position={{lat: 51.59475813624958, lng: -0.11499347388310403}} />

    </GoogleMap>
  )
}
