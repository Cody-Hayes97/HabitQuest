import { TaskInput, TaskInputContainer } from "../styles/task-styles"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../redux/taskSlice"


export const AddTask = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.KeyboardEvent<object>) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      dispatch(addTask(title))
      setTitle("")
    }
    
  }
  
    

  return (
    <TaskInputContainer>
        <TaskInput placeholder="Enter Task" value={title} onChange={handleChange} onKeyPress={handleSubmit} />
    </TaskInputContainer>
  )
}
