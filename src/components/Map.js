import React from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { borderRadius } from '@mui/system';
import { red } from '@mui/material/colors';
import { ColorLens, NoEncryption } from '@material-ui/icons';
import "../styles/map.css";

const containerStyle = {
    width: '100%',
    height: '70vh',
    
}

const center = {
    lat: 40.5081,
    lng: -74.6374
}

const position = {
    lat: 40.5081,
    lng: -74.6374
}
/*
class Map extends React.Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyCwWL2OVGgQJzmY2S4shInb-rDaJ3wSRvE"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker
                        position = {position}></Marker>
                    { Child components, such as markers, info windows, etc. }
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map;*/

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCwWL2OVGgQJzmY2S4shInb-rDaJ3wSRvE"
        >
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '70vh', minWidth:'350px'}}
                center={center}
                zoom={6}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    zoomControl: false,
                    mapId:'b7d817d80cd29dde',
                }}  
            >
                <Marker position={center} />
                {/*<InfoWindow>
                    <h1>hello</h1>
                </InfoWindow>*/}
            </GoogleMap>
        </LoadScript>
    )
}
export default Map;