"use client"; // This is a client component 👈🏽
import React, { FormEventHandler, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskvalue, setNewTaskValue] = useState<string>('');
    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = 
    async (e) => {
        e.preventDefault();
        await addTodo({
            id: uuidv4(),
            text: newTaskvalue
        })
        setNewTaskValue("");
        setModalOpen(false);
        router.refresh();
    }

    return <div className="w-full mb-10">
        <button className="btn btn-primary w-full" onClick={() => {setModalOpen(true); console.log(modalOpen)}}>Add new task <FaPlusCircle /></button>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form onSubmit={handleSubmitNewTodo}>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
            <input value={newTaskvalue} onChange={(e) => setNewTaskValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
            <button type="submit" className="btn">Submit</button>
            </div>
        
        </form>
        </Modal>
    </div>
}

export default AddTask;