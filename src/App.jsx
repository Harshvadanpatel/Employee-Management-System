import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/localStorege.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, )
  const [user, setUser] = useState(null)
  const [loggedInUserData,setLoggedInUserData]= useState(null)
  const authData = useContext(AuthContext);


  useEffect(() => {
    
      const loggedInUser = localStorage.getItem('loggedInUser');
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data);
            

    }


  }, [])




  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData ) {
      const employee =  authData.employees.find((e) => email == e.email && password == e.password)
      if(employee){
              setUser('employee');
              setLoggedInUserData(employee)
              localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))

      }

    }
    else {
      alert('Invalid credentials');
    }
  }





  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> : ''}
      {user === 'employee' ? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/> : ''}

    </>
  )
}

export default App
