import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'


function App() {

  return (
    <>
    
        {/* <Login/> */}
        
        <EmployeeDashboard/>
    </>
  )
}

export default App
