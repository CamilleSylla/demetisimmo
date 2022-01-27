import style from './map.module.scss'
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';
import mapStyles from './MapStyles'

const center = {
    lat: 48.01065361417526,
    lng:  0.18221582879658224
}
const apiKey = process.env.GMAP_API || "AIzaSyDbCf9rd6UXkL_DGwsb-5b_IN7i7Y3bULo"
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
       zoom={12}
       center={center}
       onLoad={onMapLoad}
       options={options}
       >
         <Marker position={{ lat: 48.01065361417526, lng:  0.18221582879658224 }} />
       </GoogleMap>
        </section>
    )
}