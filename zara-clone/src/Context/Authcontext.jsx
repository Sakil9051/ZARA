import React, { createContext, useState } from 'react'
 const AuthContext = createContext() 

function AuthContextProvider({children}) {
        const [loginstatus,setLoggedin] = useState(false)  
        // console.log(loggedin)
  return (
    <AuthContext.Provider value={{loginstatus,setLoggedin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;


