import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="containerHome">
        <h1 className='text-center underline'>NEXT 13</h1>
        <button className="btn w-fit">Default</button>
        <AddTask />
        <TodoList tasks={tasks}/>
      </div>
    </main>
  )
}
