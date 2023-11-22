"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./Modal";
const AddTask = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return <div className="w-full">
        <button className="btn btn-primary w-full" onClick={() => {setModalOpen(true); console.log(modalOpen)}}>Add new task <FaPlusCircle /></button>
    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
}

export default AddTask;