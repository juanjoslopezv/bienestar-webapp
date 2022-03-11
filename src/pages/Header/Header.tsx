import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'

const Header = () => {
  return (
    <Box width={"full"} 
      display="flex"
      flexDirection={'row'}
      backgroundColor="black"
      p={2}>
      <Box flex={1} display="flex">
        <Image src='/images/LOGOFINALB-04.png' height={50} />
      </Box>
      {/* <Box >
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box> */}
    </Box>
  )
}

export default Header