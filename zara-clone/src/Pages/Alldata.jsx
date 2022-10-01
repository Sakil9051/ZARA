import { Box, Container,Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Alldata = ({imgUrl,prod_name,price,id}) => {
    const nav=useNavigate()
  return (
    <div>
      <Container mt="20px" cursor='pointer'
       onClick={()=>{
      nav(`/moredetails${id}`)
      }}
      >
      <Box>
        <img src={imgUrl} alt="Image" />
        <Flex justify="space-between">
          <Text fontSize="xs">{prod_name}</Text>
          <Text fontSize="xs">{price}</Text>
        </Flex>
      </Box>
    </Container>
    </div>
  )
}

export default Alldata
