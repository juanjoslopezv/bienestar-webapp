import { Image, ImageProps } from '@chakra-ui/react'
import { api } from '../utils/api'

const StrapiImage = (props: ImageProps) => {

  let src = props.src

  if (!src) {
    return null
  }

  src = api.getMedia({
    url: src
  })


  return (<Image {
    ...{
      ...props,
      src
    }
  } />
  )
}

export default StrapiImage