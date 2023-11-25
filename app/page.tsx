import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="containerHome">
        <h1 className='text-center mb-2 font-bold'>Todolist made by Kevin.R</h1>
        <p className="text-center mb-10">Tech used : Next.js (React,Tailwind,DaisyUI), json-server</p>
        <p className="text-center mb-10">Applpication description : CREATE,READ,UPDATE,DELETE from distant server</p>
        <AddTask />
        <TodoList tasks={tasks}/>
      </div>
    </main>
  )
}
