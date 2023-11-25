import { ITasks } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITasks[]> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {"cache": 'no-store'});
    if (!res.ok) {
      throw new Error(`Failed to fetch todos: ${res.status}`);
    }

    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};

export const addTodo = async (todo: ITasks): Promise<ITasks> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error(`Failed to add todo: ${res.status}`);
    }

    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};

export const editTodo = async (todo: ITasks): Promise<ITasks> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error(`Failed to add todo: ${res.status}`);
    }

    const updatedTodo = await res.json();
    return updatedTodo;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};


export const deleteTodo = async (todo: ITasks): Promise<ITasks> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error(`Failed to add todo: ${res.status}`);
    }

    const deletedTodo = await res.json();
    return deletedTodo;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};
