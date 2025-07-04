import React from 'react'

const AcceptTask = () => {
  return (
          <div className='h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>03 july 2025</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm text-start mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <div className='flex justify-between  mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm rounded'>Mark as Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm rounded'>Mark as Failed</button>
        </div>
      </div>
  )
}

export default AcceptTask
