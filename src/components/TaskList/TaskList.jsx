import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id ="tasklist" className='h-[50%] overflow-x-auto flex item-center justify-start gap-5 mt-10 py-5 flex-nowrap'>

      {data.tasks.map((elem,idx)=>{

        if(elem.active){
          return <AcceptTask key={idx} />
        }

        if(elem.completed){
          return <CompleteTask key={idx}/>
        }
        if(elem.failed){
          return <FailedTask key={idx}/>
        }
        if(elem.new){
          return <NewTask key={idx}/>
        }

      })}
      
      {/* <NewTask/>

      <CompleteTask/>

      <FailedTask/> */}
     
    </div>
  )
}

export default TaskList
