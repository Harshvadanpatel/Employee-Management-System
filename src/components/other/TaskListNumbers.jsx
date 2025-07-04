import React from 'react'

function TaskListNumbers({data}) {
  return (
    <div className='flex screen justify-between mt-10 gap-5'>
       <div className='py-6 px-9 rounded-xl w-[45%] bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.newTasks}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

       <div className='py-6 px-9 rounded-xl w-[45%] bg-green-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.completedTasks}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

       <div className='py-6 px-9 rounded-xl w-[45%] bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.actives}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>

       <div className='py-6 px-9 rounded-xl w-[45%] bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskCount.failedTasks}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers
