import React, { createContext, useState } from 'react'
export const AuthContext = createContext() 

function AuthContextProvider({children}) {
        const [loginstatus,setLogin] = useState(false) 
        const handaleloginstatus=()=>{
          setLogin(!loginstatus)
        } 
        // console.log(loggedin)
  return (
    <AuthContext.Provider value={{loginstatus,handaleloginstatus}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;


