import { CompleteButton, Task as Container } from "../styles/task-styles"
import { useSelector, useDispatch } from 'react-redux'
import {completeTask} from '../redux/taskSlice'
import { gainExp, levelUp } from "../redux/userSlice"

interface IProps {
    task: ITask;
    completed: boolean
}


export const Task: React.FC<IProps> = ({task, completed}) => {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(completeTask(task.id))
    dispatch(gainExp(task.worthExp))
    dispatch(levelUp())
}


  return (
    <Container>
        <h1>{task.title}</h1>
        <p>{task.timestamp}</p>
        {completed ? <CompleteButton onClick={toggleComplete}>Complete Task</CompleteButton> : ""}
        
    </Container>
  )
}
