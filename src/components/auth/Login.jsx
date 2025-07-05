import React, { useState } from 'react'


function Login({handleLogin}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const submitHandler = (e)=>{
    // Handle form submission logic here
    e.preventDefault();
    // Call the handleLogin function passed as a prop with email and password
    handleLogin(email, password);
    console.log("Email :", email);
    console.log("Password :", password);

    setEmail('');
    setPassword('');
  }





  return (
    <div className='flex h-screen  w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
              submitHandler(e);

            }}
             className='flex flex-col items-center justify-center'>
                <input
                value = {email}
                onChange={(e)=>{
                  setEmail(e.target.value);
                }}
                required className=' font-medium border-2 outline-none  py-2 px-6 text-xl border-emerald-600 rounded-full' type="email" placeholder='Enter your email'/>
                <input
                value = {password}
                onChange={(e)=>{
                  setPassword(e.target.value);
                }}
                required className='font-medium border-2 outline-none  py-2 px-6 text-xl mt-3 border-emerald-600 rounded-full' type="password" placeholder='Enter password'/>
                <button className=' border-none outline-none  py-2 px-8 w-full text-lg mt-7 hover:bg-emerald-700 rounded-full font-semibold bg-emerald-600'>Log in</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
