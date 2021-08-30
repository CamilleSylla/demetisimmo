import style from './map.module.scss'
import { GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import mapStyles from './MapStyles'

const center = {
    lat: 47.990608146859955,
    lng: 0.20015376809866467
}
const apiKey = "AIzaSyDbCf9rd6UXkL_DGwsb-5b_IN7i7Y3bULo"
const mapContainerStyle = {
    width: "100%",
  height: "100%"
}
const options ={
    styles: mapStyles
}

export default function Map () {

    const [map, setMap] = useState(null)

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: apiKey,
      });

      const mapRef = useRef()
      const onMapLoad = useCallback((map) => {
        mapRef.current = map;
      }, [])

      if (loadError) return "error"
  if (!isLoaded) return "loading"

    return (
        <section className={style.wrapper}>
<GoogleMap
       mapContainerStyle={mapContainerStyle}
       zoom={9}
       center={center}
       onLoad={onMapLoad}
       options={options}
       >
       </GoogleMap>
        </section>
    )
}