import type { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'

import { makeStyles } from '~/utils'

const initialPosition: LatLngTuple = [-12.023505674744937, -77.04844018399862]

const useStyles = makeStyles()((theme, props) => ({
  mapContainer: {
    // boxSizing: 'border-box'
  },
  map: {
    height: '100%',
    width: '100%',
    borderRadius: '8px'
  }
}))

type Props = {
  mapContainerClassName: string
}

const Map: FC<Props> = props => {
  const { mapContainerClassName } = props
  const { classes } = useStyles()

  return (
    <div
      id='mapContainer'
      className={`${classes.mapContainer} ${mapContainerClassName}`}
    >
      <MapContainer
        className={classes.map}
        center={initialPosition}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={initialPosition}>
          <Popup>Universidad Nacional de Ingeniería.</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export { Map }
