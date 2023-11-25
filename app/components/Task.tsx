"use client"; // This is a client component 👈🏽
import { ITasks } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITasks
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false)
    const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false)
    const [editTaskValue, setEditTaskValue] = useState<string>(task.text)
    const handleSubmitEditTodo:FormEventHandler<HTMLFormElement> =
    async (e) => {
        e.preventDefault();
        await editTodo({
            id: task.id,
            text: editTaskValue
        })
        setEditTaskValue(editTaskValue);
        setOpenModalEdit(false);
        router.refresh();
    }

    const handleSubmitDeleteTodo =
    async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        await deleteTodo({
            id: task.id,
            text: ""
        })
        router.refresh();
    }

    return <tr key={task.id}>
    <th>{task.id}</th>
    <td>{task.text}</td>
    <td className="flex gap-5">
        <FiEdit size={20} className="text-blue-500" cursor="pointer" onClick={() => setOpenModalEdit(true)}/>
        
        <FiTrash2 size={20} className="text-red-500" cursor="pointer" onClick={handleSubmitDeleteTodo}/>

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit} >
        <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
            <input value={editTaskValue} onChange={(e) => setEditTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button type="submit" className="btn">Submit</button>
            </div>
        
        </form>
        </Modal>
    </td>
</tr>
}

export default Task;