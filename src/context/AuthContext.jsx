import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utilities/LocalStorage'

export const authContxt = createContext()

const AuthContext = ({children}) => {
  
 const [userData, setuserData] = useState([])
 const [employees, setemployees] = useState([])

  useEffect(() => {
    const data = getLocalStorage()
    setuserData(data)
    setemployees(data.employees)
  }, [])
  
  
  return (
     <div>
      <authContxt.Provider value={userData} >
        {children}
      </authContxt.Provider>
     </div>
  )
}

export default AuthContext