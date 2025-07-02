import React from 'react'

function Header() {
  return (
    <div className='flex  justify-between items-end'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Harshvadan 👋</span></h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
