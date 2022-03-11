import { Box, Button, Link } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import ModalBase from '../../container/ModalBase'
import { EstatesContext } from '../../ContextApi/EstatesProvider'
import { EstatesType } from '../../ContextApi/EstatesProvider.type'
import { Logo } from '../../Logo'
import { StrapiEntity } from '../../utils/strapi.type'
import EstatesMap from '../EstatesMap'
import Header from '../Header/Header'
import SideBar from '../SideBar'
import EstateDetails from '../SideBar/EstateDetails'

const Main = () => {

  const estateCtx = useContext(EstatesContext);

  const { SelectedEstate, setSelectedEstate } = estateCtx
  return (
    <Box textAlign="center" fontSize="xl">
      <Header />
      <Box display={"flex"} flexDir="row">
        <SideBar />
        <EstatesMap />
      </Box>
      <ModalBase
        onClose={() => { setSelectedEstate(undefined) }}
        isOpen={!!SelectedEstate} body={<EstateDetails estate={SelectedEstate} />}
        title={SelectedEstate?.attributes.title!}
        footer={<Box>
          <Button colorScheme='blackAlpha' mr={3} onClick={() => setSelectedEstate(undefined)}>
            CERRAR
          </Button>
          <Button colorScheme={'green'} >
            <Link href={`tel:${SelectedEstate?.attributes.phone}`}>Contactar</Link>
          </Button>
        </Box>}
      />
    </Box>
  )
}

export default Main