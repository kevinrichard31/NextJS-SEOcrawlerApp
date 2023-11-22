import { ITasks } from "./types/tasks";

const baseUrl ="http://localhost:3001";

export const getAllTodos = async(): Promise<ITasks[]> => {
    const res = await fetch(`${baseUrl}/tasks`);
    const todos = await res.json();
    return todos;
}

export const addTodo = async(todo:ITasks): Promise<ITasks[]> => {
    const res = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    });
    const newTodo = await res.json();
    return newTodo;

}