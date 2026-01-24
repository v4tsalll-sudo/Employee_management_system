import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utilities/LocalStorage'
import { authContxt } from './context/AuthContext'

const App = () => {
  const bhejaHuaData = useContext(authContxt)
  console.log(bhejaHuaData);

  const [user, setUser] = useState(() => {
    const saveUser = JSON.parse(localStorage.getItem('LoggedInUser') )
    if(saveUser?.role == 'admin') {
      return 'Admin'
    } else if(saveUser?.role == 'employee'){
      return {role : 'Employee', data : saveUser.data}
    } else{
      return null
    }
  })
  
//login function
  const handleLogin = (emailId, pass) => {
    if(emailId == bhejaHuaData.admin.email && pass == '123'){
      setUser('Admin')
      localStorage.setItem('LoggedInUser',JSON.stringify({role : 'admin'}))
    } else if (bhejaHuaData) {
      const employee = bhejaHuaData.employees.find((e)=> emailId == e.email && pass == e.password)
      if (employee){
        setUser({role : 'Employee', data : employee})
        localStorage.setItem('LoggedInUser', JSON.stringify({role : 'employee', data : employee}))
      }
    }
    else {
      alert('Invalid credentials')
    }
  }

  //logout function 
  const handleLogout = () => {
    localStorage.removeItem('LoggedInUser')
    setUser(null)
  }

  
  return (
    <>
    {user == null ? <Login handleLogin={handleLogin} />: ''}
    {user == 'Admin' ? <AdminDashboard handleLogout={handleLogout}/>: "" }
    {user?.role == 'Employee' ? <EmployeeDashboard handleLogout ={handleLogout} data = {user?.data}/>:""}
    </>
  )
}
export default App