"use client"; // This is a client component 👈🏽
import { ITasks } from "@/types/tasks";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Task from "./Task";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

interface TodoListProps {
    tasks : ITasks[]
}


const TodoList:React.FC<TodoListProps> = ({tasks}) => {
    return (
    <Table>
      <Thead className="bg-gray-100">
        <Tr>
          <Th className="p-2">Id</Th>
          <Th className="p-2">Name</Th>
          <Th className="p-2">Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
      {tasks.map(task => <Task key={task.id} task={task} />)}
      </Tbody>
    </Table>
  )
    
}

export default TodoList;