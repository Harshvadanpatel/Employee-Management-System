import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorege.jsx'


const App=()=> {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
    
  // }, )
  const [user,setUser] = useState(null)
  
  const handleLogin = (email,password) => {
    if(email =='admin@me.com' && password == '123'){
      setUser('admin');
      console.log('Admin logged in');
    }
    else if(email =='user@me.com' && password == '123'){
      setUser('employee');
      console.log('Employee logged in');
  }
    else{
      alert('Invalid credentials');
    }
  }

  const data = useContext(AuthContext);

  

  return (
    <>
    
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user === 'admin' ?<AdminDashboard/> : ''}
        {user === 'employee' ? <EmployeeDashboard/> : ''}

    </>
  )
}

export default App
