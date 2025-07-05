import React from 'react'

function NewTask({data}) {
  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-green-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm text-start mt-2'>{data.taskDescription}</p>
        <div className='mt-4'>
            <button className='flex position-left bg-blue-500 py-1 px-2 text-sm rounded' >Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
