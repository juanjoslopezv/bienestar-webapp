import { Box, Text, Badge } from '@chakra-ui/react'
import numeral from 'numeral'
import { useContext } from 'react'
import { EstatesContext } from '../../ContextApi/EstatesProvider'
import { EstateStatus, EstatesType } from '../../ContextApi/EstatesProvider.type'
import StrapiImage from '../../helpers/StrapiImage'
import { StrapiEntity } from '../../utils/strapi.type'


export const StatusBadge = ({ status }: { status: EstateStatus }) => {
  let textStatus = "N/A";
  let color = "gray"
  switch (status) {
    case EstateStatus.forsale:
      color = "green";
      textStatus = "En Venta"
      break;
    case EstateStatus.aside:
      color = "orange";
      textStatus = "Apartada"
      break;
    case EstateStatus.sold:
      color = "default";
      textStatus = "Vendida"
      break;
  }
  return <Badge colorScheme={color}>{textStatus}</Badge>
}

const EstateSideBarCard = ({ estate }: { estate: StrapiEntity<EstatesType> }) => {
  const estatesCtx = useContext(EstatesContext);
  return (
    <Box display={"flex"}
      flexDir="row" height={{
        base: 120,
        xl: 150
      }}
      _hover={{
        backgroundColor: "#333",
        cursor: 'pointer',
        color: "#fff"
      }}
      flex={1}
      onClick={() => estatesCtx.setSelectedEstate(estate)}
      mr={1} my={1} shadow={'lg'} backgroundColor="white" >
      <Box width={"100px"} backgroundColor="#000" overflow={'hidden'} >
        <StrapiImage objectFit={'cover'} src={estate.attributes.cover?.data.attributes.url} />
      </Box>
      <Box flex={1} p={2} display="flex" flexDir={'column'} justifyContent="center" alignItems={"center"}>
        <Text fontWeight={"700"} fontSize={'sm'}>
          {estate.attributes.title}
        </Text>
        <Box display={{
          base: 'none',
          xl: 'block'
        }}>
          <Text noOfLines={4} fontSize={'sm'}>
            {estate.attributes.shortDescription}
          </Text>
        </Box>
        <Box display={'flex'} width={{base:"auto", xl:'100%'}} flexDir={{
          base: 'column',
          xl: 'row'
        }}>
          <Box flex={1} display={'flex'} width={"100%"}>
            <Text color={'teal'} fontWeight={700} fontSize={'sm'}>
              {numeral(estate.attributes.price).format("$0,0.0")}
            </Text>
          </Box>
          <Box display={{
            base: 'block',

          }} color={'teal'} fontWeight={700} fontSize={'sm'}>
            <StatusBadge status={estate.attributes.status} />
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default EstateSideBarCard