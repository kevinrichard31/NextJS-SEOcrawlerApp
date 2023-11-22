"use client"; // This is a client component 👈🏽
import React, { FormEventHandler, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";
import { addTodo } from "@/api";
const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTaskvalue, setNewTaskValue] = useState<string>('');
    const handleSubmitNewTodo:FormEventHandler<HTMLFormElement> = 
    async (e) => {
        e.preventDefault();
        await addTodo({
            id: "3",
            text: newTaskvalue
        })
        setNewTaskValue("");
    }

    return <div className="w-full">
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