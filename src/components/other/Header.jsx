import React, { useState, useEffect } from 'react'

function Header(props) {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const data = props.data; // or get data from props or context
    if (!data) {
      setUsername('Admin');
    } else {
      setUsername(data.firstName);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className='flex  justify-between items-end'>
      <h1 className='text-start text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  );
}

export default Header
