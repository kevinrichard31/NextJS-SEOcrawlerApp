import { ITasks } from "@/types/tasks";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Task from "./Task";
interface TodoListProps {
    tasks : ITasks[]
}


const TodoList:React.FC<TodoListProps> = ({tasks}) => {
    return <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead className="bg-base-200">
        <tr>
          <th></th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </tbody>
    </table>
  </div>
    
}

export default TodoList;