import React from 'react'

const TaskList = () => {
  return (
    <div id ="tasklist" className='h-[55%] overflow-x-auto flex item-center justify-start gap-5 mt-10 py-5 flex-nowrap'>
      
      <div className='h-full w-[300px] p-5 flex-shrink-0 bg-red-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>03 july 2025</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm text-start mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

      <div className='h-full w-[300px] p-5 flex-shrink-0 bg-green-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>03 july 2025</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm text-start mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

      <div className='h-full w-[300px] p-5 flex-shrink-0 bg-blue-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>03 july 2025</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm text-start mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>

      <div className='h-full w-[300px] p-5 flex-shrink-0 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>03 july 2025</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
        <p className='text-sm text-start mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      </div>
     
    </div>
  )
}

export default TaskList
