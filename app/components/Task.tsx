import { ITasks } from "@/types/tasks";

interface TaskProps {
    task: ITasks
}

const Task: React.FC<TaskProps> = ({task}) => {
    return <tr key={task.id}>
    <th>{task.id}</th>
    <td>{task.text}</td>
</tr>
}

export default Task;