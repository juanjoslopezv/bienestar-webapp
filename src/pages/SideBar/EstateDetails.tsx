import React from 'react'
import { EstatesType } from '../../ContextApi/EstatesProvider.type'
import { StrapiEntity } from '../../utils/strapi.type'
import ImageGallery from 'react-image-gallery';
import { Box, Image, Text } from '@chakra-ui/react';
import { api } from '../../utils/api';
import numeral from 'numeral'

export type ImageGalleryType = {
  original: string;
  thumbnail: string;
}

const EstateDetails = ({ estate }: { estate: StrapiEntity<EstatesType> | undefined }) => {


  if (!estate) {
    return null
  }

  const tempImages = estate.attributes.photos?.data || []

  const images = tempImages.reduce((array: ImageGalleryType[], photo) => {
    array.push({
      original: api.getMedia(photo.attributes.formats.large),
      thumbnail: api.getMedia(photo.attributes.formats.thumbnail),
    });
    return array
  }, [])


  return (
    <Box>
      <Box backgroundColor={"#333"}>
        <ImageGallery renderItem={(item) => {
          return <Box w={"full"} display={"flex"} justifyContent="center">
            <Image objectFit={'cover'} height={"70vh"} src={item.original} />
          </Box>
        }} items={images} />
      </Box>
      <Box w={'full'} >
        <Text backgroundColor={"teal"} p={2} fontSize={'4xl'} 
          color={"#fff"}
          fontWeight="700">{numeral(estate.attributes.price).format('$0,0.0')}</Text>
        <Box p={10}>
          <Text fontSize={"md"} dangerouslySetInnerHTML={{
            __html: estate.attributes.description
          }} />
        </Box>
      </Box>
    </Box>
  )
}

export default EstateDetails