import { Box, Button, Text } from "@chakra-ui/react"
import numeral from "numeral"
import { useContext, useState } from "react"
import { EstatesContext } from "../../ContextApi/EstatesProvider"
import { EstatesType } from "../../ContextApi/EstatesProvider.type"
import StrapiImage from "../../helpers/StrapiImage"
import { StrapiEntity } from "../../utils/strapi.type"
import { StatusBadge } from "../SideBar/EstateSideBarCard"

const EstateMarkerCard = ({ isOpen, onClose, estate }
  : { estate: StrapiEntity<EstatesType>, isOpen: boolean, onClose: () => void }) => {

    const estateCtx = useContext(EstatesContext);

  if (!isOpen) {
    return null
  }

  return <Box height={200} width={250}
    shadow="md"
    backgroundColor={"white"}
    border="1px solid gray"
    borderRadius={4}
    flexDir="column"
    zIndex={20}
    onClick={(e) => {
      e.stopPropagation()
      onClose();
      return false;
    }}
    display={{
      base: "flex"
    }}
    position={"absolute"}
    bottom={7} >
    <Button position={"absolute"}
      right={1}
      top={1}
    >X</Button>
    <StrapiImage
      objectFit={'cover'}
      src={estate.attributes.cover?.data.attributes.url} height={100} backgroundColor={"#000"} width={"100%"} />
    <Text fontSize={"md"} p={1} backgroundColor={'teal'} color={"#fff"}>
      {numeral(estate.attributes.price).format("0,0")}
    </Text>
    <Box display={"flex"}
      flexDir={"column"}
      flex={1} alignItems="center" justifyContent="center">
      <StatusBadge status={estate.attributes.status} />

      <Button onClick={(e) => {
         e.stopPropagation()
         estateCtx.setSelectedEstate(estate);
         onClose();
         return false;
      }} mt={1} size={"sm"} fontSize={"sm"} >VER MAS</Button>
    </Box>

  </Box>
}

const EstateMarker = ({ lat, lng, estate }: { lat: number, lng: number, estate: StrapiEntity<EstatesType> }) => {
  const [ShowDetails, setShowDetails] = useState<boolean>(false);
  return <Box onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowDetails(prevVal => !prevVal)
  }} position={"relative"}
    w={10} borderRadius={4} justifyContent={'center'} display={'flex'} alignItems={'center'} h={6} p={2} backgroundColor={'#333'}>
    <EstateMarkerCard isOpen={ShowDetails} onClose={() => setShowDetails(false)} estate={estate} />

    <Text color={"#fff"}>
      {estate.attributes.price / 1000}K
    </Text>
  </Box>
}

export default EstateMarker