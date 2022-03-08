import { Task as Container } from "../styles/task-styles"
import { useSelector, useDispatch } from 'react-redux'
import {completeTask} from '../redux/taskSlice'
import { gainExp } from "../redux/userSlice"

interface IProps {
    task: ITask;
    
}


export const Task: React.FC<IProps> = ({task}) => {
  const dispatch = useDispatch()

  const toggleComplete = () => {
    dispatch(completeTask(task.id))
    dispatch(gainExp(task.worthExp))
}


  return (
    <Container>
        <h1>{task.title}</h1>
        <p>{task.timestamp}</p>
        <p>{task.completed.toString()}</p>
        <button onClick={toggleComplete}>Complete Task</button>
    </Container>
  )
}
