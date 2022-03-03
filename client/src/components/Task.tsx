import { Task as Container } from "../styles/task-styles"

interface IProps {
    task: ITask;
}


export const Task: React.FC<IProps> = ({task}) => {
  return (
    <Container>
        <h1>{task.title}</h1>
        <p>{task.timestamp}</p>
        <p>{task.completed}</p>
    </Container>
  )
}
