import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full w-[300px] p-5 flex-shrink-0 bg-blue-400 rounded-xl'>
        <div className='flex justify-between item-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='text-start mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm text-start mt-2'>{data.description}</p>
        <div className='mt-4'>
            <button className='flex position-left bg-green-500 py-1 px-2 text-sm rounded'>Complete</button>

        </div>
      </div>

  )
}

export default CompleteTask
