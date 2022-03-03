import React, {useState} from 'react'
import { ContainerDiv, TaskList } from '../styles/task-styles'
import {Task} from './Task'
import { AddTask } from './TaskInput'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { TaskState } from '../redux/taskSlice'
import { User } from './User'


export const Container: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks)

  return (
    <ContainerDiv>
       
        <TaskList>
        <AddTask />
            {tasks.map((task : any) => (
                <Task task={task} />
            ))}
        </TaskList>
        <User/>
    </ContainerDiv>
  )
}
