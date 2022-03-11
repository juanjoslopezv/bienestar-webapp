import { Box } from '@chakra-ui/react'
import  { useContext, useEffect } from 'react'
import { EstatesContext } from '../../ContextApi/EstatesProvider';
import EstateSideBarCard from './EstateSideBarCard';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css"

const SideBar = () => {

  const estatesCtx = useContext(EstatesContext);


  useEffect(() => {
    estatesCtx.getEstates();
  }, []);

  let Estates = estatesCtx.Estates?.data;

  return (
    <Box minW={200}
      width={"30%"}
      maxW={400}
      overflowY={'scroll'}
      height="calc(100vh - 60px)"
      backgroundColor='gray.100'
      display={{
        base: 'none',
        md: 'block'
      }}>

      {Estates?.map((estate, key) => <EstateSideBarCard key={key} estate={estate} />)}


    </Box>
  )
}

export default SideBar