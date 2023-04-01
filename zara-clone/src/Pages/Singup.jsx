import { Box, Button, Center, Container, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
let init = {
  email: "",
  password: "",
  name: "",
  phonenumber: "",
  address: "",
  locality: "",
  state: ""
}
function Singup() {
  const toast = useToast()
  const [user, setUser] = useState(init);
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = () => {
    if (user.email==""&&user.password==""&&user.name==""&&user.address==""&&user.locality==""&&user.state=="") {
      toast({
        title: "Account not created.",
        description: "Please fill all the sections",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }else if(user.password.match("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")){
      toast({
        title: "Account not created.",
        description: "Password should Minimum eight characters, at least one letter, one number and one special character",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }else{
      axios({
          url: "https://vast-pear-bream-suit.cyclic.app/users",
          method: "POST",
          data: user
        }).then(res=>{
          setUser(init)
          toast({
            title: "Account created.",
            description: "You have Successfully Created your account",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
          navigate("/login")
        })
    }
    
  }


  return (
    <Box>
      <Container>
        <FormControl isRequired >
          <FormLabel>Email</FormLabel>
          <Input
            name='email'
            type='email'
            value={user.email}
            onChange={handleChange}
            placeholder={"Enter Email..."}
          />


          <FormLabel>Password</FormLabel>
          <Input
            name='password'
            type='text'
            value={user.password}
            onChange={handleChange}
            placeholder={"Enter password..."}
          />


          <FormLabel>Name</FormLabel>
          <Input
            name='name'
            type='text'
            value={user.name}
            onChange={handleChange}
            placeholder={"Enter Name..."}
          />
          <FormLabel>phonenumber</FormLabel>
          <InputGroup  value={user.phonenumber} onChange={handleChange}>
            <InputLeftAddon children='+91' />
            <Input name={"phonenumber"}  type='tel' placeholder='phone number' />
          </InputGroup>

          <FormLabel>Address</FormLabel>
          <Input
            name='address'
            type='text'
            value={user.address}
            onChange={handleChange}
            placeholder={"Enter Address..."}
          />
          <FormLabel>State</FormLabel>
          <Input
            name='state'
            type='text'
            value={user.state}
            onChange={handleChange}
            placeholder={"Enter State name..."}
          />
          <FormLabel>Locality</FormLabel>
          <Input
            name='locality'
            type='text'
            value={user.locality}
            onChange={handleChange}
            placeholder={"Enter locality name..."}
          />
          <Center>
            <Button mt={3} w={"50%"} bgColor="black" color="white" onClick={handleSubmit}>
              Create Account
            </Button>
            </Center>
        </FormControl>
      </Container>
    </Box>
  );
}

export default Singup
