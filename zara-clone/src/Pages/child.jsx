import axios from "axios";
import { Box, Button, Center, Select, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Alldata from "./Alldata";
import Loading from "../Components/Loading";

import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text
} from "@chakra-ui/react";

const item = ["price", "size", "prod_name"];
function Child() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState("");
  const[totalpage,setTotalpage]=useState()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();




  useEffect(() => {
    let url = `https://combative-pink-beetle.cyclic.app/Zaraproducts`;
    if (sort) {
      url = url + `?type1=Kids&_sort=${sort}&_order=asc&_page=${page}&_limit=20`
    }
    else {
      url = url + `?type1=kids&_page=${page}&_limit=20`
    }
    setLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setTotalpage(res.headers["x-total-count"])
        setLoading(false);
      });
  }, [sort, page]);


  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
          {data.map((el) => {
            return <Alldata key={el._id} id={el._id} price={el.price} imgUrl={el.imgUrl} prod_name={el.prod_name} />;
          })}
        </SimpleGrid>
      )}

      <Box>
        <Box pos="fixed" top="52px" right="10px" zIndex="3">
          <Button
            ref={btnRef}
            border="1px"
            borderRadius="0px"
            bgColor="white"
            borderColor="black"
            color="black"
            onClick={onOpen}
          >
            <Text fontSize="xs">FILTERS</Text>
          </Button>

          <Drawer
            size="sm"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Filter</DrawerHeader>

              <DrawerBody p="10px">
                <Box>
                  <Text fontSize="sm">Sort By :</Text>

                  <Select
                    placeholder="Select option"
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                  >
                    {item.map((el) => {
                      return (
                        <option key={el} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Box>
      <Center mt={5}>
        <Button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
        <Button m={1}>{page}</Button>
        <Button disabled={Math.ceil(Number(totalpage)/20)===page} onClick={() => setPage(p => p + 1)}>next</Button>
      </Center>
    </Box>
  );
}
export default Child;
