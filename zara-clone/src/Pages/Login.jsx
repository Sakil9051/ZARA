import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate,Navigate } from "react-router-dom";
import {AuthContext} from "../Context/Authcontext";

const init = { email: "", password: "" }
function Login() {
  const [login, setlogin] = useState(init);
  const[Findpassword,setfindpassword]=useState(init)
  const toast = useToast();
  const navigate=useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null);
  const {loginstatus,handaleloginstatus}=useContext(AuthContext)




  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogin({ ...login, [name]: value });
  };
  const handlefindpassword = (e) => {
    const { name, value } = e.target;
    setfindpassword({ ...login, [name]: value });
  };

  const handaleforgotpasswort=()=>{
    axios.get(`https://vast-pear-bream-suit.cyclic.app/users?email=${Findpassword.email}`).then(res=>{
      if(res.data.length>=1){
        alert(`Your password is :- ${res.data[0].password}`)
      }else{
        toast({
          title: "Please enter the Correct  email",
          status: "error",
          isClosable: true,
        })
      }  
    })
  }
  const handleSubmit = () => {
    axios.get(`https://vast-pear-bream-suit.cyclic.app/users?email=${login.email}&password=${login.password}`)
      .then((res) => {
      console.log(res.data)
        if(res.data.length>=1){
          toast({
            title: "Logged in Successfully",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          handaleloginstatus()
          navigate("/")
        }else{
          toast({
            title: "Please enter the Correct login information",
            status: "error",
            isClosable: true,
          })
        }
        setlogin(init)
      }).catch(err => {
        console.log(err)
      })



  };

  if(loginstatus){
    return <Navigate to={"/"}/>
  }
  
  return (
    <Box>
      <Box mt={30} ml="16%">
        <Flex gap={20}>
          <Box>
            <Text fontSize="md" fontWeight="600">
              LOG IN
            </Text>
            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                E-MAIL
              </Text>
              <Input
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                onChange={handleChange}
                value={login.email}
                name="email"
                type="text"
                placeholder="enter email...."
              />
            </Box>
            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                PASSWORD
              </Text>
              <Input
                border="none"
                borderRadius="none"
                borderColor="black"
                borderBottom="1px"
                onChange={handleChange}
                value={login.password}
                name="password"
                type="text"
                placeholder="enter password...."
              />
              <Text cursor={"pointer"} fontSize="xs" fontWeight="600" mt="10%" onClick={onOpen}>
              <u>HAVE YOU FORGOTTEN YOUR PASSWORD?</u>
              </Text>
            </Box>
            <Box mt="15%">
              <Button
                type="submit"
                bgColor="black"
                color="white"
                onClick={() => {
                  handleSubmit();
                }}
              >
                LOG IN
              </Button>
            </Box>
          </Box>
          {/* </form> */}




          <Box>
            <Text fontSize="md" fontWeight="600">
              REGISTER
            </Text>

            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                IF YOU STILL DON'T HAVE A ZARA.COM ACCOUNT, USE <br />
                THIS OPTION TO ACCESS THE REGISTRATION FORM.
              </Text>
            </Box>

            <Box>
              <Text fontSize="xs" fontWeight="600" mt="10%">
                BY GIVING US YOUR DETAILS, PURCHASING IN
                <br /> ZARA.COM WILL BE FASTER AND AN ENJOYABLE
                <br /> EXPERIENCE.
              </Text>
            </Box>

            <Box>
              <Link to="/singup">
                <Button mt="30%" bgColor="black" color="white">
                  Create Account
                </Button>
              </Link>
            </Box>

          </Box>

        </Flex>
      </Box>



      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack p={5} spacing={5}>
            <label>Enter your Email to get your password</label>
            <Input name="email" value={Findpassword.email} onChange={handlefindpassword} placeholder="Enter email"/>
            <Button colorScheme='blue' mr={3} onClick={handaleforgotpasswort}>
              Submit
            </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Login;
