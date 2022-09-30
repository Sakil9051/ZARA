import React,{useContext} from 'react'
import { AuthContext } from '../Context/Authcontext'
import { useToast } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
const Privaterout = ({children}) => {
    const {loginstatus}=useContext(AuthContext)
    const toast = useToast();
    if(!loginstatus){
        toast({
            title: "Please login first",
            status: "error",
            isClosable: true,
          })

          return <Navigate to={"/login"}/>
    }

    return children;
}

export default Privaterout
