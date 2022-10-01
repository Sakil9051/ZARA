import React, { useContext, useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';
import { Box, Text, Container, Flex, Button, Image } from "@chakra-ui/react";
import { Cartcontext } from '../Context/Cartcontext';
import axios from 'axios';
import Loading from '../Components/Loading';
const Moredetails=()=> {
   const [pagedata, setPagedata] = useState([]);
   const [existedproduct, setExistedproduct] = useState(false);
    const {id}=useParams();
    const{handalecartdata,handaleproductid,productsid}=useContext(Cartcontext)
    useEffect(()=>{
        axios.get(`https://my-fack-api.herokuapp.com/Zaraproducts?_id=${id}`).then(res=>{
            setPagedata(res.data);
            // console.log(res.data)
        })
    },[id])

    useEffect(()=>{
        Findexistedproduct();
    },[pagedata,id])
    const Findexistedproduct=()=>{
        if(pagedata==""){
            return;
        }
        else{
            setExistedproduct(productsid.includes(pagedata[0]._id))
            // console.log(existedproduct)
        }
    }

    const Addtocart=(e)=>{
        handalecartdata(pagedata[0])
        handaleproductid(pagedata[0]._id)
        e.currentTarget.disabled = true;
    }
    
  return (
    <Box>
      <Box mt="84px" alignItems="center" ml="16%">
        <Flex direction={["column", "row", "row"]} gap={20}>
          <Box h={"50%"} width={["100%", "20%", "20%"]} mt="10%">
            <Text>MATERIALS, CARE AND ORIGIN </Text>
            <Text mt={8}>ORIGIN</Text>
            <Box
              mt={8}
              maxHeight={["100px"]}
              style={{ overflow:"scroll" }}
              fontSize="sm"
              fontWeight="300"
            >
              We work alongside our suppliers, workers, unions and international
              bodies to develop a supply chain that respects and promotes human
              rights, contributing to the United Nations Sustainable Development
              Goals. Additionally, thanks to an ongoing collaboration with our
              suppliers, we have developed a tracking programme that allows us
              to determine where and how our products are being made. Made in
              Vietnam CARE Caring for your clothes is caring for the
              environment. Lower temperature washes and delicate spin cycles are
              gentler on garments and help to protect the colour, shape and
              structure of the fabric. Furthermore, they reduce the amount of
              energy used in care processes. [car]7 Machine wash at max.
              30ºC/86ºF with short spin cycle [car]14 Do not use bleach [car]18
              Iron at a maximum of 110ºC/230ºF [car]125 Dry clean with
              tetrachloroethylene [car]35 Do not tumble dry MATERIALS We work
              with monitoring programmes to ensure compliance with safety,
              health and quality standards for our products. The Green to Wear
              2.0 standard aims to minimise the environmental impact of textile
              manufacturing. To that end, we have developed Inditex’s The List
              programme, which helps guarantee both that production processes
              are clean and that our garments are safe and healthy. OUTER SHELL
              74% polyester · 20% viscose · 6% elastane View Less
            </Box>
          </Box>

          <Box width="25%">
          {pagedata==""?null: <img src={pagedata[0].imgUrl} alt=""/>}
          </Box>
          <Box width={["100%", "20%", "20%"]}>
            {pagedata==""?null: <Text mt={8}>{pagedata[0].prod_name}</Text>}
            <Text
              style={{ maxHeight: "20%", overflow: "auto" }}
              mt={8}
              fontSize="sm"
              fontWeight="300"
            >
            </Text>
            {pagedata==""?null: <Text mt={8}>₹{pagedata[0].price}</Text>}
            <Text>Mrp included of all tax</Text>

            <Box mt={8} borderTop="1px" borderBottom="1px" borderColor="black">
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "	#D3D3D3", cursor: "pointer" }}
              >
                XS
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                {" "}
                S{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                M
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                L
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XL{" "}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="200"
                _hover={{ bg: "#D3D3D3", cursor: "pointer" }}
              >
                XXL
              </Text>
            </Box>

            <Flex mt={8} justify="space-between">
              <Text fontSize="xs" fontWeight="200">
                Find your size
              </Text>
              <Text fontSize="xs" fontWeight="200">
                Guide
              </Text>
            </Flex>

            <Box>
            {existedproduct?
              <Button
                bg="black"
                color="white"
                mt={8}
              >
               <Link to={"/cart"}>Go To Bag</Link> 
              </Button>:
              <Button
                bg="black"
                color="white"
                mt={8}
                onClick={Addtocart}
                >
                Add to Bag
              </Button>
            }
            </Box>
            <Text fontSize="xs" fontWeight="200" mt={8}>
              DELIVERY, EXCHANGES AND RETURNS
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Moredetails
