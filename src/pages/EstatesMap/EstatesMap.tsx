import { Box, Image, Text } from '@chakra-ui/react'

import GoogleMapReact from 'google-map-react';
import { useContext } from 'react';
import { EstatesContext } from '../../ContextApi/EstatesProvider';
import { EstatesType } from '../../ContextApi/EstatesProvider.type';
import { StrapiEntity } from '../../utils/strapi.type';
import EstateMarker from './EstateMarker';


const EstatesMap = () => {

  const estatesCtx = useContext(EstatesContext);

  const mapDefaults = {
    center: {
      lat: 19.247410,
      lng: -103.720139
    },
    zoom: 13
  }

  const Estates = estatesCtx.Estates?.data || []

  return <Box flex={1} display="flex" w={{
    base: '100vw',
    md: 'auto'
  }} h={"calc(100vh - 60px)"}>

    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY! }}
      defaultCenter={mapDefaults.center}
      defaultZoom={mapDefaults.zoom}
    >
      {Estates.map((estate, key) => {
        return <EstateMarker
          key={key}
          lat={estate.attributes.latitude}
          lng={estate.attributes.longitude}
          estate={estate} />
      })}
    </GoogleMapReact>

  </Box>
}

export default EstatesMap