import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData,setUser] = useContext(AuthContext)

  return (
    <div className='text-start bg-[#1c1c1c] p-5 mt-5 rounded '>

<div className=' bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>employee name</h2>
        <h3 className='text-lg font-medium w-1/5 '> New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>


      </div>

        <div className=''>
                {userData.map(function(elem , idx){
        return <div key={idx} className=' border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.actives}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.newTasks}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCount.completedTasks}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failedTasks}</h5>

      </div>
      })} 
        </div>

    </div>
  )
}

export default AllTask
