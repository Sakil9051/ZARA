import React from 'react'
import { Box,SkeletonText} from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box padding='6' w={"100vw"} h={"100vh"} boxShadow='lg' bg='white'>
  <SkeletonText mt='10' noOfLines={15} spacing='4' />
</Box>
  );
}

export default Loading
