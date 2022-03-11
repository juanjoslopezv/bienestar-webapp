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
      lat: 19.2400444,
      lng: -103.7636272
    },
    zoom: 13
  }

  const Estates = estatesCtx.Estates?.data || []

  return <Box flex={1} display="flex">

    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY! }}
      defaultCenter={mapDefaults.center}
      defaultZoom={mapDefaults.zoom}
    >
      {Estates.map((estate) => {
        return <EstateMarker
          lat={estate.attributes.latitude}
          lng={estate.attributes.longitude} 
          estate={estate} />
      })}
    </GoogleMapReact>

  </Box>
}

export default EstatesMap