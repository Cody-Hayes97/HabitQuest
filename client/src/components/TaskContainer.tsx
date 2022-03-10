import React, {useState} from 'react'
import { ContainerDiv, Tab, TabContainer, TaskList } from '../styles/task-styles'
import {Task} from './Task'
import { AddTask } from './TaskInput'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { TaskState } from '../redux/taskSlice'
import { User } from './User'
import '../index.css';



export const Container: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const [inComplete, setInComplete] = useState(true)



  return (
    <ContainerDiv>
       
        <TaskList>
          <TabContainer>
          <Tab className={inComplete ? "active-tab" : ""} onClick={() => {
            if(inComplete === false){
              setInComplete(true)
            }
          }}>Completed Tasks</Tab>
          <Tab className={inComplete ? "" : "active-tab"} onClick={() => {
            if(inComplete === true){
              setInComplete(false)
            }
          }}>Incompleted Tasks</Tab>
          </TabContainer>
       
        <AddTask />
         {inComplete ?  tasks.map((task : any) => (
                task.completed ? null : <Task task={task} key={task.id} completed={inComplete}/>
            )) :  tasks.map((task : any) => (
              !task.completed ? null : <Task task={task} key={task.id} completed={inComplete}/>
          ))}
        </TaskList>
        <User/>
    </ContainerDiv>
  )
}
